import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

export default {
    migrations: {
        path: path.join(__dirname,'./migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities:[Post],
    password:'admin',
    dbName:'reddit',
    type:'postgresql',
    debug:!__prod__,
} as Parameters<typeof MikroORM.init>[0];