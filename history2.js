history.pushState(true, null, location.href);
window.onpopstate = function (e) {
    if (!history.state) {
        alert("もう帰るの？");
    } else {
        history.go(-2);
    }
}