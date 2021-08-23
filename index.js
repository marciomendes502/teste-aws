//const express = require('express');
//const app = express();
const app = require('express')();
const bodyParser = require('body-parser');
const RouteProducts = require('./app/produto');


app.use(bodyParser.json({ type: 'application/json' }));


RouteProducts(app);



/*app.post('/corpo', (req, res)=>{

    let corpo = '';

    req.on('data', function(parte){
        corpo += parte;
    });

    req.on('end', function(){
        res.send(corpo);
    })

});*/

app.get("/blabla", function(req, res){

  
  
    /* res.json({
         data:[
        {
            name: 'ipad 32GB',
            price: 1899.00,
            discount: 0.12
        },
        {
            name: 'Cadeira',
            price: 1899.00,
            discount: 0.12
        }

     ],
     skip: 0,
     status: 200
    });*/

    //res.send("bla bla <b> bla bla</b>");

});

app.get("/clientes/relatorio", function(req, res){

    res.send(`cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`);

});



app.listen(3000, ()=>{
    console.log("iniciou o servidor 2!");
});