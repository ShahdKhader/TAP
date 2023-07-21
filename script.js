class Theme {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify() {
      this.observers.forEach(observer => observer.update());
    }
  }

  class UIComponent {
    constructor(elementId) {
      this.element = document.getElementById(elementId);
    }
  
    update() {
        var darkmode = document.getElementById("dark-mode");
        darkmode.onclick = function(){
        document.body.classList.toggle("dark-theme");
    }
 } 
}
  
  const theme = new Theme();
  const header = new UIComponent("headar");
 
  
  theme.addObserver(header);
  theme.addObserver(footer);
  
  function handleThemeChange() {
    theme.notify();
  }

  const htmlBox = document.getElementById('htmlBox');
  const wrapper=document.getElementById('wrapper');
  htmlBox.addEventListener('click', function() {
    wrapper.style.visibility='hidden';
  });
  

















