const axios  = require("axios");
const { Characters } = require('../../db');
const URL = "https://rickandmortyapi.com/api/character"


const createCharactersRecords = async (newRecord) => {
    try {
        await Characters.create(newRecord);
    } catch (error) {
        console.error(error.message);
    }
} 
// const createRecord = (array) => {
//     return array.forEach(({ id, name, status }) => {
//         return createCharactersRecords({id, name, status});        
//     });
// } 

const $addCharactersOnDataBase = async () => {
    try {
        const [ response1, response2, response3] = await Promise.all([
            axios.get(`${URL}`),
            axios.get(`${URL}/?page=2`),
            axios.get(`${URL}/?page=3`),
        ])
        const data1 = response1.data.results;
        const data2 = response2.data.results;
        const data3 = response3.data.results;
        const generalData = [...data1, ...data2, ...data3]
        const newCharacters =  generalData.map( 
            ({ id, name, status, species, gender, image }) => {
                return createCharactersRecords({
                    id, name, status, species, gender, image
                })
            }
            );
            // await createRecord(newCharacters);
            await Promise.all(newCharacters)
    } catch (error) {
        console.error(error.message);
    }
};

const getCharAll = async (req, res) => {
    try {
        const charactersList = await $addCharactersOnDataBase();
        res.status(201).send('<h1>dataBase up</h1>')
    } catch (error) {
        console.error(error.message)
    }
}

const get_characters = async (req, res) => {
    try {
        const characters = await Characters.findAll();
        res.status(200).send(characters)
    } catch (error) {
        console.error(error.message)
    }
}


module.exports = {
    get_characters,
    getCharAll 
}