define([
    'clientCore/ajax/ajax.service',
    'clientCore/channel/channel.service',
    'clientCore/notify/notify.service',
    './token.service',
    './authentication-proxy.service'
], function ($ajax, $channel, $notify, $token, $proxy) {
    // Authentication is the process of determining whether someone or something is, in fact, who or what it is declared to be.

    function login() {
        return $proxy.popup();
    }

    function logout() {
        $token.destroy();
    }

    function setLoginPage() {

    }

    function setTargetPage() {

    }

    function initializeProxy(oauth) {
        $proxy.initialize(oauth);
    }

    // show error notify
    $ajax.addErrorInterceptor(function (event, jqxhr) {
        var response;

        try {
            response = JSON.parse(jqxhr.responseText);
        } catch (e) {
            response = {
                message: 'Unknown error'
            }
        }

        $notify.notify({
            text: 'Status: ' + jqxhr.status + '. \n ' + response.message,
            type: 'danger'
        });
    });

    $ajax.addErrorInterceptor(function (event, jqxhr) {
        var status = jqxhr.status;

        switch (status) {
            case 401:
                break;
        }
    });

    $channel.on('login:success', _redirectToTargetState);

    $channel.on('logout:success', _redirectToLoginState);

    function _redirectToTargetState() {
    }

    function _redirectToLoginState() {

    }

    return {
        login: login,
        logout: logout,

        setLoginPage: setLoginPage,
        setTargetPage: setTargetPage,

        initializeProxy: initializeProxy
    }
});