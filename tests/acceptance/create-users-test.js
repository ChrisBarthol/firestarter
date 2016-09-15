import { test } from 'qunit';
import moduleForAcceptance from 'firestarter/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create users');

test('visiting /users/new', function(assert) {
  visit('/users/new');

  andThen(function() {
    assert.equal(currentURL(), '/users/new');
  });
});
