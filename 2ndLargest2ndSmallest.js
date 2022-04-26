console.log("To find 2nd largest 2nd smallest");
let NumberArr= new Array();
for(i=0;i<10;i++)
{
    Number=Math.floor(Math.random()*1000);
    NumberArr.push(Number);
}
console.log(NumberArr);

for(i=0;i<10;i++)
{
    for(j=i+1;j<10;j++)
    {
        if(NumberArr[i]>NumberArr[j])
        {
            temp =NumberArr[i];
            NumberArr[i]=NumberArr[j];
            NumberArr[j]=temp;
        }
    }
}
console.log( "2nd Largest Number" +NumberArr[8]);
console.log("2nd Smallest no "+NumberArr[1]);