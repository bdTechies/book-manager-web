document.addEventListener("DOMContentLoaded", function(event) {
  var os = platform.os.family;
  var downloadBtn = document.querySelector(".download-url");
  var linuxBtn = document.querySelector(".linux-os");
  var windowsBtn = document.querySelector(".windows-os");
  var macBtn = document.querySelector(".mac-os");

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
    ga("send", "event", "Download Analytics", "download", os);
  });
});
