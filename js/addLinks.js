function getAddedLinks() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['addedLinks'], (result) => {
      if (result.addedLinks) {
        resolve(JSON.parse(result.addedLinks));
      } else {
        const defaultLinks = [
          ["Drive", "https://drive.google.com/drive/u/0/", "/images/drive.png","color"],
          ["Gmail", "https://mail.google.com/mail/u/0/#inbox", "/images/gmail.png","color"],
          ["Classroom", "https://classroom.google.com/", "/images/classroom.png","color"],

          ["Schedule", "/html/clockPage.html", "/images/clock.png","black"],
          ["SchoolTool", "https://easthamptonst.esboces.org/schooltoolweb/", "/images/schoolTool.png","color"],
          ["Naviance", "https://student.naviance.com/main", "/images/naviance.png","black"],    

          ["EHHS", "https://www.easthamptonschools.org/highschool", "/images/bonac.png","color"],
          ["Guidance","https://www.easthamptonschools.org/guidance", "/images/guidance.png","black"],
          ["Virtual Bulletin", "https://docs.google.com/presentation/d/1T-idGOxDysnA_qrA0ilTapPdZNXiYt-09Ew1kL1AUbk/preview?slide=id.gb047d9a6b6_0_28", "/images/announcement.png","black"],
          
          ["EH Tech Support", "https://ehschools.mojohelpdesk.com/", "/images/support.png","black"],
          ["AP Classroom", "https://apstudents.collegeboard.org/", "/images/collegeBoard.png","black"],
          ["Delta Math", "https://www.deltamath.com/app/student", "/images/deltaMath.png","black"],
        ];
        resolve(defaultLinks);
      }
    });
  });
}

async function setRowHolder() {
  return new Promise((resolve) => {
    chrome.storage.sync.get('sliderValue', (data) => {
      const rowHolder = data.sliderValue ? parseInt(data.sliderValue) : 3;
      resolve(rowHolder);
    });
  });
}


async function setTitleText(rowHolder) {
  var root = document.documentElement;
  if (rowHolder === 1) {
    root.style.setProperty('--link-container-width', '106px');
    root.style.setProperty('--title-row-container-width', '50px');
    root.style.setProperty('--feedback-margin-left', '0px');
    root.style.setProperty('--body-sides-margin', '0px');
    root.style.setProperty('--ehhs-logo-margin-left', '8px');
    document.getElementById("titleText").innerHTML = "";
    document.getElementById("feedbackText").innerHTML = "";
  } else if (rowHolder === 2) {
    root.style.setProperty('--link-container-width', '180px');
    root.style.setProperty('--title-row-container-width', '140px');
    root.style.setProperty('--feedback-margin-left', '5px');
    root.style.setProperty('--body-sides-margin', '8px');
    root.style.setProperty('--ehhs-logo-margin-left', '0px');
    document.getElementById("titleText").innerHTML = "HS";
    document.getElementById("feedbackText").innerHTML = "FB?";
  } else if (rowHolder === 3) {
    root.style.setProperty('--link-container-width', '270px');
    root.style.setProperty('--title-row-container-width', '230px');
    root.style.setProperty('--feedback-margin-left', '5px');
    root.style.setProperty('--body-sides-margin', '8px');
    root.style.setProperty('--ehhs-logo-margin-left', '0px');
    document.getElementById("titleText").innerHTML = "HIGH SCHOOL";
    document.getElementById("feedbackText").innerHTML = "Have feedback?";
  } else if (rowHolder === 4) {
    root.style.setProperty('--link-container-width', '360px');
    root.style.setProperty('--title-row-container-width', '320px');
    root.style.setProperty('--feedback-margin-left', '5px');
    root.style.setProperty('--body-sides-margin', '8px');
    root.style.setProperty('--ehhs-logo-margin-left', '0px');
    document.getElementById("titleText").innerHTML = "HIGH SCHOOL";
    document.getElementById("feedbackText").innerHTML = "Have feedback? Click here!";
  }else if(rowHolder === 5){
    root.style.setProperty('--link-container-width', '450px');
    root.style.setProperty('--title-row-container-width', '410px');
    root.style.setProperty('--feedback-margin-left', '5px');
    root.style.setProperty('--body-sides-margin', '8px');
    root.style.setProperty('--ehhs-logo-margin-left', '0px');
    document.getElementById("titleText").innerHTML = "HIGH SCHOOL";
    document.getElementById("feedbackText").innerHTML = "Have feedback? Click here!";
  }
}
async function addLinks() {
  const addedLinks = await getAddedLinks();
  const linkRow = document.querySelector('.placeHolder');
  let linkCount = 0;
  let row = document.createElement('div');
  row.classList.add('linkRow');

  const rowHolder = await setRowHolder();

  chrome.storage.sync.get('isDarkMode', function(data) {
    const isDarkMode = data.isDarkMode;

    addedLinks.forEach((link) => {
    const linkContainer = document.createElement('a');
    linkContainer.classList.add('nameText');
    linkContainer.href = link[1]; // Set href to the correct website URL
    if (link[0] !== 'Schedule') {
      linkContainer.target = '_blank';
    }

    const linkContainerBox = document.createElement('div');
    linkContainerBox.classList.add('linkContainerBox');

    const iconImage = document.createElement('img');
    iconImage.classList.add('iconImage');
    iconImage.setAttribute('src', link[2]);
    iconImage.setAttribute('alt', link[3]);

    if (isDarkMode && link[3] === 'black') {
      iconImage.classList.add('dark-mode');
    } else if (!isDarkMode && link[3] === 'black') {
      iconImage.classList.remove('dark-mode');
    }
    
    
    const nameContainer = document.createElement('div');
    nameContainer.classList.add('nameContainer');

    const nameText = document.createElement('p');
    nameText.classList.add('nameText');
    nameText.textContent = link[0];

    nameContainer.appendChild(nameText);
    linkContainerBox.appendChild(iconImage);
    linkContainerBox.appendChild(nameContainer);
    linkContainer.appendChild(linkContainerBox);
    row.appendChild(linkContainer);

    linkCount++;
    if (linkCount % rowHolder === 0) {
      linkRow.parentNode.appendChild(row);
      row = document.createElement('div');
      row.classList.add('linkRow');
      // Dispatch the custom event after appending a row of images
      const imageAddedEvent = new CustomEvent('imageAdded');
      document.dispatchEvent(imageAddedEvent);
    }
  });

  if (linkCount % rowHolder !== 0) {
    linkRow.parentNode.appendChild(row);
    // Dispatch the custom event after appending the last row of images
    const imageAddedEvent = new CustomEvent('imageAdded');
    document.dispatchEvent(imageAddedEvent);
  }

  const feedbackContainer = document.querySelector('.feedbackContainer');
  linkRow.parentNode.insertBefore(feedbackContainer, null);
});

  await setTitleText(rowHolder);
}

// Call the function to add the links when the page loads
window.addEventListener('load', addLinks);

