var lizPhone = "416-7755";

function validate(phoneNumber) {
  var number = phoneNumber.match(/^\d{3}-?\d{4}$/);
  return number;
}

var result = validate(lizPhone);
console.log(result);
