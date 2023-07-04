const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    const taxLitva = this.tax * salary;
    return taxLitva;
}
const salary = 1509;
const litvaTax = getMyTaxes.call(litva, salary);
console.log(`Податок в Литві: ` + litvaTax);


function getMiddleTaxes() {
    const middleTaxes = this.tax * this.middleSalary;
    return middleTaxes;
}
const uaMidlleTax = getMiddleTaxes.call(ukraine);
const ltMidlleTax = getMiddleTaxes.call(latvia);
const lvMidlleTax = getMiddleTaxes.call(litva);

console.log(
    `Середній податок в Україні: ` + uaMidlleTax,
    ` в Латвії: ` + ltMidlleTax,
    ` в Литві: ` + lvMidlleTax);


function getTotalTaxes() {
    const totalTax = this.tax * this.middleSalary * this.vacancies;
    return totalTax;
}

const ukraineTotalTax = getTotalTaxes.call(ukraine);
const litvaTotalTax = getTotalTaxes.call(litva);
const latviaTotalTax = getTotalTaxes.call(latvia);
console.log(
    `Загальний податок в Україні: ` + ukraineTotalTax,
    ` в Латвії: ` + latviaTotalTax,
    ` в Литві: ` + litvaTotalTax);

function getMySalary() {
    setInterval(() => {
        const object = {
            salary: Math.floor(Math.random() * (2000 - 1500 + 1) + 1500),
        };
        object.taxes = Number((this.tax * object.salary).toFixed(2));
        object.profit = object.salary - object.taxes;
        console.log(object);
    }, 10000);
}
getMySalary.call(ukraine);
console.log(`10 секунд`);
