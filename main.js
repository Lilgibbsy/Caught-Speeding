// Caught Speeding CYU Asgn
// 20 or more over speed limit = Big Ticket
// In between 0-19 over speed limit = Small Ticket
// 0 or lower over = No Ticket

document.getElementById("btn").addEventListener("click", giveTicket);

function giveTicket() {
  let speed = +document.getElementById("speed").value;
  let speedLimit = +document.getElementById("speedLimit").value;
  let difference = speedLimit - speed;
  if (difference >= 0) {
    document.getElementById("output").innerHTML = "No Ticket";
  } else if (difference < 0 && difference >= -19) {
    document.getElementById("output").innerHTML = "Small Ticket";
  } else {
    document.getElementById("output").innerHTML = "Big Ticket";
  }
}
