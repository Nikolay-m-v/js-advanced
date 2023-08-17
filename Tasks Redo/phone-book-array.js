"use strict";

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
    this.entries = [];
  }

  add(entry) {
    this.entries.push(entry);
    this.entries.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }

  find(entryToSearch) {
    const foundEntry = this.entries.find(
      (e) => e.phoneNumber === entryToSearch.phoneNumber
    );

    if (!foundEntry) {
      return null;
    }

    return foundEntry;
  }

  findByIndex(entry) {
    return this.entries.findIndex((e) => e.phoneNumber === entry.phoneNumber);
  }

  edit(entry) {
    const existingEntry = this.find(entry);

    if (entry !== null) {
      const index = this.findByIndex(entry);

      this.entries[index] = entry;
    }
  }

  remove(entry) {
    const existingEntry = this.find(entry);

    if (existingEntry !== null) {
      const index = this.findByIndex(entry);

      this.entries.splice(index, 1);
    }
  }

  showAll() {
    this.entries.forEach((entry) => {
      console.log(
        `${entry.firstName} ${entry.lastName} - ${entry.phoneNumber} / ${entry.phoneType}`
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

myPhonebook.showAll();

console.log("--------------------------");

myPhonebook.edit(new PhonebookEntry("William", "Abboud", "0887291725", "work"));

myPhonebook.showAll();

console.log("--------------------------");

myPhonebook.remove(
  new PhonebookEntry("Ivailo", "Kenov", "0887241765", "personal")
);

myPhonebook.showAll();
