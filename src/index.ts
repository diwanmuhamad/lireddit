import {MikroORM} from "@mikro-orm/core";
import {__prod__} from "./constant";
import {Post} from "./entities/Post";
import microConfig from "./mikro-orm.config"

const main = async () => {
    try {
        const orm = await MikroORM.init(microConfig)
    
        const post = orm.em.create(Post, {name: 'my first post', createdAt: "", updatedAt: ""})
        await orm.em.persistAndFlush(post);

    }
    catch (error) {
        console.log(error)
    }
}

main();