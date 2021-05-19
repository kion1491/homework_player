const conversionBtn = document.querySelectorAll('.conversionBtn');
      console.log(conversionBtn)
document.body.addEventListener("click",function(e){
  const targetBtnCLassList = e.target.classList;
  if(targetBtnCLassList.contains('conversionBtn')){
    e.target.classList.toggle('on')
  }
})