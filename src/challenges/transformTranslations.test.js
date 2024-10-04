import { transformTranslations } from './transformTranslations';

describe('transformTranslations', () => {
  test('should fill in missing translations with fallback value', () => {
    expect(transformTranslations([
      {
        locale: 'es-MX',
        translation: 'El planeta tierra no es plano',
      },
      {
        locale: 'fr-FR',
        translation: 'La planète Terre n\'est pas plate',
      },
      {
        locale: 'pt-BR',
        translation: 'O planeta Terra não é plano',
      },
    ], 'The planet earth is not flat')).toEqual({
      'de-DE': 'The planet earth is not flat',
      'en-GB': 'The planet earth is not flat',
      'en-US': 'The planet earth is not flat',
      'es-US': 'The planet earth is not flat',
      'es-MX': 'El planeta tierra no es plano',
      'fr-CA': 'The planet earth is not flat',
      'fr-FR': "La planète Terre n'est pas plate",
      'pt-BR': 'O planeta Terra não é plano',
    });
  });
});
