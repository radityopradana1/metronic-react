const pool = require('../../db')
const queries = require('./queries')

const getUsers = (req, res) => {
    pool.query(queries.getPeople, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPeopleById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUsers = (req, res) => {
    const {firstname, lastname, location} = req.body;
    // check if firstname and lastname exist
    pool.query(queries.checkDuplicate, [firstname], (error, results) => {
        if (results.rows.length){
            res.send("firstname already exist")
        }
        //add people
        pool.query(queries.addUsers, [firstname, lastname, location], (error, results) => {
            if (error) throw error;
            res.status(201). send("Person added successfully")
            console.log("Person added")
        })
    })
}

const removeUsers = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPeopleById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound){
            res.send("User does not exist");
        }
        pool.query(queries.removeUsers, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("User removed successfully");
        })
    })
}

const updateUsers = (req, res) => {
    const id = parseInt(req.params.id);

    const { firstname } = req.body;

    pool.query(queries.getPeopleById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound){
            res.send("User does not exist");
        }

        console.log("bodynya adalah === ", req.body)
        pool.query(queries.updateUsers, [firstname, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("User updated");
        })
    })
}

module.exports = {
    getUsers,
    getUsersById,
    addUsers,
    removeUsers,
    updateUsers,
}