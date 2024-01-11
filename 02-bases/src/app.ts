//const { emailTemplate } = require('./js-foundation/01-template');

// console.log(emailTemplate);

//require('./js-foundation/02-destructuring');

//const {getUserById} = require('./js-foundation/03-callbacks');
/* const id = 1;

getUserById( id, (error, user) => {
    if(error){
        throw new Error(error);
    }

    console.log({user});
  
}); */

// require("./js-foundation/05-factory");

//FUNCION FACTORY
/* const { getAge, getUUID } = require("./plugins");
const { buildMakePerson } = require("./js-foundation/05-factory");
const makePerson = buildMakePerson({ getUUID, getAge });
const obj = {
  name: "Lara",
  birthdate: "1997-07-25",
};
const lara = makePerson(obj);
console.log(lara); */

//PROMISES

import {getPokemonById} from "./js-foundation/06-promises";
getPokemonById(4)
  // .then((pokemon) => console.log({ pokemon }))
  // .catch((err) => console.error(err))
  // .finally(() => console.log("Finalmente"));

//APLICANDO WINSTON
import { buildLogger } from "./plugins/logger.plugin";
const logger = buildLogger("app.js");
logger.log("Hola Mundo");
logger.error("Esto es algo malo");
