$( document ).ready(function(){

    $.getJSON( "questions.json", function(data) {
        console.log( data);
    })
});


