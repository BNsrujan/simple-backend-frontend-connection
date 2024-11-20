const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.get('/', (req, res) => {
    res.send('server is ready ')
    console.log("hit")
})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 2,
            title: "What do you call fake spaghetti?",
            content: "An impasta!"
        },
        {
            id: 3,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 4,
            title: "What do you call cheese that isn't yours?",
            content: "Nacho cheese!"
        },
        {
            id: 5,
            title: "Why can't your nose be 12 inches long?",
            content: "Because then it would be a foot!"
        }
    ];
    res.send(jokes)
})

app.listen(3000, () => {
    console.log("server is running at port 3000")
})