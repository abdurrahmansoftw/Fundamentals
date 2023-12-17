const getCroppedImgUrl = (url: string) => {
  if (!url) return '';
  const taregt = 'media/';
  const index = url.indexOf(taregt) + taregt.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImgUrl;
