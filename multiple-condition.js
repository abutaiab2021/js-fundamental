var gotJob = true;
var moneySaved = 10000;
var hasFlat =  false;
var hasHouse =  true;

// if(gotJob == true && moneySaved > 200000 ){
//     console.log('Cholo biha kore feli');
// }
// else{
//     console.log('tor kopale bia nai')
// }

// if(gotJob == true && moneySaved > 200000 && hasFlat == true ){
//     console.log('Cholo biha kore feli');
// }
// else{
//     console.log('tor kopale bia nai')
// }

// if(gotJob == true || moneySaved > 200000 ){
//     console.log('Cholo biha kore feli');
// }
// else{
//     console.log('tor kopale bia nai')
// }

if((gotJob == true && moneySaved > 200000) || hasHouse == true){
    console.log('Cholo biha kore feli');
}
else{
    console.log('tor kopale bia nai')
}