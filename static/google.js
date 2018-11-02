function bot() {
    var c = document.getElementById('effie').value;
    if (c != '') {
        document.getElementById('error').innerHTML = '';
        return window.alert(c);
    }
    else if (c.trim() == '') {

        b = document.getElementById('error').innerHTML = 'Please input something';
        return b;
    }
}