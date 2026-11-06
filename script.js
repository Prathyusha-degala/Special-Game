const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

// Move the 'No' button randomly when hovered
noBtn.addEventListener('mouseover', () => {
    // Calculate boundaries within viewport to keep button visible
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    // Generate random coordinates
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Break button out of standard layout container to fly freely
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Update the interface if they successfully click 'Yes'
yesBtn.addEventListener('click', () => {
    message.innerText = "Yay! See you soon! ❤️";
    noBtn.style.display = 'none';
    yesBtn.style.position = 'static';
    yesBtn.style.margin = '0 auto';
});
