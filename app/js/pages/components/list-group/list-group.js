require([
    'backbone',
    'clientCore/components/list-group/list-group.view'
], function (Backbone, ListGroupView) {
    var menu = new ListGroupView({
        model: new Backbone.Model({
            active: 0,
            items: [
                {
                    name: 'Home',
                    href: '#home',
                    description: 'Bla bla this is description'
                },
                {
                    name: 'Application',
                    href: '#application',
                    description: 'Bla bla this is description'
                }
            ]
        })
    });

    menu.render();

    $('.list-group-container').append(menu.$el);
});