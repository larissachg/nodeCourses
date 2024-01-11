import { getUUID } from '../plugins/get-id.plugin';
import { getAge } from '../plugins/get-age.plugin';
/* const buildPerson = ({name, birthdate}) => {
    return{
        id: new Date().getTime(),
        name,
        birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear()
    }
}

const obj = {
    name: 'Lara',
    birthdate: '1997-07-25'
};

const lara = builddPerson(obj);
console.log(lara); */

//LO MISMO PERO CON PAQUETES DE NPM: UUIDV - GET AGE
/* const { getAge, getUUID } = require("../plugins");

const buildPerson = ({ name, birthdate }) => {
  return {
    id: getUUID(),
    name,
    birthdate,
    age: getAge(birthdate),
  };
};

const obj = {
  name: "Lara",
  birthdate: "1997-07-25",
};

const lara = buildPerson(obj);
console.log(lara); */

//FACTOR DE FUNCIONES FACTORY
interface BuildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOption {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({ getAge, getUUID }: BuildMakerPersonOptions) => {
  return ({ name, birthdate }: PersonOption) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

// module.exports = {
//   buildMakePerson,
// };
