const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  console.log(data[0].profession);
}
printDeveloper();
// 2. Add Data
function addData() {
  (data.push({ email: "ajaj@gmail.com" }));
  console.log(data);
}
addData();
// 3. Remove Admins
function removeAdmin() {
  data.pop();
  data.pop();
  console.log(data);
 
}
removeAdmin();
// 4. Concatenate Array
function concatenateArray() {
  const obj = [
    { name: "ayush", age: 26, email: "Ayush@gmail.com" }
  ]
  console.log([...data, ...obj]);
}
concatenateArray();

// 5. Average Age
function averageAge() {
  let totalAge = 0;
  for (const person of data) {
    totalAge += person.age;
  }
  const average = totalAge / data.length;
  console.log("Average Age:", average);
}
averageAge();

// 6. Age Check
function checkAgeAbove25() {
  for (const person of data) {
    if (person.age > 25) {
      console.log(person.name + " is above 25 years old.");
    }
  }
}

checkAgeAbove25();


// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessionsSet = new Set();
  for (const person of data) {
    uniqueProfessionsSet.add(person.profession);
  }
  const uniqueProfessionsArray = Array.from(uniqueProfessionsSet);
  console.log("Unique Professions:", uniqueProfessionsArray);
}

uniqueProfessions();


// 8. Sort by Age
function sortByAge() {
  const sortedData = data.slice().sort((a, b) => a.age - b.age);
  console.log(sortedData);
}

sortByAge();


// 9. Update Profession
function updateJohnsProfession() {
  for (const person of data) {
    if (person.name === "john") {
      person.profession = "updated profession";
    }
  }
  console.log(data);
}

updateJohnsProfession();


// 10. Profession Count
function getTotalProfessions() {
  const professionCounts = {};
  for (const person of data) {
    const profession = person.profession;
    if (professionCounts[profession]) {
      professionCounts[profession]++;
    } else {
      professionCounts[profession] = 1;
    }
  }
  console.log("Profession Counts:", professionCounts);
}

getTotalProfessions();

