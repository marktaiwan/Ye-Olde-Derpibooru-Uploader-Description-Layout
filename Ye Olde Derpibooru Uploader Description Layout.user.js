// ==UserScript==
// @name        Ye Olde Derpibooru Uploader Description Layout
// @description Move uploader credit to its former location
// @version     1.0.3
// @author      Marker
// @license     MIT
// @namespace   https://github.com/marktaiwan/
// @homepageURL https://github.com/marktaiwan/Ye-Olde-Derpibooru-Uploader-Description-Layout
// @supportURL  https://github.com/marktaiwan/Ye-Olde-Derpibooru-Uploader-Description-Layout/issues
// @include     https://derpibooru.org*
// @include     derpibooru.org*
// @include     https://trixiebooru.org*
// @include     trixiebooru.org*
// @grant       none
// @noframes
// ==/UserScript==
(function(){
  const block = document.querySelector('#content > .block:first-child'),
        imagemeta = document.querySelector('[id^="image_meta_"]'),
        extrameta = document.querySelector('#extrameta'),
        imageDescription = document.querySelector('.image-description'),
        descriptionHeader = document.createElement('h3'),
        descriptionForm = document.querySelector('#description-form');
  // Exit if any of these elements doesn't exist
  if ([block, imagemeta, extrameta, imageDescription].some(ele => ele === null)) {
    return;
  }
  // Move uploader and image information
  extrameta.appendChild(document.querySelector('.image-size'));

  // Revert metadata bar
  imagemeta.classList.remove('image-metabar', 'flex--spaced-out');
  extrameta.classList.remove('image-metabar', 'flex--spaced-out', 'block__header', 'block__header--user-credit');
  extrameta.classList.add('block__header--sub', 'block__header--light');
  extrameta.style.padding = '0px 12px'; // 0px up and down, 12px on the sides

  // Revert description box styling
  imageDescription.style.background = 'whitesmoke';
  descriptionHeader.innerText = 'Uploader Description';
  descriptionHeader.style.margin = '5px';
  imageDescription.insertBefore(descriptionHeader, imageDescription.firstChild);

  // Revert description editor width
  if (descriptionForm !== null)
    descriptionForm.classList.add('layout--narrow');
})();
