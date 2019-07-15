function moveButtons() {
  const btnTop = document.querySelector('#btn-top');
  const btnBottom = document.querySelector('#btn-bottom');

  if ($(window).scrollTop() >= "250") {
      $(btnTop).fadeIn("slow");
  }

  $(window).scroll(function() {
      if ($(window).scrollTop() <= "250") {
          $(btnTop).fadeOut("slow");
      } else {
          $(btnTop).fadeIn("slow");
      }
  });

  if ($(window).scrollTop() <= $(document).height() - "6000") {
      $(btnBottom).fadeIn("slow");
  } 

  $(window).scroll(function() {
      if ($(window).scrollTop() >= $(document).height() - "999") {
          $(btnBottom).fadeOut("slow");
      } else {
          $(btnBottom).fadeIn("slow");
      }
  });

  $(btnTop).click( function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $(btnBottom).click( function() {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });

}

moveButtons();

function fixeHeaderMenu() {

  const fixedMenu = document.querySelector('.headerTop');

  $(window).scroll(function () {
      if ($(this).scrollTop() > 156) {  
      $(fixedMenu)
        .fadeIn("slow")
        .addClass('headerTop-fixed');
      } else {
        $(fixedMenu).removeClass('headerTop-fixed');
      }
  });

}

fixeHeaderMenu();