require('dotenv').config()
const app=require('./src/app')



app.listen(3000,()=>{
    console.log('server is runnig on http://localhost:3000 ')


})