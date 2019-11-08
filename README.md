Crypto Tracker
==============

A simple exercise focused in basic NodeJS stack (DB, mailing, API, Express, Swagger). Inverted dependencies with Event sourcing approach within an Hexagonal architecture. 

## Installation

For development purposes, you can up the app in local environment. First of all, you should up Docker containers. You don't need this step in prod:

<pre><code>$ docker-compose up -d</code></pre>

Now you can install dependencies by NPM:

<pre><code>$ npm install</code></pre>

To start the app:

<pre><code>$ npm start</code></pre>

### Environment vars

To deploy the app in any PaaS (for example) you should need set environment params. In local environment, you must to fill params with no default value:

| Name    | Description       | Default    |
|---------|-------------------|------------|
| DB      | Database name     | crypto_db  |
| DB_USER | Database user     | crypto_usr |
| DB_PWD  | Database password | crypto_pwd |
| DB_HOST | Database host     | localhost  |
| DB_PORT | Database port     | 5432       |
| DB_DIALECT | Database dialect     | postgres       |
| MAIL_SERVICE | Mail service adapter     | gmail       |
| MAIL_USER | Mail service user     | UNDEFINED       |
| MAIL_PWD | Mail service password     | UNDEFINED       |
| MAIL_FROM | Sender email     | UNDEFINED       |
| MAIL_TO | Recipient email     | UNDEFINED       |
| PORT | Http port     | 3000       |
| HOST | Http host     | localhost       |

## Functionality

- Provides an UI to track currencies '' (base path)
- UI real time refresh
- Provides an API to GET the measures in the last 100 minutes '/api'
- Persist data in DB every minute
- Sends an email each hour with current crypto currency status
