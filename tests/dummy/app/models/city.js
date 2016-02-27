import DS from 'ember-data';

const { attr, hasMany, belongsTo }  = DS;

export default DS.Model.extend({
  name: attr('string'),
  country: belongsTo('country'),
  neighborhoods: hasMany('neighborhood')
});
