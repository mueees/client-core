require([
    'marionette',
    'backbone',
    'clientCore/components/date-time-picker/date-time-picker.controller'
], function (Marionette, Backbone, DateTimePickerController) {
    var dateTimePickerController = new DateTimePickerController({
        model: new Backbone.Model({}),
        region: new Marionette.Region({
            el: '.dev-container'
        })
    });

    dateTimePickerController.show();

    dateTimePickerController.on('date:change', function (options) {
        console.log(options);
    });
});