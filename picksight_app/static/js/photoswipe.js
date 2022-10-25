import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe.esm.js';

const options = {
  gallery: '#gallery-images',
  children: 'a',
  showHideAnimationType: 'zoom',
  showAnimationDuration: 500,
  hideAnimationDuration: 500,
  pswpModule: PhotoSwipe
};

const lightbox = new PhotoSwipeLightbox(options);

lightbox.on('uiRegister', function () {
  lightbox.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: '',
    onInit: (el, pswp) => {
      lightbox.pswp.on('change', () => {
        const currSlideElement = lightbox.pswp.currSlide.data.element;
        let captionHTML = '';
        let messageWrapper = '';
        el.innerHTML = '';
        if (currSlideElement) {
          const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
          if (hiddenCaption) {
            captionHTML = hiddenCaption.innerHTML;
          } else {
            var captionText = currSlideElement.querySelector('img').getAttribute('data-alt');
            messageWrapper = document.createElement('p');
            const words = captionText.split(':');
            messageWrapper.classList.add('flex', 'justify-between', 'items-center', 'p-3', 'rounded-lg', 'bg-[#0000009c]', 'ltr:space-x-4');
            var messageSender = document.createElement('span');
            messageSender.classList.add('font-bold', 'text-xl', 'text-white');
            var messageText = document.createElement('span');
            messageText.classList.add('text-base', 'text-white', 'rtl:mr-4', 'flex-1');

            messageSender.innerText = words[0];
            messageText.innerText = words[1];

            messageWrapper.appendChild(messageSender);
            messageWrapper.appendChild(messageText);
          }
        }
        el.appendChild(messageWrapper);
      });
    }
  });
  lightbox.pswp.ui.registerElement({
    name: 'download-button',
    order: 8,
    isButton: true,
    tagName: 'a',

    // SVG with outline
    html: {
      isCustomSVG: true,
      inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
      outlineID: 'pswp__icn-download'
    },

    onInit: (el, pswp) => {
      el.setAttribute('download', '');
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');

      pswp.on('change', () => {
        el.href = pswp.currSlide.data.src;
      });
    }
  });
  lightbox.pswp.ui.registerElement({
    name: 'delete-button',
    ariaLabel: 'Delete',
    order: 7,
    tagName: 'a',
    isButton: true,
    html: {
      isCustomSVG: true,
      inner: '<path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/>',
      outlineID: 'pswp__icn-delete'
    }, onInit: (el, pswp) => {
    }, onClick: (event, el, pswp) => {
      window.idItemToDelete = pswp._initialItemData.element.id
      console.log('delete');
      console.log(el);
      console.log(pswp._initialItemData.element.id);
      window.modal.toggle()
      pswp.close()
    }
  });
  lightbox.pswp.ui.registerElement({
    name: 'star-button',
    ariaLabel: 'Star',
    order: 7,
    tagName: 'a',

    isButton: true,
    html: {
      isCustomSVG: true,
      inner: '<path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/>',
      outlineID: 'pswp__icn-star'
    }, onInit: (el, pswp) => {
      pswp.on('change', () => {
        console.log(el.innerHTML)
        if (pswp._initialItemData.element.attributes.starred.value == 'true')
          el.innerHTML = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 32 32" width="32" height="32"><use class="pswp__icn-shadow" xlink:href="#pswp__icn-star"></use><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>';
        else
          el.innerHTML = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 32 32" width="32" height="32"><use class="pswp__icn-shadow" xlink:href="#pswp__icn-star"></use><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>';
      });
    }, onClick: (event, el, pswp) => {
      bookmark(pswp._initialItemData.element.id)
      if (pswp._initialItemData.element.attributes.starred.value == 'true'){
          pswp._initialItemData.element.attributes.starred.value = 'false'
          el.innerHTML = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 32 32" width="32" height="32"><use class="pswp__icn-shadow" xlink:href="#pswp__icn-star"></use><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>';

      }else{
          pswp._initialItemData.element.attributes.starred.value = 'true'
          el.innerHTML = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 32 32" width="32" height="32"><use class="pswp__icn-shadow" xlink:href="#pswp__icn-star"></use><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>';
      }
      // window.idItemToBookmark = pswp._initialItemData.element.id
      // console.log('delete');
      // console.log(el);
      // console.log(pswp._initialItemData.element.id);
      // window.modal.toggle()
      // pswp.close()
    }
  });
});


lightbox.init();
