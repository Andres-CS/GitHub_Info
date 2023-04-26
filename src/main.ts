import * as dotenv from 'dotenv';
import { Octokit } from 'octokit';

function load_env_vars():boolean {
    var flag:boolean = true;

    let envs = dotenv.config();
    if (envs.error){
        flag=false;
    }
    return flag;
}

if(load_env_vars() == true){
    // console.log(process.env);
    console.log("ENV VAR parsed");
}

const octokit = new Octokit(
    {
        auth:process.env.GH_TOKEN
    }
)

const x = async () => {
    try {
        return await octokit.request(
            'GET / octocat', 
            {
                headers:{ 'X-GitHub-Api-Version': '2022-11-28'}
            }
        );
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
    finally{
        console.log("Done");
    }
    
};

const y = async () =>{
    try {
        return await octokit.request(
            `Get /repos/${process.env.GH_USER}/scripts/stats/participation`,
            {
             owner:process.env.GH_USER,
             repo:"scripts",
             headers: {
                'X-GitHub-Api-Version': '2022-11-28'
              }
            }
        );
    }
    catch(error){
        console.log(`Error: ${error}`)
    }
    finally{
        console.log("Done with Stats");
    }

}


const repos = async () =>{
    try{
        return await octokit.request(
            `GET /user/${process.env.GH_USER}/repos`,
            {
                org:process.env.GH_USER,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                  }
            }
        );
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
    finally{
        console.log("Done");
    }

};

// x().then(result=>{
//     console.log(result);
// });

repos().then(
    results => {console.log(results)}
);