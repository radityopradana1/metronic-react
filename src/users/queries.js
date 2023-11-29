const getPeople = "SELECT * FROM people";
const getPeopleById = "SELECT * FROM people WHERE id = $1";
const checkDuplicate = "SELECT s FROM people s WHERE s.firstname = $1";
const addUsers = "INSERT INTO people (firstname, lastname, location) VALUES ($1, $2, $3)";
const removeUsers = "DELETE FROM people WHERE id = $1";
const updateUsers = "UPDATE people SET firstname = $1 WHERE id = $2";

module.exports = {
    getPeople,
    getPeopleById,
    checkDuplicate,
    addUsers,
    removeUsers,
    updateUsers,
}