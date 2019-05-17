// ==UserScript==
// @name        Ye Olde Derpibooru Uploader Description Layout
// @description Move uploader credit to its former location
// @version     1.0.14
// @author      Marker
// @license     MIT
// @namespace   https://github.com/marktaiwan/
// @homepageURL https://github.com/marktaiwan/Ye-Olde-Derpibooru-Uploader-Description-Layout
// @supportURL  https://github.com/marktaiwan/Ye-Olde-Derpibooru-Uploader-Description-Layout/issues
// @include     https://derpibooru.org/*
// @include     https://trixiebooru.org/*
// @include     https://www.derpibooru.org/*
// @include     https://www.trixiebooru.org/*
// @noframes
// ==/UserScript==
(function (){
  'use strict';

  function getBackgroundColor() {
    //   Adapt background color to theme, we create an element with the
    //   styles we want, then copy the computed style to the description box
    const ele = document.createElement('div');
    ele.classList.add('button');
    ele.style.padding = '0px';
    ele.style.border = '0px';
    ele.style.margin = '0px';
    document.body.appendChild(ele);
    const backgroundColor = window.getComputedStyle(ele).backgroundColor;
    ele.remove();
    return backgroundColor;
  }

  const extrameta = document.querySelector('#extrameta'),
        imageDescription = document.querySelector('.image-description'),
        imageDescriptionText = document.querySelector('.image-description__text'),
        descriptionForm = document.querySelector('#description-form'),
        content = document.querySelector('#content'),
        tagBox = document.querySelector('.js-tagsauce'),
        tagEdit = document.querySelector('.js-imageform'),
        adBox = document.querySelector('#imagespns');

  // override some site styling
  let styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.innerHTML = ` /* Generated by Ye Olde Derpibooru Uploader Description Layout */
#extrameta {
  padding-top: 4px;
}
.image-description {
  background: ${getBackgroundColor()};
}
.image-description h6 {
  font-size: 19px;
  font-weight: normal;
  margin: 5px;
}
`;
  document.head.appendChild(styleElement);

  // Revert metadata bar
  if (extrameta !== null) {
    extrameta.classList.add('block__header--light');
  }

  // Run if elements exists on page
  if ([content, imageDescription, tagBox, imageDescriptionText].every(ele => ele !== null)) {
    const newDiv = document.createElement('div');

    // Revert tag width
    newDiv.classList.add('layout--narrow');
    if (tagEdit !== null) {
      tagEdit.classList.add('layout--narrow');
    }
    content.insertBefore(newDiv, imageDescription.parentElement);
    content.insertBefore(tagBox, imageDescription.parentElement);
    if (adBox !== null) {
      newDiv.appendChild(adBox);
    }
    newDiv.appendChild(imageDescription);
    if (descriptionForm !== null) {
      newDiv.appendChild(descriptionForm);
    }
    if (imageDescriptionText.innerText === '' && imageDescription.querySelector('#edit-description') === null) {
      imageDescription.classList.toggle('hidden');
    }
  }
})();
