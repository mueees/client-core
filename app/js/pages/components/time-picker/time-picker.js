require([
    'marionette',
    'backbone',
    'clientCore/components/time-picker/time-picker.controller'
], function (Marionette, Backbone, TimePickerController) {
    var timePickerController = new TimePickerController({
        model: new Backbone.Model({}),
        region: new Marionette.Region({
            el: '.time-picker-container'
        })
    });

    timePickerController.show();

    timePickerController.on('date:change', function (options) {
        console.log(options);
    });
});