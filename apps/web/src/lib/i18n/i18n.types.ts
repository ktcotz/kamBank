import { resources } from './i18n';

export type FlattenTranslations<T, Prefix extends string = ''> = {
  [K in Extract<keyof T, string>]: `${Prefix}${K}`;
};

type RootTranslations<T extends keyof (typeof resources)['pl']['translation']> =
  (typeof resources)['pl']['translation'][T];

type RootTranslationsKey<
  T extends string,
  K extends keyof (typeof resources)['pl']['translation']
> = FlattenTranslations<RootTranslations<K>, T>;

type RootTranslationsMessages<T> = T[keyof T];

// Utils helper types.

export type NavigationI18NHandler = RootTranslationsMessages<
  RootTranslationsKey<'navigation.', 'navigation'>
>;
