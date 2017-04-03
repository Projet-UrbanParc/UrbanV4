$(document).ready(function(){
  //Animation CSS
  // ==============================LINK 1 =================================/
  // On retire la classe .box-active pour permettre à l'animation de re-trigger
  //return false rajouté par Alex pour ne pas avoir un retour en haut de page à chaque clic dans la nav

  document.getElementById('link1').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return false;
  };

  // On ajoute la classe .box-active pour trigger l'animation CSS3
  document.getElementById('link1').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return false;
  };
  //Effet Audio Accueil
  $('#link1').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("backEnd/LinksAccueil/Section1.html #section1");
    $('#section2').load("backEnd/LinksAccueil/Section2.html #section2");
    $('#section3').load("backEnd/LinksAccueil/Section3.html #section3");
    $('#section4').load("backEnd/LinksAccueil/Section4.html #section4");
    // Animation CSS
    $('header').css({
      'background-image': 'url(images/headers/header_accueil.png)',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #FB7826',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#FB7826',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#FB7826',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#FB7826',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#FB7826',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #FB7826',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#FB7826',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #FB7826',
      'border-left': '2px solid #FB7826',
      'border-bottom': '2px solid #FB7826',
      'transition': '3s'
    });
  });

  // Accueil Footer
  $('#lien1').click(function() {
    //requête Ajax
    $('#section1').load("backEnd/LinksAccueil/Section1.html #section1");
    $('#section2').load("backEnd/LinksAccueil/Section2.html #section2");
    $('#section3').load("backEnd/LinksAccueil/Section3.html #section3");
    $('#section4').load("backEnd/LinksAccueil/Section4.html #section4");
    // Animation CSS
    $('header').css({
      'background-image': 'url(images/headers/header_accueil.png)',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #FB7826',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#FB7826',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#FB7826',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#FB7826',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#FB7826',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #FB7826',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#FB7826',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #FB7826',
      'border-left': '2px solid #FB7826',
      'border-bottom': '2px solid #FB7826',
      'transition': '3s'
    });
  });

  //Animation CSS
  //================================LINK 2 ================================/

  document.getElementById('link2').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return false;
  };

  document.getElementById('link2').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return false;
  };
  //Effet Audio Accrobranche
  $('#link2').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("backEnd/LinksAccrobranche/Section1.html #sectionaccr1");
    $('#section2').load("backEnd/LinksAccrobranche/Section2.html #sectionaccr2");
    $('#section3').load("backEnd/LinksAccrobranche/Section3.html #sectionaccr3");
    $('#section4').load("backEnd/LinksAccrobranche/Section4.html #sectionaccr4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_accro.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #4BA33C',
      'transition': '3s'
    });
    // $('h1').css({
    //   'color': '#4BA33C',
    //   'transition': '3s'
    // });
    $('h2').css({
      'color': '#4BA33C',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#4BA33C',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#4BA33C',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #4BA33C',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#4BA33C',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #4BA33C',
      'border-left': '2px solid #4BA33C',
      'border-bottom': '2px solid #4BA33C',
      'transition': '3s'
    });
  });

  //Accrobranche Footer
  $('#lien2').click(function() {
    //requête Ajax
    $('#section1').load("backEnd/LinksAccrobranche/Section1.html #sectionaccr1");
    $('#section2').load("backEnd/LinksAccrobranche/Section2.html #sectionaccr2");
    $('#section3').load("backEnd/LinksAccrobranche/Section3.html #sectionaccr3");
    $('#section4').load("backEnd/LinksAccrobranche/Section4.html #sectionaccr4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_accro.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #4BA33C',
      'transition': '3s'
    });
    // $('h1').css({
    //   'color': '#4BA33C',
    //   'transition': '3s'
    // });
    $('h2').css({
      'color': '#4BA33C',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#4BA33C',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#4BA33C',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #4BA33C',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#4BA33C',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #4BA33C',
      'border-left': '2px solid #4BA33C',
      'border-bottom': '2px solid #4BA33C',
      'transition': '3s'
    });
  });


  //Animation CSS
  //================================LINK 3 ==============================/
  document.getElementById('link3').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return false;
  };

  document.getElementById('link3').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return false;
  };
  //Effet Audio Skatepark
  $('#link3').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("backEnd/LinksSkatepark/Section1.html #sectionskate1");
    $('#section2').load("backEnd/LinksSkatepark/Section2.html #sectionskate2");
    $('#section3').load("backEnd/LinksSkatepark/Section3.html #sectionskate3");
    $('#section4').load("backEnd/LinksSkatepark/Section4.html #sectionskate4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_skatepark.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #0DB0C3',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#0DB0C3',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#0DB0C3',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#0DB0C3',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#0DB0C3',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #0DB0C3',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#0DB0C3',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #0DB0C3',
      'border-left': '2px solid #0DB0C3',
      'border-bottom': '2px solid #0DB0C3',
      'transition': '3s'
    });
  });

  //Skatepark Footer
  $('#lien3').click(function() {
    //requête Ajax
    $('#section1').load("backEnd/LinksSkatepark/Section1.html #sectionskate1");
    $('#section2').load("backEnd/LinksSkatepark/Section2.html #sectionskate2");
    $('#section3').load("backEnd/LinksSkatepark/Section3.html #sectionskate3");
    $('#section4').load("backEnd/LinksSkatepark/Section4.html #sectionskate4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_skatepark.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #0DB0C3',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#0DB0C3',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#0DB0C3',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#0DB0C3',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#0DB0C3',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #0DB0C3',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#0DB0C3',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #0DB0C3',
      'border-left': '2px solid #0DB0C3',
      'border-bottom': '2px solid #0DB0C3',
      'transition': '3s'
    });
  });

  //Animation CSS
  //================================LINK 7 ==============================/
  document.getElementById('link7').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return false;
  };

  document.getElementById('link7').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return false;
  };
  //Effet Audio Trampo
  $('#link7').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("backEnd/LinksTrampo/Section1.html #sectiontramp1");
    $('#section2').load("backEnd/LinksTrampo/Section2.html #sectiontramp2");
    $('#section3').load("backEnd/LinksTrampo/Section3.html #sectiontramp3");
    $('#section4').load("backEnd/LinksTrampo/Section4.html #sectiontramp4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_trampo.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #673500',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#673500',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#673500',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#673500',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#673500',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #673500',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#673500',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #673500',
      'border-left': '2px solid #673500',
      'border-bottom': '2px solid #673500',
      'transition': '3s'
    });
  });

  //Trampo Footer
  $('#lien7').click(function() {
    //requête Ajax
    $('#section1').load("backEnd/LinksTrampo/Section1.html #sectiontramp1");
    $('#section2').load("backEnd/LinksTrampo/Section2.html #sectiontramp2");
    $('#section3').load("backEnd/LinksTrampo/Section3.html #sectiontramp3");
    $('#section4').load("backEnd/LinksTrampo/Section4.html #sectiontramp4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_trampo.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #673500',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#673500',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#673500',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#673500',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#673500',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #673500',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#673500',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #673500',
      'border-left': '2px solid #673500',
      'border-bottom': '2px solid #673500',
      'transition': '3s'
    });
  });

  //Animation CSS
  //================================LINK 0 ==============================/
  document.getElementById('link0').onmousedown = function()
  {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return false;
  };

  document.getElementById('link0').onclick = function()
  {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return false;
  };
  ///Effet Audio TARIFS
  $('#link0').click(function() {
    //Effet Audio
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("backEnd/LinksTarifs/Section1.html #sectiontarifs1");
    $('#section2').load("backEnd/LinksTarifs/Section2.html #sectiontarifs2");
    $('#section3').load("backEnd/LinksTarifs/Section3.html #sectiontarifs3");
    $('#section4').load("backEnd/LinksTarifs/Section4.html #sectiontarifs4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_tarif.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #D1AC35',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#D1AC35',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#D1AC35',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#D1AC35',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#D1AC35',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #D1AC35',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#D1AC35',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #D1AC35',
      'border-left': '2px solid #D1AC35',
      'border-bottom': '2px solid #D1AC35',
      'transition': '3s'
    });
  });

  ///TARIFS Footer
  $('#lien0').click(function() {
    //requête Ajax
    $('#section1').load("backEnd/LinksTarifs/Section1.html #sectiontarifs1");
    $('#section2').load("backEnd/LinksTarifs/Section2.html #sectiontarifs2");
    $('#section3').load("backEnd/LinksTarifs/Section3.html #sectiontarifs3");
    $('#section4').load("backEnd/LinksTarifs/Section4.html #sectiontarifs4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_tarif.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #D1AC35',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#D1AC35',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#D1AC35',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#D1AC35',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#D1AC35',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #D1AC35',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#D1AC35',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #D1AC35',
      'border-left': '2px solid #D1AC35',
      'border-bottom': '2px solid #D1AC35',
      'transition': '3s'
    });
  });

  //Animation CSS
  //================================LINK 6 ==============================/
  document.getElementById('link6').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return false;
  };

  document.getElementById('link6').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return false;
  };
  //Effet Audio Anniversaire
  $('#link6').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("backEnd/LinksAnniversaire/Section1.html #sectionann1");
    $('#section2').load("backEnd/LinksAnniversaire/Section2.html #sectionann2");
    $('#section3').load("backEnd/LinksAnniversaire/Section3.html #sectionann3");
    $('#section4').load("backEnd/LinksAnniversaire/Section4.html #sectionann4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_anniversaire.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #DC3FD1',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#DC3FD1',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#DC3FD1',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#DC3FD1',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#DC3FD1',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #DC3FD1',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#DC3FD1',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #DC3FD1',
      'border-left': '2px solid #DC3FD1',
      'border-bottom': '2px solid #DC3FD1',
      'transition': '3s'
    });
  });

  //Anniversaire Footer
  $('#lien6').click(function() {
    //requête Ajax
    $('#section1').load("backEnd/LinksAnniversaire/Section1.html #sectionann1");
    $('#section2').load("backEnd/LinksAnniversaire/Section2.html #sectionann2");
    $('#section3').load("backEnd/LinksAnniversaire/Section3.html #sectionann3");
    $('#section4').load("backEnd/LinksAnniversaire/Section4.html #sectionann4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_anniversaire.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #DC3FD1',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#DC3FD1',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#DC3FD1',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#DC3FD1',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#DC3FD1',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #DC3FD1',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#DC3FD1',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #DC3FD1',
      'border-left': '2px solid #DC3FD1',
      'border-bottom': '2px solid #DC3FD1',
      'transition': '3s'
    });
  });

  //Animation CSS
  //================================LINK 5 ==============================/
  document.getElementById('link5').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return false;
  };

  document.getElementById('link5').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return false;
  };
  //Effet Audio Event
  $('#link5').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("backEnd/LinksEvenement/Section1.html #sectionevent1");
    $('#section2').load("backEnd/LinksEvenement/Section2.html #sectionevent2");
    $('#section3').load("backEnd/LinksEvenement/Section3.html #sectionevent3");
    $('#section4').load("backEnd/LinksEvenement/Section4.html #sectionevent4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_event.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #FC2A21',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#FC2A21',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#FC2A21',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#FC2A21',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#FC2A21',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #FC2A21',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#FC2A21',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #FC2A21',
      'border-left': '2px solid #FC2A21',
      'border-bottom': '2px solid #FC2A21',
      'transition': '3s'
    });
  });

  //Event Footer
  $('#lien5').click(function() {
    //requête Ajax
    $('#section1').load("backEnd/LinksEvenement/Section1.html #sectionevent1");
    $('#section2').load("backEnd/LinksEvenement/Section2.html #sectionevent2");
    $('#section3').load("backEnd/LinksEvenement/Section3.html #sectionevent3");
    $('#section4').load("backEnd/LinksEvenement/Section4.html #sectionevent4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_event.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #FC2A21',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#FC2A21',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#FC2A21',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#FC2A21',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#FC2A21',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #FC2A21',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#FC2A21',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #FC2A21',
      'border-left': '2px solid #FC2A21',
      'border-bottom': '2px solid #FC2A21',
      'transition': '3s'
    });
  });

  //Animation CSS
  //================================LINK 8 ==============================/
  document.getElementById('link8').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return false;
  };

  document.getElementById('link8').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return false;
  };
  //Effet audio Groupes
  $('#link8').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("backEnd/LinksGroupes/Section1.html #sectiongrp1");
    $('#section2').load("backEnd/LinksGroupes/Section2.html #sectiongrp2");
    $('#section3').load("backEnd/LinksGroupes/Section3.html #sectiongrp3");
    $('#section4').load("backEnd/LinksGroupes/Section4.html #sectiongrp4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_groupes.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #0C2448',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#0C2448',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#0C2448',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#0C2448',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#0C2448',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #0C2448',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#0C2448',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #0C2448',
      'border-left': '2px solid #0C2448',
      'border-bottom': '2px solid #0C2448',
      'transition': '3s'
    });
  });

  //Groupes Footer
  $('#lien8').click(function() {
    //requête Ajax
    $('#section1').load("backEnd/LinksGroupes/Section1.html #sectiongrp1");
    $('#section2').load("backEnd/LinksGroupes/Section2.html #sectiongrp2");
    $('#section3').load("backEnd/LinksGroupes/Section3.html #sectiongrp3");
    $('#section4').load("backEnd/LinksGroupes/Section4.html #sectiongrp4");

    // Animation CSS
    $('header').css({
      'background-image': 'url("images/headers/header_groupes.png")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'border-bottom': '4px solid #0C2448',
      'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#0C2448',
    //     'transition': '3s'
    // });
    $('h2').css({
      'color': '#0C2448',
      'transition': '3s'
    });
    $('.fa').css({
      'color': '#0C2448',
      'transition': '3s'
    });
    $('h3').css({
      'color': '#0C2448',
      'transition': '3s'
    });
    $('hr').css({
      'border': '4px solid #0C2448',
      'transition': '3s'
    });
    $('#btn_map').css({
      'background-color': '#0C2448',
      'transition': '3s'
    });
    $('.bouton_facebook').css({
      'border-top': '2px solid #0C2448',
      'border-left': '2px solid #0C2448',
      'border-bottom': '2px solid #0C2448',
      'transition': '3s'
    });
  });

  //Effet Audio Bistrot
  $('#link4').click(function() {
    $('#' + $(this).attr('rel'))[0].play();

    //requête Ajax
    $('#section-bist1').load("backEnd/LinksBistrot/Section1.html #sectionbist1");
    $('#section-bist2').load("backEnd/LinksBistrot/Section2.html #sectionbist2");
    $('#section-bist3').load("backEnd/LinksBistrot/Section3.html #sectionbist3");
  });

  //Mute Audio
  var son0 = document.getElementById('son0');
  var son1 = document.getElementById('son1');
  var son2 = document.getElementById('son2');
  var son3 = document.getElementById('son3');
  var son4 = document.getElementById('son4');
  var son5 = document.getElementById('son5');
  var son6 = document.getElementById('son6');
  var son7 = document.getElementById('son7');
  var son8 = document.getElementById('son8');

  document.getElementById('mute').addEventListener('click', function(e) {

    e = e || window.event;

    son0.muted = !son0.muted;
    son1.muted = !son1.muted;
    son2.muted = !son2.muted;
    son3.muted = !son3.muted;
    son4.muted = !son4.muted;
    son5.muted = !son5.muted;
    son6.muted = !son6.muted;
    son7.muted = !son7.muted;
    son8.muted = !son8.muted;
    e.defaultPrevented();



  }, false);

  /*BOUTON MAP*/
  $('iframe').hide();

  $('#btn_map').click(function(){
    $('iframe').toggle('clip', 'slow');
    return false;
  });

});
