// Importing EventEmitter
import {EventEmitter} from 'events';
// Features store sets and gets state to display feature titles and texts on the home page
class FeaturesStore extends EventEmitter {
  constructor() {
      super();
      // Setting state for features
      this.features = [
        {
          text: "When adding a new client, trainers are able to assign them custom workout plans, custom meal plans and give them assessments. Clients will have a profile page that lists their workout plan, meal plan, client assessment and graph of progression.",
          title: "Add New Clients"
        },
        {
          text: "Trainers will be able to remove a client they don't train anymore. This will remove the client from the trainers dashboard and will also delete all of the clients information. Trainers will simply be able to delete a client straight from their dashboard.",
          title: "Remove Clients"
        },
        {
          text: "Trainers can leave their clients or trainees an assessment. This is where trainers can tell their clients they’re doing a good job or they need to improve on something. Trainers can update the assessment directly from the clients profile page.",
          title: "Client Assessments"
        },
        {
          text: "This line graph shows how much the client has progressed. The graph will encourage and motivate clients to keep coming back because they'll see they're improving and not wasting their time or money.",
          title: "Progress Graph"
        },
        {
          text: "Allows trainers to give their clients customized workout plans that tell the client exactly what exercises they need to do. Workout plans will also make it easier for a new trainer to start working with a current client.",
          title: "Workout Plans"
        },
        {
          text: "Allows trainers to give their clients customized meal plans. Its important to be able to customize meal plans because every client is trying to end up with different results and their meal plans could affect this.",
          title: "Meal Plans"
        }
      ];
  }
  // Gets all of the features
  getFeatures() {
    return this.features;
  }
}
// Instantiating class
const featuresStore = new FeaturesStore;
// Exporting store to use in the FeatureList component
export default featuresStore;
