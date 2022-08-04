function startApp() {
  let burger = document.querySelector(".burger-menu")
  let navlinks = document.querySelector(".nav-links")
  let menuOpen = false
  let popup = document.querySelector(".popup")
  let popupOpen = false
  let button1 = document.querySelector(".nav-button")
  let button2 = document.querySelector(".main-button")
  let phoneNumber = document.getElementById("phone")
  let telcoLogo = document.querySelector(".telco-logo")
  let backButton = document.querySelector(".back")
  
  const MTN = "images/Mtn.png"
  const GLOBACOM = "images/Glo.png"
  const AIRTELTIGO = "images/AirtelTigo.png"
  const VODAFONE = "images/Vodafone.png"
  const EXPRESSO = "images/expresso.jpg"
  const AIRTEL = "Images/Airtel.webp"
  const NINEMOBILE = "Images/nineMobile.jpg"
  
  
  const ghanaTelco = {
      "024":MTN,
      "054":MTN,
      "055":MTN,
      "059":MTN,
      "025":MTN,
      "020":VODAFONE,
      "050":VODAFONE,
      "027":AIRTELTIGO,
      "057":AIRTELTIGO,
      "026":AIRTELTIGO,
      "027":AIRTELTIGO,
      "028":EXPRESSO,  
      "023":GLOBACOM,
  }
  
  const naijaTelco = {
      "0803":MTN,
      "0806":MTN,
      "0703":MTN,
      "0706":MTN,
      "0704":MTN,
      "0810":MTN,
      "0814":MTN,
      "0813":MTN,
      "0816":MTN,
      "0903":MTN,
      "0906":MTN,
      "0913":MTN,
      "07025":MTN,
      "07026":MTN,
      "0802":AIRTEL,
      "0808":AIRTEL,
      "0701":AIRTEL,
      "0708":AIRTEL,
      "0901":AIRTEL,
      "0907":AIRTEL,
      "0812":AIRTEL,
      "0902":AIRTEL,
      "0805":GLOBACOM,
      "0905":GLOBACOM,
      "0811":GLOBACOM,
      "0815":GLOBACOM,
      "0705":GLOBACOM,
      "0807":GLOBACOM,
      "0915":GLOBACOM,
      "0809":NINEMOBILE,
      "0909":NINEMOBILE,
      "0817":NINEMOBILE,
      "0818":NINEMOBILE,
      "0908":NINEMOBILE,
  }
  
  function checkNum(event){
      let val = event.target.value
      if(val.slice(0,4) === "+233"){
          if(`0${val.slice(4,7)}` in ghanaTelco){
              console.log("here")
              return checkG(ghanaTelco, val.slice(4,))
          }
      }
      if(val.slice(0,4) === "+234"){
          if(`0${val.slice(4,8)}` in naijaTelco || `0${val.slice(4,9)}` in     naijaTelco){
              return checkN(naijaTelco, val.slice(4,))
          }
      }
  }
  
  function checkG(obj, num){
      if(isNaN(num)){
          return alert(`Kindly enter a valid number`)
      }
      telcoLogo.src = obj[`0${num.slice(0,2)}`]
  }
  
  function checkN(obj, num){
      if(isNaN(num)){
          return alert(`Kindly enter a valid number`)
      }
      let fourDigits = `0${num.slice(0,4)}`
      let fiveDigits = `0${num.slice(0,5)}`
      if(fourDigits in naijaTelco){
          telcoLogo.src = obj[fourDigits]
      }
      if(fiveDigits in naijaTelco){
          telcoLogo.src = obj[fiveDigits]
      }
  }

  function togglePopUp(){
    if(!popupOpen){
          popup.classList.add("active")
          popupOpen = true
      }
      else{
          popup.classList.remove("active")
          popupOpen=false
    }
  }
  
  phoneNumber.addEventListener("input", checkNum)  
  button1.addEventListener("click",togglePopUp)
  button2.addEventListener("click",togglePopUp)
  backButton.addEventListener("click",togglePopUp)
  
  

  
  
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