/******************************************** PARAMÈTRE *********************************************/

/**/var infinitySlider = true; // Rend le slider infinie

/**/var itemScreen = 1; // Combien d'items doit etre afficher par screen

/**/var navigationSlider = true; // Affiche la navigation

/**/var navigationSliderDots = true; // Affiche les points de navigation

/**/var autoPlay = true; // Défilement automatique

/**/var speed = 15000; // Nombre de seconde avant changement de slide automatique.

/**/var dureeTransition = 500;// Durée de la transition entre deux slides.

/**/var positionFleches = 50; // Règle la position des fleches du slider en pourcentage

/****************************************************************************************************/

$(document).ready(function() {

    // Slider FULL SCREEN
    $('.wingz').owlCarousel({
        // Combien d'élément visible sur le screen
        items:itemScreen,


        // Effet infinie
        loop:infinitySlider,

        // Navigation
        nav:navigationSlider,

        // Points
        dots:navigationSliderDots,

        //!\ ATTENTION LE CHEMIN DES IMAGES SONT DANS LE DUR /!\
        navText:false,

        // Vitesse de défilement
        smartSpeed:dureeTransition,
        fluideSpeed:dureeTransition,
        autoplaySpeed:dureeTransition,
        navSpeed:dureeTransition,
        dotsSpeed:dureeTransition,
        dragEndSpeed:dureeTransition,

        // Autoplay
        autoplay:autoPlay,
        autoplayTimeout:speed,
        autoplayHoverPause:false // Si true le slide ce stop bien mais redémare uniquement si un click ce fait

    });
    
    // Slider Galerie News
    $('.single-new-galerie').owlCarousel({
        // Combien d'élément visible sur le screen
        items:itemScreen,


        // Effet infinie
        loop:infinitySlider,

        // Navigation
        nav:navigationSlider,

        // Points
        dots:false,

        //!\ ATTENTION LE CHEMIN DES IMAGES SONT DANS LE DUR /!\
        navText:false,

        // Vitesse de défilement
        smartSpeed:dureeTransition,
        fluideSpeed:dureeTransition,
        autoplaySpeed:dureeTransition,
        navSpeed:dureeTransition,
        dotsSpeed:dureeTransition,
        dragEndSpeed:dureeTransition,

        // Autoplay
        autoplay:false,
        autoplayTimeout:false,
        autoplayHoverPause:false // Si true le slide ce stop bien mais redémare uniquement si un click ce fait

    });

    // Slider CALENDRIER
   $('.carousel-partenaires').owlCarousel({
        // Combien d'élément visible sur le screen
        items:3,

        // Effet infinie
        loop:infinitySlider,

        // Navigation
        nav:navigationSlider,

        // Points
        dots:false,

        //!\ ATTENTION LE CHEMIN DES IMAGES SONT DANS LE DUR /!\
        navText:false,

        // Vitesse de défilement
        smartSpeed:dureeTransition,
        fluideSpeed:dureeTransition,
        autoplaySpeed:dureeTransition,
        navSpeed:dureeTransition,
        dotsSpeed:dureeTransition,
        dragEndSpeed:dureeTransition,

        // Autoplay
        autoplay:false,
        autoplayTimeout:false,
        autoplayHoverPause:false, // Si true le slide ce stop bien mais redémare uniquement si un click ce fait

       responsive : {
           700 : { items:8}
       }

    }); 

    // Calcul la hauteur
    var hauteurControl = $('i.fa img').height();
    // Divise la hauteur par 2
    var demiHauteurControl = hauteurControl / 2;
    // Ajoute le css au control du slider
    $("i.fa").css("top", "calc(" + positionFleches + "% - " + demiHauteurControl + "px)"); // Valeur dur

    
    if (window.matchMedia("(min-width: 1025px)").matches) {
        // Au cick garde la previsu next
        $(".wingz .owl-next").click(function(){
            $(".owl-item").removeClass("visu-slide-next");
            // Active la prévisu de la slide suivante si il est hover de #previous-right
            $(".owl-item.active").next().addClass("visu-slide-next");
            $(".owl-item").css("z-index", "0");
        });

        // Au cick garde la previsu prev
        $(".wingz .owl-prev").click(function(){
            $(".owl-item").removeClass("visu-slide-prev");
            $(".owl-item").css("z-index", "0");
            // Active la prévisu de la slide suivante si il est hover de #previous-right
            $(".owl-item.active").prev().addClass("visu-slide-prev");
            $(".owl-item.active").prev().css("z-index", "999");

        });
            // Affiche la previsu slide suivante au hover
        $(".wingz .owl-next").hover(function(){
            $(".owl-item").removeClass("visu-slide-next");
            $(".owl-item.active").next().addClass("visu-slide-next");
        });
        $(".wingz .owl-next").mouseout(function(){
            $(".owl-item").removeClass("visu-slide-next");
            $(".owl-item.active").next().removeClass("visu-slide-next");
        });

        // Affiche la previsu slide précedente au hover
        $(".wingz .owl-prev").hover(function(){
            $(".owl-item").removeClass("visu-slide-prev");
            $(".owl-item.active").prev().css("z-index", "999");
            $(".owl-item.active").prev().addClass("visu-slide-prev");

        });
        $(".wingz .owl-prev").mouseout(function(){
            $(".owl-item.active").removeClass("visu-slide-prev");
            $(".owl-item.active").prev().removeClass("visu-slide-prev");
        }); 
        
    }
 
    // Si click sur les puce réinitialise le z-index
    $(".wingz .owl-dot").click(function(){
        $(".owl-item").css("z-index", "0");
    });
    
    $('.active .image-full-slider').addClass("transition-slider");
    
});

// Positionne les points du slider
$(document).ready(function() {
    
    // Recupere la class pour regler probleme des cloned
    $(".slide0").parents('.owl-item').addClass('slide-0');
    $(".slide1").parents('.owl-item').addClass('slide-1');
    $(".slide2").parents('.owl-item').addClass('slide-2');
    $(".slide3").parents('.owl-item').addClass('slide-3');
    
    // Ajuste également la slide cloned
        // Slide 0
        if($(".slide-0").hasClass("active")){
            $(".cloned.slide-0").addClass("active");
        } 
        if($(".cloned.slide-0").hasClass("active")){
            $(".slide-0").addClass("active");
        }
        
        // Slide 1
        if($(".slide-1").hasClass("active")){
            $(".cloned.slide-1").addClass("active");
        } 
        if($(".cloned.slide-1").hasClass("active")){
            $(".slide-1").addClass("active");
        }
       
        // Slide 2
        if($(".slide-2").hasClass("active")){
            $(".cloned.slide-2").addClass("active");
        } 
        if($(".cloned.slide-2").hasClass("active")){
            $(".slide-2").addClass("active");
        }
    
        // Slide 3
        if($(".slide-3").hasClass("active")){
            $(".cloned.slide-3").addClass("active");
        } 
        if($(".cloned.slide-3").hasClass("active")){
            $(".slide-3").addClass("active");
        }
    
    // Position de base
    //var heightContentSlideshow = $(".home-slideshow .owl-item.active .content-slideshow").height();
    //var diviseHeight = heightContentSlideshow / 2 + 30;
    //var contentSliderCss = "calc(50% + " + diviseHeight + "px)";
    //$(".home-slideshow .owl-dots").css("top", contentSliderCss);
    
    // Position au click
    $(".owl-nav").click(function(){
        //var heightContentSlideshow = $(".home-slideshow .owl-item.active .content-slideshow").height();
        //var diviseHeight = heightContentSlideshow / 2 + 30;
        //var contentSliderCss = "calc(50% + " + diviseHeight + "px)";
        //$(".home-slideshow .owl-dots").css("top", contentSliderCss);
        
        // Ajuste également la slide cloned
        // Slide 0
        if($(".slide-0").hasClass("active")){
            $(".cloned.slide-0").addClass("active");
        } 
        if($(".cloned.slide-0").hasClass("active")){
            $(".slide-0").addClass("active");
        }
        
        // Slide 1
        if($(".slide-1").hasClass("active")){
            $(".cloned.slide-1").addClass("active");
        } 
        if($(".cloned.slide-1").hasClass("active")){
            $(".slide-1").addClass("active");
        }
       
        // Slide 2
        if($(".slide-2").hasClass("active")){
            $(".cloned.slide-2").addClass("active");
        } 
        if($(".cloned.slide-2").hasClass("active")){
            $(".slide-2").addClass("active");
        }
    });
    // Position au click
    $(".owl-dots").click(function(){
        //var heightContentSlideshow = $(".home-slideshow .owl-item.active .content-slideshow").height();
        //var diviseHeight = heightContentSlideshow / 2 + 30;
        //var contentSliderCss = "calc(50% + " + diviseHeight + "px)";
        //$(".home-slideshow .owl-dots").css("top", contentSliderCss);
        
        // Ajuste également la slide cloned
        // Slide 0
        if($(".slide-0").hasClass("active")){
            $(".cloned.slide-0").addClass("active");
        } 
        if($(".cloned.slide-0").hasClass("active")){
            $(".slide-0").addClass("active");
        }
        
        // Slide 1
        if($(".slide-1").hasClass("active")){
            $(".cloned.slide-1").addClass("active");
        } 
        if($(".cloned.slide-1").hasClass("active")){
            $(".slide-1").addClass("active");
        }
       
        // Slide 2
        if($(".slide-2").hasClass("active")){
            $(".cloned.slide-2").addClass("active");
        } 
        if($(".cloned.slide-2").hasClass("active")){
            $(".slide-2").addClass("active");
        }
    });
    
    // Position resize
    /*$(window).on("resize",function() {
        var heightContentSlideshow = $(".home-slideshow .owl-item.active .content-slideshow").height();
        var diviseHeight = heightContentSlideshow / 2 + 30;
        var contentSliderCss = "calc(50% + " + diviseHeight + "px)";
        $(".home-slideshow .owl-dots").css("top", contentSliderCss);
    });*/
    
    // Position dragable
    $("#home-section1").mousedown(function(){
        //$("#home-section1 .owl-dots").css('opacity', '0');   
        $(window).mouseup(function(){   
            //var heightContentSlideshow = $(".home-slideshow .owl-item.active .content-slideshow").height();
            //var diviseHeight = heightContentSlideshow / 2 + 30;
            //var contentSliderCss = "calc(50% + " + diviseHeight + "px)";
            //$(".home-slideshow .owl-dots").css("top", contentSliderCss);   
            // Ajuste également la slide cloned
        // Slide 0
        if($(".slide-0").hasClass("active")){
            $(".cloned.slide-0").addClass("active");
        } 
        if($(".cloned.slide-0").hasClass("active")){
            $(".slide-0").addClass("active");
        }
        
        // Slide 1
        if($(".slide-1").hasClass("active")){
            $(".cloned.slide-1").addClass("active");
        } 
        if($(".cloned.slide-1").hasClass("active")){
            $(".slide-1").addClass("active");
        }
       
        // Slide 2
        if($(".slide-2").hasClass("active")){
            $(".cloned.slide-2").addClass("active");
        } 
        if($(".cloned.slide-2").hasClass("active")){
            $(".slide-2").addClass("active");
        }
        }); 
        // Ajuste également la slide cloned
        // Slide 0
        if($(".slide-0").hasClass("active")){
            $(".cloned.slide-0").addClass("active");
        } 
        if($(".cloned.slide-0").hasClass("active")){
            $(".slide-0").addClass("active");
        }
        
        // Slide 1
        if($(".slide-1").hasClass("active")){
            $(".cloned.slide-1").addClass("active");
        } 
        if($(".cloned.slide-1").hasClass("active")){
            $(".slide-1").addClass("active");
        }
       
        // Slide 2
        if($(".slide-2").hasClass("active")){
            $(".cloned.slide-2").addClass("active");
        } 
        if($(".cloned.slide-2").hasClass("active")){
            $(".slide-2").addClass("active");
        }
    });
    
    /*$(window).mouseup(function(){
        setTimeout(function(){
            $("#home-section1 .owl-dots").css('opacity', '1'); 
        }, 1250);
    });*/

});