
const query = (cp, sql) =>{
    return new Promise((resolve,reject)=>{
        
        cp.query(sql,(error,result)=>{
            if(error){
                reject(error);
            }
            else {
                resolve(result);
            }
        })
        
    });
}

module.exports.query = query;