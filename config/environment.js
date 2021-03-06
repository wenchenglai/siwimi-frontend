/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'siwimi-frontend',
        podModulePrefix: 'siwimi-frontend/pods',
        environment: environment,
        baseURL: '/',
        locationType: 'hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;

        ENV.apiHost = 'http://localhost:8080';
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.apiHost = 'https://siwimicloud.com:8443/siwimi-webapi-0.0.1';
        //ENV.apiHost = 'http://52.23.183.11/siwimi-webapi-0.0.1';
    }

    return ENV;
};
