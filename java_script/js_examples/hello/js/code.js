let value1 = document.querySelectorAll('.word')
let value = [];
for (let index = 0; index < value1.length; index++) {
    const element = value1[index];
    value[index] = element.innerHTML
    console.log(element)
}
let render = {
    alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    get_span_value: function () {
        let span = document.querySelectorAll('.word')
        return span
    },
    get_random_words: function () {
        let random_number = parseInt((Math.random() * 26))
        return render.alphabet[random_number];
    },
    replase_words: function () {
        let words_array = render.get_span_value();
        for (let ind = 0; ind < words_array.length; ind++) {
            const element = words_array[ind];

            words_array[ind].innerHTML = ''
            words_array[ind].setAttribute('class', 'word predator')
            block_node = document.createTextNode(render.get_random_words())
            words_array[ind].appendChild(block_node)
        }
    },
    lunch_replase: function () {
        let interval = setInterval(render.replase_words, 100);
        setTimeout(() => {
            clearInterval(interval)
        }, 1500);
    },

    return_value: function() {
        let words_array = render.get_span_value()
        for (let index = 0; index < value.length; index++) {
            const element = value[index];
            let param = element
            words_array[index].innerHTML = ''
            block_node = document.createTextNode(param)
            words_array[index].setAttribute('class', 'word normal')
            words_array[index].appendChild(block_node)
        }
    },
    lunch_return_value: function() {
        setTimeout(() => {
            render.return_value()
        }, 1500);
    },

    lunch: function() {
        render.lunch_replase()
render.lunch_return_value()
    }
};

let test = document.querySelector('#test')

test.addEventListener('click', render.lunch)
test.addEventListener('mouseover', console.log(1))
// render.lunch()

// setTimeout(() => {
//     clearInterval(a)
// }, 200);