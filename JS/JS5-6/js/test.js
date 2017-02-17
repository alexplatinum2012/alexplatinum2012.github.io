"use strict"



var timer = {

  intervalID: 0,
  msCount: 0,
  secCount: 0,
  minCount: 0,
  hourCount: 0,
  ms: document.querySelector(".ms"),
  sec: document.querySelector(".sec"),
  min: document.querySelector(".min"),
  hour: document.querySelector(".hour"),

  rounderStart: function(){
    timer.msCount += 2;
    if(timer.msCount == 1000) {
      timer.msCount = 0;
      timer.secCount++;
      if(timer.secCount == 60) {
        timer.secCount = 0;
        timer.minCount++;
        if(timer.minCount == 60) {
          timer.minCount = 0;
          timer.hourCount++;
          if(timer.hourCount == 60) {
            timer.hourCount = 0;
            timer.minCount = 0;
            timer.secCount = 0;
            timer.msCount = 0;
            timer.ms.textContent= "00" + timer.msCount;
            timer.sec.textContent= "0" + timer.secCount;
            timer.min.textContent= "0" + timer.minCount;
            timer.hour.textContent= "0" + timer.hourCount;timer
          }
          if(timer.hourCount < 9) timer.hour.textContent = "0" + timer.hourCount;
          else  timer.hour.textContent = timer.hourCount;
        }
        if(timer.minCount < 9) timer.min.textContent = "0" + timer.minCount;
        else  timer.min.textContent = timer.minCount;
      }
      if(timer.secCount < 9) timer.sec.textContent = "0" + timer.secCount;
      else  timer.sec.textContent = timer.secCount;
    }
    if(timer.msCount > 9) {
      if (timer.msCount > 99)  timer.ms.textContent = timer.msCount;
      else  timer.ms.textContent = "0" + timer.msCount;
    } else  timer.mstextContent = "00" + timer.msCount;
  },

  msRounder: function(){
    timer.intervalID = setInterval(timer.rounderStart, 2);
  },

  rounderStop: function() {
    clearInterval(timer.intervalID);
    timer.hourCount = 0;
    timer.minCount = 0;
    timer.secCount = 0;
    timer.msCount = 0;
    timer.ms.textContent= "00" + timer.msCount;
    timer.sec.textContent= "0" + timer.secCount;
    timer.min.textContent= "0" + timer.minCount;
    timer.hour.textContent= "0" + timer.hourCount;
  },

  rounderPause: function() {
    clearInterval(timer.intervalID);
  }
}


function buttonChange() {
  var counter = 0;
  switch(this.textContent.toLowerCase()) {
    case "start" :
      this.classList.remove("btn-success");
      this.classList.add("btn-danger");
      this.textContent = "Stop";
      clear.addEventListener("click", buttonChange);
      clear.classList.add("btn-warning");
      clear.style.display = "";
      split.addEventListener("click", buttonChange);
      split.style.display = "inline-block";
      timer.msRounder();
      break;

    case "continue" :
      this.classList.remove("btn-info");
      this.classList.add("btn-danger");
      this.textContent = "Stop";
      timer.msRounder();
      break;

    case "stop" :
      this.classList.remove("btn-danger");
      this.classList.add("btn-info");
      this.textContent = "Continue";
      timer.rounderPause();
      //tab.innerHTML += "<tr><td>" + ++counter + "</td><td>Stop</td><td>" + timer.hour.textContent + ":" + timer.min.textContent + ":" + timer.sec.textContent + ":" + timer.ms.textContent + "</td></tr>";
      document.getElementsByClassName("p")[0].innerHTML += " " + ++counter + " " + " Stop " + timer.hour.textContent + " : " + timer.min.textContent + " : " + timer.sec.textContent + " : " + timer.ms.textContent + "<br>";

    case "split" :
      //document.getElementsByClassName("p")[0].innerHTML += "<p>" + ++counter + "</p>" + "<p>Split</p><p>" + timer.hour.textContent + "</p>:<p>" + timer.min.textContent + "</p>:<p>" + timer.sec.textContent + "<p>:<p>" + timer.ms.textContent + "</p>\n";
      document.getElementsByClassName("p")[0].innerHTML += " " + ++counter + " " + " Split " + timer.hour.textContent + " : " + timer.min.textContent + " : " + timer.sec.textContent + " : " + timer.ms.textContent + "<br>";

    case "clear" :
      if(start.classList.contains("btn-danger") || start.classList.contains("btn-info")) {
        start.classList.remove("btn-danger") || start.classList.remove("btn-info");
        start.classList.add("btn-success");
        start.textContent = "Start";
        this.style.display = "none";
        this.removeEventListener("click", buttonChange);
        clear.style.display = "none";
        split.removeEventListener("click", buttonChange);
        timer.rounderStop();
      }
      break;
    }
  }

  start.addEventListener("click", buttonChange);
      //document.getElementsByClassName("p")[0].innerHTML += "<p>" + ++counter + "</p>" + "<p>Stop</p><p>" + timer.hour.textContent + "</p>:<p>" + timer.min.textContent + "</p>:<p>" + timer.sec.textContent + "<p>:<p>" + timer.ms.textContent + "</p>\n";
