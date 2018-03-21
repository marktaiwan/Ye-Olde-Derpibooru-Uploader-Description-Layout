// ==UserScript==
// @name        Ye Olde Derpibooru Uploader Description Layout
// @description Move uploader credit to its former location
// @version     1.0.0
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
  const block = document.querySelector('#content > .block:first-child');
  if (block === null)
    return;
  // Move uploader and image information
  const extrameta = document.querySelector('#extrameta');
  block.appendChild(extrameta);
  extrameta.appendChild(document.querySelector('.image-size'));

  // Copy and modify classes from its sibling
  extrameta.className = block.firstChild.className;
  extrameta.classList.remove('block__header');
  extrameta.classList.add('block__header--sub', 'block__header--light');
  extrameta.firstChild.classList.add('spacing-left');

  // Revert description box styling
  const imageDescription = document.querySelector('.image-description');
  imageDescription.style.background = 'whitesmoke';
  imageDescription.classList.add('layout--narrow');
  const descriptionHeader = document.createElement('h3');
  descriptionHeader.innerText = 'Uploader Description';
  descriptionHeader.style.margin = '5px';
  imageDescription.insertBefore(descriptionHeader, imageDescription.firstChild);

  // Revert description editor width
  const descriptionForm = document.querySelector('#description-form');
  if (descriptionForm !== null)
    descriptionForm.classList.add('layout--narrow');
})();
