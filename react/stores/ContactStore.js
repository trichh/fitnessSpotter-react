// Importing EventEmitter
import {EventEmitter} from 'events';
// Contact store sets and gets state to display contact titles and texts on the home page
class ContactStore extends EventEmitter {
  constructor() {
      super();
      // Setting state for contacts
      this.contacts = [
        {
          text: "If you ever run into any problems and need some help fixing them, feel free to call our customer service hotline where we have people ready to talk to you 24/7 at 1-800-349-9482.",
          title: "Customer Support"
        },
        {
          text: "If you have any additional questions that you need to have answered, please call us at 1-800-458-9843 where we have people ready to talk to you 24/7.",
          title: "Request Info"
        },
        {
          text: "@FitnessSpotter",
          title: "Social Media"
        }
      ];
  }
  // Getting all of the contacts
  getContacts() {
    return this.contacts;
  }
}
// Instantiating class
const contactStore = new ContactStore;
// Exporting store to use in the ContactList component
export default contactStore;
