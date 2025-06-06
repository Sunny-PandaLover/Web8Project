alert('Welcome!')

function askName () {
    //You did it!
    var nameReturn = document.getElementById('ask-name');
    //Yay!
    var name = prompt('Please enter your answer', 'HERE');
    if (name == '') {
        alert('Please try again');
    } else {
        nameReturn.innerHTML= 'Hello ' + name + '! Nice to meet you!!';
    }
}

function askQuestion() {
    var p = prompt('What are OneRepublic fans called?');
    if (p != null) {
        document.getElementById('question').innerHTML = 'Yikes! ' + p + ' is a crazy answer!';
    }
}