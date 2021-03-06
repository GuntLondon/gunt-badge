/*
 * Add a looser badge to a site
 */
(function(){

  var
  linkText = "Made by loosers",
  linkHref = "https://madebyloosers.github.io",
  paraId = "looser-badge",
  imgUrl = "https://madebyloosers.github.io/looser-badge/looser-badge-small.png",

  css = "#looser-badge { position:fixed !important; left: auto !important; right:0 !important; top:auto !important; bottom:100px !important; padding:0 !important; margin:0 !important; background:none !important; }" +
    "#looser-badge a { display:block !important; position:relative !important; right:-85px !important; top:0 !important; border:3px solid #666 !important; border-top-left-radius:30px !important; border-bottom-left-radius:30px !important; border-right:none !important; background:url('"+imgUrl+"') rgb(0,0,0) no-repeat 4px 50% !important; background-size: contain; padding:8px 8px 8px 40px !important; color:#ccc !important; font-family:Georgia, sans-serif !important; font-size:10px !important; line-height:1.5 !important; font-style:italic !important; font-weight:normal !important; text-decoration:none !important; -webkit-transition:all 0.5s ease-in-out; -moz-transition:all 0.5s ease-in-out; -ms-transition:all 0.5s ease-in-out; -o-transition:all 0.5s ease-in-out; transition:all 0.5s ease-in-out; }" +
    "#looser-badge a:hover { right:0 !important; color:#fff !important; border-color:#ea7277 !important; }";

  // add CSS
  function addCss() {
    var s = document.createElement("style");
    if (s.styleSheet) {
      s.styleSheet.cssText = css;
    } else {
      s.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName("head")[0].appendChild(s);
  }


  // init
  function init() {

    // elements
    var body, p, a,
        d = document;

    body = d.getElementsByTagName('body')[0];

    // create the paragraph container as a child of the BODY element
    p = body.appendChild(d.createElement("p"));
    p.id = paraId;

    // create an anchor element for link
    a = d.createElement("a");
    a.innerHTML = linkText;
    a.href = linkHref;
    p.appendChild(a);

    addCss();

    // set up the onclick event to open new window
    addEvent(a, 'click', function(e) {
      window.open(linkHref);
      if (e) {
        e.preventDefault();
      }
      return false;
    });
  }


  // add event
  function addEvent(obj, evType, fn){
    if (obj.addEventListener){
      obj.addEventListener(evType, fn, false);
      return true;
    } else if (obj.attachEvent){
      var r = obj.attachEvent("on"+evType, fn);
      return r;
    } else {
      return false;
    }
  }


  // init
  addEvent(window, 'load', init);
})();
