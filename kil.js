
  let name = new Promise((resolvee, revoke)=>{
    let status = false;
    if(status)
      resolvee()
    else
      revoke()
  })
  name.then(() => console.log("Succcess"))
      .catch(() => console.log("Fail"))

let name1 = new Promise(function(resolve, reject) {
  let status = true;
  if (status)
    resolve();
  else 
    reject();
  });
name1.then(sample)
.catch(condition);      
function sample() {
  console.log("Success");
}
function condition() {
  console.log("Fail");
}


