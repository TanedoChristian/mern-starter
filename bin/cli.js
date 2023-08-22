#! usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command =>{
    try{
        execSync(`${command}`, {stdio: 'inherit'});
    }catch(error){
        console.error(`Failed to execute command: ${command}`, e);
        return false;
    }
    return true;
}

const  repoName = process.argv[2];
const gitCheckOutCommand = `git clone --depth 1 https://github.com/TanedoChristian/mern-starter.git ${repoName}`;



console.log(`Creating new project ${repoName}...`);
const checkOut = runCommand(gitCheckOutCommand);
if(!checkOut){
    console.log('Failed to create new project.');
    process.exit(1);
}



console.log('Happy Coding!');
