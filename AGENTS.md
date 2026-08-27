# AGENTS.md — Portfólio de Gabriel Farias

## Escopo e objetivo

Este arquivo orienta alterações em todo o projeto `Portifolio`. O projeto é um portfólio profissional estático, em português do Brasil, que apresenta perfil, tecnologias, formação, projetos, áreas de atuação e contato de Gabriel Farias.

O objetivo atual é manter uma página leve, moderna, responsiva e acessível. Não introduza frameworks, backend ou ferramentas de build sem existir uma necessidade real e aprovação explícita.

## Stack e dependências

- HTML5 semântico em `index.html`.
- CSS responsivo em `style.css`.
- JavaScript puro em `script.js`.
- Ícones essenciais implementados localmente com CSS e SVG inline, sem CDN.
- Imagem pública atual `img_eu.jpg`, favicon vetorial `favicon.svg`; `Imagem2.jpg` permanece como asset legado não utilizado.

Não existem `package.json`, lockfile, framework frontend, gerenciador de dependências, backend, banco de dados, Docker, Docker Compose, testes automatizados ou CI/CD.

## Estrutura principal

- `index.html`: ponto de entrada e conteúdo completo da página.
- `style.css`: tema escuro, layout, componentes, animações e media queries.
- `script.js`: menu mobile acessível e atualização da seção ativa na navegação.
- `img_eu.jpg`: foto principal da seção inicial.
- `favicon.svg`: ícone vetorial local da página.
- `Imagem2.jpg`: foto anterior, mantida como asset legado e não utilizada pela página.
- `AGENTS.md`: regras de manutenção deste projeto.

## Como executar

Como o projeto é estático, não há etapa de instalação ou compilação. Para uma verificação rápida no Windows:

```powershell
Start-Process .\index.html
```

Para validar comportamento mais próximo de uma hospedagem real, prefira servir a pasta por HTTP com uma ferramenta já disponível no ambiente. O servidor e a porta oficiais de desenvolvimento são **A confirmar**; não instale uma dependência apenas para essa finalidade sem autorização.

## Testes e validação

Não existe suíte automatizada configurada. Antes de considerar uma alteração concluída:

1. Abra o site e percorra todas as seções pelo menu: início, sobre, tecnologias, formação, projetos, atuação e contato.
2. Verifique o menu mobile, incluindo abertura, fechamento após clicar em um link e valor correto de `aria-expanded`.
3. Teste larguras próximas aos breakpoints atuais de `1100px`, `820px`, `720px` e `480px`, além de `320px`, `375px`, `425px` e desktop amplo.
4. Confirme que não há rolagem horizontal na página, sobreposição do cabeçalho fixo, texto cortado ou cards desproporcionais. A rolagem horizontal interna do carrossel mobile é intencional.
5. Navegue usando apenas teclado e valide foco visível, ordem de tabulação, links e botão do menu.
6. Verifique o console do navegador e a aba de rede, incluindo carregamento do CSS, JavaScript e imagens locais.
7. Teste zoom de pelo menos 200% e confira contraste, textos alternativos e hierarquia dos títulos.
8. Confirme que os links externos abrem corretamente e que o endereço de contato não continua como placeholder antes de publicar.

## Serviços, containers, banco e portas

- Serviços e containers: nenhum.
- Banco de dados: nenhum.
- Volumes persistentes: nenhum.
- Portas utilizadas: nenhuma porta fixa no código; depende do servidor HTTP escolhido.
- Hospedagem de produção: Vercel em `https://portifolio-theta-ten-84.vercel.app/`.

Não crie Docker Compose para este site somente por padronização. Para uma página estática pequena, hospedagem estática costuma ser mais simples; adote container apenas se o processo de publicação exigir.

## Convenções existentes

- Mantenha `lang="pt-BR"`, UTF-8 e textos visíveis em português, salvo solicitação diferente.
- Preserve HTML semântico com `header`, `nav`, `main`, `section` e `article`.
- Classes CSS usam nomes em inglês e kebab-case, como `.project-card` e `.menu-button`.
- Variáveis de cores e tema ficam centralizadas em `:root`.
- Responsividade é implementada com CSS Grid/Flexbox e media queries, sem JavaScript de layout.
- JavaScript deve permanecer pequeno e orientado a eventos, usando `const` e atributos de acessibilidade.
- Adicione comentários apenas em regras, animações ou decisões pouco óbvias; evite explicar sintaxe evidente.
- Mantenha alterações diretas e proporcionais ao tamanho do projeto.

## Regras importantes para alterações

- Preserve exatamente as maiúsculas e minúsculas de `img_eu.jpg`; servidores Linux diferenciam o casing.
- A foto principal usa intencionalmente formato circular, borda neon e glow forte no hover. Preserve largura e altura iguais; não retorne ao recorte estreito sem solicitação.
- O texto “Atuação em” usa `@keyframes words`, `typing` e `cursor`. Preserve a animação discreta e o fallback de `prefers-reduced-motion`.
- Mantenha alinhados os IDs das seções, os `href` do menu e os seletores usados pelo JavaScript.
- Ao adicionar uma seção, atualize navegação, espaçamento do cabeçalho fixo, responsividade e acessibilidade.
- Links com `target="_blank"` devem manter proteção com `rel="noreferrer"` ou `rel="noopener noreferrer"`.
- Não inclua credenciais, tokens de analytics ou dados pessoais sensíveis diretamente no código.
- GitHub `gfarias16`, e-mail profissional `gabrielfarias1699@gmail.com` e LinkedIn `gabriel-f-5911b1125` estão confirmados publicamente. Instagram permanece **A confirmar** e não deve ser inventado.
- Instagram aparece visualmente como controle desabilitado enquanto a URL está pendente. Não o torne link sem confirmar o destino.

## Arquivos e comportamentos críticos

- `index.html`: estrutura, SEO básico, acessibilidade, links e conteúdo público.
- `style.css`: variáveis globais, cabeçalho fixo, retrato, animação de digitação, timeline e breakpoints.
- `script.js`: depende da presença de `#menu-button`, `#navbar` e `.navbar a`.
- O carrossel magnético depende de `[data-project-carousel]`, `[data-project-track]`, `[data-project-card]` e seus controles. No mobile, ele deve permanecer como lista horizontal com scroll snap.
- Imagens locais: nomes, proporção, tamanho do arquivo, direitos de uso e texto alternativo.
- Currículo: existe arquivo local em `curriculo/`, mas sua publicação depende de confirmação explícita e revisão de dados pessoais.

Se IDs críticos forem renomeados, atualize HTML, CSS e JavaScript na mesma alteração. Caso novos scripts passem a ser carregados em páginas diferentes, proteja seletores ausentes antes de registrar eventos.

## Cuidados antes de alterar dependências ou infraestrutura

- O site não possui dependências externas de interface. Prefira CSS ou SVG local para novos ícones simples.
- Não adicione npm/Vite/React apenas para mudanças que HTML, CSS e JavaScript atuais resolvem com clareza.
- Se um processo de build for realmente introduzido, documente instalação, scripts, lockfile, versão do Node.js e estratégia de deploy neste arquivo e no README.
- Se futuramente houver formulário com backend, implemente validação, proteção contra spam, privacidade, feedback de sucesso/erro e armazenamento seguro. O contato atual direciona somente ao GitHub confirmado.
- Antes de publicar imagens novas, comprima os arquivos e confirme licença, privacidade, dimensão e texto alternativo.

## Critério de conclusão

Uma alteração só está concluída quando o HTML, o CSS e o JavaScript continuam carregando sem erros; navegação, menu mobile e animações funcionam; o layout foi verificado em desktop e mobile; acessibilidade básica foi revisada; imagens e links não estão quebrados; e nenhuma informação não confirmada foi apresentada como definitiva.

Testes automatizados, lint, formatter, CI/CD e porta oficial de desenvolvimento permanecem **A confirmar**.

## Contexto do projeto

Antes de alterações relevantes, consulte quando existirem:

- `docs/CONTEXTO.md`
- `docs/STATUS.md`
- `docs/ARQUITETURA.md`
- `docs/REGRAS_NEGOCIO.md`
- `docs/DECISOES.md`
- `docs/TROUBLESHOOTING.md`

Após alterações relevantes, avalie se essa documentação precisa ser atualizada.
