$(document).ready(function(){
   $('#plus').click(function( ){
    $('#box').fadeToggle("fast");
     $('#plusminus').toggleClass("shift");
     $('#slimpanel').toggleClass("shiftslim");
     $('#content').toggleClass("bgtoggle");
   });
});

  var bgs = [
            "url('img/food.jpg')",
            "url('img/berries.jpg')",
            "url('img/sushi.jpg')",
            "url('img/sashimi.jpg')",
            ];


  $(document).ready(function(){
   $('.select_item').click(function( ){

    var ditem = $(this).attr('data-item');

     $('.content_item').hide("slow").filter( '[data-item="'+ditem+'"]' ).show("slow");

	var selected = $('.select_item' ).hasClass( "activeitem" );
	if ( selected !== false && selected !== $(this) ) {
		 $( '.activeitem' ).removeClass( "activeitem" );
	 }
	$(this).addClass( "activeitem" );

     var bgimage;

     switch( ditem ) {
       case "p1":
         bgimage = bgs[0];
         break;
       case "p2":
         bgimage = bgs[1];
         break;
       case "p3":
         bgimage = bgs[2];
         break;
       case "p4":
         bgimage = bgs[3];
         break;
     }

       $('#content').css({"background-image" : bgimage});
        return false;
    });
});
