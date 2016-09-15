$(function(){
    $.get( "/news", function( data ) {
        $( ".result" ).html( data );
        console.log( "Load was performed." );
});
});
