import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.reopen({
    notifyGoogleAnalytics: function () {
        return ga('send', 'pageview', {
            'page': this.get('url'),
            'title': this.get('url')
        });
    }.on('didTransition')
});

Router.map(function() {
    this.route('event', function() {
      this.route('list');
      this.route('detail', {path: ':id'});
      this.route('edit', {path: ':id/edit'});
      this.route('new');
    });
    this.route('about');
});

export default Router;
