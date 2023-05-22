const contactsServices = require("./contacts");

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactsServices.listContacts().then(console.table);
      break;
    case "get":
      contactsServices.getContactById(id).then(console.table);
      break;
    case "add":
      contactsServices.addContact(name, email, phone).then(console.table);
      break;

    case "remove":
      contactsServices.removeContact(id).then(console.table);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
