const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = [
  'Jakub',
  'Mariusz',
  'Dominik',
  'Bartosz',
  'Wojciech',
  'Henryk',
  'Krzysztof',
  'Mateusz',
  'Damian',
  'Tomasz',
];
const femaleNames = [
  'Katarzyna',
  'Julia',
  'Edyta',
  'Renata',
  'Sandra',
  'Martyna',
  'Elżbieta',
  'Dorota',
  'Anna',
  'Paulia',
];
const lastNames = [
  'Kowalczyk',
  'Nowak',
  'Ladocha',
  'Tur',
  'Noga',
  'Zielonka',
  'Pawliczak',
  'Adamiec',
  'Pleśniak',
  'Lenkiewicz',
];

const randChoice = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

const people = [];

for (let i = 1; i <= 20; i++) {
  let gender = randChoice(genders);
  let firstName =
    gender == 'M' ? randChoice(maleNames) : randChoice(femaleNames);
  let lastName = randChoice(lastNames);
  let age = Math.floor(Math.random() * (78 - 17) + 18);

  let randomPerson = {
    gender,
    firstName,
    lastName,
    age,
  };
  people.push(randomPerson);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});