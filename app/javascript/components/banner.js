import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Rails 6 one-trick pony"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
