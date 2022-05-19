let express = require("express");
let data = require("./data.json")

let server = express();






// server.get("/" , function(req,res){
//     res.send("HI");
// });

server.get("/movies", function (req, res){
 res.json(data);
});

 server.get("/genre", function (req, res) {
  
  let allGenre = data.map((el)=>{
    return el.genre;
  });
  
  let uniqueGenre = [] ;
  
  for(let i = 0 ; i < allGenre.length ; i++){
    let genId = allGenre[i]._id;

    let idx = uniqueGenre.findIndex((el)=>{
        return  el._id== genId;
    });
    if(idx == -1){
    uniqueGenre.push(allGenre[i]);
    }
  }

  res.json(uniqueGenre);
  
  });
//ye line server ko shuru krdeti hai
// ek port pr
server.listen (4000);

