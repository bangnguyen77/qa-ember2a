import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  notes: DS.attr()
});
