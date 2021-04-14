const { response, request, query } = require('express');

const usuariosGet = (req,res = response)  => {

    const {q,nombre="no name",apiKey} = req.query;

    res.json({
        msg:'get Api controllador',
        q,
        nombre,
        apiKey
    });
}

const usuariosPost = (req, res = response) => {


    const {Nombre,Edad} = req.body;

    res.json( {
        msg:'Post Api controllador' ,
        Nombre,
        Edad
    })
} 

const usuariosPut =(req, res = response) => {

    const id = req.params.id;
    console.log(req);

    res.json( {
        msg:'Put Api controllador',
        id
    })
} 

const usuariosDelete =(req, res = response) => {
    res.json( {
        msg:'Delete Api controllador' 
    })
} 

const usuariosPatch =(req, res = response) => {
    res.json( {
        msg:'Patch Api controllador' 
    })
} 



module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}