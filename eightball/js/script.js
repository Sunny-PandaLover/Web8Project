//alert ("Hello!")

function shake() {
    flip()
    var fortune = get_a_fortune()
    display_fortune(fortune)
}

function flip () {
    // we aren't animating yet
}

function get_a_fortune() {
    
    let fortunes = ["Signs point to yes", "My sources say no", "Better not to tell you now", "Reply hazy, try again"]
    let random_index = randInt(fortunes.length)
    return fortunes[random_index]
}

function randInt(length) {
    let r = Math.random()
    let br = r * length
    let index = Math.floor(br)
    return index
}

function display_fortune(fortune) {
    alert(fortune)
}