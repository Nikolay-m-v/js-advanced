// Phone Book / Contacts

// Indexes -> People
// A -> [Angel, Alex ...]
// B -> [Boris, Blagoi ...]

class PhonebookEntry {
  firstName;
  lastName;
  phoneNumber;
  phoneType;

  constructor(firstName, lastName, phoneNumber, phoneType) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.phoneType = phoneType;
  }
}

class Phonebook {
  entries;

  constructor() {
    this.entries = {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: [],
      g: [],
      h: [],
      i: [],
      j: [],
      k: [],
      l: [],
      m: [],
      n: [],
      o: [],
      p: [],
      q: [],
      r: [],
      s: [],
      t: [],
      u: [],
      v: [],
      w: [],
      x: [],
      y: [],
      z: [],
    };
  }

  getFirstLetter(entry) {
    const firstLetter = entry.firstName[0].toLowerCase();

    return firstLetter;
  }

  isValid(entry) {
    const firstLetter = this.getFirstLetter(entry);
    const isValid = this.entries.hasOwnProperty(firstLetter);

    return isValid;
  }

  hasExistingEntry(entry) {
    const existingEntry = Object.values(this.entries)
      .flat()
      .find((e) => e.phoneNumber === entry.phoneNumber);

    if (!existingEntry) {
      return null;
    }

    return existingEntry;
  }

  add(entry) {
    const isValid = this.isValid(entry);

    if (!isValid) {
      console.warn(`The entry with name ${entry.firstName} is invalid`);

      return;
    }

    const existingEntry = this.hasExistingEntry(entry);

    if (existingEntry !== null) {
      console.warn(`The entry already exists. Use the editing functionality`);

      return;
    }

    const firstLetter = this.getFirstLetter(entry);

    this.entries[firstLetter].push(entry);
    this.entries[firstLetter].sort((a, b) => a.localeCompare(b));
  }

  find(entryToSearch) {
    const firstLetter = this.getFirstLetter(entryToSearch);

    const foundEntry = this.entries[firstLetter].find(
      (e) => e.phoneNumber === entryToSearch.phoneNumber
    );

    if (!foundEntry) {
      console.log(`The number is not in our database`);
      return null;
    }
    return foundEntry;
    // const foundEntry = Object.values(this.entries)
    //   .flat()
    //   .find((e) => e.phoneNumber === entryToSearch.phoneNumber);

    // if (!foundEntry) {
    //   console.log("The number is not in our database.");
    //   return null;
    // }
    // // console.log(
    // //   `Number ${entryToSearch.phoneNumber} belongs to ${foundEntry.firstName} ${foundEntry.lastName}`
    // // );
    // return foundEntry;
  }

  edit(entry) {
    const firstLetter = this.getFirstLetter(entry);
    const entryIndex = this.entries[firstLetter].findIndex(
      (e) => e.phoneNumber === entry.phoneNumber
    );

    if (entryIndex === -1) {
      console.warn(`Entry not found`);
      return;
    }

    this.entries[firstLetter].splice(entryIndex, 1, entry);
    this.entries[firstLetter].sort((a, b) =>
      a.phoneNumber.localeCompare(b.phoneNumber)
    );
    return entry;
  }

  remove(entryToRemove) {
    const firstLetter = this.getFirstLetter(entryToRemove);
    const entryIndex = this.entries[firstLetter].findIndex(
      (entry) => entry.phoneNumber === entryToRemove.phoneNumber
    );

    if (entryIndex === -1) {
      console.warn(`Entry not found`);
      return;
    }

    this.entries[firstLetter].splice(entryIndex, 1);
    this.entries[firstLetter].sort((a, b) =>
      a.phoneNumber.localeCompare(b.phoneNumber)
    );
  }

  showAll() {
    Object.values(this.entries)
      .flat()
      .forEach((entry) => {
        console.log(
          `${entry.firstName} ${entry.lastName} - ${entry.phoneNumber} / ${entry.phoneType} `
        );
      });
  }
}

const myPhonebook = new Phonebook();

myPhonebook.add(
  new PhonebookEntry("Ivailo", "Kenov", "0887241765", "personal")
);
myPhonebook.add(new PhonebookEntry("Alexandar", "Kenov", "0886143765", "work"));
myPhonebook.add(
  new PhonebookEntry("William", "Kenov", "0887291725", "personal")
);

// This is invalid entry
// The first character is invalid aka not alphabetical and not supported (it should fail)
myPhonebook.add(
  new PhonebookEntry("@1123123", "Kenov", "0887281735", "personal")
);

// The phone number is a duplicate of Alexandars phone (it should fail)
myPhonebook.add(new PhonebookEntry("Maria", "Kenov", "0886143765", "personal"));

myPhonebook.showAll();

console.log("--------------------------");

myPhonebook.edit(new PhonebookEntry("William", "Abboud", "0887291725", "work"));

myPhonebook.showAll();

console.log("--------------------------");

myPhonebook.remove(
  new PhonebookEntry("Ivailo", "Kenov", "0887241765", "personal")
);

myPhonebook.showAll();

console.log("--------------------------");

// myPhonebook.showAll();

myPhonebook.find(
  new PhonebookEntry("Ivailo", "Kenov", "0887241765", "personal")
);
