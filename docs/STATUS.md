# Status atual

## Estado geral

O site contém uma página profissional completa, estilos responsivos, navegação acessível, estudos de caso públicos e fotografia local. A publicação na Vercel está documentada, mas não há automação de testes.

## Funcionalidades identificadas

- Seções de início, sobre, tecnologias, formação, projetos, áreas de atuação e contato.
- Menu mobile com `aria-expanded`, rótulo dinâmico, Escape e clique externo.
- Destaque automático da seção atual na navegação.
- Breakpoints em `1100px`, `820px`, `720px` e `480px`.
- Animação “Atuação em” com suporte a `prefers-reduced-motion`.
- SEO, canonical e Open Graph para a URL da Vercel.
- Favicon SVG local alinhado à identidade visual.
- Ícones locais, sem dependência de CDN.
- Retrato circular com borda e glow neon.
- Timeline alternada com linha, pontos e cards neon.
- Carrossel magnético de cinco projetos no desktop, com clique, teclado, Escape e fallback mobile por scroll snap.
- Área do carrossel ampliada no desktop, com barras dimensionadas dinamicamente conforme a largura disponível.
- Áreas de atuação com o conteúdo profissional atual e composição visual próxima aos antigos cards de serviços.
- Currículo e WhatsApp disponíveis junto aos ícones sociais; contato final reduzido a e-mail e WhatsApp.

## Publicação

- URL: `https://portifolio-theta-ten-84.vercel.app/`.
- Deploy automático confirmado por integração do GitHub com a Vercel para a branch `main`.

## Pendências identificadas

- Instagram público: **A confirmar**. O controle permanece visível, mas desabilitado e sem destino falso.
- Currículo publicado com autorização explícita do titular após revisão do telefone e da localização presentes no PDF.
- Analytics e testes automatizados: **A confirmar**.

## Problemas conhecidos

Nenhum problema funcional conhecido após a última auditoria automatizada. O PDF público contém dados pessoais autorizados pelo titular.

## Próximos passos

Confirmar o Instagram e avaliar futuramente uma versão sanitizada do currículo para reduzir a exposição de dados pessoais.
