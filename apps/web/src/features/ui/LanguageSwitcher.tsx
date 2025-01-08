import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@./ui';
import { useTranslation } from 'react-i18next';

import { GlobeIcon, ChevronDownIcon, XIcon, CheckIcon } from 'lucide-react';
import { useEffect } from 'react';

type Language = {
  variant: string;
  name: string;
};

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const languages: Language[] = [
    { variant: 'pl', name: 'Polski' },
    { variant: 'en', name: 'English' },
  ];
  const language =
    languages.find((language) => language.variant === i18n.language)?.name ??
    'English';

  const handleChangeLanguage = (variant: string) => {
    i18n.changeLanguage(variant);
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <GlobeIcon className="h-5 w-5" aria-label={t('language.name')} />
          <span>{language}</span>
          <ChevronDownIcon
            className="h-4 w-4"
            aria-label={t('language.more')}
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="grid gap-4 p-4">
          <div className="flex items-center justify-between">
            <DrawerTitle>{t('language.select')}</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <XIcon className="h-5 w-5" aria-label={t('language.close')} />
              </Button>
            </DrawerClose>
          </div>
          <div className="grid gap-2">
            {languages.map(({ name, variant }) => (
              <Button
                variant="ghost"
                className="justify-start gap-2"
                onClick={() => handleChangeLanguage(variant)}
              >
                <GlobeIcon
                  className="h-5 w-5"
                  aria-label={t('language.name')}
                />
                <span>{name}</span>
                {name === language ? (
                  <CheckIcon
                    className="h-5 w-5 ml-auto"
                    aria-label={t('language.current')}
                  />
                ) : null}
              </Button>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
