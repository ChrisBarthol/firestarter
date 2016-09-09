import { test } from 'qunit';
import moduleForAcceptance from 'firestarter/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | page object');

test('visiting /page-object', function(assert) {
  visit('/page-object');

  andThen(function() {
    assert.equal(currentURL(), '/page-object');
  });
});
