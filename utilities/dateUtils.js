function getUserLanguage() {
  return window.navigator.userLanguage || window.navigator.language;
}

function convertDateToLocale(dt) {
  const currentUTCDate = new Date(dt * 1000);
  const userLanguagePref = getUserLanguage();
  return currentUTCDate.toLocaleDateString([userLanguagePref, 'en-US']);
}

function convertTimeToLocale(dt) {
  const currentUTCDate = new Date(dt * 1000);
  const userLanguagePref = getUserLanguage();
  return currentUTCDate.toLocaleTimeString([userLanguagePref, 'en-US']);
}

export { convertDateToLocale, convertTimeToLocale };
