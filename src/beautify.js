module.exports = function beautify(err, images) {
  if (err) {
    return (`Sorry, there was an unexpected Error: ${err}`);
  }
  const beautifiedImages = {};
  Object.keys(images).forEach(key => {
    beautifiedImages[key] = {};
    let currentResultImg = beautifiedImages[key];
    let currentSourceImg = images[key];
    currentResultImg.link = currentSourceImg.link
    currentResultImg.alt_text = currentSourceImg.title;
    currentResultImg.context = currentSourceImg.image.contextLink;
  });
  return beautifiedImages;
};
