const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
    ];

    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop 

for (var index = 0; index < companies.length; index++){
    console.log(companies[index])
}

// foreach

companies.forEach(function(company){
    console.log(company)
})

// map

companies.forEach(function(){

})

// filter

var retailCompany = companies.filter(function(company){
    return company == 'Retail'
})

console.log(retailCompany)

// sort

//get 80s companies

var eightiesCompanies = companies.filter(function(company){

    return company.start >= 1980 && company.start < 1990;
})

console.log(eightiesCompanies)