// Hotel Management System
// The user will be prompted with questions. The questions are guiding the user to create a hotel reservation. In the end the program makes a reservation.

// The Hotel
// ----------
// [[SU] [SI]]
// [[SI] [SU]]
//    ====
//    |  |
//    |  |
//    |  |
//    ----
const prompt = require("prompt-sync")({ sigint: true });

function gatherBookingInformation() {
  const room = prompt("Would you like to stay in single bedroom or a suite? ");
  const people = prompt("How many of you would like to stay? ");

  console.log();
  console.log(`You want to stay in ${room} type of room.`);
  console.log(`You want to make a reservation for ${people} people.`);
  console.log();

  const confirm = prompt("Do you wish to proceed further? Y/N ");

  if (confirm.toLowerCase() === "n" || confirm.toLowerCase() === "no") {
    console.log("Thank you for using our services!");
    process.exit(0);
  }

  return {
    room,
    people,
  };
}

const bookingRequirements = gatherBookingInformation();

function processBookingRequirements(requirements) {
  console.log(JSON.stringify(requirements, null, 2));
}

processBookingRequirements(bookingRequirements);
