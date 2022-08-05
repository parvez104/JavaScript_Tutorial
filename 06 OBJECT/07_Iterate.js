
//🔴🟡🟢 Iterate Objects Properties :

var obj = {
    x: 20, 
    y: 40,
    z: 60
}

// in :: string akare property er namm dite hobe. jodi varibale ar modde key raka hoy tahole varibale namm dile hobe.

// console.log('x' in obj)
// console.log('p' in obj)

var store = 'x'
console.log(store in obj)
console.log(obj[store])


for(var i in obj){

    //return obj property, protibar loop er somey object er key gula i er vetore store hobe
    console.log(i) 

    //amra jani object ar property kono varibale ar modde rakle array notetion use korte hoy
    console.log( i + ': '+ obj[i])
    console.log(  obj[i])

}

// NOTE :: 
// loop er somey 'array' er kettre i hocce index number
// loop er somey 'object' er kettre i hocce property..
