document.addEventListener("DOMContentLoaded", function() {
  const description = document.querySelectorAll(".description");
  const description1 = document.querySelectorAll(".description1");
  const primaryElements = document.querySelectorAll(".primary");
  const secondaryElements = document.querySelectorAll(".secondary");
  const tertiaryElements = document.querySelectorAll(".tertiary");
  const quaternaryElements = document.querySelectorAll(".quaternary");
  const quinaryElements = document.querySelectorAll(".quinary");
  const senaryElements = document.querySelectorAll(".senary");
  const septenaryElements = document.querySelectorAll(".septenary");
  const studyPathElements = document.querySelectorAll(".study-path");
  const procrastinationElements = document.querySelectorAll(".procrastination");
  const goToSchool = document.querySelector("#go-to-school");
  const stayHome = document.querySelector("#stay-home");
  const forgotHome = document.querySelector("#forgot-home");
  const truthExtension = document.querySelector("#truth-extension");
  const extension = document.querySelector("#extension");
  const procrastinate = document.querySelector("#procrastinate");
  const skip = document.querySelector("#skip");
  const study = document.querySelector("#study");
const restarts = document.querySelectorAll("#restart-quaternary,#restart-tertiary,#restart-procrastination,#restart-septenary,#restart-sucesss");
  const schoolImage = document.querySelector('.school-image');
  
  function adjustImageSize() {
    const primaryDisplay = Array.from(primaryElements).some(element =>   window.getComputedStyle(element).display === 'none');
    if (primaryDisplay) {
      schoolImage.style.width = '10%';
    } else {
      schoolImage.style.width = '20%'; 
    }
  } 
  // adjustImageSize(); // Initial check
  
  goToSchool.addEventListener('click', function() {
    description.forEach(element => element.style.display = "none");
     description1.forEach(element => element.style.display = "none");
    primaryElements.forEach(element => element.style.display = "none");
    secondaryElements.forEach(element => element.style.display = "block");
  adjustImageSize();
  });
  stayHome.addEventListener( 'click', function(){
    description.forEach(element => element.style.display = "none");
    description1.forEach(element => element.style.display = "none");
    primaryElements.forEach(element => element.style.display = "none");
    quaternaryElements.forEach(element => element.style.display = "block");
    adjustImageSize();
  });
  forgotHome.addEventListener( 'click', function(){
  secondaryElements.forEach(element => element.style.display = "none");
  tertiaryElements.forEach(element => element.style.display = "block");
  adjustImageSize();
  });
  truthExtension.addEventListener( 'click', function(){
    secondaryElements.forEach(element => element.style.display = "none");
    quinaryElements.forEach(element => element.style.display = "block");
     adjustImageSize();
  });
  procrastinate.addEventListener( 'click', function(){
    quinaryElements.forEach(element => element.style.display = "none");
    procrastinationElements.forEach(element => element.style.display = "block");
    adjustImageSize();
  });
  extension.addEventListener('click',function(){
    quinaryElements.forEach(element => element.style.display = "none");
    senaryElements.forEach(element => element.style.display = "block");
    adjustImageSize();
  });
  skip.addEventListener('click', function(){
    senaryElements.forEach(element => element.style.display = "none");
    septenaryElements.forEach(element => element.style.display = "block");
    adjustImageSize();
  });
  study.addEventListener('click', function(){
    senaryElements.forEach(element => element.style.display = "none");
    studyPathElements.forEach(element => element.style.display = "block");
    adjustImageSize();
  });
  
  restarts.forEach(restart => {
  restart.addEventListener('click', function() {
    tertiaryElements.forEach(element => element.style.display = "none");
    quaternaryElements.forEach(element => element.style.display = "none");
    procrastinationElements.forEach(element => element.style.display = "none");
    septenaryElements.forEach(element => element.style.display = "none");
    studyPathElements.forEach(element => element.style.display = "none");
    primaryElements.forEach(element => element.style.display = "block");
    description.forEach(element => element.style.display = "block");
    description1.forEach(element => element.style.display = "block");
    console.log('Restart button clicked!');
    adjustImageSize();
  });
    });
  


});
