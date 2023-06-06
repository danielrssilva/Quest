export const fallbackLng = 'en-us';
export const languages = [fallbackLng, 'pt-br', 'en', 'pt'];
export const defaultNS = 'translation';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
