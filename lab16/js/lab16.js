// Lab 16: JSON and APIs
// Author: Jack Grzegorzyk
// Date: June 7th, 2024
// Description: Working with your partner, experiment with processing JSON from an API.

const comicData = {
    "title": "Fluid Speech",
    "alt": "Thank you to linguist Gretchen McCulloch for teaching me about phonetic assimilation, and for teaching me that if you stand around in public reading texts from a linguist and murmuring example phrases to yourself, people will eventually ask if you're okay.",
    "img": "https://imgs.xkcd.com/comics/fluid_speech.png"
};

function ajaxSuccess(data) {
    console.log("Results", data);
    $("#output").empty();

    const titleElement = $("<h1>").text(comicData.title);
    $("#output").append(titleElement);

    const imageElement = $("<img>").attr({
        "src": comicData.img,
        "alt": comicData.alt,
        "title": comicData.alt
    });

    $("#output").append(imageElement);
    const captionElement = $("<p>").text(comicData.alt);
    $("#output").append(captionElement);
}

function ajaxError(request, error) {
    console.log("Oopsie!", request, error);
}

ajaxSuccess(comicData);
