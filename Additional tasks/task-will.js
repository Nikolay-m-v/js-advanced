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

class Room {
  type; // single | suite | double | triple

  constructor(type) {
    this.type = type;
  }
}

class Hotel {
  name;
  rooms;

  constructor(name, rooms) {
    this.name = name;
    this.rooms = rooms;
  }
}

const vidinHotel = new Hotel("Vidin Hotel", [
  new Room("single"),
  new Room("single"),
  new Room("suite"),
  new Room("suite"),
]);

function gatherBookingInformation() {
  console.log(`Welcome to ${vidinHotel.name}!`);

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
