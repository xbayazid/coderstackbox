export const getCroppedImg = (imageSrc, crop) => {
    const canvas = document.createElement('canvas');
    const scaleX = imageSrc.naturalWidth / imageSrc.width;
    const scaleY = imageSrc.naturalHeight / imageSrc.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      imageSrc,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    return canvas.toDataURL('image/jpeg');
  };
  