export const i18n = {
  defaultLocale: 'nb-NO',
  locales: ['en-US', 'nb-NO'],
} as const

export type Locale = typeof i18n['locales'][number]
