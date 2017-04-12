$( document ).ready(function(){

    let questions = [
        {
            question : 'Red'
        },
        {
            question : 'Blue'
        },
        {
            question : 'Yellow'
        },
        {
            question : 'Pink'
        },
        {
            question : 'White'
        },
        {
            question : 'Black'
        },
        {
            question : 'Green'
        },
        {
            question : 'Invisible/Colourless'
        }
    ];

    //questions = shuffle(questions);

    function shuffle(array) {
        var rand, index = -1,
            length = array.length,
            result = Array(length);
        while (++index < length) {
            rand = Math.floor(Math.random() * (index + 1));
            result[index] = result[rand];
            result[rand] = array[index];
        }
        return result;
    }

    $('#start').click(
        function(){
            $('#question').text(questions[0].question);
            console.log(questions.length)
        }
    );

    $('#done').click(
        function(){
            questions.push(questions.shift());
            $('#question').text('');
            console.log(questions.length)
        }
    );
});