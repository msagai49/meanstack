    //handler for SPA navigation
    window.onhashchange = function(){
        // render function is called every hash change.
        render(window.location.hash);
    };

    function hide (elements) {
        elements = elements.length ? elements : [elements];
        for (var index = 0; index < elements.length; index++) {
          elements[index].style.display = 'block';
        }
      }
//****************************SPA NAVIGATION***********************************************************
function render(hashKey) {

    //first hide all divs
    let pages = document.querySelectorAll(".page");
    for (let i = 0; i < pages.length; ++i) {
        pages[i].style.display = 'none';
    }

     //...now do same with lis
    let lis_nav = document.querySelectorAll(".navLi");
    for (let i = 0; i < lis_nav.length; ++i) {
        lis_nav[i].classList.remove("active");
    }

    //then unhide the one that user selected
    //console.log(hashKey);
    switch(hashKey){
        case "/":
            pages[0].style.display = 'block';
            document.getElementById("li_home").classList.add("active");
            break;
        case "#home":
            pages[0].style.display = 'block';
            document.getElementById("li_home").classList.add("active");
            break;
        case "#register":
            pages[2].style.display = 'block';
            document.getElementById("li_register").classList.add("active");
            break;
        case "#login":
            pages[3].style.display = 'block';
            document.getElementById("li_login").classList.add("active");
            break;
        case "#about":
            pages[1].style.display = 'block';
            document.getElementById("li_about").classList.add("active");
            break;
        default:
            pages[0].style.display = 'block';
            document.getElementById("li_home").classList.add("active");
    }// end switch

}