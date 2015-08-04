define(['backbone', 'jquery'], function (Backbone, $) {
    (function (Backbone, _) {

        // Save a reference to the original route method to be called
        // after we pave it over.
        var originalRoute = Backbone.Router.prototype.route;

        // Create a reusable no operation func for the case where a before
        // or after filter is not set. Backbone or Underscore should have
        // a global one of these in my opinion.
        var nop = function () {
        };

        // Extend the router prototype with a default before function,
        // a default after function, and a pave over of _bindRoutes.
        _.extend(Backbone.Router.prototype, {

            // Add default before filter.
            before: nop,

            // Add default after filter.
            after: nop,

            // Pave over Backbone.Router.prototype.route, the public method used
            // for adding routes to a router instance on the fly, and the
            // method which backbone uses internally for binding routes to handlers
            // on the Backbone.history singleton once it's instantiated.
            route: function (route, name, callback) {
                var self = this,
                    access = (this.access || {})[name] || {},
                    resolveError = (this.resolveError || {})[name] || {},
                    resolve = (this.resolve || {})[name] || [];

                if (access.auth === undefined) {
                    access.auth = false;
                }

                // If there is no callback present for this route, then set it to
                // be the name that was set in the routes property of the constructor,
                // or the name arguement of the route method invocation. This is what
                // Backbone.Router.route already does. We need to do it again,
                // because we are about to wrap the callback in a function that calls
                // the before and after filters as well as the original callback that
                // was passed in.
                if (!callback) {
                    callback = this[name];
                }

                // Create a new callback to replace the original callback that calls
                // the before and after filters as well as the original callback
                // internally.
                var wrappedCallback = function () {
                    // Call the before filter and if it returns false, run the
                    // route's original callback, and after filter. This allows
                    // the user to return false from within the before filter
                    // to prevent the original route callback and after
                    // filter from running.
                    var beforeResult = self.before.apply(this, [route, name, access]),
                        args = [].slice.call(arguments);

                    if (beforeResult === undefined || typeof beforeResult.then !== "function") {
                        var def = $.Deferred();

                        if (beforeResult === false) {
                            def.reject();
                        } else {
                            def.resolve();
                        }

                        beforeResult = def.promise();
                    }

                    beforeResult
                        .then(function () {
                            // load resolve resources
                            var def = $.Deferred(),
                                promises = [];

                            if (resolve.length) {
                                $.each(resolve, function (i, item) {
                                    promises.push(item.fn());
                                });
                            }

                            $.when.apply($, promises).done(function () {
                                var args = Array.prototype.slice.call(arguments),
                                    data = {};

                                $.each(resolve, function (i, item) {
                                    data[item.name] = args[i];
                                });

                                def.resolve(data);
                            }).fail(function () {
                                def.reject();

                                if ($.isFunction(resolveError)) {
                                    resolveError();
                                }
                            });

                            return def.promise();
                        })
                        .then(function (resolve) {
                            // If the callback exists, then call it. This means that the before
                            // and after filters will be called whether or not an actual
                            // callback function is supplied to handle a given route.

                            var data = {
                                parameters: args,
                                resolve: resolve
                            };

                            if (callback) {
                                callback.call(this, data);
                            }

                            // Call the after filter.
                            self.after.call(this, data);
                        });
                };

                // Call our original route, replacing the callback that was originally
                // passed in when Backboun.Router.route was invoked with our wrapped
                // callback that calls the before and after callbacks as well as the
                // original callback.
                return originalRoute.call(this, route, name, wrappedCallback);
            }

        });

    }(Backbone, _));

    return Backbone;
});