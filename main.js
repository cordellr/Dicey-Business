$(document).ready(function () {

    class Die {
        constructor(value) {
            this.value = value
            this.div = $('<div class="dice-box"></div>');
            $("#dice-container").append(this.div);
            $(this.div).text(value);
        }
    }

    $("#btn-generate").click(function () {
        let value = randomValue();
        let die = new Die(value);
    })

    let randomValue = function() {
        return Math.floor(Math.random() * 6 + 1);
    }


});