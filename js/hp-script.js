var rx=rx||{};rx.zhr=function(a,b,d){"undefined"==typeof a||"undefined"==typeof b||"undefined"==typeof d?console.log("all paramters not provided"):(this.servermethod=a,this.successcall=b);this.constructor.prototype.do=function(a){var e=new XMLHttpRequest;e.open(d,this.servermethod,!0);e.setRequestHeader("Content-type","application/json; charset\x3dutf-8");e.onreadystatechange=function(){4==e.readyState&&200==e.status&&window[b](JSON.parse(e.responseText))};"undefined"==typeof a?e.send():e.send(JSON.stringify(a))}};
var winHeight=window.innerHeight;function getTop(a){a=a.getBoundingClientRect().top;var b=document.body;return Math.round(a+(window.pageYOffset||b.scrollTop)-winHeight+100)}function isPH(){if("http://zest.is/?ref\x3dproducthunt"==window.location.href){var a=document.getElementById("zest-hunters");a&&(a.style.display="block")}}
function ZestyBaby(){function a(){p=getTop(k);q=p+winHeight+k.offsetHeight/2;r=getTop(m)}function b(){f=window.pageYOffset||document.documentElement.scrollTop;f>=winHeight/1.5?c.classList.add("cta_in"):c.classList.remove("cta_in");if(900<=f)for(var a=0;a<g.length;a++)g[a].classList.add("fadeOut");else for(a=0;a<g.length;a++)g[a].classList.remove("fadeOut");if(f>=p+winHeight-200){for(a=0;a<n.length;a++)n[a].classList.add("pause");c.classList.add("full")}else{for(a=0;a<n.length;a++)n[a].classList.remove("pause");
c.classList.remove("full")}if(0<=f)for(a=0;a<l.length;a++)l[a].style.webkitTransform="translateY("+Math.max(-f/4*(a+1),-500*(a+1))+"px)",l[a].style.transform="translateY("+Math.max(-f/4*(a+1),-500*(a+1))+"px)";0<=f&&(e.style.opacity=Math.min(f/300,1),h.style.opacity=Math.max(1-f/300,0));f>p&&f<=q?(k.paused&&k.play(),t||ga("send","event","Scrolling","scroll","Scroll to video tab"),t=!0):!k.paused&&k.pause();!m.ended&&f>=r&&m.paused&&m.play();scrollToView.handleInviewClass(f)}function d(){var b;window.addEventListener("resize",
function(){clearTimeout(b);b=setTimeout(function(){winHeight=window.innerHeight;scrollToView.getInviews();floating.getFloatingElements();a()},250)})}var c,e,h,l,g,n,k,q,p,m,r,f=0;this.ready=function(){c=document.getElementById("menu");document.getElementById("loader");e=document.getElementById("articles");h=document.querySelector("#hero footer");l=document.querySelectorAll("#articles .scroll-element");g=document.querySelectorAll("#articles .outer-column");n=document.querySelectorAll("#articles .article-pop");
k=document.getElementById("zest-feed-video");m=document.getElementById("zest-search-video");setTimeout(function(){scrollToView.getInviews();floating.getFloatingElements();ActionToolTip();Carousel();b();a();d();window.addEventListener("scroll",b);document.getElementById("wrapper").classList.contains("touch")||window.addEventListener("mousemove",floating.floatingMove)},600);isPH()};window.addEventListener("load",function(){scrollToView.getInviews();floating.getFloatingElements();a()});var t=!1}
function ScrollToView(){var a=document.querySelectorAll(".inview"),b=[];this.getInviews=function(){b=[];if(a)for(var d=0;d<a.length;d++){var c=0;a[d].classList.contains("delay")&&(c=800);b.push(getTop(a[d])+c)}};this.handleInviewClass=function(d){if(a&&0<b.length)for(var c=0;c<b.length;c++)d>=b[c]&&a[c].classList.add("active")}}
function Carousel(){function a(){c=2==c?1:c+1;b.className="slide_"+c}for(var b=document.getElementById("carousel"),d=document.querySelectorAll(".bullets i"),c=1,e=setInterval(a,4E3),h=0;h<d.length;h++)d[h].onmouseover=function(){clearInterval(e)},d[h].onmouseout=function(){e=setInterval(a,4E3)},d[h].onclick=function(){b.className="slide_"+this.getAttribute("data-attr")}}
function ActionToolTip(){var a=document.getElementById("actions"),b=1;setInterval(function(){b=3==b?1:b+1;a.className="action_"+b},1500)}
function Floating(){var a=document.querySelectorAll(".floating"),b=[],d=window.innerWidth/2,c=window.innerHeight/2;this.getFloatingElements=function(){d=window.innerWidth/2;c=window.innerHeight/2;a.length&&0<a.length&&a.forEach(function(a){b.push({elm:a,isSmall:a.classList.contains("s"),box:{top:getTop(a)-100,height:a.classList.contains("articlesElm")?1800+winHeight:a.clientHeight+winHeight}})})};this.floatingMove=function(a){var e=window.pageYOffset||document.documentElement.scrollTop,l=a.clientX,
g=a.clientY;0<b.length&&b.forEach(function(a){if(e>=a.box.top&&e<a.box.top+a.box.height){var b=a.isSmall?70:45;a.elm.style.webkitTransform="translate("+-(d-l)/b+"px, "+-(c-g)/b+"px)";a.elm.style.transform="translate("+-(d-l)/b+"px, "+-(c-g)/b+"px)"}})}}var floating=new Floating,scrollToView=new ScrollToView,zestyBaby=new ZestyBaby;function ready(){"loading"!=document.readyState?zestyBaby.ready():document.addEventListener("DOMContentLoaded",zestyBaby.ready)}ready();