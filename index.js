import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());

const usuario = 
    {
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }

const tweets = []

server.post('/sign-up', (req, res) => {
    const login = req.body;
    usuario.push(login);
    res.send(usuario);
  });

server.post('/tweets', (req, res) => {
    res.send(tweets);
  });

server.get('/tweets', (req, res) => {
    res.send(tweets);
  });

server.listen(5000);