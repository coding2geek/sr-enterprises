export const LOCALES = ["en", "te", "hi"] as const;

export type Locale = (typeof LOCALES)[number];

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && LOCALES.includes(segments[0] as Locale)) {
    const path = segments.slice(1).join("/");
    return path ? `/${path}` : "/";
  }

  return pathname || "/";
}

export function getLocalizedPath(pathname: string, locale: Locale | string): string {
  const path = getPathWithoutLocale(pathname);
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function isActivePath(pathname: string, href: string): boolean {
  const path = getPathWithoutLocale(pathname);

  if (href === "/") {
    return path === "/";
  }

  return path === href || path.startsWith(`${href}/`);
}
