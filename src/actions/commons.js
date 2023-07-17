export function pad_with_zeroes(number, length = 8) {

    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }

    return my_string;

}

export const truncSentence = (sentence, truncNum = 24) => {
    return sentence.length > (truncNum + 2) ? sentence.substr(0, truncNum) + '...' : sentence;
}

export const currencyConverter = (text) => (text);

export const hasValidCharacters = (value) => {
    if (!value) return "";
    value = value.replace(/["]+/g, '')
    // eslint-disable-next-line
    var s = "!@#$%^&*()+=[]\\\';,.{}|\"\”:<>?/";
    for (var i = 0; i < value.length; i++) {
        if (s.indexOf(value.charAt(i)) !== -1) {
            return false;
        }
    }
    return true;
}

export const removeSpecialCharacters = (value) => {
    if (!value) return "";
    value = value.replace(/["]+/g, '')
    // eslint-disable-next-line
    var s = "!@#$%^&*()+=[]\\\';,.{}|\"\”:<>?/";
    let finalString = "";
    for (var i = 0; i < value.length; i++) {
        if (s.indexOf(value.charAt(i)) !== -1) {

        } else {
            finalString += value.charAt(i);
        }
    }
    return finalString;
}