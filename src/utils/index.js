export const generateRandomNameEmail = () => {

    const capFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const name1 = ["Adriana", "Albert", "Jane", "Geraldine", "Elizabeth", "Frieda", "Enrico", "Edwin"];
    const name2 = ["Caroline", "Einstein", "Meitner", "Bohr", "Schroedinger", "Hubble", "Pascal", "Halley", "Marie"];

    const firstName = name1[getRandomNumber(0, name1.length)];
    const lastName = name2[getRandomNumber(0, name2.length)];
    const name = capFirstLetter(firstName) + ' ' + capFirstLetter(lastName);
    const email = `${firstName}_${lastName}@demo.com`.toLowerCase();
    return { name, email };
}

