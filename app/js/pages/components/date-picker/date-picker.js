require([
    'marionette',
    'backbone',
    'clientCore/components/date-picker/date-picker.controller'
], function (Marionette, Backbone, DatePickerController) {
    var datePickerController = new DatePickerController({
        region: new Marionette.Region({
            el: '.date-picker-container'
        }),
        settings: {
           label: 'Custom label from settings'
        }
    });

    datePickerController.show();

    datePickerController.on('date:change', function (options) {
        console.log(options);
    });
});