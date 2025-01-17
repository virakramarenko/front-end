document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("logo").innerHTML = "JavaScript";
  document.getElementById("logo").style.color = "red";
  //This is JS comment
  //document.getElementById("logo").style.display= "none";
  document.getElementById("logo").classList.add("new_class");

  //document.getElementsByClassName("Squares").style.color= "red";

  //var example= "example value";

  const logo = document.getElementById("logo");

  function my_fun() {
    let new_logo = "this is new stuff";
  }

  new_logo = "different value";

  //String
  var example = "example value";
  var integer_example_string = "5";

  //Integer; Number
  var integer_example = 5;

  //Boolean
  var boolean_example = true;
  var boolean_example_2 = false;

  console.log(example + integer_example + boolean_example_2);

  let x = 6;
  let y = 25;

  if (x == 5) {
    console.log("x=5");
  } else if (x == 6) {
    console.log("x=6");
  } else {
    console.log("Nothing found");
  }


  //for (initilize; condition; incremnet (deceremt)) {
    //Action to execute
  //} //


for (let loop_init= 1; loop_init <=3; loop_init++) {
  console.log ("for loop", loop_init)
}
 


//Declared the function
function greet(name) {
  console.log ("Hello", name)
}

//called the function
greet("Artur");









});
