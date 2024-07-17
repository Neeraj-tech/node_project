const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');


app.listen(process.env.PORT,'localhost',function(error){
  if(error) console.log('Err' + error.message )
    else console.log(`App running on port localhost:${process.env.PORT}`);
})
