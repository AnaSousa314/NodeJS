const http = require("http")
const url = require('url');

const routes = require('./routes')

const server = http.createServer((req,res)=>{
  /* para que o url.parse fique em objeto e não em string, colocamos a segunda opção true */
  const parsedUrl = url.parse(req.url, true);
  //console.log(parsedUrl);

  console.log(`Request method: ${req.method} | Endpoint: ${parsedUrl.pathname}`);


  const route = routes.find((routeObj)=>(
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === req.method
  ));

  if(route){
    req.query = parsedUrl.query
    route.handler(req,res)
  }else{
    res.writeHead(404,{'Content-Type':'text/html'});
    res.end(`Canot ${req.method} ${parsedUrl.pathname}`);
  }

})

server.listen(3000,()=>console.log('Server started at http://localhost:3000'))