import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        date: this.get('date'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('newQuestionSave', params);
      this.set('question', "");
      this.set('author', "");
      this.set('date', "");
      this.set('notes', "");
    }
  }
});
