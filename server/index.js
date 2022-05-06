const express = require("express");
const app = express();
const PORT =5000;
const { user } = require('../server/models/user')


app.use(express.json());
//app.use(express.static(path.resolve(__dirname,'static')));
app.get('/user', user);


const start = async () => {
    try {
      //await sequelize.authenticate();
      //await sequelize.sync();
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
      console.log(error);
    }
  };
  
  start();