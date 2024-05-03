// Lab 7: Functions
// Author: Jack Grzegorzyk
// Date: May 2nd, 2024

//sortUserName
function sortUserName() {
  var userName = window.prompt ("QUICK, MAN. I'M ON THE RUN FROM THE POLICE AND I NEED A NEW IDENTITY. TELL ME YOURS SO I CAN BE 'HEAVILY INSPIRED' BY IT. DUDE QUICK PLEASE!");
  console.log ("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort =  nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log ("namesorted =", nameSorted);
  //note that i could have done the above lines in a single line
  // userName.toLower().split("").sort().join("")
  return nameSorted;
}
//output
document.writeln("SWEET. I OWE YOU ONE DUDE. SERIOUSLY. I'M SURE THOSE COPS WILL BE FOOLED BY MY NEW NAME OF: ",
    sortUserName(), "</br>");
