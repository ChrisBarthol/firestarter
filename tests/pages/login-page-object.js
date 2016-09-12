import {
  create,
  clickable,
  fillable,
  text,
  visitable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/login-page-object'),

  username: fillable('#username'),
  password: fillable('#password'),
  submit: clickable('#submit'),
  error: text('#errors')
});
