import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save() {
      var params = {
        question: this.get('question'),
        content: this.get('content'),
        author: this.get('author')
      };
      this.set('addNewAnswer', false);
      this.sendAction('save', params);
      this.set('content', "");
      this.set('author', "");
    }
  }
});
