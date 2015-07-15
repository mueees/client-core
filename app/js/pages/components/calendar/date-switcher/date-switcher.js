define([
    'marionette',
    'backbone',
    'moment',
    'clientCore/components/calendar/date-switcher/date-switcher.controller'
], function (Marionette, Bakcbone, moment, DateSwitcher) {

    var dateModel = new Bakcbone.Model({
            type: 1,
            start: new Date(),
            end: moment(new Date()).add(3, 'd').toDate()
        }),
        dateSwitcher = new DateSwitcher({
            model: dateModel,
            region: new Marionette.Region({
                el: '.date-switcher'
            })
        });

    dateSwitcher.show();
});