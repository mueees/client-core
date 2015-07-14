define([
    'marionette',
    'text!./date-viewer.view.html'
], function (Marionette, template) {
    return Marionette.ItemView.extend({
        template: _.template(template)
    });
});