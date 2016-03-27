import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('event', function() {
      this.route('list');
      this.route('detail', {path: ':id'});
    });
    this.route('about');
});

export default Router;
