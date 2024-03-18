const fetchData=(url)=>{
    return new Promise(function (resolve,reject){
         setTimeout(()=>{
             if(Math.random()>0.5){
                 resolve(`Data ${url}`)
             }else{reject(new Error(`Error ${url}`))}
         },500)
     })
 }
 
 Promise.all([fetchData('url1'),fetchData('url2')])
 .then((res)=>console.log(res)).
 catch((err)=>console.log(err))