// ==UserScript==
// @name        Ye Olde Derpibooru Uploader Description Layout
// @description Move uploader credit to its former location
// @version     1.0.4
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
  'use strict';
  const imagemeta = document.querySelector('[id^="image_meta_"]'),
        extrameta = document.querySelector('#extrameta'),
        imageDescription = document.querySelector('.image-description'),
        descriptionForm = document.querySelector('#description-form'),
        content = document.querySelector('#content'),
        tagBox = document.querySelector('.js-tagsauce');

  // Run if elements exists on page
  if ([imagemeta, extrameta].every(ele => ele !== null)) {
    // Move uploader and image information
    extrameta.appendChild(document.querySelector('.image-size'));
    // Revert metadata bar
    imagemeta.classList.remove('image-metabar', 'flex--spaced-out');
    extrameta.classList.remove('image-metabar', 'flex--spaced-out', 'block__header', 'block__header--user-credit');
    extrameta.classList.add('block__header--sub', 'block__header--light');
    extrameta.style.padding = '0px 12px'; // 0px up and down, 12px on the sides
  }

  if ([content, imageDescription, tagBox].every(ele => ele !== null)) {
    const descriptionHeader = document.createElement('h3'),
          newDiv = document.createElement('div');

    // Revert tag width
    newDiv.classList.add('layout--narrow');
    tagBox.querySelector('.js-imageform').classList.add('layout--narrow');
    content.insertBefore(newDiv, imageDescription.parentElement);
    content.insertBefore(tagBox, imageDescription.parentElement);
    newDiv.appendChild(imageDescription);
    if (descriptionForm !== null) {
      newDiv.appendChild(descriptionForm);
    }

    // Revert description box styling
    imageDescription.style.background = 'whitesmoke';
    descriptionHeader.innerText = 'Uploader Description';
    descriptionHeader.style.margin = '5px';
    imageDescription.insertBefore(descriptionHeader, imageDescription.firstChild);
  }
})();
