$(document).ready(function() {
    localStorage.setItem('test', 'test')
    if (localStorage.getItem('test') != 'test') {
        alert('偵測到此瀏覽器不支援localstorage，部分功能將無法運作');
    } else {
        console.log('webstorage supported!');
        localStorage.removeItem('test');
    };
});