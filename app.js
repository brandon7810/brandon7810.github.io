fetch("questions.json")
    .then(response => response.json())
    .then(questions => {

        for(var i=0; i<questions.length; i++){
            console.log(questions[i])
        }
    });