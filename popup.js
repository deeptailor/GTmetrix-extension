document.addEventListener("DOMContentLoaded", ()=>{
  const checkPageButton = document.getElementById('checkPage');

  checkPageButton.addEventListener("click", ()=>{

    chrome.tabs.query({"active": true}, (tabArray)=>{

      tab = tabArray[0];

      d = document;

      let f = d.createElement('form');
      f.action = "http://gtmetrix.com/analyze.html?bm";
      f.method = "post";

      let i = d.createElement('input');
      i.type = "hidden";
      i.name = "url";
      i.value = tab.url;

      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);
