const headerVideo = document.querySelector('.header-video');


//#region Resizing:
function buttonEqual(){
    console.log('buttonEqual is running');
    let largerButtonWidth = document.getElementById('button-primary').offsetWidth;
    let smallerButton = document.getElementById('button-secondary');
    console.log('gotten elements');
    smallerButton.style.width = (largerButtonWidth + 'px');
    console.log('complete buttonEqual');
};

window.onresize = buttonEqual;
//#endregion resizing

//#region MARQUEE:
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");

/* setProperty('what-to-set', what-to-set-to) */
root.style.setProperty("--marquee-elements", marqueeContent.children.length)

/* append elements to fill gap at the end */
for (let i=0; i<marqueeElementsDisplayed; i++){
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
//#endregion marquee

//#region showtop
function showToTop(entries){
    let showTop = entries[0];

    if(showTop.isIntersecting){
        document.querySelector(".back-to-top").style.opacity = "0";
        document.querySelector(".top-container").style.position = "relative";
    } else{
        document.querySelector(".top-container").style.position = "fixed";
        document.querySelector(".back-to-top").style.opacity = "0.4";}}
/* $("div.myclass").hover(function() {
    $(this).css("background-color","red")
  });
 */
let observeShowTop = new IntersectionObserver(showToTop);
observeShowTop.observe(document.querySelector("#header-section"));
//#endregion showtop

//#region Appear effect:
const faders = document.querySelectorAll(".fade-in");
const fadersHeading = document.querySelectorAll("h1, img");
const fadersTexts = document.querySelectorAll("p, ul, li");
const NoFade = document.querySelectorAll(".no-fade");
const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
    ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            if (entry.target.classList.contains('no-fade')){
                return;
            } else {
                console.log('at last else')
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
}}});}, appearOptions);

//#endregion appear effect

//#region Loader
function htmlOverflowHidden() {
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
}
  
  function htmlOverflowAuto() {
    document.getElementsByTagName("html")[0].style.overflowY = "auto";
}
const loader = document.getElementById("loader");

function load(){ 
    loader.style.cssText = `
    display: none;
    z-index: -1;
`;};
function disappear(){
    loader.style.cssText = `
    transition: 500ms;
    opacity: 0;
`;};

if ('scrollRestoration' in history) {
    // Back off, browser, I got this...
    history.scrollRestoration = 'manual';
  }
//#endregion loader

//#region Load Page and state change:
document.onreadystatechange = function(){
    if (document.readyState !== 'complete'){
        htmlOverflowHidden; //does not trigger. use in styles.scss
        console.log('readyState is not complete');
        document.body.style.overflow = 'hidden';
        return;
    } else{
        console.log('readyState is complete');
        document.querySelector('.header-video').play();
            setTimeout((htmlOverflowAuto), 1000);
            setTimeout(disappear, 500);
            setTimeout(load, 800);
            setTimeout(faders.forEach(fader => {
                setTimeout(appearOnScroll.observe(fader), 50000);
            }), 8000);

            setTimeout(fadersHeading.forEach(fader => {
                setTimeout(appearOnScroll.observe(fader), 50000);
            }), 8000);

            setTimeout(fadersTexts.forEach(fader => {
                console.log('should timout fader')
                setTimeout(appearOnScroll.observe(fader), 50000);
            }), 8000);
        buttonEqual();
    }
};
//#endregion
