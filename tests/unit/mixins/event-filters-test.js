import Ember from 'ember';
import EventFiltersMixin from 'siwimi-frontend/mixins/event-filters';
import { module, test } from 'qunit';

module('Unit | Mixin | event filters');

// Replace this with your real tests.
test('it works', function(assert) {
  let EventFiltersObject = Ember.Object.extend(EventFiltersMixin);
  let subject = EventFiltersObject.create();
  assert.ok(subject);
});
