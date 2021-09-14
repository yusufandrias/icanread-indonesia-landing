
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


$(document).ready(function(){

    $('.main-navigation li').click(function(){
        $('.main-navigation li').removeClass('active');
        $(this).addClass('active');
    });
    $('#mobile-menu li').click(function(){
        $('#mobile-menu li').removeClass('active');
        $(this).addClass('active');
        $('#btn-menu').attr('data-toggle', 'close');
        $('#mobile-menu').attr('data-toggle', 'close');
        $('#btn-menu i').removeClass('fa-times');
        $('#btn-menu i').addClass('fa-bars');
    });

    
    $('.btn-register').click(function(){
        $('.main-navigation li').removeClass('active');
    });



    $('#btn-menu').click(function(){
        var status_btn_menu = $('#btn-menu').attr('data-toggle');
        var status_container_menu = $('#mobile-menu').attr('data-toggle');

        if( status_btn_menu == 'close' ){
            $('#btn-menu').attr('data-toggle', 'open');
            $('#mobile-menu').attr('data-toggle', 'open');
            $('#btn-menu i').removeClass('fa-bars');
            $('#btn-menu i').addClass('fa-times');
        }else{
            $('#btn-menu').attr('data-toggle', 'close');
            $('#mobile-menu').attr('data-toggle', 'close');
            $('#btn-menu i').removeClass('fa-times');
            $('#btn-menu i').addClass('fa-bars');
        }
    });

});