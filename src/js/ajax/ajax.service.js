define([
    'jquery',
    'core/notify/notify.service',
    'core/channel/channel.service'
], function ($) {
    function addPrefilter(preFilter) {
        $.ajaxPrefilter(preFilter);
    }

    function addErrorInterceptor(interceptor) {
        $(document).ajaxError(interceptor);
    }

    return {
        addPrefilter: addPrefilter,
        addErrorInterceptor: addErrorInterceptor
    }
});