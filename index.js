// adds 'active' class to the container when signin or signup is clicked
function toggleForm(){
    var container= document.querySelector('.container');
    container.classList.toggle('active');
    }


//menu toggle
var menuitems=document.getElementById("menuitems");
        menuitems.style.maxHeight="0px";
        function menutoggle(){
            if(menuitems.style.maxHeight=="0px")
            {
                menuitems.style.maxHeight="200px";
            }
            else{
                menuitems.style.maxHeight="0px";
            }

        }