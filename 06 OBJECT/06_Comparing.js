//🔴🟡🟢 Comparing two objects

var obj1 = {
    a: 10,
    b: 20
}

var obj2 = {
    a: 10,
    b: 20
}


//📚way_01 : directly compare

//false asbe karaon duiter memorey location diff
console.log(obj1 === obj2)



//📚way_02 : compare all of property value

if(obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true)
}else{
    console.log(false)
}


//📚way_03 : conveting string

console.log(obj1 , obj2)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
