# AGENTS.md — Portfólio de Gabriel Farias

## Escopo e objetivo

Este arquivo orienta alterações em todo o projeto `Portifolio`. O projeto é um portfólio pessoal estático, em português do Brasil, que apresenta perfil profissional, formação, projetos, serviços e formas de contato de Gabriel Farias.

O objetivo atual é manter uma página leve, moderna, responsiva e acessível. Não introduza frameworks, backend ou ferramentas de build sem existir uma necessidade real e aprovação explícita.

## Stack e dependências

- HTML5 semântico em `index.html`.
- CSS responsivo em `style.css`.
- JavaScript puro em `script.js`.
- Boxicons carregado externamente por `https://unpkg.com`.
- Imagens locais `Imagem2.jpg` e `imagem.jpg`.

Não existem `package.json`, lockfile, framework frontend, gerenciador de dependências, backend, banco de dados, Docker, Docker Compose, testes automatizados ou CI/CD.

## Estrutura principal

- `index.html`: ponto de entrada e conteúdo completo da página.
- `style.css`: tema escuro, layout, componentes, animações e media queries.
- `script.js`: abertura e fechamento do menu mobile e atualização de `aria-expanded`.
- `Imagem2.jpg`: foto principal da seção inicial.
- `imagem.jpg`: imagem usada no card de projeto.
- `AGENTS.md`: regras de manutenção deste projeto.

## Como executar

Como o projeto é estático, não há etapa de instalação ou compilação. Para uma verificação rápida no Windows:

```powershell
Start-Process .\index.html
```

Para validar comportamento mais próximo de uma hospedagem real, prefira servir a pasta por HTTP com uma ferramenta já disponível no ambiente. O servidor e a porta oficiais de desenvolvimento são **A confirmar**; não instale uma dependência apenas para essa finalidade sem autorização.

## Testes e validação

Não existe suíte automatizada configurada. Antes de considerar uma alteração concluída:

1. Abra o site e percorra todas as seções pelo menu: início, sobre, formação, projetos, serviços e contato.
2. Verifique o menu mobile, incluindo abertura, fechamento após clicar em um link e valor correto de `aria-expanded`.
3. Teste larguras próximas aos breakpoints atuais de `980px` e `720px`, além de desktop e celular pequeno.
4. Confirme que não há rolagem horizontal, sobreposição do cabeçalho fixo, texto cortado ou cards desproporcionais.
5. Navegue usando apenas teclado e valide foco visível, ordem de tabulação, links e botão do menu.
6. Verifique o console do navegador e a aba de rede, incluindo carregamento do CSS, JavaScript, imagens e Boxicons.
7. Teste zoom de pelo menos 200% e confira contraste, textos alternativos e hierarquia dos títulos.
8. Confirme que os links externos abrem corretamente e que o endereço de contato não continua como placeholder antes de publicar.

## Serviços, containers, banco e portas

- Serviços e containers: nenhum.
- Banco de dados: nenhum.
- Volumes persistentes: nenhum.
- Portas utilizadas: nenhuma porta fixa no código; depende do servidor HTTP escolhido.
- Hospedagem e domínio de produção: **A confirmar**.

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

- Preserve exatamente as maiúsculas e minúsculas dos arquivos `Imagem2.jpg` e `imagem.jpg`; servidores Linux diferenciam o casing.
- A foto principal usa intencionalmente uma oval simétrica, borda neon e glow forte no hover. Não a transforme novamente em círculo, formato de ovo ou octógono recortado sem solicitação.
- O texto “Eu crio” usa `@keyframes words`, `typing` e `cursor`. Preserve a animação caractere a caractere; não substitua por troca instantânea de frases sem solicitação.
- Mantenha alinhados os IDs das seções, os `href` do menu e os seletores usados pelo JavaScript.
- Ao adicionar uma seção, atualize navegação, espaçamento do cabeçalho fixo, responsividade e acessibilidade.
- Links com `target="_blank"` devem manter proteção com `rel="noreferrer"` ou `rel="noopener noreferrer"`.
- Não inclua credenciais, tokens de analytics ou dados pessoais sensíveis diretamente no código.
- O link de e-mail e os links sociais aparentam usar valores genéricos; confirme os endereços reais antes da publicação.

## Arquivos e comportamentos críticos

- `index.html`: estrutura, SEO básico, acessibilidade, links e conteúdo público.
- `style.css`: variáveis globais, cabeçalho fixo, retrato, animação de digitação, timeline e breakpoints.
- `script.js`: depende da presença de `#menu-button`, `#navbar` e `.navbar a`.
- Imagens locais: nomes, proporção, tamanho do arquivo, direitos de uso e texto alternativo.
- CDN do Boxicons: indisponibilidade externa pode remover os ícones sociais e do menu.

Se IDs críticos forem renomeados, atualize HTML, CSS e JavaScript na mesma alteração. Caso novos scripts passem a ser carregados em páginas diferentes, proteja seletores ausentes antes de registrar eventos.

## Cuidados antes de alterar dependências ou infraestrutura

- Boxicons é a única dependência externa identificada. Antes de atualizar a versão ou trocar o CDN, valide nomes dos ícones, integridade visual, disponibilidade e política de segurança da hospedagem.
- Não adicione npm/Vite/React apenas para mudanças que HTML, CSS e JavaScript atuais resolvem com clareza.
- Se um processo de build for realmente introduzido, documente instalação, scripts, lockfile, versão do Node.js e estratégia de deploy neste arquivo e no README.
- Se futuramente houver formulário com backend, implemente validação, proteção contra spam, privacidade, feedback de sucesso/erro e armazenamento seguro. O contato atual usa apenas `mailto:`.
- Antes de publicar imagens novas, comprima os arquivos e confirme licença, privacidade, dimensão e texto alternativo.

## Critério de conclusão

Uma alteração só está concluída quando o HTML, o CSS e o JavaScript continuam carregando sem erros; navegação, menu mobile e animações funcionam; o layout foi verificado em desktop e mobile; acessibilidade básica foi revisada; imagens e links não estão quebrados; e nenhuma informação não confirmada foi apresentada como definitiva.

Testes automatizados, lint, formatter, CI/CD, hospedagem, domínio e porta oficial permanecem **A confirmar**.

## Contexto do projeto

Antes de alterações relevantes, consulte quando existirem:

- `docs/CONTEXTO.md`
- `docs/STATUS.md`
- `docs/ARQUITETURA.md`
- `docs/REGRAS_NEGOCIO.md`
- `docs/DECISOES.md`
- `docs/TROUBLESHOOTING.md`

Após alterações relevantes, avalie se essa documentação precisa ser atualizada.
