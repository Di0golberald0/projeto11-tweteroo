import express from 'express';

const server = express();
server.use(express.json());

const usuario = {
    username: "",
    avatar: ""
}

const tweets = []

server.post('/sign-up', (req, res) => {
    const login = req.body;
    usuario.push(login);
    res.send("OK");
});

server.post('/tweets', (req, res) => {
    const NovoTweet = req.body;
    tweets.push(...tweets,
        {
            username: `${NovoTweet.username}`,
            tweet: `${NovoTweet.tweet}`
        }
    );
    if(tweets.lenght >= 10){
        tweets.filter((index) => tweets.index !== 0)
    }
    res.send("OK");
});

server.get('/tweets', (req, res) => {
    res.send(tweets);
});

server.listen(5000);