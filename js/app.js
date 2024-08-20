document.querySelectorAll('.btn')
  .forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopImmediatePropagation();
      document.querySelectorAll('.menu').forEach(menu => menu.classList.add('hidden'));
      e.target.closest('td').querySelector('.menu').classList.toggle('hidden');
    })
  });

document.querySelector('body').addEventListener('click', function (e) {
  if (e.target.closest('.menu')) return;
  document.querySelectorAll('.menu')
    .forEach(menu => menu.classList.add('hidden'));
});
