// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyArU2PB8nf6mWCd-xIG_Kek2jwtfXYQFcM",
    authDomain: "firechat-e705d.firebaseapp.com",
    databaseURL: "https://firechat-e705d.firebaseio.com",
    projectId: "firechat-e705d",
    storageBucket: "firechat-e705d.appspot.com",
    production: true,
    messagingSenderId: "363280633947"
  }
};