let userName = prompt("Enter your Nmae ,Please.", " ");
let gender = prompt("Enter your gender ,Please.", "male - femail ");

let age = prompt("Enter your age ,Please.", " ");
while (age <= 0 || age>100 ||isNaN(age)) {
  alert("Unvalid Input!! please, enter your age agin");
  age = prompt("Enter your age ,Please.", " ");
}

let result = confirm("Do you Want to Skip Welcoming message?");
console.log(result);

if (!result) {
  switch (gender) {
    case "male":
      alert(" Welcom MR " + userName);
      break;
    case "femail":
      alert(" Welcom MS  " + userName);
      break;
    default:
      alert(" welcom " + userName);
  }
}

/********************************* */
const userAnswers = [];
const Question = [
  "Do you like sports ?",
  "Do you follow the FIFA World Cup?",
  "Will you travel to Qatar to follow it??",
];

for (let i = 0; i < 3; i++) {
  userAnswers[i] = prompt(Question[i], " yes/no - y/n ");
  console.log(userAnswers[i])
  switch (userAnswers[i]) {
    case "yes":
    case "Y":   
    case "y":
      userAnswers[i] = "Yes";
      break;
    case "no":
    case "N":    
    case "n":
      userAnswers[i] = "NO";
      break;
    default:
      userAnswers[i] = "invalid";
  }
  console.log(Question[i] + "  " + userAnswers[i]);
}


let stars_num;
do{
 stars_num = prompt("How many stars they rate your website", "1 ~ 5 ");

 } while(isNaN(stars_num));
   
if (stars_num > 5  ) {
  stars_num = 5;
}
else if(stars_num < 0){
    stars_num = 0;
}

let stars = " ";
while (stars_num > 0) {
  stars += "*";
  stars_num--;
}

alert(" Thank you for rating " + stars);
