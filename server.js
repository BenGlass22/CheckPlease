const express = require('express')
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser')
const io = require('socket.io')(http)
const port = 8000

app.listen(3000,() => console.log('listening at 3000'));
app.use(express.static(`${__dirname}`));



//app.get('/', (req, res) => {
//  res.sendFile(`${__dirname}/index.html`)
//})

app.use(bodyParser.json())
app.use(express.static('www'))


 io.on('connection', (socket) => {
   console.log('a user connected')

   socket.on('new-chat-message', (data) =>{
     socket.broadcast.emit('broadcast-message', data)
     console.log(data)
   })
   socket.on('update-states', (data) =>{
     socket.broadcast.emit('broadcast-message', data)
     console.log(data)
   })

 } )

http.listen(port, (err) => {
  if (err) return console.log(err)
 console.log(`
   Listening on http://localhost:${port}
    Document root is ${__dirname}
   Press Ctrl-C to quit.
     `)
})
