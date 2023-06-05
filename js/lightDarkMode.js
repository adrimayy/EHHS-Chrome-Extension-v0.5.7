document.addEventListener('DOMContentLoaded', function() {
  const lightDarkModeBtn = document.getElementById('lightDarkModeContainer');
  const darkModeClass = 'dark-mode';
  
  let imagesObserver;

  function applyDarkMode(isDarkMode) {
    const images = document.querySelectorAll('img[alt="black"]');
    const rootStyles = document.documentElement.style;

    images.forEach(function(image) {
      if (isDarkMode) {
        image.classList.add(darkModeClass);
      } else {
        image.classList.remove(darkModeClass);
      }
    });

  // Create an object to store the CSS properties
  let cssProperties = {};

  if (isDarkMode) {
    cssProperties = {
      '--background-color': '#2c2124',
      '--background-dark-color': '#1d1618',
      '--border-color': '#fbf9fa',
      '--border-eh-color': '#fbf9fa',
      '--text-color': '#fbf9fa',
      '--title-color': '#a80038',
      '--blue-time-color': '#183a93',
      '--grey-time-color': '#595959'
    };
  } else {
    cssProperties = {
      '--background-color': '#fbf9fa',
      '--background-dark-color': '#f2f2f2',
      '--border-color': '#2c2124',// #2b2024
      '--border-eh-color': 'gray',
      '--text-color': '#2c2124',// #141010
      '--title-color': '#7A0C0D',
      '--blue-time-color': '#214fc6',
      '--grey-time-color': '#595959'
    };
  }

  // Save the CSS properties object to the Chrome Extension storage
  chrome.storage.sync.set({ cssProperties }, () => { });
  // Retrieve the CSS properties object from the Chrome Extension storage
  chrome.storage.sync.get(['cssProperties'], (result) => {
    const cssProperties = result.cssProperties;

    // Set the CSS properties on the root element
    const rootStyles = document.documentElement.style;
    for (const [property, value] of Object.entries(cssProperties)) {
      rootStyles.setProperty(property, value);
    }
  });


    if (imagesObserver) {
      imagesObserver.disconnect();
    }

    imagesObserver = observeImages(isDarkMode);

  // Get the lightDarkModeImage element
  const lightDarkModeImage = document.getElementById('lightDarkModeImage');
  const titleImage = document.getElementById('titleImage');

  // Update the image source based on the dark mode state
  if (isDarkMode) {
      lightDarkModeImage.setAttribute('src', '/images/lightBulb.png');
      titleImage.setAttribute('src', '/images/lightSimpleBonac128.png');
      chrome.action.setIcon({
          path: {
            "16": "/images/lightSimpleBonac16.png",
            "32": "/images/lightSimpleBonac32.png",
            "64": "/images/lightSimpleBonac64.png",
            "128": "/images/lightSimpleBonac128.png"
          }
        });
  } else {
      lightDarkModeImage.setAttribute('src', '/images/moon.png');
      titleImage.setAttribute('src', '/images/darkSimpleBonac128.png');
      chrome.action.setIcon({
          path: {
              "16": "/images/darkSimpleBonac16.png",
              "32": "/images/darkSimpleBonac32.png",
              "64": "/images/darkSimpleBonac64.png",
              "128": "/images/darkSimpleBonac128.png"
          }
        });
  }
    chrome.storage.sync.set({ isDarkMode: isDarkMode }, function() {
    });
  }

  function observeImages(isDarkMode) {
    const imagesObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeName === 'IMG' && node.getAttribute('alt') === 'black') {
              if (isDarkMode) {
                node.classList.add(darkModeClass);
              } else {
                node.classList.remove(darkModeClass);
              }
            }
          });
        }
      });
    });

    const observerConfig = {
      childList: true,
      subtree: true,
    };

    imagesObserver.observe(document.body, observerConfig);
    return imagesObserver;
  }
  
  lightDarkModeBtn.addEventListener('click', function() {
    const currentMode = document.documentElement.style.getPropertyValue('--background-color') === '#2c2124' ? 'dark' : 'light';
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    applyDarkMode(newMode === 'dark');
    chrome.storage.sync.set({ mode: newMode }, function() {
    });
    // Dispatch the custom event
    document.dispatchEvent(new CustomEvent('lightDarkModeChanged', { detail: newMode }));
  });
  
  
  chrome.storage.sync.get('mode', function(data) {
    if (data.mode === 'dark') {
      applyDarkMode(true);
      imagesObserver = observeImages(true);
    } else {
      applyDarkMode(false);
      imagesObserver = observeImages(false);
    }
  });
});  
