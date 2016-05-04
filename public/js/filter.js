angular.module('phoneNumberFormat')
.filter('phoneNumber',function() {
    return function (num) {
        var cc;
        var countries = [{
            cc: '1',
            format: function (n) { //USA: E.123 international	+1 (AAA) BBB-CCCC
                return '+1 (' + n.substr(n.length - 10, 3) + ') ' + n.substr(n.length - 7, 3) + '-' + n.slice(-4);
            }
        }, {
            cc: '44',
            format: function (n) { //UK: E.123 international	+44 AA BBBB CCCC
                return '+44 ' + n.substr(n.length - 10, 2) + ' ' + n.substr(n.length - 8, 4) + ' ' + n.slice(-4);
            }
        }, {
            cc: '61',
            format: function (n) { //AUSTRALIA: E.123 international	+61 (AA) BBBB CCCC
                return '+61 (' + n.substr(n.length - 10, 2) + ') ' + n.substr(n.length - 8, 4) + ' ' + n.slice(-4);
            }
        }, {
            cc: '49',
            format: function (n) { //GERMANY: E.123 international	+49 AAAA BBBBBB
                return '+49 ' + n.substr(n.length - 10, 4) + ' ' + n.slice(-6);
            }
        }, {
            cc: '7',
            format: function (n) { //RUSSIA: +7 AAA BBB-CC-DD
                return '+7 ' + n.substr(n.length - 10, 3) + ' ' + n.substr(n.length - 7, 3) + '-' + n.substr(n.length - 4, 2) + '-' + n.slice(-2);
            }
        }];

        if (!num || num.match(/[^\s\+\.\-\(\)0-9]/)) {
            return '';
        }
        var numF = num.toString().trim().replace(/[^0-9]/g, '');

        if (numF.length > 15) {
            return '';
        }

        if (numF.length == 10) {
            cc = '1';//country code
            return countries[0].format(numF);
        }
        else if (numF.length > 10) {
            cc = numF.slice(0, numF.length - 10);
            for (i = 0; i < countries.length; i++) {
                if (cc == countries[i].cc) {
                    return countries[i].format(numF.slice(-10));
                }
            }
        }
    }
});
