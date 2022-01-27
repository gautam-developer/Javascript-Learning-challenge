let MarkMass=84;
let MarkHeight=6.2;

let JohnMass=92;
let JohnHeight=6.3;

let MarkBMI= MarkMass / MarkHeight ** 2;
console.log(MarkBMI);

let JohnBMI= JohnMass / JohnHeight ** 2;
console.log(JohnBMI);   



if(MarkBMI > JohnBMI){
let markHigherBMI= `Mark's BMI ${MarkBMI} is higher than John's ${JohnBMI}` ;
        console.log(markHigherBMI);
}else{
    let johnHigherBMI= `John's BMI ${JohnBMI} is higher than Mark's ${MarkBMI}`;
    console.log(johnHigherBMI);
}
