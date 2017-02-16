<<<<<<< HEAD
let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    }
    if (answer.value == '' || attempt.value == ''){
      setHiddenFields();
    }
    if (!validateInput(input.value)){
      return;
    }
    attempt.value = attempt.value++

    if (getResults(input.value)){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    } else if (attempt.value >= 10){
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    } else {
      setMessage("Incorrect, try again");
    }
}

function setHiddenFields() {
    answer.value = Math.floor(10000*math.random()).toString();
    while (answer.value.lenth() < 4){
      answer = '0' + answer
    };
    answer.value = answer.value.toInt();
    attempt.value = 0;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if (input.value.length != 4){
      setMessage("Guesses must be exactly 4 characters long.")
      return false;
    }
    return true;
}

function getResults(input){
    let html = `<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">`;
    for (i = 0; i < input.length; i++) {
        if(input.charAt(i) = answer.value.charAt(i)){
            html += `<span class="glyphicon glyphicon-ok"></span>`;
        } else if(answer.value.indexOf(input.charAt(i)) > -1) {
            html += `<span class="glyphicon glyphicon-transfer"></span>`;
        } else {
            html += `<span class="glyphicon glyphicon-remove"></span>`;
        }
    }
    html += '</div></div>';
    document.getElementById('results').innerHTML += html;

    if (input == answer.value){
      return true;
    }
    return false;
}

function showAnswer(success) {
    let code = document.getElementById('code');
    if (success) {
        code.className += ' success';
    } else {
        code.className += ' falure';
    }
    code.innerHTML = answer.value;
}

function showReplay() {
    document.getElementById('guessing-div').style.display = 'none';
    document.getElementById('replay-div').style.display = 'block';
=======
function guess(){
    let answer = document.getElementById('answer').value;
    let attempt = document.getElementById('attempt').value;
    let code = document.getElementById('code');
    let guessingDiv = document.getElementById('guessing-div');
    let input = document.getElementById('user-guess').value;
    let message = document.getElementById('message');
    let replayDiv = document.getElementById('replay-div');
    let results = document.getElementById('results');

    message.innerHTML = "";

    if(answer == "") {
        answer = Math.floor(Math.random() * 10000).toString();
        while(answer.length < 4) {
            answer = "0" + answer;
        }
        document.getElementById('answer').value = answer;
    }
    if(attempt == "") {
        attempt = 0;
    }

    if(input.length != 4) {
        message.innerHTML = 'Guesses must be exactly 4 characters long.';
        return;
    } else {
        attempt++;
        document.getElementById('attempt').value = attempt;
    }

    let correct = 0;
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for(i = 0; i < input.length; i++)
    {
        if(input.charAt(i) == answer.charAt(i))
        {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.indexOf(input.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';

    results.innerHTML += html;

    if(correct == input.length) {
        message.innerHTML = 'You Win! :)';
        code.className += " success";
        code.innerHTML = answer;
        guessingDiv.style = "display:none";
        replayDiv.style = "display:block";
    } else if(attempt >= 10) {
        message.innerHTML = 'You Lose! :(';
        code.className += " failure";
        code.innerHTML = answer;
        guessingDiv.style = "display:none";
        replayDiv.style = "display:block";
    } else {
        message.innerHTML = 'Incorrect, try again.';
    }
>>>>>>> 6b19da325dad25cb99aa3844afa75da68c40350d
}
