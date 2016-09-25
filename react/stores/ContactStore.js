import {EventEmitter} from 'events';

class ContactStore extends EventEmitter {
  constructor() {
      super();
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

  getContacts() {
    return this.contacts;
  }
}

const contactStore = new ContactStore;

export default contactStore;
