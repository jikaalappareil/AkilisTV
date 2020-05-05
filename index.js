const citations = [
    '"Un Génie Incompris" - numedrama.com',
    '"22/20" - jeuxvideals.com',
    '"Oui." - Oui',
    '"Un commentaire positif" - Manque d\'inspiration'
]
const taille = window.innerWidth;

var rule = CSSRulePlugin.getRule(".qualites:after");

var tl = gsap.timeline({defaults:{duration: 1}})

let s = document.querySelector('.milieu');

s = s.getBoundingClientRect();

console.log(s.right);

tl.to('.milieu', {x:taille, duration: 5, ease: "power2.out"})
    .to('.loading', {y:20, duration: 5}, "-=5")
    .to('.loading', {opacity:0}, "-=0.8")
    .to('.haut', {y:-590})
    .to('.bas', {y:590}, "-=1")
    .from('.akilis', {opacity: 0, duration: 2, ease: "sine.out"})
    .from('.chevre', {x: 800, duration: 0.8, ease: "elastic.out(1, 1.5)"}, "-=0.7")
    .from('.tv', {y: 500, duration: 0.7, ease: "back.out(1.3)"})
    .from('.element', {opacity: 0, y: -50, stagger: 0.3})
    .to(rule, {cssRule: {scaleY: 0}, ease: "sine.out", duration: 2}, "-=0.5")
    .from('.regard', {opacity: 0}, "-=2")
    .from('.me_contacter', {opacity: 0})
    .from('.commentaires', {opacity: 0}, "-=4")
    .from('.ytb', {opacity: 0, ease: "sine.out"}, "-=4")   

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '162',
    width: '178',
    videoId: 'CvC0ftEgwYU',
    playerVars : {'rel': 0, 'controls': 0},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerReady,
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute();
}