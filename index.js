const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Database connect
const connectMongo = async () => {
    const mongoConnectUri = ""
    
    try {
        mongoose.connect(mongoConnectUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDb Connected');
    } catch (err) {
        console.error('error!', err.message);
        process.exit(1);
    }
};

connectMongo();

app.use(express.json());

// Define Routes
app.use('/', require('./src/urlRedirect'));
app.use('/api/url', require('./src/urlShortener'));

const PORT = 9009;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));