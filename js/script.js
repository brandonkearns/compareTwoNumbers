$(function() {
  function compare() {
    var leftValue = parseInt($('#a').val());
    var rightValue = parseInt($('#b').val());
    var operator;
    console.log(leftValue);

    if (leftValue < rightValue) {
      operator = '<';
    } else if (leftValue > rightValue) {
      operator = '>';
    } else if (leftValue === rightValue) {
      operator = '=';
    } else {
      operator = 'n/a';
      alert("don't be a troll, please enter a valid number in the box");
    }
    
   $('#comparison').html(operator); 
  }

  $('#submit').click(compare);

})

