$(document).ready(function() {
  $("form#triangleForm").submit(function(event) {
    const number1 = parseInt($("input#number1").val());
    const number2 = parseInt($("input#number2").val());
    const number3 = parseInt($("input#number3").val());

    let totalSize = (number1 + number2 + number3)
    console.log(totalSize)
    
    if (totalSize != 180) {            
      alert('This is not a triangle - try again!');
    }
    else if (number1 === number2 && number3) {                             
      alert('This is a equilateral triangle - all three sides are equal!');
    } 
    else if (number1 === number2 || number2 === number3 || number1 === number3) {
      alert('This is an isosceles triangle - there are two equal sides!');
    }

//    } else {      // scalene has no equal sides
//
    
    event.preventDefault();
  });
});