import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },

    edit(model) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        date: this.get('date'),
        notes: this.get('notes'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('editQuestion', model, params);
      this.set('question', "");
      this.set('author', "");
      this.set('date', "");
      this.set('notes', "");
    }
  }
});
