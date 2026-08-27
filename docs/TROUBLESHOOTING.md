# Troubleshooting

## Ícones ausentes

O ícone do menu é construído em CSS e o GitHub usa SVG inline. Confirme se `style.css` e o HTML foram carregados integralmente; não há CDN de ícones.

## Menu mobile não abre

Verifique a presença e o alinhamento entre `#menu-button`, `#navbar`, `.navbar.open` e `script.js`.

## Imagens ausentes em Linux

Preserve exatamente o casing de `img_eu.jpg`.

## Seção ativa incorreta

Verifique se os `href` da navegação continuam alinhados aos IDs das seções observadas em `script.js`.

## Carrossel não expande ou não reage ao cursor

Confirme os atributos `[data-project-carousel]`, `[data-project-track]`, `[data-project-card]` e os botões `.project-card-toggle`. Em telas de até `820px`, o efeito magnético é substituído intencionalmente por scroll horizontal.

Outros problemas conhecidos: **A confirmar**.
