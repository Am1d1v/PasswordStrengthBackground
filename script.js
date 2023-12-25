

const password = document.querySelector('#password');
const image = document.querySelector('#background');

// Initial blur value
let i = 21;
image.style.filter = `blur(${i}px)`;

// With every input symbol blur effect decreases
password.addEventListener('input', () => {
   image.style.filter = `blur(${i}px)`;
   i -= 3;
})