//Same keys and values ES2015
const createInstructor = (firstName, lastName) => ({firstName, lastName})
 
//Computed Property Names ES2015
let favouriteNumber = 42;
const instructor1 = {
    firstName : 'Colt',
    [favouriteNumber] : 'That is my favourite!'
}

//Object Methods ES2015
const instructor2 = {
    firstName : 'Colt',
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

//createAnimal function
function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}
const d = createAnimal("dog", "bark", "Woooof!")
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")