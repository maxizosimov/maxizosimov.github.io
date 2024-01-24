function changeImg() {
    var sthlmImg = document.querySelector(".picture-stockholm img"); // Selecting the image within .picture-stockholm

    if (sthlmImg.src === "https://imageio.forbes.com/specials-images/imageserve/653a523973e36a3245552513/Stockholm-old-town-city-skyline--cityscape-of-Sweden/960x0.jpg?format=jpg&width=960") {
        sthlmImg.src = "https://www.visitstockholm.com/media/images/Vinter_Gamla_stan.width-768.jpg";
    } else {
        sthlmImg.src = "https://imageio.forbes.com/specials-images/imageserve/653a523973e36a3245552513/Stockholm-old-town-city-skyline--cityscape-of-Sweden/960x0.jpg?format=jpg&width=960";
    }
}

function displayText() {
    var text = document.getElementById("textField");
    text.style.display = "block";
  }

  function showhide() {
    var div = document.getElementById("textField");
    div.classList.toggle('hidden'); 
  }