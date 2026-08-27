const menuButton = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");
const header = document.getElementById("site-header");
const mobileNavigation = window.matchMedia("(max-width: 1100px)");

// Mantém estado visual, rótulo e atributos de acessibilidade sincronizados.
function setMenuState(isOpen) {
    navbar.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
}

menuButton.addEventListener("click", () => {
    setMenuState(!navbar.classList.contains("open"));
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        setMenuState(false);
    });
});

document.addEventListener("click", (event) => {
    if (navbar.classList.contains("open") && !header.contains(event.target)) {
        setMenuState(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navbar.classList.contains("open")) {
        setMenuState(false);
        menuButton.focus();
    }
});

mobileNavigation.addEventListener("change", (event) => {
    if (!event.matches) {
        setMenuState(false);
    }
});

// Destaca no menu a seção mais relevante durante a rolagem da página.
const sections = [...document.querySelectorAll("main section[id]")];
const linksBySection = new Map(
    [...navLinks].map((link) => [link.getAttribute("href").slice(1), link]),
);

const sectionObserver = new IntersectionObserver(
    (entries) => {
        const visibleSection = entries
            .filter((entry) => entry.isIntersecting)
            .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (!visibleSection) {
            return;
        }

        navLinks.forEach((link) => {
            const isCurrent = link === linksBySection.get(visibleSection.target.id);
            link.classList.toggle("active", isCurrent);

            if (isCurrent) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    },
    { rootMargin: "-30% 0px -55%", threshold: [0, 0.1, 0.4] },
);

sections.forEach((section) => sectionObserver.observe(section));

// Carrossel magnético inspirado no template Originkit, adaptado sem React.
const projectCarousel = document.querySelector("[data-project-carousel]");

if (projectCarousel) {
    const projectTrack = projectCarousel.querySelector("[data-project-track]");
    const projectCards = [...projectCarousel.querySelectorAll("[data-project-card]")];
    const projectToggles = projectCards.map((card) => card.querySelector(".project-card-toggle"));
    const previousButton = projectCarousel.querySelector("[data-carousel-prev]");
    const nextButton = projectCarousel.querySelector("[data-carousel-next]");
    const carouselStatus = projectCarousel.querySelector("[data-carousel-status]");
    const desktopCarousel = window.matchMedia("(min-width: 821px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let collapsedWidth = 150;
    let hoverWidth = 270;
    const collapsedHeight = 390;
    const hoverHeight = 450;
    let influence = 300;

    let currentFactors = projectCards.map(() => 0);
    let targetFactors = projectCards.map(() => 0);
    let animationFrame = 0;
    let resizeAnimationFrame = 0;
    let openIndex = null;
    let navigationIndex = 0;

    projectCarousel.classList.add("is-enhanced");

    // Distribui as barras por toda a largura disponível sem estourar telas menores.
    function updateCarouselMetrics() {
        const gap = Number.parseFloat(getComputedStyle(projectTrack).gap) || 0;
        const availablePerCard = (projectTrack.clientWidth - gap * (projectCards.length - 1)) / projectCards.length;

        collapsedWidth = Math.min(170, Math.max(112, availablePerCard));
        hoverWidth = Math.min(300, collapsedWidth + 130);
        influence = Math.max(240, collapsedWidth * 1.8);
    }

    function applyFactor(card, factor) {
        const width = collapsedWidth + (hoverWidth - collapsedWidth) * factor;
        const height = collapsedHeight + (hoverHeight - collapsedHeight) * factor;
        card.style.setProperty("--magnetic-width", `${width}px`);
        card.style.setProperty("--magnetic-height", `${height}px`);
    }

    function stopMagneticAnimation() {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
    }

    function animateFactors() {
        let isMoving = false;

        currentFactors = currentFactors.map((current, index) => {
            const difference = targetFactors[index] - current;
            const next = Math.abs(difference) > 0.002 ? current + difference * 0.2 : targetFactors[index];
            isMoving ||= next !== targetFactors[index];
            applyFactor(projectCards[index], next);
            return next;
        });

        animationFrame = isMoving ? requestAnimationFrame(animateFactors) : 0;
    }

    function startMagneticAnimation() {
        if (reducedMotion.matches) {
            currentFactors = [...targetFactors];
            projectCards.forEach((card, index) => applyFactor(card, currentFactors[index]));
            return;
        }

        if (!animationFrame) {
            animationFrame = requestAnimationFrame(animateFactors);
        }
    }

    function resetMagneticCards() {
        targetFactors = projectCards.map(() => 0);
        startMagneticAnimation();
    }

    function setMagneticTarget(clientX) {
        if (!desktopCarousel.matches || reducedMotion.matches || openIndex !== null) {
            return;
        }

        const trackBounds = projectTrack.getBoundingClientRect();
        const gap = Number.parseFloat(getComputedStyle(projectTrack).gap) || 0;
        const baseWidth = projectCards.length * collapsedWidth + (projectCards.length - 1) * gap;
        const firstCenter = (trackBounds.width - baseWidth) / 2 + collapsedWidth / 2;
        const pointerX = clientX - trackBounds.left;

        targetFactors = projectCards.map((_, index) => {
            const center = firstCenter + index * (collapsedWidth + gap);
            const proximity = Math.max(0, 1 - Math.abs(pointerX - center) / influence);
            return proximity * proximity * (3 - 2 * proximity);
        });
        startMagneticAnimation();
    }

    function updateCarouselStatus(index, action) {
        const title = projectCards[index].querySelector("h3").textContent;
        carouselStatus.textContent = `${action}: projeto ${index + 1} de ${projectCards.length}, ${title}.`;
    }

    function closeProject({ restoreFocus = false } = {}) {
        if (openIndex === null) {
            return;
        }

        const closingIndex = openIndex;
        openIndex = null;
        projectCards.forEach((card, index) => {
            card.classList.remove("is-open", "is-muted");
            projectToggles[index].setAttribute("aria-expanded", "false");
            projectToggles[index].querySelector(".sr-only").textContent = `Abrir detalhes de ${card.querySelector("h3").textContent}`;
        });
        updateCarouselStatus(closingIndex, "Detalhes fechados");

        if (desktopCarousel.matches) {
            updateCarouselMetrics();
        }

        resetMagneticCards();

        if (restoreFocus) {
            projectToggles[closingIndex].focus();
        }
    }

    function openProject(index, { focus = false } = {}) {
        if (!desktopCarousel.matches) {
            projectCards[index].scrollIntoView({
                behavior: reducedMotion.matches ? "auto" : "smooth",
                block: "nearest",
                inline: "center",
            });
            updateCarouselStatus(index, "Projeto selecionado");
            return;
        }

        if (openIndex === index) {
            closeProject({ restoreFocus: focus });
            return;
        }

        stopMagneticAnimation();
        openIndex = index;
        navigationIndex = index;
        projectCards.forEach((card, cardIndex) => {
            const isOpen = cardIndex === index;
            card.classList.toggle("is-open", isOpen);
            card.classList.toggle("is-muted", !isOpen);
            projectToggles[cardIndex].setAttribute("aria-expanded", String(isOpen));
            projectToggles[cardIndex].querySelector(".sr-only").textContent = `${isOpen ? "Fechar" : "Abrir"} detalhes de ${card.querySelector("h3").textContent}`;
        });
        updateCarouselStatus(index, "Detalhes abertos");

        if (focus) {
            projectToggles[index].focus();
        }
    }

    function navigateProjects(direction) {
        navigationIndex = (navigationIndex + direction + projectCards.length) % projectCards.length;
        openProject(navigationIndex, { focus: desktopCarousel.matches });
    }

    projectTrack.addEventListener("pointermove", (event) => {
        if (event.pointerType === "mouse") {
            setMagneticTarget(event.clientX);
        }
    });

    projectTrack.addEventListener("pointerleave", () => {
        if (openIndex === null) {
            resetMagneticCards();
        }
    });

    projectToggles.forEach((toggle, index) => {
        toggle.addEventListener("click", () => openProject(index));
    });

    previousButton.addEventListener("click", () => navigateProjects(-1));
    nextButton.addEventListener("click", () => navigateProjects(1));

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && openIndex !== null) {
            closeProject({ restoreFocus: true });
        }
    });

    desktopCarousel.addEventListener("change", () => {
        closeProject();

        if (desktopCarousel.matches) {
            updateCarouselMetrics();
        }

        resetMagneticCards();
    });

    reducedMotion.addEventListener("change", () => {
        stopMagneticAnimation();
        resetMagneticCards();
    });

    updateCarouselMetrics();
    projectCards.forEach((card) => applyFactor(card, 0));

    window.addEventListener("resize", () => {
        if (!desktopCarousel.matches || openIndex !== null) {
            return;
        }

        cancelAnimationFrame(resizeAnimationFrame);
        resizeAnimationFrame = requestAnimationFrame(() => {
            updateCarouselMetrics();
            resetMagneticCards();
        });
    });
}
