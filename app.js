let userName= prompt("Enter your Nmae ,Please.", " ");
let gender= prompt("Enter your gender ,Please.", "male - femail ");


let age= prompt("Enter your age ,Please.", " ");
if(age<=0){
    alert("Un Valid Input!! please, enter your age agin")
    age= prompt("Enter your age ,Please.", " ");  
}

let result=confirm( "Do you Want to Skip Welcoming message?")
console.log(result)

if (!result){
switch (gender){
        case "male":
alert(" Welcom MR "+ userName);
break;
case "femail":
    alert(" Welcom MS  "+userName);
    break;
    default:
        alert(" welcom "+userName);
    }
}