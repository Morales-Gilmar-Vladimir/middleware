// // Creación de un web server en express 

// //1. Invocar la libreria de express
const express = require('express') //CommonJS

const {engine} = require ('express-handlebars');
//import {engine} from "express-handlebars"; //ESmodules

// //2. Crear una instancia
const app = express()

// //Creacion de rutas
// app.get('/',(req,res)=>{
//     res.send("Bienvenidos")
// })

// app.get('/dashboard',(req,res)=>{
//     res.send("Dashboard principal")
// })

// // esta se utiliza para cuando no se encuentra alguna ruta

// app.use((req,res)=>{
//     res.send("404 - Not Found")
// })

// //3. Iniciar el servidor en el puerto 3000
app.listen(3000)
console.log("Web server ejecutandose en el puerto 3000")

//Requests
//mandar info en formato json
app.use(express.json())

// app.post('/register', (req,res)=>{
//     const {Pedido,Solicita} =req.body
    
//     res.send (`El pedido de ${Pedido} es realizado por ${Solicita}`)
// })
//Post sirve para registrar
// Put = actualizar
// Get = obtener
//Delet = Eliminar 

// app.get('/pedido/:tipo',(req,res)=>{
// console.log(req.params)
// })

//PARAMS
// app.get('/pedido/:abc',(req,res)=>{
//     res.send  (`El pedido es Hamburguesa  ${req.params.abc}`)
//     })

//QUERY PARAMS
// app.get('/search',(req,res)=>{
//     if (req.query.tipo === "sencilla"){
//         res.send ("Hamburguesa sencilla")
//     } else{
//         res.send ("Otro tipo de hamburg")
//     }
//     })

//para mandar texto
app.get ('/hamburgesa/simple', (req,res)=>{
    res.send ("Hamburgesa simple")
})

console.log(__dirname)

//para mandar imagen
app.get ('/hamburgesa/doble', (req,res)=>{
    res.sendFile('./doble.jpg',{
        root:__dirname
    })
})

//para mandar un archivo o file
app.get ('/hamburgesa/triple', (req,res)=>{
    res.sendFile('./triple.docx',{
        root:__dirname
    })
})

//para obtener un json
app.get ('/hamburgesa/mixta', (req,res)=>{
    res.status(200).json({
        "tipo":"mixta",
        "estra": "No"
    })
})

//para obtener una pagina
app.engine ('handlebars', engine());

app.set ('view engine', 'handlebars');

app.set('views','./src/views')

app.get ('/hamburgesa/vegana', (req,res)=>{
    res.render('home')
})

//Middleware
//Ruta publicas 
// app.get ('/entrada', (req,res)=>{
//     res.send('Entanda al local')
// })

// // crear un middleware, apartir de aqui todas las rutas debajo de ella seran privadas
// app.use ((req,res,next)=>{ //Cuando se utiliza use es un middle
//     const{email, password} = req.body
//     if(email === "gilmar.morales@epn.edu.ec" && password === "12345"){
//         next()
//     }else {
//         res.send("Usuario no registrado")
//     }
// })
// app.get ('/pedido', (req,res)=>{
//     res.send(`Bienvenido -${req.body.email}Listo para tomar su orden`)
// })

app.get("/",(req,res)=>{
    res.send("landing page")
})


app.get("/dashboard",(req,res)=>{
    res.send("Bienvenido - Usuario ")
})
