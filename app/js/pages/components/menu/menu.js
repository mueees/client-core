require([
    'backbone',
    'clientCore/components/menu/menu.view'
], function (Backbone, MenuView) {
    var menu = new MenuView({
        model: new Backbone.Model({
            items: [
                {
                    name: 'Home',
                    href: '#home'
                },
                {
                    name: 'Application',
                    href: '#application'
                }
            ]
        })
    });

    menu.render();

    $('.menu-container').append(menu.$el);
});