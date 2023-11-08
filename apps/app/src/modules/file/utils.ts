import { TFile } from '_shared/file/types';

export const getImageUrl = (image?: TFile | null) => {
  if (!image) return '';
  return `${import.meta.env.VITE_API_URL}${image.pathname}`;
};
