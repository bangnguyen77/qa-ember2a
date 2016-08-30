import Ember from 'ember';

export default Ember.Component.extend({
  fullQuestion: Ember.computed('question.author', 'question.date', 'question.notes', function() {
    return this.get('question.author') + ' made this question on ' + this.get('question.date') + '. He/She is interested in ' + this.get('question.notes');
  }),

  favoriteQuestions: Ember.inject.service(),
  actions: {
    addToFav(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
