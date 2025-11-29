import express from 'express';

import {PORT} from './config/env.js';

const app = express();

app.get('/', (req, res) => {
    res.send('ts brain rot mock project');
})

app.listen(PORT, () => {
    console.log(`Server is running on port 5000 or http://localhost:${PORT}`);
});

export default app;