const progressBar = document.querySelectorAll('.progress');

if (progressBar) {
  function setProgress(index, value) {
    progressBar[index].style.width = `${value}%`;
  }

  setProgress(0, 100);
  setProgress(1, 75);
  setProgress(2, 30);
}

function showHeader() {
  const headerList = document.querySelector('.header');

  headerList.classList.toggle('header-hidden');
}