var romanToInt = function(s) {

    let map = new Map();

    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);

    let result = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] + s[i + 1] == "IV") {
            result += 4;
            i++;
        }
        else if (s[i] + s[i + 1] == "IX") {
            result += 9;
            i++;
        }
        else if (s[i] + s[i + 1] == "XL") {
            result += 40;
            i++;
        }
        else if (s[i] + s[i + 1] == "XC") {
            result += 90;
            i++;
        }
        else if (s[i] + s[i + 1] == "CD") {
            result += 400;
            i++;
        }
        else if (s[i] + s[i + 1] == "CM") {
            result += 900;
            i++;
        }
        else {
            result += map.get(s[i]);
        }
    }

    return result;
};