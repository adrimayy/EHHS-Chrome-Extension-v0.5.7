window.addEventListener('load', function() {
  function applyStyles(cssProperties) {
    const rootStyles = document.documentElement.style;
    for (const [property, value] of Object.entries(cssProperties)) {
      rootStyles.setProperty(property, value);
    }
  }

  chrome.storage.sync.get(['cssProperties'], (result) => {
    const cssProperties = result.cssProperties;
    applyStyles(cssProperties);
  });

  const darkModeClass = 'dark-mode';

  function applyAltImages(isDarkMode) {
    const images = document.querySelectorAll('img[alt="black"]');

      images.forEach(function(image) {
        if (isDarkMode) {
          image.classList.add(darkModeClass);
        } else {
          image.classList.remove(darkModeClass);
        }
      });
  }

  chrome.storage.sync.get('mode', function(data) {
    if (data.mode === 'dark') {
      applyAltImages(true);
    } else {
      applyAltImages(false);
    }
  });

  document.addEventListener('lightDarkModeChanged', function(event) {
    const isDarkMode = event.detail === 'dark';

    chrome.storage.sync.get(['cssProperties'], (result) => {
      const cssProperties = result.cssProperties;
      applyStyles(cssProperties);
    });
    applyAltImages(isDarkMode);
  });


});

function getBackgroundColor() {
    return document.documentElement.style.getPropertyValue('--background-color') || "#fbf9fa";
  }

  function getTextColor() {
    return document.documentElement.style.getPropertyValue('--text-color') || "black";
  }
  function getTitleColor() {
    return document.documentElement.style.getPropertyValue('--title-color') || "black";
  }
