export const EXPIRATION_KEY = 'expiration';
export const PSEUDO_KEY = 'pseudo';

export const getPseudo = () => {
  const expiration = localStorage.getItem(EXPIRATION_KEY);
  if (expiration && Date.now() > Number(expiration)) {
    removePseudo();
    return null;
  }
  return localStorage.getItem(PSEUDO_KEY);
};

export const setPseudo = (pseudo: string) => {
  const expiration = Date.now() + 60 * 60 * 1000; // 1 hour in milliseconds
  localStorage.setItem(PSEUDO_KEY, pseudo);
  localStorage.setItem(EXPIRATION_KEY, expiration.toString());
};

export const setAnonymity = () => {
  localStorage.setItem(EXPIRATION_KEY, Date.now().toString());
};

export const removePseudo = () => {
  localStorage.removeItem(PSEUDO_KEY);
  localStorage.removeItem(EXPIRATION_KEY);
};

export const isSongLiked = (liked?: string[], token?: string) => {
  if (!liked || !token) return false;

  return liked.includes(token);
};
