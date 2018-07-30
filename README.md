## Indespendent – MCR Codes Final Project

This is the React Front End for our Monzo digital rewards app.

The app is designed to offer digital rewards for a digital bank. Users can register, earn and redeem rewards from participating merchants.

Backend repo: https://github.com/SharifCoding/digi-reward-back

![Screenshot](screenshot.png)

#### Built-on:
- [Node.js](https://nodejs.org/en/) - Node Package Manager
- [React](https://facebook.github.io/react/) - An npm package to get you immediate access to React
- [React Router](https://reacttraining.com/react-router/) - Declarative routing for React
- [Express](http://expressjs.com/) - Web application framework
- [Mongoose](http://mongoosejs.com/) - Elegant mongodb object modeling for node.js
- [JSON Web Tokens](https://jwt.io/) - JWT.IO allows you to decode, verify and generate JWT
- [OAuth2.0](https://auth0.com/) - Grant limited access to an HTTP service, either on behalf of a resource owner

#### Setting up a Monzo client
- Create a client on Monzo - [https://docs.monzo.com/#authentication](https://docs.monzo.com/#authentication)
- Set *application name* as **authentication-example**
- Set *homepage url* as **localhost:8080**
- Set *callback url* as **localhost:8080/login-monzo**
- take note of your client id and client secret - you will need them shortly

#### Initial Setup for `/api` directory:
- Create new MongoDB database and add new user
- Create `.env` file in the root `/api` folder
- Add newly created Mongo string `DATABASE_URL=mongodb://user:password@ds123456.mlab.com:23456/database-name`
- Add `JWT_SECRET` to `.env` - this can be anything
- Add your client id and client secret to `.env` as `MONZO_CLIENT_ID`, `MONZO_CLIENT_SECRET` and `REDIRECT_URL`.

#### Initial Setup for `/app` directory:
- Create a `.env` in the `/app` directory with a `MONZO_CLIENT_ID`, `REDIRECT_URL` and `GOOGLE_MAPS_API_KEY`.

#### Running the App:
To run this project you will need to download it onto your local machine and install all dependencies.
Navigate inside both `/api` and `/app` folders and install all dependencies by entering the following command on your terminal window:
```
npm install
```
Finally to run start API code and React code enter the following command in your terminal windows:
```
npm start --prefix api
npm start --prefix app
```
This will run the server and frontend, open via localtunnel(make sure its running as well) url to view it in the browser. If you make any changes and save the changes process will automatically refresh and you will be able to see the results in the browser.

#### Team members:
- [Clover Chapman](https://github.com/cloverc)
- [Bradley Leadbetter ](https://github.com/bradlead)
- [Osman Sharif](https://github.com/SharifCoding)
