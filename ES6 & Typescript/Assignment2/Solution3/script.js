"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var count = -1;
function getArmstrong() {
    var flag, i, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                flag = 0;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 9]);
                _a.label = 2;
            case 2:
                if (!(flag == 0)) return [3 /*break*/, 6];
                i = returnArmstrong(++count);
                if (!(i < 1000)) return [3 /*break*/, 4];
                return [4 /*yield*/, i];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                flag = 1;
                throw 'Went over 1000';
            case 5: return [3 /*break*/, 2];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1 = _a.sent();
                return [4 /*yield*/, e_1];
            case 8:
                _a.sent();
                return [3 /*break*/, 9];
            case 9: 
            //using resetArmstrong() to reset armstrong
            return [4 /*yield*/, (resetArmstrong())];
            case 10:
                //using resetArmstrong() to reset armstrong
                _a.sent();
                return [4 /*yield*/, (returnArmstrong(++count))];
            case 11:
                _a.sent();
                return [4 /*yield*/, (returnArmstrong(++count))];
            case 12:
                _a.sent();
                //using resetArmstrong() to reset armstrong
                return [4 /*yield*/, (resetArmstrong(++count))];
            case 13:
                //using resetArmstrong() to reset armstrong
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function returnArmstrong(num) {
    for (var i = num; i < 1000; i++) {
        var noOfDigits = i.toString().length;
        var temp = i;
        var sum = 0;
        while (temp > 0) {
            var remainder = temp % 10;
            sum += Math.pow(remainder, noOfDigits);
            temp = Math.floor(temp / 10);
        }
        if (sum === i) {
            count = sum;
            return i;
        }
    }
}
function resetArmstrong() {
    count = 0;
    return returnArmstrong(count);
}
var armstrong = getArmstrong();
for (var j = 0; j <= 17; j++) {
    console.log(armstrong.next().value);
}
