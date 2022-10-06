const companies = [
    {name: "Company one", category: "Finance", start: 1981, end: 2003},
    {name: "Company two", category: "Retail", start: 1992, end: 2008},
    {name: "Company three", category: "Auto", start: 1989, end: 2007},
    {name: "Company four", category: "Tech", start: 1980, end: 2007},
    {name: "Company five", category: "Finance", start: 1987, end: 2014},
    {name: "Company six", category: "Retail", start: 1985, end: 2000},
    {name: "Company seven", category: "Auto", start: 2001, end: 2010},
    {name: "Company eight", category: "Tech", start: 1984, end: 2003},
    {name: "Company nine", category: "Finance", start: 1981, end: 2000},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 64, 15, 45, 52, 64, 32];

// iterating through array using for loop
// for (let i=0; i<companies.length; i++){
//     console.log(companies[i]);
// }

// forEach
// companies.forEach(function(company){
//     console.log(company.name);
// });

//filter 
// get 21 and older 
// let canDrink = [];
// for (let i=0; i<ages.length; i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i])
//     }
// }

// const canDrink = ages.filter(function(age) {
//     if(age>=21){
//         return true;
//     }
// });

// const canDrink = ages.filter( age => age>=21 );

// console.log(canDrink);

// filter retail companies

// const retailCompanies = companies.filter(function(company){
//     if(company.category === "Retail"){
//         return true;
//     }
// });

// const retailCompanies = companies.filter(company => company.category === "Retail");

// console.log(retailCompanies);

// get 80s companies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// console.log(eightiesCompanies);

// get companies that lasted 10 years or more

// const LastedTenYears = companies.filter(company => (company.end-company.start)>=10);

// console.log(LastedTenYears);

//map
// create array of company names
// const companyNames = companies.map(function(company){
//     return company.name;
// });

// const companyNames = companies.map(company => company.name);

// console.log(companyNames);

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company =>`${company.name} [${company.start} - ${company.end}]`);

// console.log(testMap);

// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// const agesTimesTwo = ages.map(age => age*2);
// console.log(agesTimesTwo);

// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age*2);
// console.log(ageMap);

// sort
// sort companies by start year

// const sortedCompanies = companies.sort(function(c1,c2){
//     if (c1.start > c2.start){
//         return 1; // or return true;
//     } else {
//         return -1; // or return false;
//     }
// });

// const sortedCompanies = companies.sort((c1,c2)=> c1.start > c2.start ? 1 : -1);

// const sortedCompanies = companies.sort((c1,c2)=> c1.start > c2.start);
// console.log(sortedCompanies);

// sort ages in ascending order
// const sortedages = ages.sort((a,b) => a - b);
// console.log(sortedages);

// sort ages in descending order
// const sortedages = ages.sort((a,b) => b-a);
// console.log(sortedages);

// reduce
// let ageSum = 0;
// for (let i=0; i<ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(a,b){
//     return a+b;
// }, 0);

const ageSum = ages.reduce((a,b) => a+b, 0);
console.log(ageSum);
