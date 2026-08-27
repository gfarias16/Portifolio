# Arquitetura

## Componentes

- Frontend estático: HTML5, CSS e JavaScript puro, incluindo carrossel progressivamente aprimorado.
- Dependências externas de interface: nenhuma.
- Assets públicos usados pela página: `img_eu.jpg`, `favicon.svg`, CSS e SVG inline.
- Asset legado não utilizado: `Imagem2.jpg`.
- Backend, banco, containers, workers e filas: inexistentes.

## Fluxo

```text
Navegador -> index.html -> style.css/script.js/img_eu.jpg
```

O carrossel de projetos funciona como grade quando o JavaScript não está disponível. Com JavaScript, usa efeito magnético no desktop; até `820px`, usa rolagem horizontal nativa e scroll snap.

Não há porta fixa de desenvolvimento. A publicação confirmada usa hospedagem estática na Vercel em `https://portifolio-theta-ten-84.vercel.app/`.
