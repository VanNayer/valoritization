import Ember from 'ember';

export default Ember.Component.extend({

  tasks: Ember.computed('tasks', function () {
    return this.get('tasks');
  })

});
