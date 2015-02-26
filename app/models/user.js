import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),

  fullName: function () {
    return [this.get('last_name'), this.get('first_name')].join(", ");
  }.property('first_name,last_name')

});
