import Team from './game/Team.js';
import Character from './game/Character.js';
import canIterate from './game/canIterate.js';

// ПОДГОТОВКА ДАННЫХ ДЛЯ ТЕСТА
const team = new Team();

const character1 = new Character('Reece', 'Bowman');
const character2 = new Character('Liam', 'Swordsman');
const character3 = new Character('Noah', 'Magician');

// ТЕСТЫ ДЛЯ СИМВОЛОВ, ИТЕРАТОРОВ И ГЕНЕРАТОРОВ
console.log('\nСИМВОЛЫ, ИТЕРАТОРЫ И ГЕНЕРАТОРЫ');

// ТЕСТ №1
team.add(character1);
console.log('\nДОБАВЛЯЕМ ПЕРСОНАЖА ЧЕРЕЗ МЕТОД add()');
console.log(team.members); // Set { Character }

// ТЕСТ №2
team.addAll(character2, character3);
console.log('\nДОБАВЛЯЕМ ДВУХ ПЕРСОНАЖЕЙ ЧЕРЕЗ МЕТОД addAll()');
console.log(team.toArray()); // [Character, Character, Character]

// ТЕСТ №3
team.remove(character2);
console.log('\nУДАЛЯЕМ ВТОРОГО ПЕРСОНАЖА ЧЕРЕЗ МЕТОД remove()');
console.log(team.toArray()); // [Character, Character]

// ТЕСТ №4
const filteredCharacters = [...team].filter((character) => character.type === 'Magician');
console.log('\nФИЛЬТРУЕМ ПЕРСОНАЖЕЙ ЧЕРЕЗ МЕТОД filter()');
console.log(filteredCharacters[0].name, filteredCharacters[0].type); // Noah Magician

// ТЕСТ №5
const iterator = team[Symbol.iterator]();
console.log('\nПРОВЕРКА ИТЕРАТОРА');
console.log(iterator.next()); // { value: Character, done: false }
console.log(iterator.next()); // { value: Character, done: false }
console.log(iterator.next()); // { done: true }

// ТЕСТ №6
team.clear();
console.log('\nОЧИЩАЕМ КОМАНДУ ЧЕРЕЗ МЕТОД clear()');
console.log(team.toArray()); // []

// ТЕСТ ДЛЯ ПРОВЕРКИ ФУНКЦИИ canIterate()
console.log('\nПРОВЕРКА ФУНКЦИИ canIterate()');
canIterate(new Map());    // true (Map итерируем)
canIterate(new Set());    // true (Set итерируем)
canIterate(null);        // false (null не объект)
canIterate(10);          // false (число не итерируемо)
canIterate('Fullstack');  // true (строка итерируема)
