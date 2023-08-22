#! /usr/bin/env node

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
const installClient = `cd ${repoName}/client && npm install`;
const installServer = `cd ${repoName}/server && npm install`;

console.log(`Creating new project ${repoName}...`);
const checkOut = runCommand(gitCheckOutCommand);
if(!checkOut){
    console.log('Failed to create new project.');
    process.exit(1);
}

console.log(`Installing dependencies...`);

const installedClient = runCommand(installClient);
if(!installClient){
    console.log('Failed to install dependencies.');
    process.exit(1);
}

const installedServer = runCommand(installServer);
if(!installServer){
    console.log('Failed to install dependencies.');
    process.exit(1);
}


console.log('Happy Coding!');
console.log(`cd ${repoName}/client && npm run start`)
console.log(`cd ${repoName}/ && npm run start`)