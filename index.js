fin.desktop.main(init);

var create = document.getElementById('create'),
    close = document.getElementById('close'),
    uuid = 'window-position',
    childWins = ['a', 'b', 'c'];

function init() {

    fin.desktop.System.clearCache({
        cache: true,
        cookies: true,
        localStorage: false,
        appcache: false,
        userData: false
    }, setUpListeners);
}

function setUpListeners() {
    create.addEventListener('click', function() {
        childWins.forEach(function(name) {
            new fin.desktop.Window({
                name: name,
                url: 'child.html?=' + name,
                autoShow: true,
                frame: false,
                defaultWidth: 402,
                defaultHeight: 300
            });
        });
    });

    close.addEventListener('click', function() {
        childWins.forEach(function(name) {
            fin.desktop.Window.wrap(uuid, name).close();
        });
    });
}
