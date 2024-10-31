let box = document.querySelector('.promises');
let colors = box.querySelectorAll('.promises__box');
let output = document.querySelector('.output');

// if (colors.classList.contains('promises__box')) {
//   colors.forEach((color) => {
//     color.style.backgroundColor = 'black'
//   })
// }
// colors.style.backgroundColor = 'black';

colors.forEach((color) => {
  color.addEventListener('click', () => {
    output.style.backgroundColor = color.style.backgroundColor;
  })
})
