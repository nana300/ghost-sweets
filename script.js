
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // 一度だけ表示したい場合
    }
  });
}, {
  threshold: 0.1 // 要素が10%見えたら発火
});

document.querySelectorAll('.fade-in-section').forEach(el => {
  observer.observe(el);

});