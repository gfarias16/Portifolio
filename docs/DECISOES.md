# Decisões identificadas

## Site estático sem framework

Estado identificado: HTML, CSS e JavaScript puro, sem build ou gerenciador de pacotes.

Motivação: **A confirmar**.

## Tema escuro com destaque neon

Estado identificado: cores centralizadas em `:root`, retrato oval com glow e cards escuros.

Motivação visual: **A confirmar**.

## Responsividade somente em CSS

Estado identificado: Grid/Flexbox e media queries controlam layout; JavaScript atua apenas no menu.

Motivação: **A confirmar**.

## Ícones locais em vez de CDN

Estado: substituída.

Decisão: remover Boxicons e implementar o botão do menu com CSS e o ícone do GitHub como SVG inline.

Justificativa: elimina dependência externa bloqueante e mantém controles essenciais visíveis mesmo sem acesso a CDN.

Consequência: novos ícones simples devem preferir SVG local ou CSS para evitar reintroduzir a dependência.

## Projetos profissionais como estudos de caso

Decisão: apresentar projetos profissionais somente por objetivo público e tecnologias, sem links falsos ou detalhes internos.

Justificativa: demonstrar experiência prática sem expor informações operacionais, clientes, infraestrutura ou regras confidenciais.

## Currículo não publicado por padrão

Decisão: manter o PDF local fora da interface até existir autorização explícita e revisão de dados pessoais.

Justificativa: um arquivo real pode conter telefone, endereço ou outras informações que não devem ser publicadas automaticamente.

## Carrossel magnético sem framework

Decisão: adaptar a interação do template Originkit para JavaScript puro, sem copiar React, imagens externas ou dependências.

Justificativa: preservar a arquitetura estática, oferecer destaque visual aos projetos e manter fallback acessível sem JavaScript.

Consequências: no desktop, barras respondem à proximidade do cursor e abrem por clique ou teclado; no mobile, cards completos usam rolagem horizontal e scroll snap; movimento reduzido desativa a interpolação contínua.
