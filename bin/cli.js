#!/usr/bin/env node

const {execSync} = require('child_process');



const runCommand = (command, flag) =>{

    if(flag == true)
    {
        try{
           console.info(`Initializing project...`);
        }catch(error){
            console.error(`Failed to execute command: ${command}`);
            return false;
        }
        return true;
    } else {
        try{
            execSync(`${command}`, {stdio: 'inherit'});
        }catch(error){
            console.error(`Failed to execute command: ${command}`);
            return false;
        }
        return true;
    }
}







const repoName = process.argv[2];
const gitCheckOutCommand = `git clone --depth 1 https://github.com/TanedoChristian/mern-starter.git ${repoName}`;


const installClient = `cd ${repoName}/client && npm install`;
const installServer = `cd ${repoName}/server && npm install`;




const checkOut = runCommand(gitCheckOutCommand, true);
if(!checkOut){
    console.log('Failed to checkout repository.');
    process.exit(1);
}





console.info(`Installing client dependencies...`)
const installedClient = runCommand(installClient, false);
if(!installedClient){
    console.log('Failed to install client dependencies.');
    process.exit(1);
}

console.info(`Installing server dependencies...`)
const installedServer = runCommand(installServer, false);
if(!installedServer){
    console.log('Failed to install server dependencies.');
    process.exit(1);
}


console.info('Happy Coding!');
