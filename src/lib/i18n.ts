export type Lang = "tr" | "en";

export const LANGS: Lang[] = ["tr", "en"];

export function isLang(value: string): value is Lang {
  return (LANGS as string[]).includes(value);
}
