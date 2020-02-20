const chalk = require('chalk') // npm package installation 
const validator = require('validator') // npm package installation 
const notes = require('./notes.js') // our file imported
const yargs = require('yargs')

//add , remove, read, list

// console.log(process.argv)
// console.log(yargs.argv)

// create add command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder: {
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    } 
})

//create a list command
yargs.command({
    command:'list',
    describe: 'list notes',
    handler(){
        notes.listNodes()
    }
})

//create a read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Read title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//Pasrsing all the command
yargs.parse()
