#!/usr/bin/env node

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

const  repoName = prompt('Enter project name: ');
const gitCheckOutCommand = `git clone --depth 1 https://github.com/TanedoChristian/mern-starter.git ${repoName}`;


const installClient = `cd ${repoName}/client && npm install`;
const installServer = `cd ${repoName}/server && npm install`;


console.log('\x1b[34m', `Creating new project ${repoName}...`);
const checkOut = runCommand(gitCheckOutCommand);
if(!checkOut){
    console.log('Failed to create new project.');
    process.exit(1);
}


console.info(`Installing client dependencies...`)
const installedClient = runCommand(installClient);
if(!installedClient){
    console.log('Failed to install client dependencies.');
    process.exit(1);
}
console.info(`Installing server dependencies...`)
const installedServer = runCommand(installServer);
if(!installedServer){
    console.log('Failed to install server dependencies.');
    process.exit(1);
}


console.log( '\x1b[34m', 'Happy Coding!');
