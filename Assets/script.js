// establishing variables

var timeStamp = $("#time-display");
var savedText = $(".btn");
var row = dayjs().hour();

// function to save user input to local storage

function saved() {
  
  var userInput = $(this).siblings("textarea");
  var timeBlock = $(this).parent().attr("id");
  localStorage.setItem(timeBlock, userInput.val());
}

// for loop for past present or future

for (let i = 0; i < 24; i++) {
  var hour = $("#hour-" + i);

  if (i < row) {
    hour.addClass("past");
  }

  if (i == row) {
    hour.addClass("present");
  }

  if (i > row) {
    hour.addClass("future");
  }

  var userInput = localStorage.getItem("hour-" + i);
  hour.children("textarea").val(userInput);
}

// Add a function to display time using dayjs

function displayTime() {
  var timeOfDay = dayjs().format("MM/DD/YYYY [at] HH:mm:ss A");
  timeStamp.text(timeOfDay);
}

// call functions

displayTime();
setInterval(displayTime, 1000);
savedText.on("click", saved);