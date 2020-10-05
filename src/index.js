module.exports = function toReadable(number) {
    let result = '';
    let read = false;
    const numberDB = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'one hundred',
        '200': 'two hundred',
        '300': 'three hundred',
        '400': 'four hundred',
        '500': 'five hundred',
        '600': 'six hundred',
        '700': 'seven hundred',
        '800': 'eight hundred',
        '900': 'nine hundred',
    };
    const checkObj = function (primaryKey) {
        if (result != '') {
            for (let key in numberDB) {
                if (String(primaryKey) === '0') {
                    result += '';
                    read = true;
                } else if (String(primaryKey) === key) {
                    result += ' ' + numberDB[key];
                    read = true;
                }
            }
        } else {
            for (let key in numberDB) {
                if (String(primaryKey) === key) {
                    result += numberDB[key];
                }
            }
        }
    };

    if (number < 20) {
        checkObj(number);
        return result;

        // ===============================================================================================================
    } else if (number < 100) {
        const a = number % 100; // 23
        const b = String(number).slice(0, 1) * 10; // 20
        const c = number % 10; // 3

        // if 'a' has match --> break
        checkObj(a);
        if (result != '') return result;

        // if 'b' and 'c' have match --> break
        checkObj(b);
        checkObj(c);
        if (result != '') return result;

        // ===============================================================================================================
    } else if (number < 1000) { //943
        const a = number % 1000; //943
        const b = number % 100; //43
        const c = number % 10; //3
        const d = String(number).slice(0, 1) * 100; // 900
        const f = String(number).slice(1, 2) * 10; // 40

        // if 'a' has match --> break
        checkObj(a);
        if (result != '') return result;

        // if 'd' and 'b' have match --> break
        checkObj(d);
        checkObj(b);
        if (read === true) {
            return result;
        } else result = '';

        // if 'd' and 'f' and 'c' have match --> break
        checkObj(d);
        checkObj(f);
        checkObj(c);
        if (result != '') return result;
    }
};
