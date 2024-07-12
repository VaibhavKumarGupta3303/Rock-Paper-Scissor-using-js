const check = (a, b) => {
    if (
      (a == "ROCK" && b == "SCISSOR") ||
      (a == "PAPER" && b == "ROCK") ||
      (a == "SCISSOR" && b == "PAPER")
    ) {
      return "machine";
    } else if (
      (a == "ROCK" && b == "PAPER") ||
      (a == "PAPER" && b == "SCISSOR") ||
      (a == "SCISSOR" && b == "ROCK")
    ) {
      return "you";
    } else {
      return "tie";
    }
  };
  
  let Total_item = ["ROCK", "PAPER", "SCISSOR"];
  let computer = 0;
  let you = 0;
  let chance = 3;
  while (chance--) {
    let a = Math.floor(Math.random() * Total_item.length);
    console.log("this is choosesn by computer ", Total_item[a]);
    a = Total_item[a];
    let b = prompt("Enter from  R P S");
    b = b.toUpperCase();
    console.log("this is choosen by you ", b);
    let ans = check(a, b);
    if (ans === "machine") {
      computer += 1;
      console.log("winner is machine ");
      console.log(" computer  points : ", computer);
      console.log(" yours points : ", you);
    } else if (ans === "you") {
      you += 1;
      console.log("wiiner is you  ");
      console.log(" computer  points : ", computer);
      console.log("yours points : ", you);
    } else {
      console.log("tie");
    }
  }
  if (computer > you) {
    console.log("winner is computer");
  } else if (you > computer) {
    console.log("winner is you ");
  } else {
    console.log("its a tie");
  }
  