// Variables
const balloonScreen = document.getElementById('balloon-screen');
const mainPage = document.getElementById('main-page');
const popButton = document.getElementById('pop-balloon');
const balloon = document.getElementById('balloon');
const dynamicBalloon = document.getElementById('dynamic-balloon');

// Show the initial balloon screen
balloonScreen.classList.remove('hidden');

// Function to simulate popping the balloon
function popBalloon() {
  balloon.style.animation = 'pop 1s forwards';
  setTimeout(() => {
    balloonScreen.classList.add('hidden');
    mainPage.classList.remove('hidden');
    updateDynamicBalloon();
  }, 1000);
}

// Animation for popping the balloon
@keyframes pop {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

// Event listener for the pop button
popButton.addEventListener('click', popBalloon);

// Function to update the dynamic balloon based on Bitcoin market cap
function updateDynamicBalloon() {
  // Simulate fetching Bitcoin market cap data (replace with actual API call)
  const bitcoinMarketCap = fetchBitcoinMarketCap(); // Replace with real API call

  if (bitcoinMarketCap > 100000000000) {
    dynamicBalloon.style.animation = 'inflate 2s forwards';
  } else {
    dynamicBalloon.style.animation = 'deflate 2s forwards';
  }
}

// Placeholder function for fetching Bitcoin market cap
function fetchBitcoinMarketCap() {
  // Replace this with an actual API call (e.g., CoinGecko, CoinMarketCap)
  return Math.random() * 200000000000; // Random value for demonstration
}

// Animations for dynamic balloon
@keyframes inflate {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}

@keyframes deflate {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
