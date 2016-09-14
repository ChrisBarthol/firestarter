import Ember from 'ember';

export default Ember.Controller.extend({
  
  actions: {
    submit() {
      this.userNameCheck(userName).then(checkPassword)
        .then(saveUser)
    }
  }
});
