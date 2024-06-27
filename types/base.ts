export type TypeWithI18N<T = string> = {
  'en_US': T
  'nb_NO': T
  [key: string]: T
}
