// ==UserScript==
// @name        Ye Olde Derpibooru Uploader Description Layout
// @description Move uploader credit to its former location
// @version     1.0.7
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
  const extrameta = document.querySelector('#extrameta'),
        imageDescription = document.querySelector('.image-description'),
        descriptionForm = document.querySelector('#description-form'),
        content = document.querySelector('#content'),
        tagBox = document.querySelector('.js-tagsauce'),
        tagEdit = tagBox.querySelector('.js-imageform'),
        adBox = document.querySelector('#imagespns');

  // Revert metadata bar
  if (extrameta !== null) {
    extrameta.classList.add('block__header--light');
    extrameta.style.paddingTop = '4px';
  }

  // Run if elements exists on page
  if ([content, imageDescription, tagBox].every(ele => ele !== null)) {
    const descriptionHeader = document.createElement('h3'),
          newDiv = document.createElement('div');

    // Revert tag width
    newDiv.classList.add('layout--narrow');
    if (tagEdit !== null) {
      tagEdit.classList.add('layout--narrow');
    }
    content.insertBefore(newDiv, imageDescription.parentElement);
    content.insertBefore(tagBox, imageDescription.parentElement);
    newDiv.appendChild(adBox);
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
