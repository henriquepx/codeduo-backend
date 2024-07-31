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

## Table of Contents

1. [Project Description](#project-description)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation and Configuration](#installation-and-configuration)
5. [Project Structure](#project-structure)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Project Description

The **CodeDuo** backend provides the necessary infrastructure for real-time code editing, user authentication, room management, and real-time communication between clients.

## Features

- **User Authentication**: Management of authentication and authorization.
- **Room Management**: APIs for creating, updating, and deleting code editing rooms.
- **Real-Time Communication**: WebSockets for real-time communication between users.
- **Database Integration**: Storing and retrieving project data.
- **RESTful API**: Endpoints for managing users, rooms, and projects.

## Technologies Used

### Languages and Frameworks

- **Node.js**: JavaScript runtime environment. [Documentation](https://nodejs.org/en/docs/)
- **Express**: Web framework for Node.js. [Documentation](https://expressjs.com/)
- **MongoDB**: NoSQL database. [Documentation](https://www.mongodb.com/docs/manual/)
- **JWT**: Library for creating and verifying JWT tokens. [Documentation](https://github.com/auth0/node-jsonwebtoken)
- **Socket.io**: Library for real-time communication via WebSockets. [Documentation](https://socket.io/docs/v4/client-api/)

### Dependencies

- **bcrypt**: Library for hashing passwords. [Documentation](https://www.npmjs.com/package/bcrypt)
- **bcryptjs**: Alternative to bcrypt. [Documentation](https://www.npmjs.com/package/bcryptjs)
- **body-parser**: Middleware for parsing request bodies. [Documentation](https://www.npmjs.com/package/body-parser)
- **compression**: Middleware for HTTP response compression. [Documentation](https://www.npmjs.com/package/compression)
- **cookie-parser**: Middleware for parsing cookies. [Documentation](https://www.npmjs.com/package/cookie-parser)
- **cors**: Middleware for handling cross-origin requests. [Documentation](https://www.npmjs.com/package/cors)
- **dotenv**: Loads environment variables from a `.env` file. [Documentation](https://www.npmjs.com/package/dotenv)
- **nodemon**: Tool for automatically restarting the server during development. [Documentation](https://nodemon.io/)
- **mongoose**: Library for modeling data in MongoDB. [Documentation](https://mongoosejs.com/docs/)

## Installation and Configuration

### Cloning the Repository

```bash
git clone https://github.com/your-username/codeduo-backend.git
cd codeduo-backend
```

### Installing Dependencies

```bash
npm install
# ou
yarn install
```

### Configuring the Database

Create a .env file at the root of the project with the following environment variables:

```plaintext
MONGO_URI=mongodb://localhost:27017/codeduo
JWT_SECRET=your_secret_key
```

### Running the Project

```bash
npm start
# ou
yarn start
```

## Project Structure

```plaintext
src/
├── controllers/
├── models/
├── routes/
├── services/
├── utils/
```

## Contributing

Contributions are welcome! Please follow the steps below:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Make your changes and commit (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- LinkedIn: [Henrique Pinheiro](https://www.linkedin.com/in/henriquepinheiroxavier/)
- GitHub: [henriquepx](https://github.com/henriquepx)
- Email: [henriquepinheiroxavier@gmail.com](mailto:henriquepinheiroxavier@gmail.com)
