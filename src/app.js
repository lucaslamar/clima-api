import './config/moduleAliasConfig';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
// import session from 'express-session';
// import redis from 'redis';
// import connectRedis from 'connect-redis';
import passport from 'passport';
import routes from './app/config/routes';
import handleErrors from './app/middlewares/handleErrors';
import './databases/models';

class App {
    constructor() {
        this.server = express();
        // this.RedisStore = connectRedis(session);
        // this.client = redis.createClient(
        //     process.env.REDIS_PORT,
        //     process.env.REDIS_HOST
        // );
        this.middlewares();
        this.routes();
        this.server.use(handleErrors);
    }

    middlewares() {
        this.server.use(express.json());
        // this.server.use(
        //     session({
        //         store: new this.RedisStore({
        //             host: process.env.REDIS_HOST,
        //             port: process.env.REDIS_PORT,
        //             client: this.client,
        //             ttl: process.env.REDIS_TTL,
        //         }),
        //         secret: process.env.SESSION_SECRET,
        //         resave: false,
        //         saveUninitialized: false,
        //     })
        // );
        this.server.use(passport.initialize());
        this.server.use(passport.session());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
