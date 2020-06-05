$("#btn").click(
    function(){
        var i=$("#input").val();
        if(i=="punjab"){
            window.location.href="punjab/punjab.html";
        }
        else if(i=="badshahi"){
            window.location.href="punjab/badshahi/badshahi.html";
        }
        else if(i=="faisal"){
            window.location.href="punjab/faisal/faisal.html";
        }
        else if(i=="rohtas"){
            window.location.href="punjab/fort/rohtas.html";
        }
        else if(i=="khewra"){
            window.location.href="punjab/khewra/khewra.html";
        }
        else if(i=="minar-e-pak"){
            window.location.href="punjab/minar e pak/minar.html";
        }


        else if(i=="sindh"){
            window.location.href="sindh/sindh.html";
        }
        else if(i=="kenjhar"){
            window.location.href="sindh/kenjhar/sindh.html";
        }
        else if(i=="makli"){
            window.location.href="sindh/makli/sindh.html";
        }
        else if(i=="mazar quaid"){
            window.location.href="sindh/mazar quaid/sindh.html";
        }
        else if(i=="mohen jo"){
            window.location.href="sindh/mohen jo/sindh.html";
        }
        else if(i=="seaview"){
            window.location.href="sindh/seaview/sindh.html";
        }



        else if(i=="balochistan"){
            window.location.href="balochistan/baloch.html";
        }
        else if(i=="astola"){
            window.location.href="balochistan/astola/astola.html";
        }
        else if(i=="chotok"){
            window.location.href="balochistan/chotok water/chotok.html";
        }
        else if(i=="princess"){
            window.location.href="balochistan/princess/princess.html";
        }
        else if(i=="quetta"){
            window.location.href="balochistan/quetta/quetta.html";
        }
        else if(i=="ziarat"){
            window.location.href="balochistan/ziarat/ziarat.html";
        }





        else if(i=="gilgit"){
            window.location.href="gilgit/gilgit.html";
        }
        else if(i=="astore"){
            window.location.href="gilgit/astore/gilgit.html";
        }
        else if(i=="hunza"){
            window.location.href="gilgit/hunza/gilgit.html";
        }
        else if(i=="k2"){
            window.location.href="gilgit/k2/gilgit.html";
        }
        else if(i=="karokarm"){
            window.location.href="gilgit/karokarm/gilgit.html";
        }
        else if(i=="skardu"){
            window.location.href="gilgit/skardu/gilgit.html";
        }

        
        else if(i=="kpk"){
            window.location.href="kpk/kpk.html";
        }
        else if(i=="chitral"){
            window.location.href="kpk/chitra/kpk.html";
        }
        else if(i=="kumrat"){
            window.location.href="kpk/kumrat/kpk.html";
        }
        else if(i=="lulusar"){
            window.location.href="kpk/lulusar/kpk.html";
        }
        else if(i=="mohdand"){
            window.location.href="kpk/mohdand/kpk.html";
        }
        else if(i=="swat"){
            window.location.href="kpk/swat/kpk.html";
        }
        
        

        else{
            alert("sorry")
        }
    }
)
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }







  "use strict";

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}




