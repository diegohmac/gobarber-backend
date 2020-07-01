# GoStack Bootcamp - [Rocketseat](https://rocketseat.com.br/) 🚀

---

## 💈 GoBarber - Back-end 🪒

---

#### Propósito do projeto

Possibilitar a gestão e disponibilização da agenda dos profissionais do salão para os clientes.

#### Executando as aplicações

- Acesse a pasta 'gobarber-backend'

```shell
  cd gobarber-backend
```

- Iniciar aplicação

```shell
  yarn dev:server
```

- Endpoints => http://localhost:3333
  - "/sessions" - POST with JSON Body
  - "/users" - GET
  - "/users" - POST with JSON Body
  - "/users/avatar" - PATCH with image file
  - "/appointments" - GET
  - "/appointments" - POST with JSON Body
---

### 📌 - Features iniciais do sistema:

> - RF = Requisitos funcionais
> - RNF = Requisitos não funcionais
> - RN = Regras de negócios

#### Recuperação de senha

**RF**
- O usuário deve poder recuperar sua senha informando o seu e-mail.
- O usuário deve poder receber um e-mail com instruções de recuperação de senha.
- O usuário deve poder resetar sua senha.

**RNF**
- Utilizar Mailtrap para testar envios de e-mail em ambiente de devenvolvimento.
- Utilizar o Amazon SES (Amazon Simple Email Service) para envios em produção.
- O envio de e-mails deve acontecer em segundo plano (background job).

**Rn**
- O link enviado por e-mail para resetar a senha deve expirar em 2h.
- O usuário precisa confirmar a nova senha ao efetuar o resete de senha.

#### Atualização do perfil

**RF**
- O usuário deve poder atualizar o seu nome, e-mail e senha.

**Rn**
- O usuário não pode alterar seu e-mail para um e-mail já utilizado.
- Para atualizar a sua senha, o usuário deve informar a senha antiga.
- Para atualizar a sua senha, o usuário precisa confirmar a nova senha.

#### Painel do prestador

**RF**
- O usuário deve poder listar seus agendamentos de um dia específico.
- O prestador deve receber uma notificação sempre que houver um novo agendamento.
- O prestador deve poder visualizar as notificações não lidas.

**RNF**
- Os agendamentos do prestador no dia devem ser armazenados em cache.
- As notificações do prestador devem ser armazenadas no MongoDB.
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io.

**Rn**
- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar.

#### Agendamento de serviços

**RF**
- O usuário deve poder listar todos os prestadores de serviço que estejam cadastrados.
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador.
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador.
- O usuário de poder realizar um novo agendamento com um prestador.

**RNF**
- A listagem de prestadores deve ser armazenada em cache.

**Rn**
- Cada agendamento deve durar 1h exatamente.
- Os agendamentos devem estar disponíveis entre 8h e 18h (Primeiro agendamento às 8h, último às 17h).
- O usuário não pode agendar em um horário já ocupado.
- O usuário não pode agendar em um horário que já passou.
- O usuário não pode agendar serviços com ele mesmo.


---

### 📌 - Aulas relacionadas:

  - [x] Nível 02 - Iniciando back-end do app
  - [x] Nível 04 - Arquitetura e testes no Node.js
  - [x] Nível 04 - Continuando back-end do app
