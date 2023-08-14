// Hotel Management System
// The user will be prompted with questions. The questions are guiding the user to create a hotel reservation. In the end the program makes a reservation.

// The Hotel
// ----------
// [[SU] [SI] [SI]]
// [[SI] [SU]]
//    ====
//    |  |
//    |  |
//    |  |
//    ----
const prompt = require("prompt-sync")({ sigint: true });

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

class Room {
  type;
  isBooked;
  isProcessingBooking;
  pricePerNight;
  roomNumber;
  peopleCapacity;

  constructor(roomNumber, type, pricePerNight, peopleCapacity, booked = false) {
    this.roomNumber = roomNumber;
    this.type = type;
    this.pricePerNight = pricePerNight;
    this.peopleCapacity = peopleCapacity;
    this.isBooked = booked;

    this.isProcessingBooking = false;
  }
}

class Hotel {
  name;
  rooms;

  constructor(name, rooms) {
    this.name = name;
    this.rooms = rooms;
  }

  bookRoom(numberOfPeople, roomType) {
    const availableRooms = this.rooms.filter(
      (r) =>
        r.isBooked === false &&
        r.isProcessingBooking === false &&
        r.type === roomType
    );

    if (availableRooms.length === 0) {
      return false;
    }

    const roomsThatCanFitPeople = availableRooms.filter(
      (r) => r.peopleCapacity >= numberOfPeople
    );

    if (roomsThatCanFitPeople.length === 0) {
      return false;
    }

    const roomToBook = getRandomItem(roomsThatCanFitPeople);

    roomToBook.isProcessingBooking = true;

    return true;
  }
}

const vidinHotel = new Hotel("Vidin Hotel", [
  new Room("1", "single", 120, 2),
  new Room("2", "single", 200, 3),
  new Room("3", "single", 100, 2),
  new Room("4", "suite", 300, 4),
  new Room("5", "suite", 400, 4),
]);

function gatherBookingInformation() {
  const singleRoomsInHotel = vidinHotel.rooms.filter(
    (r) => r.type === "single"
  ).length;
  const suiteRoomsInHotel = vidinHotel.rooms.filter(
    (r) => r.type === "suite"
  ).length;

  console.log(`Welcome to ${vidinHotel.name}!`);
  console.log(
    `We have ${singleRoomsInHotel} single rooms and ${suiteRoomsInHotel} suites available`
  );

  const roomType = prompt(
    "Would you like to stay in single bedroom or a suite? "
  );
  const numberOfPeople = prompt("How many of you would like to stay? ");

  console.log();
  console.log(`You want to stay in ${roomType} type of room.`);
  console.log(`You want to make a reservation for ${numberOfPeople} people.`);
  console.log();

  const confirm = prompt("Do you wish to proceed further? Y/N ");

  if (confirm.toLowerCase() === "n" || confirm.toLowerCase() === "no") {
    console.log("Thank you for using our services!");
    process.exit(0);
  }

  return {
    roomType,
    people,
  };
}

const bookingRequirements = gatherBookingInformation();

vidinHotel.bookRoom(bookingRequirements.people, bookingRequirements.room);
