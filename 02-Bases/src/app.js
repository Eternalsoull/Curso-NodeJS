const{getAge, getUUID} = require('./plugins');

// const {emailTemplate} =  require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const {getUserById} =  require('./js-foundation/03-callbacks');
// const {getUserById} =  require('./js-foundation/03-callbacks');
const {buildMakePerson } = require('./js-foundation/05-factory');

const makePerson = buildMakePerson({getUUID, getAge});  

const obj = { name: 'John', birthdate: '2000-10-14' };

const john = makePerson(obj);

console.log(john);

// console.log(emailTemplate);
