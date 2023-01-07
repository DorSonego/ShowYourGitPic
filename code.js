let userName = document.getElementsByClassName('userName')[0];
let email = document.getElementsByClassName('email')[0];
let age = document.getElementsByClassName('age')[0];

function popupService(popupBody, options) { 
    const popupFrame=`
<div class="popup" id= "popup">
        <img src ="https://github.com/${popupBody}.png"></img>
        <div id="overlay" class="overlay">
     </div>
 </div>`; 
    function open() {
        // const check=document.getElementById('popup');
        if(!document.getElementById('popup')){
            document.body.insertAdjacentHTML('afterbegin',popupFrame);}
         
            options.isCloseByClickOutside && document.getElementById('overlay').addEventListener('click',()=>{
                    close();
                })
            }    
    function close() {
        const elm=document.getElementById('popup')
        if(elm){
            document.body.removeChild(elm);
         }
        };
    return {
       open,
       close
    };
}
const options = popupService(`dorsonego`,{
    isCloseByClickOutside:true
  });
  const btn=document.getElementById('show-git-profile-picture');
  window.addEventListener("load",()=>{
    btn.addEventListener('click',options.open);
  });
