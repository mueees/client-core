define([
    'backbone',
    'moment',
    'clientCore/components/calendar/date-viewer/date-viewer.view'
], function (Bakcbone, moment, DateViewer) {

    var dateModel = new Bakcbone.Model({
            type: 2,
            start: new Date(),
            end: moment(new Date()).add(3, 'd').toDate()
        }),
        dateViewer = new DateViewer({
            model: dateModel
        });

    dateViewer.render();

    $('.dateViewer-container').append(dateViewer.$el);
});