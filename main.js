var total = 0;
function getPoints(){
var quest1 = document.getElementByName("0");
var answer1 = quest1[4].checked;
var quest2 = document.getElementByName("1");
var answer2 = quest2[4].checked;
var quest3 = document.getElementByName("2");
var answer3 = quest3[0].checked;
var quest4 = document.getElementByName("3");
var answer4 = quest4[0].checked;
var quest5 = document.getElementByName("4");
var answer5 = quest5[0].checked;

if (answer1) {
  total++;
}
  if (answer2) {
    total++;
  }
    if (answer3) {
      total++;
    }
      if (answer4) {
        total++;
      }
        if (answer5) {
          total++;


alert(total);
}



  // function getTotal(){
  //   // var total  = quest1 + quest2 + quest3 + quest4 + quest5;
  //     alert(total);
  //   }




























// function getPoints(point1, point2, point3, point4, point5){
//   return point1 + point2 + point3 + point4 + point5;
// }
//
// document.getElementByName("point1", "point2", "point3","point4","point5")=
// getPoints(1, 1, 1, 1, 1);





























// document.getElementByClass("next").addEventListener("click", getPoints),
// document.getElementByClass("next").addEventListener("next", getPoints);
// function nextButton(){
//   document.getElementByClass("next").addEventListener("next", getPoints);
// }


// document.getElementByClass("next").addEventListener("next", getPoints);
// var x = getPoints (quest1, quest2, quest3, quest4, quest5, total);
// function getPoints(a, b, c, d, e) {
//     return a + b + c + d + e;

//   var quest1 = document.getElementByName('point1');
//   //Radio(document.quiz.point1);//document.getElementById
//   var quest2 = document.getElementByName('point2');
//   //  Radio(document.quiz.point2);
//   var quest3 = document.getElementByName('point3');
//   // Radio(document.quiz.point3);
//   var quest4 = document.getElementByName('point4');
//   // Radio(documnet.quiz.point4);
//   var quest5 = document.getElementByName('point5');
//   // Radio(document.quiz.point5);
//   // var total = quest1 + quest2 + quest3 + quest4 + quest5;
//   var total = point1, point2, point3, point4, point5;
// // document.quiz.total = total;


          // console.log(total);
        // }

//     alert(total);
//   }
// // document.getElementByClass("next").addEventListener("next", getPoints)
//
//
  // function getTotal(){
//
//   var x = parseInt(document.getElementById("point").value);
//   var total = point++;
//   // (document.getElementByName("point");
//
//   alert(total + x);
// }
//
//
//
//
//
//











// for loop thru questions 1-5//
// var point = 1;
// var radio =["quest1", "quest2", "quest3", "quest4", "quest5"];
//  var i;
//  for (i = 0; i < radio.length; i++) {
//   value += radio[i] + "<br>";
// }
// document.getElementsById("quest1").innerHTML = value;
// // function to get points from each question//
//
// var point = document.getElementsByName = 1;
// let point = 0;
// var point = document.getElementsByName("point");
//  var radio =["quest1", "quest2", "quest3", "quest4", "quest5"];
//  var i = 0<=5;
//  var len = radio.length;
//  var value = "";
// var point = document.getElementById("point");

// function getPoints(){
//   var quest1 = document.getElementById("quest1");
//   if (point = 1)
//     console.log(point)
//   } else {
//     (point = 1)
//     console.log(point)
//   }
//  // loop for radio//
//    for (; i <len; i++) {
//     value += radio[i] + "<br>";}
//     // let point = 1;
//     // function getTotal(){
//       // x = document.getElementById("radio")
//       // x.innerHTML = radio.map(Math.add);
//       // x = document.getElementsByName("point")
//       // x.innerHTML = point.map(Math.add);
//       // array.push(radio + point = value;
//     }
//
//
//     // console.log(point);
//  // }
//  console.log(point);
//
//
// // document.getElementById("point").innerHTML = value;
// // document.getElementById("radio").innerHTML = text;
//   // if{
//   //   radio + "point" = 0 <= 5
//   // }
// // {
// //     if
// //   }
//
// // function submitQuiz(){
// //   alert("button works")}
//
//
//
// // function to get total from "radio" Array(function getPoints)
//
//
// // function getTotal {document.getElementsByName=(point)
// //       }
// //       var point = 1;
// // if{ }
//
//
//
// // var numbQues = 5;
// // var numChoi = 5;
// // var answers = new Array(5);
// // answers[0] = "Hyper Text and Markup Language";
// // answers[1] = "The World Wide Web Consortium";
// // answers[2] = "/";
// // answers[3] = "True";
// // answers[4] = "True";
// //
// // function getTotal(form){
// //   var quiz = 0;
// //   var currElt;
// //   var selection;
// //   for (i=0; i<numQues; i ++){
// //     currElt = i*numChoi;
// //     for (j=0; j<numChoi; j++){
// //       selection = form.elements[currElt + j];
// //       if(selection.checked){
// //         if(selection.value == answers[i]){
// //           score++;
// //           break;
// //         }
// //       }
// //     }
// //   }alert(getTotal);
// // }
// // score = Math.round(score/numQues*100);
// // form.percentage.value = score+ "%";
// // var correctAnswers +=i + "." +answers[i-1] + "\r\n";
// // {
// //   form.solutions.value = correctAnswers;
// // }
// // function getTotal(form){
// //   var quiz1 = 0;
// //   var selection = document.quiz.quiz1;
// //   for(i=0; i<selection.length; i++)
// //     if(selelction[i].checked == true)
// //     alert(quiz1[i] + selection[i].value)
// // }
//
// // var onclick = (quiz1 + 1)
// // document.getElementbyName("quiz1").addEventListener("click", getPoints);
// // function getPoints(){
// // var quiz1 = (document.getElementsByName("quest1", "quest2", "quest3",
// // "quest4", "quest5").value);
// // var quiz2 = (document.getElementsByName("quest1", "quest2", "quest3",
// // "quest4", "quest5").value);+ "quiz1" + "quiz1" + "quiz1" + "quiz1");
// // var quiz3 = (document.getElementsByName("quest1", "quest2", "quest3",
// // "quest4", "quest5").value);
// // var quiz3 = parseInt(document.getElementbyName("quiz3").value);
// // var quiz4 = parseInt(document.getElementbyName("quiz4").value);
// // var quiz5 = parseInt(document.getElementbyName("quiz").value);
// // // var total = (onclick + 1)
// // console.log("quiz1");
// // }
// // if "quiz1 = 1"
//
// // function getTotal(){}
//
//
//
// // function getAverage(){
// //   var grade1 = parseInt(document.getElementById("grade1").value);//  for the avg input
// //   var grade2 = parseInt(document.getElementById("grade2").value);//for the avg input
// //   var grade3 = parseInt(document.getElementById("grade3").value);//for the avg input
// //   var total = (grade1 + grade2 + grade3)/3;
//
//
// // when submit button is hit
// // i want it to add all the name="quiz1"
