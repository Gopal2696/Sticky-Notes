const fs = require('fs') //node module system
const chalk = require('chalk') // npm modules

//add a new note to note.json
const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicatesNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicatesNote) {
        notes.push ({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New node added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    // console.log(notes)
    
}
 //load all the notes from note.json
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

//save all the notes to notes.json
const saveNotes = (notes) => {
    const notes_val = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notes_val)
}

//remove a given notes from notes.json
const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.bold('Node removed'))
    } else {
        console.log(chalk.red.bold('No node found'))
    }
}

//list all given note
const listNodes = () => {
    const notes = loadNotes()
    console.log(chalk.blue('Your Notes!'))
    notes.forEach((note) => {
        console.log(chalk.green(note.title))
    }) 

}

//read a node with some title
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.green(note.title))
        console.log(chalk.green(note.body))
    } else {
        console.log(chalk.red('No note find with title:' + title))
    }
}

module.exports = {
    addNote:addNote,
    removeNotes:removeNotes,
    listNodes:listNodes,
    readNote:readNote
}