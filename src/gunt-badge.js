/*
 * Add a gunt badge to a site
 */
(function(){

  var
  linkText = "A Gunt<br/>Production",
  linkHref = "http://guntlondon.com",
  paraId = "gunt-badge",
  imgUrl = "http://guntlondon.com/includes/img/gunt-badge.png",

  css = "#gunt-badge { position:fixed; right:0; bottom:100px; }" +
    "#gunt-badge a { display:block; position:relative; right:-58px; top:0; border:3px solid #666; border-top-left-radius:30px; border-bottom-left-radius:30px; border-right:none; background:url('"+imgUrl+"') rgba(0,0,0,0.75) no-repeat 12px 50%; padding:8px 8px 8px 40px; color:#ccc; font-family:Georgia, sans-serif !important; font-size:10px !important; line-height:1.5 !important; font-style:italic !important; font-weight:normal !important; text-decoration:none !important; -webkit-transition:all 0.5s ease-in-out; -moz-transition:all 0.5s ease-in-out; -ms-transition:all 0.5s ease-in-out; -o-transition:all 0.5s ease-in-out; transition:all 0.5s ease-in-out; }" +
    "#gunt-badge a:hover { right:0; color:#fff !important; border-color:#ea7277; }";

  // add CSS
  function addCss() {
    var s = document.createElement("style");
    s.type = "text/css";
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