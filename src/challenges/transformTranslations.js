const locales = [
  { value: 'de-DE', label: 'Deutsch (Deutschland)' },
  { value: 'en-GB', label: 'English (United Kingdom)' },
  { value: 'en-US', label: 'English (United States)' },
  { value: 'es-US', label: 'Español (Estados Unidos)' },
  { value: 'es-MX', label: 'Español (México)' },
  { value: 'fr-CA', label: 'Français (Canada)' },
  { value: 'fr-FR', label: 'Français (France)' },
  { value: 'pt-BR', label: 'Português (Brasil)' },
];

const localeValues = locales.map(({ value }) => value);


export function transformTranslations(translatedNames, fallback = '') {
  const names = translatedNames.reduce(
    (prev, next) => ({ ...prev, [next.locale]: next.translation }),
    {},
  );

  return localeValues.reduce((prev, locale) => ({
    ...prev, [locale]: names[locale] ?? fallback,
  }), {});
}
