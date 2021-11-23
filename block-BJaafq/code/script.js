function add(numA,numB){
return numA+numB
}
function multiply(numA,numB){
   return numA * numB
}

let result,expected;

function test(message,callback){
    try{
        callback();
console.log(`✅`,message)
    }catch (error){
console.error(error)
console.log(`❌`,message)
    }
}
function addTest1() {
    result=add(4,1)
     expected=5
    if(result!==expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }
}
test("adding 4 and 1",addTest1)
function addTest2() {
    result=add(8,2)
     expected=8
    if(result!==expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }
}
test("adding 8 and 2",addTest2)
function addTest3() {
    result=add(5,12)
     expected=22
    if(result!==expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }
}
test("adding 5 and 12",addTest3)
function addTest4() {
    result=add(8,8)
     expected=16
    if(result!==expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }
}
test("adding 8 and 8",addTest4)
function multiplyTest(){
    result = multiply(2,5)
    expected = 11
    if(result!==expected){
        throw new Error(`${result} is not equal to ${expected}`)}

}
test("adding 5 and 2",multiplyTest)

function multiplyTest1(){
    result = multiply(5,2)
    expected = 10
    if(result!==expected){
        throw new Error(`${result} is not equal to ${expected}`)}

}
test("adding 5 and 2",multiplyTest1)

function multiplyTest2(){
    result = multiply(5,5)
    expected = 25
    if(result!==expected){
        throw new Error(`${result} is not equal to ${expected}`)}

}
test("adding 5 and 5",multiplyTest2)

function multiplyTest3(){
    result = multiply(4,3)
    expected = 11
    if(result!==expected){
        throw new Error(`${result} is not equal to ${expected}`)}

}
test("adding 4 and 3",multiplyTest3)

function multiplyTest4(){
    result = multiply(6,5)
    expected = 31
    if(result!==expected){
        throw new Error(`${result} is not equal to ${expected}`)}

}
test("adding 6 and 5",multiplyTest4)