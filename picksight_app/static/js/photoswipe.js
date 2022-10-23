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

lightbox.on('uiRegister', function() {
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
/*   lightbox.pswp.ui.registerElement({
    name: 'delete-button',
    ariaLabel: 'Toggle zoom',
    order: 7,
    isButton: true,
    html: '',
    onInit:(el, pswp) => {
      el.innerHTML = "<h2 class='font-bold'><img src='./images/delete.png' ></h2>";
      el.classList.add('text-white');
    },
  }); */
});


lightbox.init();
