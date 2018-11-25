document.addEventListener("DOMContentLoaded", function(event) {
  var config = {
    apiKey: "AIzaSyDqbK0hgiSJdYnKjE0EzuI-BDR0FB-SubA",
    authDomain: "book-manager-653cb.firebaseapp.com",
    databaseURL: "https://book-manager-653cb.firebaseio.com",
    storageBucket: "book-manager-653cb.appspot.com"
  };

  firebase.initializeApp(config);

  var os = platform.os.family;
  var database = firebase.database();
  var oriUrl = window.location.host;

  var downloadBtn = document.querySelector(".download-url");
  var linuxBtn = document.querySelector(".linux-os");
  var windowsBtn = document.querySelector(".windows-os");
  var macBtn = document.querySelector(".mac-os");

  function addDownloadData(url) {
    var now = new Date();
    var downloadedOn = now.toISOString();
    var data = {
      osName: os,
      downloadedOn: downloadedOn
    };
    var downloadList = database.ref("/downloads").push();
    if (url.indexOf("127.0.0.1") === -1 && url.indexOf("localhost") === -1) {
      downloadList.set(data);
    }
  }

  switch (true) {
    case os.indexOf("Linux") !== -1:
      downloadBtn.href = "linux-url";
      windowsBtn.classList.remove("active-btn");
      macBtn.classList.remove("active-btn");
      linuxBtn.className += " active-btn";
      break;
    case os.indexOf("Win") !== -1:
      downloadBtn.href = "windows-url";
      linuxBtn.classList.remove("active-btn");
      macBtn.classList.remove("active-btn");
      windowsBtn.className += " active-btn";
      break;
    case os.indexOf("Mac") !== -1:
      downloadBtn.href = "mac-url";
      linuxBtn.classList.remove("active-btn");
      windowsBtn.classList.remove("active-btn");
      macBtn.className += " active-btn";
      break;
    default:
      downloadBtn.href = "windows-url";
      linuxBtn.classList.remove("active-btn");
      macBtn.classList.remove("active-btn");
      windowsBtn.className += " active-btn";
      break;
  }

  linuxBtn.addEventListener("click", function() {
    downloadBtn.href = "linux-url";
    windowsBtn.classList.remove("active-btn");
    macBtn.classList.remove("active-btn");
    linuxBtn.className += " active-btn";
  });

  windowsBtn.addEventListener("click", function() {
    downloadBtn.href = "windows-url";
    linuxBtn.classList.remove("active-btn");
    macBtn.classList.remove("active-btn");
    windowsBtn.className += " active-btn";
  });

  macBtn.addEventListener("click", function() {
    downloadBtn.href = "mac-url";
    linuxBtn.classList.remove("active-btn");
    windowsBtn.classList.remove("active-btn");
    macBtn.className += " active-btn";
  });

  downloadBtn.addEventListener("click", function() {
    addDownloadData(oriUrl);
    ga("send", "event", "Download Analytics", "download", os);
  });
});
