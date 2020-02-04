const URL  =(ACCESS_TOKEN,which,how,{appid,secret}) =>{
    const paths = require('./api.json');
        if(ACCESS_TOKEN===""){ 
           return paths[which][how].replace('APPID',appid).replace('APPSECRET',secret);
                 
        }
        return paths[which][how].replace('ACCESS_TOKEN',ACCESS_TOKEN);

}

exports.connect= (signature,timestamp,nonce,token)=>{
        const temp = [token,timestamp,nonce].sort().join('');
        const code = require('./utils').sha1(temp)
        return signature===code;
    
}


exports.ACCESS_TOKEN = (appid,secret)=>{
    
}

exports.menu = (ACCESS_TOKEN,PARAMS)=>{
    let result ;
    
    let httpUrl;
    try {
    switch (how){
        case "get":
            const {which,how} = PARAMS;
            httpUrl = URL(ACCESS_TOKEN,which,how);
            require('./utils').httpHelp.get(url).then(data=>{
               result = data;   
           });
           break;

        case "post":{
            const {which,how,post_data} = PARAMS;
            httpUrl = URL(ACCESS_TOKEN,which,how);
            require('./utils').httpHelp.post(httpUrl,post_data).then(data=>{
                result = data;   
            });              
        }
    }}catch(error){
        throw new Error(error);
    }

    return result;
   
}


console.log(URL("sfsdfs","access_token","get",{appid:"1212",secret:"12121"}));