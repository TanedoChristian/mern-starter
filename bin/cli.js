#! /usr/bin/env node

const {execSync} = require('child_process');
const { run } = require('node:test');

const runCommand = command =>{
    try{
        execSync(command, {stdio: 'inherit'});
        return true;
    }catch(error){
        return false;
    }
}

const  repoName = process.argv[2];
const gitCheckOutCommand = `git clone --depth 1 https://github.com/TanedoChristian/codesphere.git ${repoName}`;

const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Creating new project ${repoName}...`);

const checkOut = runCommand(gitCheckOutCommand);

if(!checkOut){
    console.log('Failed to create new project.');
    process.exit(1);
}

console.log(`Installing dependencies...`);

const installedCommand = runCommand(installDepsCommand);
if(!installedCommand){
    console.log('Failed to install dependencies.');
    process.exit(1);
}


console.log('Happy Coding!');
console.log(`cd ${repoName} && npm run start`)