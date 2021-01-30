function convertTimeToLocale(dt) {
  const currentUTCDate = new Date(dt * 1000);
  const userLanguagePref =
    window.navigator.userLanguage || window.navigator.language;
  return currentUTCDate.toLocaleDateString([userLanguagePref, 'en-US']);
}

export { convertTimeToLocale };
