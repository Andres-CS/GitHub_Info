import * as dotenv from 'dotenv';

function load_env_vars():boolean {
    var flag:boolean = true;

    let envs = dotenv.config();
    if (envs.error){
        flag=false;
    }
    return flag;
}

if(load_env_vars() == true){
    console.log(process.env);
}