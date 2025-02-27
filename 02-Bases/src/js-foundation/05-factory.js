// const {getUUID} = require('../plugins/get-id.plugin');
// const {getAge} = require('../plugins/get-age.plugin');

// const{getAge, getUUID} = require('../plugins');

const buildMakePerson = ({getUUID, getAge}) => {

    return ({name, birthdate}) => {

        return{
            id: getUUID(),
            name : name,
            birthdate : birthdate,
            age: getAge(birthdate),
        }
    }
    
}



// const obj = { name: 'John', birthdate: '2000-10-14' };

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
    buildMakePerson
}
