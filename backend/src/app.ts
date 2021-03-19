import express from 'express';
import cors from 'cors';
import {XmlParser} from './XmlParser'
import {CacheService} from './CacheService'


const cache = new CacheService();
const xmlParser = new XmlParser();
const app = express();
const port = 3000;

app.use(cors({origin: 'http://localhost:4200'}));

app.get('/', (req
    , res) => {
    let json = cache.get("portfolio");
    if (!json) {
        json = xmlParser.getJSon();
        cache.set("portfolio", json);
    }
    return res.send(json);

});

// @ts-ignore
app.listen(port, (err: any) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});


