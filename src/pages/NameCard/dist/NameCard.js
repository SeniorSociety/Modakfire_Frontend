"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var Card_1 = require("../../components/Card/Card");
var History_1 = require("../../components/History/History");
var Introduce_1 = require("../../components/Introduce/Introduce");
var NameCard = function () {
    var _a = react_1.useState(true), edit = _a[0], setEdit = _a[1];
    var _b = react_1.useState(), userImage = _b[0], setUserImage = _b[1];
    var _c = react_1.useState(), userName = _c[0], setUserName = _c[1];
    var _d = react_1.useState(), userSlogan = _d[0], setUserSlogan = _d[1];
    var _e = react_1.useState(), userEmail = _e[0], setUserEmail = _e[1];
    var _f = react_1.useState(), userLocal = _f[0], setUserLocal = _f[1];
    var _g = react_1.useState(), historyYear = _g[0], setHistoryYear = _g[1];
    var _h = react_1.useState(), historyTitle = _h[0], setHistoryTitle = _h[1];
    var _j = react_1.useState(), historySubtitle = _j[0], setHistorySubtitle = _j[1];
    var _k = react_1.useState(), introduce = _k[0], setIntroduce = _k[1];
    var _l = react_1.useState(), data = _l[0], setData = _l[1];
    react_1.useEffect(function () {
        axios_1["default"]
            .get('https://www.seso.kr/galleries')
            .then(function (res) {
            setData(res.data.Message);
        })["catch"](function (error) {
            console.log(error);
        });
    }, []);
    function handleuploadData(e) { }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Card_1["default"], { edit: edit, userImage: userImage, userName: userName, userSlogan: userSlogan, userEmail: userEmail, userLocal: userLocal }),
        react_1["default"].createElement(History_1["default"], { edit: edit }),
        react_1["default"].createElement(Introduce_1["default"], { edit: edit })));
};
exports["default"] = NameCard;
