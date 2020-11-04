const colors = ['DarkSeaGreen', 'Plum', 'FireBrick', 'CornFlowerBlue', 'Teal', 'DarkSlateGray', 'DarkKhaki', 'PaleVioletRed', 'Tomato', 'RosyBrown'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
const logo = document.querySelector('.logo');

btn.addEventListener('click', ()=> {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  logo.style.color = colors[randomNumber];
});

getRandomNumber = ()=> {
  return Math.floor(Math.random() * colors.length); 
}