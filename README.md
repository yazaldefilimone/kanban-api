 <p align="center" >
<img src=".assets/logo-dark.svg" />
<P/>
 <p align="center">
  <img src="https://img.shields.io/static/v1?label=Kanban Api&message=Welcome&color=FFFFFF&labelColor=635FC7" alt="Unsplash welcome!" />
  <img alt="License" src="https://img.shields.io/static/v1?label=version&message=1.0&color=FFFFFF&labelColor=635FC7">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=FFFFFF&labelColor=635FC7">
  <img alt="Stars" src="https://img.shields.io/github/stars/yazaldefilimonepinto/kanban-api?color=FFFFFF&labelColor=635FC7">
  <img alt="Languages" src="https://img.shields.io/github/languages/count/yazaldefilimonepinto/kanban-api?color=FFFFFF&labelColor=635FC7">
</p>
<p align="center" >
Kanban task management api rest building with express, clean arch, tdd, prisma, vitest, mongodb.
<P/>

## To-do

- [x] Criação de usuário usando o codígo de autenticação do github e dados extras
  - [x] Email, Name, Bio, Password
  - [x] Gerar token de autenticação
  - [x] O usuário não pode criar outro usuário com o mesmo email
- [x] Login de usuário usando o email e senha
- [ ] Criação de profile do usuário
  - [ ] O usuário pode escolher um avatar
- [x] Busca de usuários
  - [x] Buscar por id
  - [x] Buscar por email
  - [x] Buscar por nome
- [ ] Criação de tasks
  - [ ] Apenas usuários autenticados podem criar tasks
  - [ ] Lista de tasks deve ser ordenada por data de criação
  - [ ] Fazer cache dos tasks
  - [ ] O usuário pode deletar seu task
  - [ ] O usuário pode deletar uma task se estiver no projeto
- [ ] Criação de Boards
  - [ ] Apenas usuários autenticados podem criar Boards
  - [ ] Apenas usuários admins podem adicionar users nas Boards
  - [ ] Lista de Boards deve ser ordenada por data de criação
  - [ ] Fazer cache dos Boards
  - [ ] O usuário pode deletar seu board
  - [ ] Apenas usuários autenticados podem atualizar as tasks nas Boards

<a id="license"></a>

## License

[MIT](https://github.com/yazaldefilimonepinto/kanban-api/blob/main/LICENSE) © [Yazalde Filimone](https://www.linkedin.com/in/yazalde-filimone/)
