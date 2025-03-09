function findYoungestUser(users) {
    let youngest = users[0]; // Assume first user is the youngest

    for (let i = 1; i < users.length; i++) {
        if (users[i].age < youngest.age) {
            youngest = users[i]; // Update youngest user
        }
    }

    return youngest.name; // Return only the name
}

// Example usage
const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];

console.log("Exercise 1");
console.log(findYoungestUser(users)); // Output: Lasha
console.log(" ");





function cloneUser(user) {
    return { ...user }; // Spread operator to copy properties
}

// Example usage
const originalUser = { name: 'Temo', age: 25 };
const clonedUser = cloneUser(originalUser);

console.log("Exercise 2");
console.log(clonedUser); // Output: { name: 'Temo', age: 25 }
console.log(originalUser === clonedUser); // Output: false (they are different objects)



function rollDiceGame() {
    let rollsA = 0, rollsB = 0; // Counters for attempts
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

// Run the game
rollDiceGame();
