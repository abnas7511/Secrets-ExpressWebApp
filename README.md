# Secrets-ExpressWebApp

```markdown
# Express Password Protected Web App

This is a basic Express.js web application that demonstrates password protection for certain routes. The application serves a simple HTML page at the root ("/") and a secret HTML page ("/check") that requires a password for access.

## Prerequisites

Before running the application, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can install the project dependencies by running the following command:

```bash
npm install
```

## Usage

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/express-password-protected-app.git
cd express-password-protected-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm start
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Accessing the Secret Page

To access the secret page ("/check"), use the password "ILoveProgramming". If the correct password is provided, you'll be redirected to the secret page; otherwise, you'll be redirected to the home page.

## Implementation Details

The application uses Express.js and includes two routes:

1. `GET /`: Serves the main HTML page.
2. `POST /check`: Validates the password submitted in the form. If the correct password is provided, the user is redirected to the secret page; otherwise, they are redirected to the home page.

The application also includes an alternative implementation using middleware for password checking.
