export const convertIntToVND = (number) => {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
      return VND.format(number);
}

export const shortenText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + '...';
  }
}

export const generateColors = (count) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const color = `rgba(${i * 360 / count}, ${(i + 1 * 100)}, ${i + 132}, 0.2)`;
    colors.push(color);
  }
  return colors;
};