
(async function() {
  "use strict";

  let addedLinks = [
    // Scheduling and Organization
    ["Schedule", "/html/clockPage.html", "/images/clock.png"],

    // Google Suite Tools
    ["Gmail", "https://mail.google.com/mail/u/0/#inbox", "/images/gmail.png"],
    ["Classroom", "https://classroom.google.com/", "/images/classroom.png"],
    ["Drive", "https://drive.google.com/drive/u/0/", "/images/drive.png"],

    // School-Related Resources
    ["EHHS", "https://www.easthamptonschools.org/highschool", "/images/bonac.png"],
    ["Guidance","https://www.easthamptonschools.org/guidance", "/images/guidance.png"],
    ["SchoolTool", "https://easthamptonst.esboces.org/schooltoolweb/", "/images/schoolTool.png"],
    ["EH Tech Support", "https://ehschools.mojohelpdesk.com/", "/images/support.png"],
    ["Virtual Bulletin", "https://docs.google.com/presentation/d/1T-idGOxDysnA_qrA0ilTapPdZNXiYt-09Ew1kL1AUbk/preview?slide=id.gb047d9a6b6_0_28", "/images/announcement.png"],
    ["Naviance", "https://student.naviance.com/main", "/images/naviance.png"],
    // News
    ["Bonac Beachcomber", "https://bonacbeachcomber.com/", "/images/newspaper.png"],

    // College and Application Resources
    ["AP Classroom", "https://apstudents.collegeboard.org/", "/images/collegeBoard.png"],
];

let removedLinks = [
    // Google Suite Tools
    ["Translate", "https://translate.google.com/", "/images/googleTranslate.png"],
    ["Docs", "https://docs.google.com/document/u/0/", "/images/docs.png"],
    ["Slides", "https://docs.google.com/presentation/u/0/", "/images/slides.png"],
    ["Sheets", "https://docs.google.com/spreadsheets/u/0/", "/images/sheets.png"],
    ["Keep", "https://keep.google.com/u/0/", "/images/keep.png"],
    ["YouTube", "https://www.youtube.com/", "/images/youtube.png"],
    ["Calendar", "https://calendar.google.com/calendar/u/0/r", "/images/calendar.png"],

    // Educational Games/Tools
    ["EdX", "https://home.edx.org/", "/images/edX.png"],
    ["Typing Club", "https://www.typingclub.com/sportal/", "/images/typingClub.png"],
    ["Delta Math", "https://www.deltamath.com/app/student", "/images/deltaMath.png"],
    ["Quizlet", "https://quizlet.com/latest", "/images/quizlet.png"],
    ["Kahoot", "https://kahoot.it/", "/images/kahoot.png"],
    ["Blooket", "https://play.blooket.com/play", "/images/blooket.png"],
    ["Gimkit", "https://www.gimkit.com/join", "/images/gimkit.png"],
    ["Quizizz", "https://quizizz.com/join", "/images/quizizz.png"],
    ["EdPuzzle", "https://edpuzzle.com/", "/images/edpuzzle.png"],
    ["Udemy", "https://www.udemy.com/", "/images/udemy.png"],
  
    ["Common App", "https://apply.commonapp.org/dashboard", "/images/commonApp.png"],
  
    // Libraries and Databases
    ["EH Library", "http://easthamptonlibrary.org/teens/", "/images/book.png"],
    ["BBS: The Current", "https://www.youtube.com/@bbsthecurrent","/images/bbs.png"],
    ["LTV EH", "https://www.youtube.com/@LTVEastHampton", "/images/ltv.png"],
    ["NoodleTools", "https://my.noodletools.com/web2.0/projects.html", "/images/noodleTools.png"],
    ["EH Databases", "https://sites.google.com/ehschools.org/ehhslibrary/databases?pli=1", "/images/database.png"],
    ["JSTOR", "https://www.jstor.org/", "/images/jstor.png"],

    //Phootgraphy and Art
    ["Pixlr", "https://pixlr.com/", "/images/pixlr.png"],

    // News
    ["NY Times", "https://www.nytimes.com/", "/images/nyTimes.png"],
    ["Weather", "https://weather.com/en-BZ/weather/tenday/l/11937:4:US", "/images/weather.png"],

    // Coding/Computer Science
    ["Code HS", "https://codehs.com/sections/3059537", "/images/codeHS.png"],
    ["Code.org", "https://studio.code.org/home", "/images/code.png"],
    ["p5.js", "https://editor.p5js.org/", "/images/p5.png"],
    ["Tinkercad", "https://www.tinkercad.com/dashboard","/images/tinkercad.png"],
    ["W3schools", "https://www.w3schools.com/", "/images/w3schools.png"],
    ["GitHub", "https://github.com/", "/images/github.png"],

    // Music
    ["Sight Reading", "https://www.sightreadingfactory.com/sight-reading", "/images/sightReading.png"],

    // Math and Calculator Tools
    ["Symbolab", "https://www.symbolab.com/", "/images/symbolab.png"],
    ["Wolfram Alpha", "https://www.wolframalpha.com/", "/images/wolframAlpha.png"],
    ["Desmos", "https://www.desmos.com/calculator", "/images/desmos.png"],

    // Language and Writing
    ["Grammarly", "https://www.grammarly.com/", "/images/grammarly.png"],
    ["Duolingo", "https://www.duolingo.com/", "/images/duolingo.png"],
    ["Wordle","https://www.nytimes.com/games/wordle/index.html", "/images/wordle.png"],
    ["Seterra", "https://www.seterra.com/", "/images/seterra.png"],
  
    // Study Guides and Online Learning Platforms
    ["Khan Academy", "https://www.khanacademy.org/", "/images/khanAcademy.png"],
    ["Castle Learning", "https://cl.castlelearning.com/Review/CLO/Account/LogOn", "/images/castleLearning.png"],
    ["AP Study Guides", "https://knowt.io/", "/images/knowt.png"],
    ["SparkNotes", "https://www.sparknotes.com/", "/images/sparknotes.png"],
    ["Shmoop", "https://www.shmoop.com/", "/images/shmoop.png"],
    ["Brainly", "https://brainly.com/", "/images/brainly.png"],
    ["Course Hero", "https://www.coursehero.com/", "/images/courseHero.png"],

    //YouTube Channels
    ["CrashCourse", "https://www.youtube.com/@crashcourse", "/images/crashCourse.png"],
    ["Heilmer's History", "https://www.youtube.com/@heimlershistory", "/images/heilmer.png"],
    ["Organic Chemistry Tutor", "https://www.youtube.com/@theorganicchemistrytutor", "/images/organicChemistryTutor.png"],
    ["Bozeman Science", "https://www.youtube.com/@Bozemanscience1", "/images/bozeman.png"],
    ["Flipping Physics", "https://www.youtube.com/@flippingphysics", "/images/flippingPhysics.png"],
    ["Coding Train", "https://www.youtube.com/@thecodingtrain", "/images/codingTrain.png"],
    ["Brain McLogan", "https://www.youtube.com/@brianmclogan", "/images/brianMclogan.png"]

    ];

// Get the checkbox element
const checkbox = document.getElementById("addToTopCheckbox");

// Get the current state of the checkbox and its checked attribute
let isChecked = false; // set to unchecked by default
let hasCheckedAttribute = checkbox.hasAttribute("checked");

// Set the initial state of the checkbox
checkbox.checked = isChecked;

// Get the initial state of the checkbox from the storage API
chrome.storage.sync.get("isChecked", ({ isChecked: storedIsChecked }) => {
  if (storedIsChecked !== undefined) {
    isChecked = storedIsChecked;
    hasCheckedAttribute = true;
    checkbox.checked = isChecked;
  }
});

// Add an event listener to the checkbox
checkbox.addEventListener("change", function() {
  // Update the state of the checkbox
  isChecked = checkbox.checked;
  hasCheckedAttribute = checkbox.hasAttribute("checked");

  // Save the state to the Chrome Extension Storage API
  chrome.storage.sync.set({ isChecked: isChecked }, function() {
    console.log("State saved");
  });

  // Update the checkbox's checked attribute
  if (isChecked) {
    checkbox.setAttribute("checked", "");
  } else {
    checkbox.removeAttribute("checked");
  }
});

// Remove the checked attribute if the checkbox is unchecked
if (!isChecked) {
  checkbox.removeAttribute("checked");
}



var slider = document.getElementById("myRange");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

// Save the slider value to storage on every change
slider.oninput = function() {
  output.innerHTML = this.value;
  chrome.storage.sync.set({ sliderValue: this.value });
}

// Load the slider value from storage when the page is loaded
chrome.storage.sync.get("sliderValue", function(data) {
  if (data.sliderValue) {
    slider.value = data.sliderValue;
    output.innerHTML = data.sliderValue;
  }
});


  const addedTableHeaders = ["Added Links"];
  const removedTableHeaders = ["Removed Links"];

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
      button.textContent = "−";
      button.style.backgroundColor = "red";
      button.removeEventListener("click", () => {
        moveBack(tr);
      });
      button.addEventListener("click", () => {
        moveToRemoved(tr);
      });
    } else {
      button.textContent = "+";
      button.style.backgroundColor = "green";
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
    console.log(addedLinks, removedLinks);
  }
  function moveToRemovedWrapper() {
    moveToRemoved(event);
    loadTableData();
  }
  
  function moveBackWrapper() {
    moveBack(event);
    loadTableData();
  }
  

  function populateTable(tbody, links, addedTable) {
    links.forEach(([linkName, url, image]) => {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      const div = document.createElement("div");
      const img = document.createElement("img");
      const a = document.createElement("a"); // Create a new 'a' element
      const button = document.createElement("button");
      button.setAttribute("data-ignore", "true");
  
      div.textContent = linkName;
      img.src = image;
      img.alt = linkName;
      img.width = 50;
      img.height = 50;
      img.style.marginRight = "10px";
  
      img.setAttribute('data-url', url); // Add this line
      a.href = url; // Set the 'href' attribute of the 'a' element to the URL
      a.target = "_blank"; // Add this line to make the link open in a new tab
      a.appendChild(img); // Append the 'img' element to the 'a' element
        // Reset common CSS properties for the 'a' element
      a.style.textDecoration = 'none';
      a.style.color = 'inherit';
      a.style.border = 'none';
      a.style.padding = '0';
      a.style.margin = '0';
      a.style.display = 'inline-block';
      a.style.background = 'none';
      a.style.cursor = 'pointer';
      a.style.textIndent = '0';
      a.style.borderCollapse = 'unset';

      button.style.minWidth = "50px";
      button.style.height = "50px";
      button.style.marginRight = "10px";
      button.style.lineHeight = "43px";
  
      if (addedTable) {
        button.textContent = "−";
        button.style.backgroundColor = "red";
        button.removeEventListener("click", moveBackWrapper);
        button.addEventListener("click", moveToRemovedWrapper);
      } else {
        button.textContent = "+";
        button.style.backgroundColor = "green";
        button.removeEventListener("click", moveToRemovedWrapper);
        button.addEventListener("click", moveBackWrapper);
      }
  
      td.appendChild(a); // Append the 'a' element to the 'td' element instead of the 'img' element
      td.appendChild(div);
      tr.appendChild(td);
      tr.appendChild(button);
      tbody.appendChild(tr);
    });
  }
  

// Replace this block in your code with the following updated block
//       img.setAttribute('data-url', url); // Add this line
function moveToRemoved(event) {
  const tr = event.target.parentElement;
  const button = tr.querySelector("button");
  
  button.textContent = "+";
  button.style.backgroundColor = "green";
  button.removeEventListener("click", moveToRemovedWrapper);
  button.addEventListener("click", moveBackWrapper);
  
  moveRow(tbody, removedLinksTbody, tr, addedLinks, removedLinks);
}

function moveBack(event) {
  const tr = event.target.parentElement;
  const button = tr.querySelector("button");
  
  button.textContent = "−";
  button.style.backgroundColor = "red";
  button.removeEventListener("click", moveBackWrapper);
  button.addEventListener("click", moveToRemovedWrapper);
  
  moveRow(removedLinksTbody, tbody, tr, removedLinks, addedLinks);
}


  function moveRow(fromTable, toTable, tr, fromLinks, toLinks) {
    const linkName = tr.querySelector("div").textContent;
    const imgElement = tr.querySelector("img");
    const url = imgElement.getAttribute('data-url');
    const image = imgElement.getAttribute('src');
  
    const index = fromLinks.findIndex(([name]) => name === linkName);
    if (index === -1) {
      console.error(`Link data not found in the list`);
      return;
    }
  
    const movedLink = [linkName, url, image]; // Get the correct link data
    fromLinks.splice(index, 1);
  
    const addToTopCheckbox = document.getElementById("addToTopCheckbox");
    const addToTop = addToTopCheckbox.checked;
  
    if (addToTop) {
      toLinks.splice(0, 0, movedLink); // Insert the moved link at the top of the destination list
      toTable.insertBefore(tr, toTable.firstChild); // Move the row to the top of the destination table
    } else {
      toLinks.push(movedLink); // Insert the moved link at the end of the destination list
      toTable.appendChild(tr); // Move the row to the end of the destination table
    }
  
    tr.parentElement.removeChild(tr); // Replace fromTable.removeChild(tr) with this line
  
    chrome.storage.local.set({
      addedLinks: JSON.stringify(addedLinks),
      removedLinks: JSON.stringify(removedLinks),
    });
    console.log(addedLinks, removedLinks);
  }
  
  

  function loadTableData() {
    tbody.innerHTML = "";
    removedLinksTbody.innerHTML = "";

    populateTable(tbody, addedLinks, true);
    populateTable(removedLinksTbody, removedLinks, false);
  }

  await init();

  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", function() {
    // Reset checkbox
    checkbox.checked = false;
    isChecked = false;
    checkbox.removeAttribute("checked");
    chrome.storage.sync.set({ isChecked: false });
  
    // Reset slider
    slider.value = 3;
    output.innerHTML = 3;
    chrome.storage.sync.set({ sliderValue: 3 });
    chrome.storage.local.clear();
    location.reload();
  });
  
  console.log(addedLinks, removedLinks);
})();
