import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      this.setProperties({ success: false, errors: false});
      if (this.userName === 'Bob') {
        this.set('success', "Hello Bob!");
      } else {
        this.set('errors',"Invalid credentials");
      }
    }
  }
});
