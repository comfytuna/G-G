// Toggle the dropdown navigation panel when the hamburger icon is clicked
document.getElementById('hamburgerMenu').addEventListener('click', function() {
    document.getElementById('navPanel').classList.toggle('active');
  });
// Array of image URLs for the hero background
const images = [
    'pictures/IMG_6207.jpg',
    'pictures/IMG_8057.jpg',
    'pictures/IMG_8068.jpg',
    'pictures/IMG_8057.jpg',
    'pictures/IMG_5375.jpg',
  ];
  
  // Select the hero element by its class or ID (using id here)
  const heroSection = document.getElementById('hero');
  let currentIndex = 0;
  
  // Function to change the background image
  function changeBackground() {
    // Update the hero section's background-image
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
  
    // Cycle to the next image index, wrapping around if needed
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  // Immediately set the first image on load
  changeBackground();
  
  // Set an interval to change the background every 5 seconds (5000 milliseconds)
  setInterval(changeBackground, 10000);
    