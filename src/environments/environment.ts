// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiUrl = 'http://localhost:3000';

export const environment = {
  production: false,
  host: 'https://anprn-api.herokuapp.com',

  api: {
    auth: '/auth',
    caregivers: '/caregivers',
    careType: '/care-types',
    notifications: '/notifications',
    shifts: '/shifts',
    threads: '/threads',
    users: '/users',
    workMessages: '/work-messages',
    workOffers: '/work-offers',
  },
  // login: '/login',
  // fotgotPassword: '/forgot-password',
  // resetPassword: '/reset-password',
  // countires: '/static/countries.json',
  // fileupload: '/fileupload',
  // deleteAttachment: '/filedelete',
  // clientSignup: '/client-signup'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
