import NoImage from '../assets/no-image-placeholder.webp';

const getCroppedImgUrl = (url: string) => {
  if (!url) return NoImage;
  const taregt = 'media/';
  const index = url.indexOf(taregt) + taregt.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImgUrl;
