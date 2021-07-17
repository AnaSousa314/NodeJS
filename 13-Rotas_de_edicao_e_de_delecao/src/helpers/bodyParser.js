function bodyParser(req,callback){
  let body=''
  req.on('data',(chunk)=>{
    body += chunk
  });

  req.on('end',()=>{
    body = JSON.parse(body);
    req.body = body;
    callback();
  });
}

module.exports = bodyParser;

/* 
  Como esses dados do body não chegam ao mesmo tempo, precisamos criar uma função de callback. Ela só chamará o próximo passo depois que os dados tiverem chegado.
*/