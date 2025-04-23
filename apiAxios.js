
const axios = require('axios')

// axios.get('https://viacep.com.br/ws/01001000/json/').then((response)=>{
    
// const {data} = response
//     console.log(data.bairro);
// }).catch((err)=>{
//     console.log(err)
// })

const fetchApi = async (params) => {
    try {
        const {data} = await axios.get ('https://viacep.com.br/ws/01001000/json/');

       const {bairro,estado} = data; 
        console.log(`Bairro: ${bairro}`)
        console.log(`Estado: ${estado}`)
    } catch (error) {
        console.log(error)        
    }
}

fetchApi()