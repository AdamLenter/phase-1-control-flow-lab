function scuberGreetingForFeet(numberOfFeet){
  // Write your code here!
  if(numberOfFeet <= 400)
    {
    return "This one is on me!";
    }
  else if(numberOfFeet > 2000)
    {
    if(numberOfFeet > 2500)
      {
      return "No can do.";
      }
    else
      {
      return "I will gladly take your thirty bucks."
      }
    }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  let response;
  cityName === "NYC" ? response = "Ok, sounds good." : response = "No go.";
  return response;
}

function switchOnCharmFromTip(generosity){
  // Write your code here!
  switch(generosity) {
    case "generous":
      return "Thank you so much.";
      break;

    case "not as generous":
      return "Thank you.";
      break;

    default:
      return "Bye.";
    }
}