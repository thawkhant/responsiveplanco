  $(window).scroll(function(){
    let xyz = $(this).scrollTop();
    console.log(xyz);

    if(xyz >= 533){
      $(".btn-bott").fadeIn(1000)
    }else{
      $(".btn-bott").fadeOut(1000)
    }
  })

  $(".navbuttons").click(function(){
        	$(".navbuttons").toggleClass("crossx")
        });

  $(window).scroll(function(){
  	let abc = $(this).scrollTop();
  	// console.log(abc)

  	if(abc >= 100){
  		$(".navbar").addClass("navmenu")
  	}else{
  		$(".navbar").removeClass('navmenu')
  	}

  });


  $(".listprop").click(function(){
      // console.log("hi")
      // $(this).addClass("activeitems");
      // $(this).siblings().removeClass("activeitems");
      $(this).addClass("activeitems").siblings().removeClass("activeitems");

      let getattvalue = $(this).attr("data-filter");
       // console.log(getattvalue);

       if(getattvalue === 'all'){
        $('.filters').show('slide',1000);
       }else{  
        $(".filters").hide();
        $('.filters').not("."+getattvalue).hide("slide",1000);
        $('.filters').filter("."+getattvalue).show("slide",1000)
       }
    })

  $(window).scroll(function(){
    let haha = $(this).scrollTop();
    //console.log(haha);

    if(haha >= 984){
      $(".imgl").addClass("left");
      $(".text").addClass("right");
    }else{
      $(".imgl").removeClass("left");
      $(".text").removeClass("right")
    }
  })

  const getyr = $("#getyear")
  const fullyear = new Date().getFullYear();
  getyr.text(fullyear);
