const crypto = require('crypto');
const axios = require('axios').default;

exports.sha1 =(str)=>{
            
            const shasum = crypto.createHash('sha1');
            shasum.update(str);
            return shasum.digest('hex')
        }

exports.httpHelp= {
    get:async (url)=>{
    return await axios.get(url);
    },
    post:async (url,post_data)=>{
        return await axios.post(url,post_data)
    }
}




exports.httpHelp.get('http://www.baidu.com').then(res=>{
    console.log(res)
})


exports.httpHelp.get('http://google.com').then(res=>{
    console.log(res)
})