# Espaço Resiliência monorepo

> Esse repositório contém o código-fonte de todos os sistemas desenvolvidos para o Espaço Resiliência. Utilizando a prática de monorepos

## Projetos

- [site](./site/): SPA feita em React com bulma UI. Migrando para Next.js com Tailwind.
- [CMS](./cms/): Utilizamos o Sanity com nosso CMS. Esse subrepo contém o código e o deploy do nosso sanity studio.
- [web](./web/): Storybook com os componentes criados para o projeto.

## Trabalhando com esse repo

> Esse repositório possui sua história desde a primeira versão da landing page do espaço resiliência. A partir de 07/06/2024 passamos a seguir as diretrizes desta seção para trabalhar com o repo.

- A lingua padrão utilizada será o Português (PT-BR).
- Seguimos [Semantic Versioning (SEMVER)](https://semver.org/) para versionamento.
- Utilizamos [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para nossas mensagens de commit.
- Trabalhamos com [Trunk Based Development](https://trunkbaseddevelopment.com/).

### Mensagens de commit:

> Nossos commits possuem apenas o titulo que é dividido em tipo e o assunto. Não trabalhamos com o body e footer do commit.

#### O Tipo

O tipo está contido no título e pode ser um destes tipos:

- feat: Uma nova funcionalidade
- fix: Correção de um bug
- docs: Mudanças na documentação
- style: Formatação, falta de ponto e vírgula, etc; nenhuma mudança no código
- refactor: Refatoração do código de produção
- test: Adição de testes, refatoração de testes; nenhuma mudança no código de produção
- chore: Atualização de tarefas de build, configurações do gerenciador de pacotes, etc; nenhuma mudança no código de produção

#### O Assunto

Os assuntos não devem ter mais de 50 caracteres, devem começar com letra maiúscula e não terminar com ponto final. Use o tom imperativo para descrever o que um commit faz, em vez do que ele fez. Por exemplo, use `atualizar`; não `atualizou` ou `atualiza`.

Exemplo: `docs: atualizar README do monorepo para definir padrão de commit`


### Comandos úteis

## Referências

- [Udacity Commit Style guide](https://udacity.github.io/git-styleguide/)