$(document).ready(function() {
  $("form#triangleForm").submit(function(event) {
    const number1 = parseInt($("input#number1").val());
    const number2 = parseInt($("input#number2").val());
    const number3 = parseInt($("input#number3").val());

    let totalSize = (number1 + number2 + number3)
    console.log(totalSize)
    
    if (totalSize != 180) {   // Not a triangle
      alert('This is not a triangle');
    }
//    } else if {   // Equiliateral is all three equal
//      number1 === number2 && number3;
//    } else if {   // Isosceles is two equal sides
//
//    } else {      // scalene has no equal sides
//
    
    event.preventDefault();
  });
});