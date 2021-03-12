const ageAdult = function (age) {
    if(age >= 18) {
        return true;
    }
};

const agePerson = function (age) {
    ageCheck=ageAdult(age);
    if (ageCheck) {
        greeting = "Hello there";
    } else {
        greeting = "Hey kiddo!"
    }
    return greeting;
};

console.log(agePerson(18));

//Function to calculate the VAT
const calcVat = function (bacePrice, vatPercentage) {
    console.log("running calcVat. Input is: " + bacePrice + " " + vatPercentage);
    const vatTax = (vatPercentage / 100) * bacePrice;
    console.log("running calcPrice. Output is: " + vatTax);
    return vatTax;
};

//Function to calculate the price incl. taxes
const calcPrice = function (bacePrice, vatPercentage) {
    console.log("running calcPrice. Input is: " + bacePrice + " " + vatPercentage);
    const vatAbs=calcVat(bacePrice,vatPercentage);
    const priceInclTax = vatAbs + bacePrice;
    console.log("running calcPrice. Output is: " + priceInclTax);
    return priceInclTax;
}

priceResult = calcPrice(800, 21);
console.log(priceResult);

//Calculate the vat of the consumerprice
const taxSplit = function (priceTotal, vatPercentage) {
    const vatTax = (priceTotal / (vatPercentage + 100)) * vatPercentage;
    return vatTax;
};

//Function to split the consumer price in baceprice and taxes
const priceSplit = function (priceTotal, vatPercentage) {
    const vatAbs = (taxSplit(priceTotal, vatPercentage));
    const priceNet = priceTotal - vatAbs;
    const priceTax = [priceNet, vatAbs];
    return priceTax;
};

const priceSplitResult = priceSplit(835, 9);
console.log(priceSplitResult);