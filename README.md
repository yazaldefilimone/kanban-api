 <p align="center" >
<img src="https://i2.wp.com/www.ishanka.me/wp-content/uploads/2019/12/nodetsejs.jpg?w=2000&ssl=1" />
<P/>
 <p align="center">
  <img src="https://img.shields.io/static/v1?label=Clean-Arch TDD api&message=Welcome&color=FFFFFF&labelColor=110C2F" alt="Unsplash welcome!" />
  <img alt="License" src="https://img.shields.io/static/v1?label=version&message=1.0&color=FFFFFF&labelColor=110C2F">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=FFFFFF&labelColor=110C2F">
  <img alt="Stars" src="https://img.shields.io/github/stars/yazaldefilimonepinto/kanban-api?color=FFFFFF&labelColor=110C2F">
  <img alt="Languages" src="https://img.shields.io/github/languages/count/yazaldefilimonepinto/kanban-api?color=FFFFFF&labelColor=110C2F">
</p>
<p align="center" >
Kanban task management api rest building with express, clean arch, tdd, prisma, vitest, mongodb.
<P/>

## To-do

- [ ] Criação de usuário usando o codígo de autenticação do github e dados extras
  - [x] Email, Name, Bio, Password
  - [ ] Pegar dados do github do usuário e salvar
  - [ ] Gerar token de autenticação
  - [ ] O usuário não pode criar outro usuário com o mesmo email ou github_id
- [ ] Login de usuário usando o github_id e senha
- [ ] Login de usuário usando o email e senha
- [ ] Criação de profile do usuário
  - [ ] O usuário pode usar o mesmo avatar que está no github ou pode escolher um avatar diferente
- [ ] Busca de usuários
  - [ ] Buscar por nome
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
