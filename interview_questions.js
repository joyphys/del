const fetchData=(url)=>{
   return new Promise(function (resolve,reject){
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve(`Data ${url}`)
            }else{reject(new Error("Custom Error"))}
        },500)
    })
}

fetchData('url1').then((res)=>console.log(res)).catch((err)=>console.log(err))