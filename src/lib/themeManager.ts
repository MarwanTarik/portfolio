import Cookies from 'js-cookie'

const THEME_COOKIE_NAME = 'theme-preference';

export function saveThemeToCookie(theme: 'light' | 'dark') {
  Cookies.set(THEME_COOKIE_NAME, theme, {
    expires: 365,
    sameSite: 'Lax',
    secure: true,
  });
}

export function getThemeFromCookie(): 'light' | 'dark' | null {
  const theme = Cookies.get(THEME_COOKIE_NAME);
  return theme === 'dark' ? 'dark' : theme === 'light' ? 'light' : null;
}

export function removeThemeCookie() {
  Cookies.remove(THEME_COOKIE_NAME);
}