var elem = document.querySelector(".gallery");

imagesLoaded(elem, () => {
  var msnry = new Masonry(elem, {
    itemSelector: ".item-gallery",
    columnWidth: 230,
    gutter: 5,
  });
});
