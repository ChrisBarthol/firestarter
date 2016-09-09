import { test } from 'qunit';
import moduleForAcceptance from 'firestarter/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | init project');

test('visiting the ember starter page', function(assert) {
  visit('/hello-world');

  andThen(function() {
    assert.equal(currentURL(), '/hello-world');
    assert.equal(find('#title').text(), 'Hello World!', 'Project has correct starting title');
  });
});
