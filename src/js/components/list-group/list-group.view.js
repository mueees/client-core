define([
    'hbs',
    'marionette',
    'text!./list-group.view.hbs'
], function (hbs, Marionette, template) {
    return Marionette.ItemView.extend({
        template: hbs.compile(template)
    });
});