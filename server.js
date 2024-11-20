import express from 'express';
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Jokes API!');
});

// Jokes route
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            name: "joke1",
            content: "laugh"
        },
        {
            id: 2,
            name: "joke2",
            content: "laughmore"
        }
    ];
    res.send(jokes);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
