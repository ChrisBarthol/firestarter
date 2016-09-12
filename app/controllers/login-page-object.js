import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      this.setProperties({ showSuccess: false, showErrors: false});
      if (this.userName === 'Bob') {
        this.set('showSuccess', true);
        this.set('success', "Hello Bob!");
      } else {
        this.set('showErrors', true);
        this.set('myErrors',"Invalid credentials");
      }
    }
  }
});
