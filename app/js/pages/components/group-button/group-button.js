require([
    'backbone',
    'clientCore/components/group-button/group-button.view'
], function (Backbone, GroupButtonView) {
    var groupButtonView = new GroupButtonView({
        model: new Backbone.Model({
            active: 1,
            items: [
                {
                    name: 'Day',
                    value: 1
                },
                {
                    name: 'Week',
                    value: 2
                },
                {
                    name: 'Month',
                    value: 2
                },
                {
                    name: 'Agenda',
                    value: 2
                }
            ]
        })
    });

    groupButtonView.render();

    $('.group-button-container').append(groupButtonView.$el);
});