function getValue() {
  // hides the Results alert
  document.getElementById("alert").classList.add("invisible");

  // get the user input
  let userString = document.getElementById("wordValue").value;

  // test if string is empty
  if (userString == "") {
    Swal.fire({
      icon: "error",
      backdrop: false,
      title: "Error...",
      text: "Must enter a string",
    });
  }

  // reverse the user input
  // let revString = reverseAStringJS(userString);
  let revString = reverseAString(userString);

  // display the reversed user input
  displayString(revString);
}

// reverse string
function reverseAString(userString) {
  let revString = [];

  // user input = 'word'
  for (let i = userString.length - 1; i >= 0; i--) {
    // loop from string length - 1 down to 0
    revString += userString[i]; // add element in userString to revString
  }
  return revString;
}

// reverse string JS style
function reverseAStringJS(userString) {
  let userArray = userString.split(""); // split string into an array
  let revArray = userArray.reverse(); // reverse array
  let revString = revArray.join(""); // return array to a string

  return revString;
}

// display string
function displayString(revString) {
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: <strong>${revString}</strong>`;
  document.getElementById("alert").classList.remove("invisible");
}
