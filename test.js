const axios = require("axios")
axios.get('http://localhost:3000/validate/hello@word').then(res=>{
    console.log(res.data.message)
}).catch(err=>{
    console.log(err)
})