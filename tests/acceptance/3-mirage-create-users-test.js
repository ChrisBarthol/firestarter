import { test } from 'qunit';
import moduleForAcceptance from 'firestarter/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | mirage create users');

test('visiting /mirage-create-users', function(assert) {
  visit('/mirage-create-users');

  andThen(function() {
    assert.equal(currentURL(), '/mirage-create-users');
  });
});
