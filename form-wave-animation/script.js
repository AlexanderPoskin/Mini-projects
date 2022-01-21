const labels = document.querySelectorAll('.form-control');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}">${letter}</span>`
    )
    .join('');
});
