const Witaj = (arr) => {
    if (arr.hasOwnProperty('imie')) {

        let result = ('Witaj ' + arr.imie + '!');
        return result;

    } else {

        let result = ('Witaj!');
        return result;

    }
}

const osoba = { wiek: 25, hobby: "sport" };
const osoba2 = { imie: "Malgosia", wiek: 25, hobby: "sport" };
const osoba3 = { wiek: 25, hobby: "sport" };
const osoba4 = { imie: "Jaś", wiek: 25, hobby: "sport" };

console.log(Witaj(osoba));
console.log(Witaj(osoba2));
console.log(Witaj(osoba3));
console.log(Witaj(osoba4));