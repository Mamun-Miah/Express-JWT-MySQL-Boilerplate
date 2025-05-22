**Boilerplate for Express Js with JWT and mysql2**
npm init -y                    
npm install express jsonwebtoken dotenv bcrypt mysql2 cors
npm install --save-dev nodemon 

Then Create *index.js* file 

**Add in the package.json**

"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

**Create .env file**

PORT=3000 //Give your port
JWT_SECRET=your_jwt_secret_key

**Add in the Index.js**
require('dotenv').config();
const port = process.env.PORT || 3000; //Give your port

**Add db in the db.js**


**For generate Secret key**
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
