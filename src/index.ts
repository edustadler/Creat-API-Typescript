import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import crudRouter from './routes/crudRouter';


const app = express()

app.use(cors(
    {
        credentials: true,
    }
))

app.use(compression());
app.use(cookieParser())
app.use(bodyParser.json())

app.use("/", crudRouter);


const server = http.createServer(app)


server.listen(9999)