module.exports = (app)=>{

    function pegar(req, res){

        res.send("você pegou");

    }

    function enviar(req, res){

        res.send(`você enviou os dados ${req.body.name} com idade ${req.body.idade}`);

    }

app.get("/produto", pegar);

app.post("/produto", enviar);

}