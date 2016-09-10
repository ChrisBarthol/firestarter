import { test } from 'qunit';
import moduleForAcceptance from 'firestarter/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | page object');

test('visiting /page-object', function(assert) {
  visit('/login-page-object');

  andThen(function() {
    assert.equal(currentURL(), '/login-page-object');
  });
});

te
