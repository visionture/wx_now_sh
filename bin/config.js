const fs = require('fs');

console.log(require('dotenv').config({path:'./.env'}))
module.exports = {
    
 
    access_token:{
        get:()=>{   
            
                return process.env.access_token
        }}
       
    
}




