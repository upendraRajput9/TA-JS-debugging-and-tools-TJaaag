function add(firstName,lastName){
    return firstName + lastName
}
let fullName = add(`ellie`,`goluding`);
let expected = `ellie goluding`
if(fullName!==expected){
    throw new Error(`${fullName} is not same as ${expected}`)
}

function add(amount,taxRate){
    return amount * taxRate
}
let totalAmount = add(1000,3);
let expected = 2000
if(totalAmount != expected){
    throw new Error(`${totalAmount} is not equal to ${expected}`)
}