$(document).ready(function () {

    let diceArray = [];

    class Die {
        constructor(value) {
            //gets value from roll function when new die is created
            this.value = value;
            //created die with value inserted
            this.div = $('<div class="dice-box"></div>');
            $("#dice-container").append(this.div);
            $(this.div).text(value);

            //adds die to array, helpful in working with all dice
            diceArray.push(this);

            //performs roll on specific die clicked
            $(this.div).click(() => {
                this.value = roll();
                $(this.div).text(this.value);
            });

            //removes dice by removing div and the associated value from the array, so that sum can be properly calculated
            $(this.div).dblclick(() => {
                $(this.div).remove();
                diceArray.splice($.inArray(this, diceArray),1);
            });


        }
    }

    //generates a new Die class object and assigns it a value
    $("#btn-generate").click(function () {
        let value = roll();
        let die = new Die(value);
    })

    //calculates random value between 1 and 6
    let roll = function () {
        return Math.floor(Math.random() * 6 + 1);
    }

    //Resets all current dice with new random values
    $("#btn-rollAll").click(function () {
        for (let i = 0; i < diceArray.length; i++) {
            //rolls dice, new value and text to match that value
            let diceValue = roll();
            diceArray[i].div.text(diceValue);
            diceArray[i].value = diceValue;
        }
    })

    //button sums values of all dice, displays alert
    $("#btn-sum").click(function () {
        let sum = 0;
        for (let i = 0; i < diceArray.length; i++) {
            sum += diceArray[i].value;
        }
        alert(`The sum of all dice is ${sum}.`)
    });

});