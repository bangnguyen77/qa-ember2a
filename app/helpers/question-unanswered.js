import Ember from 'ember';

export function questionUnanswered(params) {
  var question = params[0];

  if(question.get('answers').get('length') === 0) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span>');
  }
}

export default Ember.Helper.helper(questionUnanswered);
