var modal = document.getElementById("modal01");
var img = document.getElementById("arithmeticImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption01");
img.onclick = function() {
    modal.style.display = "block";
     modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

var modal2 = document.getElementById("modal02");
var img2 = document.getElementById("relationalImg");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption02");
img2.onclick = function() {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
    var span2= document.getElementsByClassName("close")[1];
    span2.onclick = function() {
    modal2.style.display = "none";
}
}

var modal3 = document.getElementById("modal03");
var img3 = document.getElementById("logicalImg");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption03");
img3.onclick = function() {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
    var span3= document.getElementsByClassName("close")[2];
    span3.onclick = function() {
        modal3.style.display = "none";
    }
}

var modal4 = document.getElementById("modal04");
var img4 = document.getElementById("assignmentImg");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption04");
img4.onclick = function() {
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
    var span4= document.getElementsByClassName("close")[3];
    span4.onclick = function() {
        modal4.style.display = "none";
    }
}

var modal5 = document.getElementById("modal05");
var img5 = document.getElementById("miscellaneousImg");
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption05");
img5.onclick = function() {
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
  var span5= document.getElementsByClassName("close")[4];
  span5.onclick = function() {
    modal5.style.display = "none";
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" photoActive", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " photoActive";
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("navbar");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
