<table align="right">
  <tr>
    <td>
      <a href="README.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="readme-pt.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

<br>

# CodeDuo Backend

## Índice

1. [Descrição do Projeto](#descrição-do-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Instalação e Configuração](#instalação-e-configuração)
5. [Estrutura do Projeto](#estrutura-do-projeto)
6. [Contribuição](#contribuição)
7. [Licença](#licença)
8. [Contato](#contato)

## Descrição do Projeto

O **CodeDuo** backend fornece a infraestrutura necessária para edição de código em tempo real, autenticação de usuários, gerenciamento de salas e comunicação em tempo real entre clientes.

## Funcionalidades

- **Autenticação de Usuários**: Gerenciamento de autenticação e autorização.
- **Gerenciamento de Salas**: APIs para criação, atualização e exclusão de salas de edição de código.
- **Comunicação em Tempo Real**: WebSockets para comunicação em tempo real entre usuários.
- **Integração com Banco de Dados**: Armazenamento e recuperação de dados do projeto.
- **API RESTful**: Endpoints para gerenciamento de usuários, salas e projetos.

## Tecnologias Utilizadas

### Linguagens e Frameworks

- **Node.js**: Ambiente de execução JavaScript. [Documentação](https://nodejs.org/en/docs/)
- **Express**: Framework web para Node.js. [Documentação](https://expressjs.com/)
- **MongoDB**: Banco de dados NoSQL. [Documentação](https://www.mongodb.com/docs/manual/)
- **JWT**: Biblioteca para criação e verificação de tokens JWT. [Documentação](https://github.com/auth0/node-jsonwebtoken)
- **Socket.io**: Biblioteca para comunicação em tempo real via WebSockets. [Documentação](https://socket.io/docs/v4/client-api/)

### Dependências

- **bcrypt**: Biblioteca para hash de senhas. [Documentação](https://www.npmjs.com/package/bcrypt)
- **bcryptjs**: Alternativa para bcrypt. [Documentação](https://www.npmjs.com/package/bcryptjs)
- **body-parser**: Middleware para parsing de corpos de requisições. [Documentação](https://www.npmjs.com/package/body-parser)
- **compression**: Middleware para compressão de resposta HTTP. [Documentação](https://www.npmjs.com/package/compression)
- **cookie-parser**: Middleware para parsing de cookies. [Documentação](https://www.npmjs.com/package/cookie-parser)
- **cors**: Middleware para controle de acesso entre origens. [Documentação](https://www.npmjs.com/package/cors)
- **dotenv**: Carregamento de variáveis de ambiente a partir de um arquivo `.env`. [Documentação](https://www.npmjs.com/package/dotenv)
- **nodemon**: Ferramenta para reinício automático do servidor durante o desenvolvimento. [Documentação](https://nodemon.io/)
- **mongoose**: Biblioteca para modelagem de dados no MongoDB. [Documentação](https://mongoosejs.com/docs/)

## Instalação e Configuração

### Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/codeduo-backend.git
cd codeduo-backend
```

### Instalando as Dependências

```bash
npm install
# ou
yarn install
```

### Configurando o Banco de Dados

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```plaintext
MONGO_URI=mongodb://localhost:27017/codeduo
JWT_SECRET=sua_chave_secreta
```

### Executando o Projeto

```bash
npm start
# ou
yarn start
```

## Estrutura do Projeto

```plaintext
src/
├── controllers/
├── models/
├── routes/
├── services/
├── utils/
```

## Contribuição

Contribuições são bem-vindas! Por favor, siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-feature`)
3. Faça suas modificações e comite (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- LinkedIn: [Henrique Pinheiro](https://www.linkedin.com/in/henriquepinheiroxavier/)
- GitHub: [henriquepx](https://github.com/henriquepx)
- Email: [henriquepinheiroxavier@gmail.com](mailto:henriquepinheiroxavier@gmail.com)
