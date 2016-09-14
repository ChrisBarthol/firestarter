import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  userName(i) {
    return `User ${i}`;
  },
  email(i) {
    return `user${i}@test.com`;
  }
});
