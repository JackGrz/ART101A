// Lab 10: JavaScript for the Web
// Author: Jack Grzegorzyk
// Date: May 16th, 2024


// helper function to generate fake dialogue
function generateRandomText() {
    const text = "I can see a new horizon Underneath the blazin' sky I'll be where the eagle's flyin' higher and higher gonna be a man in motion all I need is a pair of wheels take me where my future's lyin St. Elmo's Fire I can climb the highest mountain cross the wildest sea I can feel St. Elmo's fire burnin' in me burnin' in me";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.slice(randStart, randStart + randLen);
  }

  // click listener for button
$("#make-convo").click(function(){
    const newText = generateRandomText();
    console.log("Button is clicked");
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
