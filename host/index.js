const conversionBtn = document.querySelectorAll('.conversionBtn');
document.body.addEventListener("click",function(e){
  const targetBtnCLassList = e.target.classList;
  if(targetBtnCLassList.contains('conversionBtn')){
    e.target.classList.toggle('on')
  }




  if(targetBtnCLassList.contains('user_search_btn') || targetBtnCLassList.contains('user_search_exit_btn')){
    const userNumDiv = document.querySelector('.user_num'),
          userSearchInputBox = document.querySelector('.user_search_input_box');
    userNumDiv.classList.toggle('on');
    userSearchInputBox.classList.toggle('on');
  }

  if(targetBtnCLassList.contains('user_list_toggle_btn')){
    const userListToggleBtn = document.querySelector('.user_list_toggle_btn'),
          userList = document.querySelector('.user_list');
    if(userListToggleBtn.classList.contains('on')){
      userList.style.display = "block"
    } else{
      userList.style.display = "none"
    }
  }


})
