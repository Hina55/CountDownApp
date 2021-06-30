

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

//Jan 5, 2022 15:37:25

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  var monthname = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  var m = monthname[new Date().getMonth()];
  var dt =  new Date().getDate();
  var yr = new Date().getFullYear();
  var hr = new Date().getHours();
  var mns = new Date().getMinutes();
  var secs = new Date().getSeconds();
  //document.getElementById("todayDate").innerHTML = m + " " + dt + ", " + yr + "  " + hr +":"+ mns +":" + secs;
   document.getElementById("todayDate").innerHTML = "Jan " + 5 + ", " + 2022 + "  " + 15 +":"+ 37 +":" + 25;


    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
    }
    

  // Output the result in an element with ids
  document.getElementById("day").innerHTML = addZero(days);
  document.getElementById("hour").innerHTML = addZero(hours);
  document.getElementById("minute").innerHTML = addZero(minutes);
  document.getElementById("sec").innerHTML = addZero(seconds);
    
  // If the count down is over
  if (distance < 0) {
    clearInterval(x);
   document.getElementById("day").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("minute").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  }
}, 1000);