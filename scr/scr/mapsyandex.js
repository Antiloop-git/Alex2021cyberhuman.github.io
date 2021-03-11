var map;

ymaps.ready(init);

function init() {

    map = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10
    }, {
        searchControlProvider: "yandex#search"
    });
}