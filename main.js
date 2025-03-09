function findYoungestUser(users) {
    let youngest = users[0];

    for (let i = 1; i < users.length; i++) {
        if (users[i].age < youngest.age) {
            youngest = users[i];
        }
    }

    return youngest.name;
}


const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];

console.log("Exercise 1");
console.log(findYoungestUser(users));
console.log(" ");





function cloneUser(user) {
    return { ...user }; 
}


const originalUser = { name: 'Temo', age: 25 };
const clonedUser = cloneUser(originalUser);

console.log("Exercise 2");
console.log(clonedUser); 
console.log(originalUser === clonedUser); 



function rollDiceGame() {
    let rollsA = 0, rollsB = 0; 
    let foundA = false, foundB = false;

    while (!foundA || !foundB) {
        if (!foundA) {
            rollsA++;
            let roll = Math.floor(Math.random() * 6) + 1;
            if (roll === 3) foundA = true;
        }
        if (!foundB) {
            rollsB++;
            let roll = Math.floor(Math.random() * 6) + 1;
            if (roll === 3) foundB = true;
        }
    }
    console.log(" ");
    console.log("Exercise 3");
    
    console.log(`User A rolled 3 in ${rollsA} attempts`);
    console.log(`User B rolled 3 in ${rollsB} attempts`);

    if (rollsA < rollsB) {
        console.log("User A wins!");
    } else if (rollsB < rollsA) {
        console.log("User B wins!");
    } else {
        console.log("It's a tie!");
    }
}

rollDiceGame();
