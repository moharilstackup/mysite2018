window.onload = function () {
    var screen;
    var output;
    var limit;
    var zero;
    var period;
    var operator;

    screen = document.getElementById("result");
    screen.innerHTML = "";
    output = "";

    var elem = document.querySelectorAll(".num");
    var len = elem.length;

    for (var i = 0; i < len; i++) {
        elem[i].addEventListener("click", function () {
            num = this.value;
            output = screen.innerHTML += num;
            limit = output.length;

            if (limit > 16) {
                alert("You have exceeded the max number of characters");
            }
        }, false);
    }

    var elemZero = document.querySelector(".zero");
    elemZero.addEventListener("click", function () {
        zero = this.value;

        if (screen.innerHTML === "") {
            screen.innerHTML = zero;
            output = screen.innerHTML;  //output = screeninnerHTML = zero;
        } else if (screen.innerHTML === output) {
            screen.innerHTML = screen.innerHTML + zero;
            output = screen.innerHTML;  //output = screen.innerHTML += zero
        }
    }, false);

    /* var elemZero = document.querySelector(".zero");
        elemZero.addEventListener("click",)


} else if (screen.innerHTML === output) {}
screen.innerHTML = screen.innerHTML + zero;    
output = screen.innerHTML;
}
}, false);
 */
    document.querySelector(".period").addEventListener("click", function () {
        period = this.value;

        if (screen.innerHTML === "") {
            screen.innerHTML = screen.innerHTML.concat("0.");
            output = screen.innerHTML;
        } else if (screen.innerHTML === output) {
            screen.innerHTML = screen.innerHTML + period;
            output = screen.innerHTML;
        }
    }, false);


    document.querySelector("#delete").addEventListener("click", function () {
        screen.innerHTML = "";
        output = "";
    }, false);

    var elemOperator = document.querySelectorAll(".operator");
    var len2 = elemOperator.length;

    for (var i = 0; i < len2; i++) {
        elemOperator[i].addEventListener("click", function () {
            operate = this.value;

            if (screen.innerHTML === "") {
                screen.innerHTML = screen.innerHTML.concat("");
            } else if (output) {
                screen.innerHTML = screen.innerHTML.concat(operate);
                output = screen.innerHTML;
            }
        }, false);
    }

    document.querySelector("#eqn-bg").addEventListener("click", function () {
        if (screen.innerHTML === "") {
            screen.innerHTML = "";
            output = "";
        } else if (screen.innerHTML === output) {
            screen.innerHTML = eval(output);
        }
    }, false);

}