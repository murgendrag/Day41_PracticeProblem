
//console.log(Dice);
 let DiceMap=new Map()
 let DiceFaceValueArr= new Array();
for (i=0;i<10;i++)
{
    let Dice=Math.floor((Math.random()*10)%6+1);
    DiceMap.set(i,Dice);
    DiceFaceValueArr.push(Dice);
}
for(let [key,value] of DiceMap) 
//console.log("DiceRolled :" +key +" DiceFace :" +value);
for(let value of DiceMap.values())console.log("Dice Face" +value);
//let hasvalue = DiceMap.has(1);
//console.log(hasvalue);
//console.log(DiceMap.get(1));
//let DiceFaceValueArr= new Array();
let DiceCntr =0;
function mapDice(Dice){
    DiceCntr++;
    return DiceCntr +" =" +Dice;
}

let mapDiceArr = DiceFaceValueArr.map(mapDice);
console.log("DiceFaceValue");
console.log(DiceFaceValueArr);

function diceFace(DiceFaceValueArr)
{
    return mapDiceArr.includes("5");
}
let diceFace5Arr = mapDiceArr.filter(diceFace);
console.log(" dice face has 5 ");
console.log(diceFace5Arr);

