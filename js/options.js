(async function() {
  "use strict";

  let addedLinks = [
    ["Drive", "https://drive.google.com/drive/u/0/", "/images/drive.png","color"],
    ["Gmail", "http://mail.ehschools.org/", "/images/gmail.png","color"],
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

let removedLinks = [
    ["EH Library", "http://easthamptonlibrary.org/teens/", "/images/book.png","black"],
    ["BBS: The Current", "https://www.youtube.com/@bbsthecurrent","/images/bbs.png","color"],
    ["Bonac Beachcomber", "https://bonacbeachcomber.com/", "/images/newspaper.png","black"],
    ["LTV EH", "https://www.youtube.com/@LTVEastHampton", "/images/ltv.png","color"],
    ["NoodleTools", "https://my.noodletools.com/web2.0/projects.html", "/images/noodleTools.png","color"],
    ["EH Databases", "https://sites.google.com/ehschools.org/ehhslibrary/databases?pli=1", "/images/database.png","black"],
    ["JSTOR", "https://www.jstor.org/", "/images/jstor.png","color"],

    ["YouTube", "https://www.youtube.com/", "/images/youtube.png","color"],
    ["Translate", "https://translate.google.com/", "/images/googleTranslate.png","color"],
    ["Docs", "https://docs.google.com/document/u/0/", "/images/docs.png","color"],
    ["Slides", "https://docs.google.com/presentation/u/0/", "/images/slides.png","color"],
    ["Sheets", "https://docs.google.com/spreadsheets/u/0/", "/images/sheets.png","color"],
    ["Keep", "https://keep.google.com/u/0/", "/images/keep.png","color"],
    ["Calendar", "https://calendar.google.com/calendar/u/0/r", "/images/calendar.png","color"],
    
    ["NY Times", "https://www.nytimes.com/", "/images/nyTimes.png","black"],
    ["Weather", "https://weather.com/en-BZ/weather/tenday/l/11937:4:US", "/images/weather.png","black"],
    
    ["Kami", "https://web.kamihq.com/web/viewer.html", "/images/kami.png","color"],
    ["EdPuzzle", "https://edpuzzle.com/", "/images/edpuzzle.png","color"],
    ["Castle Learning", "https://cl.castlelearning.com/Review/CLO/Account/LogOn", "/images/castleLearning.png","color"],
    ["Khan Academy", "https://www.khanacademy.org/", "/images/khanAcademy.png","color"],
    ["Duolingo", "https://www.duolingo.com/", "/images/duolingo.png","color"],
    ["Rosetta Stone", "https://www.rosettastone.com/", "/images/rosettaStone.png","color"],
    ["Oddessyware", "https://ehufsd.owschools.com/owsoo/login/auth", "/images/oddessyware.png","color"],
    ["Word Reference", "https://www.wordreference.com/", "/images/wordReference.png","color"],
    ["Verbix", "https://www.verbix.com/", "/images/verbix.png","color"],
    ["Remind", "https://www.remind.com/", "/images/remind.png","color"],
    ["AP Exam Dates","https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates", "/images/schedule.png","black"],
    ["AP Study Guides", "https://knowt.io/", "/images/knowt.png","color"],
    ["AP Study Guides", "https://library.fiveable.me/", "/images/fiveable.png","color"],
    ["AP Score Calculator", "https://www.albert.io/blog/ap-score-calculators/","/images/albert.png","color"],

    ["Common App", "https://apply.commonapp.org/dashboard", "/images/commonApp.png","color"],
    ["EdX", "https://home.edx.org/", "/images/edX.png","black"],
    ["Udemy", "https://www.udemy.com/", "/images/udemy.png","black"],
    ["Typing Club", "https://www.typingclub.com/sportal/", "/images/typingClub.png","color"],

    ["Sight Reading", "https://www.sightreadingfactory.com/sight-reading", "/images/sightReading.png","black"],
    ["Spotify", "https://open.spotify.com/", "/images/spotify.png","color"],
    
    ["Pixlr", "https://pixlr.com/", "/images/pixlr.png","color"],
    ["Img BG Remover", "https://www.remove.bg/", "/images/removeBG.png","black"],
    
    ["Symbolab", "https://www.symbolab.com/", "/images/symbolab.png","color"],
    ["WolframAlpha", "https://www.wolframalpha.com/", "/images/wolframAlpha.png","color"],
    ["Desmos", "https://www.desmos.com/calculator", "/images/desmos.png","color"],

    ["GitHub", "https://github.com/", "/images/github.png","black"],
    ["Code HS", "https://codehs.com/sections/3059537", "/images/codeHS.png","color"],
    ["Code.org", "https://studio.code.org/home", "/images/code.png","black"],
    ["p5.js", "https://editor.p5js.org/", "/images/p5.png","color"],
    ["W3schools", "https://www.w3schools.com/", "/images/w3schools.png","color"],
    ["Tinkercad", "https://www.tinkercad.com/dashboard","/images/tinkercad.png","color"],
    ["Astromech", "http://astromech.net/", "/images/astromech.png","color"],

    ["Quizlet", "https://quizlet.com/latest", "/images/quizlet.png","color"],
    ["Kahoot", "https://kahoot.it/", "/images/kahoot.png","color"],
    ["Blooket", "https://play.blooket.com/play", "/images/blooket.png","color"],
    ["Gimkit", "https://www.gimkit.com/join", "/images/gimkit.png","color"],
    ["Quizizz", "https://quizizz.com/join", "/images/quizizz.png","color"],
    ["Grammarly", "https://www.grammarly.com/", "/images/grammarly.png","color"],
    ["Wordle","https://www.nytimes.com/games/wordle/index.html", "/images/wordle.png","color"],
    ["Seterra", "https://www.seterra.com/", "/images/seterra.png","color"],

    ["SparkNotes", "https://www.sparknotes.com/", "/images/sparknotes.png","color"],
    ["Shmoop", "https://www.shmoop.com/", "/images/shmoop.png","color"],
    ["Brainly", "https://brainly.com/", "/images/brainly.png","black"],
    ["Course Hero", "https://www.coursehero.com/", "/images/courseHero.png","color"],

    ["CrashCourse", "https://www.youtube.com/@crashcourse", "/images/crashCourse.png","color"],
    ["Heimler's History", "https://www.youtube.com/@heimlershistory", "/images/heilmer.png","color"],
    ["Organic Chemistry Tutor", "https://www.youtube.com/@theorganicchemistrytutor", "/images/organicChemistryTutor.png","color"],
    ["Bozeman Science", "https://www.youtube.com/@Bozemanscience1", "/images/bozeman.png","color"],
    ["Flipping Physics", "https://www.youtube.com/@flippingphysics", "/images/flippingPhysics.png","black"],
    ["Coding Train", "https://www.youtube.com/@thecodingtrain", "/images/codingTrain.png","color"],
    ["Brian McLogan", "https://www.youtube.com/@brianmclogan", "/images/brianMclogan.png","color"],

    ];

const checkbox = document.getElementById("addToTopCheckbox");
let isChecked = false; 
let hasCheckedAttribute = checkbox.hasAttribute("checked");
checkbox.checked = isChecked;

chrome.storage.sync.get("isChecked", ({ isChecked: storedIsChecked }) => {
  if (storedIsChecked !== undefined) {
    isChecked = storedIsChecked;
    hasCheckedAttribute = true;
    checkbox.checked = isChecked;
  }
});

checkbox.addEventListener("change", function() {
  isChecked = checkbox.checked;
  hasCheckedAttribute = checkbox.hasAttribute("checked");
  if (isChecked) {
    checkbox.setAttribute("checked", "");
  } else {
    checkbox.removeAttribute("checked");
  }
  updateDarkModeClass();
});

if (!isChecked) {
  checkbox.removeAttribute("checked");
}

var slider = document.getElementById("myRange");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  chrome.storage.sync.set({ sliderValue: this.value });
  updateDarkModeClass();
}


chrome.storage.sync.get("sliderValue", function(data) {
  if (data.sliderValue) {
    slider.value = data.sliderValue;
    output.innerHTML = data.sliderValue;
  }
});
  const table = document.getElementById("addedLinksTable");
  const tbody = table.querySelector("tbody");

  const removedLinksTable = document.getElementById("removedLinksTable");
  const removedLinksTbody = removedLinksTable.querySelector("tbody");

  async function loadSortableLibrary() {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = '/js/Sortable.min.js';
      script.onload = () => {
        resolve();
      };
      document.body.appendChild(script);
    });
  }

  async function init() {
    await loadSortableLibrary();

    chrome.storage.local.get(["addedLinks", "removedLinks"], ({ addedLinks: storedAddedLinks, removedLinks: storedRemovedLinks }) => {
      if (storedAddedLinks) {
        addedLinks = JSON.parse(storedAddedLinks);
      }
      if (storedRemovedLinks) {
        removedLinks = JSON.parse(storedRemovedLinks);
      }

      loadTableData();
      initializeSortable();
    });
  }

  function initializeSortable() {
    new Sortable(tbody, {
      group: "shared",
      animation: 150,
      onEnd: handleSortEnd,
    });

    new Sortable(removedLinksTbody, {
      group: "shared",
      animation: 150,
      onEnd: handleSortEnd,
    });
  }

  function handleSortEnd(event) {
    const { from, to, oldIndex, newIndex } = event;
    let fromLinks, toLinks;
  
    if (from === tbody) {
      fromLinks = addedLinks;
    } else {
      fromLinks = removedLinks;
    }
  
    if (to === tbody) {
      toLinks = addedLinks;
    } else {
      toLinks = removedLinks;
    }
  
    const movedLink = fromLinks[oldIndex];
    fromLinks.splice(oldIndex, 1);
    toLinks.splice(newIndex, 0, movedLink);
  
    const tr = event.item;
    const button = tr.querySelector("button");
  
    if (to === tbody) {
      button.classList.add("removeLink");
      button.removeEventListener("click", () => {
        moveBack(tr);
      });
      button.addEventListener("click", () => {
        moveToRemoved(tr);
      });
    } else {
      button.classList.add("addLink");
      button.removeEventListener("click", () => {
        moveToRemoved(tr);
      });
      button.addEventListener("click", () => {
        moveBack(tr);
      });
    }
  
    chrome.storage.local.set({
      addedLinks: JSON.stringify(addedLinks),
      removedLinks: JSON.stringify(removedLinks),
    });
    updateDarkModeClass(); 
    loadTableData();
  }
  
  function moveToRemovedWrapper(event) {
    moveToRemoved(event);
    updateDarkModeClass();
  }
  
  function moveBackWrapper(event) {
    moveBack(event);
    updateDarkModeClass();
  }
  
  function moveToRemoved(event) {
    const target = event.target.tagName === 'BUTTON' ? event.target : event.target.parentElement;
    const tr = target.parentElement;
      
    target.classList.add("addLink");
    target.removeEventListener("click", moveToRemovedWrapper);
    target.addEventListener("click", moveBackWrapper);
      
    moveRow(tbody, removedLinksTbody, tr, addedLinks, removedLinks);
  
    updateDarkModeClass();
  }
  
  
  function moveBack(event) {
    const target = event.target.tagName === 'BUTTON' ? event.target : event.target.parentElement;
    const tr = target.parentElement;
    
    target.classList.add("removeLink");
    target.removeEventListener("click", moveBackWrapper);
    target.addEventListener("click", moveToRemovedWrapper);
    
    moveRow(removedLinksTbody, tbody, tr, removedLinks, addedLinks);
    updateDarkModeClass();

  }
  
  function updateDarkModeClass() {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    const darkModeClass = 'dark-mode';
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const lightDarkMode = img.getAttribute('alt');
      if (isDarkMode && lightDarkMode === "black") {
        img.classList.add(darkModeClass);
      } else {
        img.classList.remove(darkModeClass);
      }
    });
  }
  
function populateTable(tbody, links, addedTable, isDarkMode) {
  links.forEach(([linkName, url, image, lightDarkMode]) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const a = document.createElement("a");
    const button = document.createElement("button");
    button.setAttribute("data-ignore", "true");

    div.textContent = linkName;
    div.classList.add("linkName");
    img.src = image;
    img.alt = lightDarkMode;
    img.width = 50;
    img.height = 50;
    img.style.marginRight = "10px";
   
    img.setAttribute('data-url', url); 
    a.href = url; 
    a.target = "_blank"; 
    a.appendChild(img);
    a.style.textIndent = '0';
    a.style.width = '50px';
    a.style.height = '50px';


    button.style.minWidth = "50px";
    button.style.height = "50px";
    button.style.marginRight = "10px";
    button.style.lineHeight = "43px";

    if (addedTable) {
      button.classList.add("removeLink");
      button.removeEventListener("click", moveBackWrapper);
      button.addEventListener("click", moveToRemovedWrapper);
    } else {
      button.classList.add("addLink");
      button.removeEventListener("click", moveToRemovedWrapper);
      button.addEventListener("click", moveBackWrapper);
    }

    button.onclick = function (event) {
      event.stopPropagation();
      if (addedTable) {
        moveToRemovedWrapper(event);
      } else {
        moveBackWrapper(event);
      }
    };

    td.appendChild(a); 
    td.appendChild(div);
    tr.appendChild(td);
    tr.appendChild(button);
    tbody.appendChild(tr);

    const darkModeClass = 'dark-mode';
    if (isDarkMode && lightDarkMode === "black") {
      img.classList.add(darkModeClass);
    } else {
      img.classList.remove(darkModeClass);
    }
  });
}
checkbox.addEventListener("change", function() {
  isChecked = checkbox.checked;
  hasCheckedAttribute = checkbox.hasAttribute("checked");
  if (isChecked) {
    checkbox.setAttribute("checked", "");
  } else {
    checkbox.removeAttribute("checked");
  }
  updateDarkModeClass();
});

async function moveRow(fromTable, toTable, tr, fromLinks, toLinks) {
  const linkName = tr.querySelector("div").textContent;
  const imgElement = tr.querySelector("img");
  const url = imgElement.getAttribute('data-url');
  const image = imgElement.getAttribute('src');
  const lightDarkMode = imgElement.getAttribute('alt');

  const index = fromLinks.findIndex(([name]) => name === linkName);
  if (index === -1) {
    console.error(`Link data not found in the list`);
    return;
  }

  const movedLink = [linkName, url, image, lightDarkMode]; 
  fromLinks.splice(index, 1);

  const addToTopCheckbox = document.getElementById("addToTopCheckbox");
  const addToTop = addToTopCheckbox.checked;

  if (addToTop) {
    toLinks.splice(0, 0, movedLink);
    toTable.insertBefore(tr, toTable.firstChild);
  } else {
    toLinks.push(movedLink);
    toTable.appendChild(tr);
  }

  const button = tr.querySelector("button");
  button.onclick = null;

  if (toTable === tbody) {
    button.classList.add("removeLink");
    button.addEventListener("click", moveToRemovedWrapper);
  } else {
    button.classList.add("addLink");
    button.addEventListener("click", moveBackWrapper);
  }

  chrome.storage.local.set({
    addedLinks: JSON.stringify(addedLinks),
    removedLinks: JSON.stringify(removedLinks),
  });

  const isDarkMode = document.documentElement.classList.contains("dark-mode");
  const darkModeClass = 'dark-mode';

  if (isDarkMode && lightDarkMode === "black") {
    tr.querySelector("img").classList.add(darkModeClass);
  } else {
    tr.querySelector("img").classList.remove(darkModeClass);
  }

  updateDarkModeClass();
  loadTableData();
}
  
  function loadTableData() {
    tbody.innerHTML = "";
    removedLinksTbody.innerHTML = "";
  
    const darkMode = document.documentElement.classList.contains("dark-mode");
    populateTable(tbody, addedLinks, true, darkMode);
    populateTable(removedLinksTbody, removedLinks, false, darkMode);
  }
  

  await init();

  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", function() {
    const confirmed = confirm("Are you sure you want to reset the added and removed links? This action cannot be undone and will erase any custom links that were added.");
    if(confirmed) {
      checkbox.checked = false;
      isChecked = false;
      checkbox.removeAttribute("checked");
      chrome.storage.sync.set({ isChecked: false });
    
      slider.value = 3;
      output.innerHTML = 3;
      chrome.storage.sync.set({ sliderValue: 3 });
      chrome.storage.sync.set({ mode: "light" });
      chrome.storage.local.clear();
      location.reload();
    }
  });
  
  const addLinkForm = document.getElementById('add-link-form');

  addLinkForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const linkName = document.getElementById("link-name").value;
    const linkUrl = document.getElementById("link-url").value;
    const linkImage = document.getElementById("link-image").value;
    const linkColor = document.getElementById("link-color").value;
  
    const newLink = [linkName, linkUrl, linkImage, linkColor];
    addedLinks.unshift(newLink);
    
    chrome.storage.local.set({
      addedLinks: JSON.stringify(addedLinks)
    });
  
    loadTableData();
    addLinkForm.reset();
  });
  

  const expandButton = document.getElementById('expandButton');
  const formContainer = document.getElementById('add-link-form-container');
  
  chrome.storage.sync.get('formVisible', (data) => {
    if (data.formVisible) {
      formContainer.classList.add('visible');
      expandButton.innerText = "↑ Custom Link";
    } else {
      formContainer.classList.remove('visible');
      expandButton.innerText = "+ Custom Link";
    }
  });
  
  expandButton.addEventListener('click', () => {
    if(formContainer.classList.contains('visible')) {
      formContainer.classList.remove('visible');
      expandButton.innerText = "+ Custom Link";  
      
      chrome.storage.sync.set({formVisible: false});
    } else {
      formContainer.classList.add('visible');
      expandButton.innerText = "↑ Custom Link";
            chrome.storage.sync.set({formVisible: true});
    }
  });
  
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("info-icon");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "flex";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

})();
