import EmberRouter from '@ember/routing/router';
import config from 'ember-start/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('artists', { path: '/app-artists' }, function () {
    this.route('artist');
  });
});
