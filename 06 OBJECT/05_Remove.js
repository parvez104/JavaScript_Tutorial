//🔴🟡🟢 Remove : propertey / key remove in objects ::


var point = {
    x: 10,
    y: 20,
    z: 40
}


//📚 remove value of property ::
point.x = undefined
point.x = null
console.log(point)



//📚 but we need to (remove / delete) property :: 
delete point.x
delete point['y']
console.log(point)
