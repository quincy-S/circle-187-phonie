function startApp() {
    let burger = document.querySelector(".burger-menu")
  let navlinks = document.querySelector(".nav-links")
  let menuOpen = false
  let popup = document.querySelector(".popup")
  let popupOpen = false
  let button1 = document.querySelector(".nav-button")
  let button2 = document.querySelector(".main-button")
  
  button1.addEventListener("click",()=>{
      if(!popupOpen){
          popup.classList.add("active")
          popupOpen = true
      }
      else{
          popup.classList.remove("active")
          popupOpen=false
  }})
  
  button2.addEventListener("click",()=>{
      if(!popupOpen){
          popup.classList.add("active")
          popupOpen = true
      }
      else{
          popup.classList.remove("active")
          popupOpen=false
  }})
  
  burger.addEventListener("click", () => {
      if(!menuOpen){
          burger.classList.add("open")
          navlinks.classList.add("active")
          menuOpen = true
      }else{
          burger.classList.remove("open")
          navlinks.classList.remove("active")
          menuOpen=false
      }
  })
};
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //