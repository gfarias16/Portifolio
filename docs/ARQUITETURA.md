# Arquitetura

## Componentes

- Frontend estático: HTML5, CSS e JavaScript puro.
- Dependência externa: Boxicons via `unpkg.com`.
- Assets: `Imagem2.jpg` e `imagem.jpg`.
- Backend, banco, containers, workers e filas: inexistentes.

## Fluxo

```text
Navegador -> index.html -> style.css/script.js/imagens
                       -> CDN Boxicons
```

Não há porta fixa. A porta depende do servidor HTTP local ou da hospedagem, ambos **A confirmar**.
