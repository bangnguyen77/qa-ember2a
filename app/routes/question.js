import Ember from 'ember';

export default Ember.Route.extend({

  // fullQuestion: Ember.computed('question.author', 'question.date', 'question.notes', function() {
  //   return this.get('question.author') + ' made this question on ' + this.get('question.date.') + ' He/She is interested in ' + this.get('question.notes');
  // }),

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    editAtQuestionRoute(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },

    save(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
