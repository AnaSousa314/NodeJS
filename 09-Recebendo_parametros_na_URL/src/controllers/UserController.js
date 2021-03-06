const users =  require("../mocks/users")

module.exports ={
  listUsers(req,res){
    console.log(req.query);
    const {order} = req.query
    const sortedUsers = users.sort((a,b)=>{
      if(order === 'desc'){
        return a.id < b.id ? 1 : -1
      }

      return a.id > b.id ? 1 : -1

    })
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(sortedUsers));
  },

  getUserById(req,res){
    const {id} = req.params;

    const user = users.find((user)=> user.id === Number(id));
   
    console.log(user);

    if(!user){
      res.writeHead(400,{'Content-Type':'application/json'});
      res.end(JSON.stringify({error: "User not found"}));
    }else{
      res.writeHead(200,{'Content-Type':'application/json'});
      res.end(JSON.stringify(user));
    }

  }
}