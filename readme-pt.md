<table align="right">
  <tr>
    <td>
      <a href="readme-pt.md">🇧🇷 Português</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇺🇸 English</a>
    </td>
  </tr>
</table>

<br>

# CodeDuo Backend

## Índice

1. [Descrição do Projeto](#descrição-do-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Instalação e Execução](#instalação-e-execução)
5. [Estrutura do Projeto](#estrutura-do-projeto)
6. [Contribuição](#contribuição)
7. [Licença](#licença)
8. [Contato](#contato)

## Descrição do Projeto

O back-end do **CodeDuo** fornece a infraestrutura necessária para a edição de código em tempo real, autenticação de usuários, gerenciamento de salas e comunicação em tempo real entre clientes.

## Funcionalidades

- **Autenticação de Usuários**: Gerenciamento de autenticação e autorização.
- **Gerenciamento de Salas**: APIs para criação, atualização e exclusão de salas de edição de código.
- **Comunicação em Tempo Real**: WebSockets para comunicação em tempo real entre usuários.
- **Integração com Banco de Dados**: Armazenamento e recuperação de dados do projeto.
- **API RESTful**: Endpoints para gerenciamento de usuários, salas e projetos.

## Tecnologias Utilizadas

- **Servidor**: Node.js, Express
- **Banco de Dados**: MongoDB
- **Autenticação**: JWT, OAuth
- **Comunicação em Tempo Real**: Socket.io
- **Testes**: Jest

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

### Executando os Testes

```bash
npm run test
# ou
yarn test
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

Henrique - [email@example.com](mailto:email@example.com)

LinkedIn: [linkedin.com/in/henrique](https://linkedin.com/in/henrique)
