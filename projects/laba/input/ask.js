module.exports.ask = function () {
    let answer = prompt("с каким массивом вы хотите работать?" + "\n" + "1 - одномерный " + "\n" + "2 - двумерный " + "\n" + "3 - ступенчатый ")
    switch (answer) {
        case "1":
            ASK_WHICH_TYPE_INPUT_FOR_ONE_DIMENSION_ARRAY();
            break;
        case "2":
            ASK_WHICH_TYPE_INPUT_FOR_TWO_DIMENSION_ARRAY();
            break;
        case "3":
            WHICH_TYPE_FOR_STEP();
            break;
            
    }

}
