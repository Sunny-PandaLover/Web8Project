alert('Welcome to my Webpage!')

function askName () {
    //You did it!
    var nameReturn = document.getElementById('ask-name');
    //Yay!
    var name = prompt('Please enter your answer', 'HERE');
    if (name == '') {
        alert('Please try again');
    } else {
        nameReturn.innerHTML= 'Hello ' + name + '! Nice to meet you! I hope you like my webpage.';
    }
}

function first() {
    var firstfavorite = document.getElementById('first');
    var firstanswer = 'This is one of my favorite classes because theres lots of hands on experiments and creative oppurtunities for learning. One of my favorite labs we did in this class is the Flame Test Lab in which we used a tirril burner to see how different types of flames burned different colors.';
    firstfavorite.innerHTML = firstanswer
}
 
function second() {
   var secondfavorite = document.getElementById('second');
    var secondanswer = 'I love LT3 because we get to read interesting books like Hunger Games, Life of Pi, and Hadestown. I have also gotten much better at annotating and analyzing and am able to identify unique themes within books. One of my favorite things we did this year in this class are the Hades Town skits.';
    secondfavorite.innerHTML = secondanswer
}
 
function third() {
    var thirdfavorite = document.getElementById('third');
    var thirdanswer = 'I enjoy History because I get to learn about the world and how people have overtime came together to form what we now call "society. My favorite project we have done in this class is Mosiac Moses in which we made a 3-d popout of our assigned portion of the story.';
    thirdfavorite.innerHTML = thirdanswer
}