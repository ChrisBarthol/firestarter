import { test } from 'qunit';
import moduleForAcceptance from 'firestarter/tests/helpers/module-for-acceptance';
import page from '../pages/login-page-object';

moduleForAcceptance('Acceptance | page object');

test('visiting /page-object', function(assert) {
  visit('/login-page-object');

  andThen(function() {
    assert.equal(currentURL(), '/login-page-object');
  });
});

test('failed login without page object', function(assert) {
  visit('/login-page-object');
  fillIn('#username', 'Not Bob');
  fillIn('#password', 'password');
  click('#submit');

  andThen(function() {
    assert.equal($.trim(find('#errors').text()), 'Invalid credentials', "Can not log in unless you are Bob");
  });
});

test('failed login with page object', function(assert) {
  page.visit()
      .username('Not Bob')
      .password('Password')
      .submit();

  andThen(function(){
    assert.equal(page.error, 'Invalid credentials', "Can not log in unless you are Bob");
  });
});