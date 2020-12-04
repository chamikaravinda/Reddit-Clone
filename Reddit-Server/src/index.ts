import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";


const main = async() =>{
    const orm = await MikroORM.init({
        entities:[Post],
        dbName:'reddit',
        type:'postgresql',
        debug:!__prod__,
    });

    orm.em.create(Post,{title:"My first post"});
}


main();

