
const string = document.querySelector('#message');


const encodeMessage = () => {

    let str = string.value;
    let message = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let length = message.length;
    let dimensions = Math.ceil(Math.sqrt(length));
    

    if (length > 81 || length < 5) {
        alert
            ("Invalid message, Input more than one word and less then 81 characters!");
        return false;
    }

    function squareCode(dimensions) {
        var matrica = [];
        for (var i = 0; i < dimensions; i++) {
            var row = message.substr(i * dimensions, dimensions);
            matrica.push(row);
        }
        return matrica;

    }

    function encodedParts(matrica, dimensions) {
        var encodedMess = " ";
        for (let i = 0; i < dimensions; i++) {
            for (let j = i; j < length; j += dimensions) {

                encodedMess += message[j];

            }
            encodedMess += " ";
        }

        return encodedMess;
    }

    matrica = squareCode(dimensions);
    encodedMess = encodedParts(matrica, dimensions);

    document.getElementById("encoded_rectangle").innerHTML = matrica.join("<br/> ");
    document.getElementById("encoded_message").innerHTML = encodedMess;


}




