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
        '--background-color': '#2b2024',
        '--border-color': '#fbf9fa',
        '--text-color': '#fbf9fa',
        '--title-color': '#a80038'
      };
    } else {
      cssProperties = {
        '--background-color': '#fbf9fa',
        '--border-color': '#2b2024',
        '--text-color': '#2b2024',
        '--title-color': '#7A0C0D'
      };
    }

    // Save the CSS properties object to the Chrome Extension storage
    chrome.storage.sync.set({ cssProperties }, () => {
      console.log('CSS properties saved to storage:', cssProperties);
    });
    // Retrieve the CSS properties object from the Chrome Extension storage
    chrome.storage.sync.get(['cssProperties'], (result) => {
      const cssProperties = result.cssProperties;
      console.log('CSS properties retrieved from storage:', cssProperties);

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
        console.log('Dark mode state saved:', isDarkMode);
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
      const currentMode = document.documentElement.style.getPropertyValue('--background-color') === '#2b2024' ? 'dark' : 'light';
      const newMode = currentMode === 'light' ? 'dark' : 'light';
      applyDarkMode(newMode === 'dark');
      chrome.storage.sync.set({ mode: newMode }, function() {
        console.log('Mode saved to Chrome storage:', newMode);
      });
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