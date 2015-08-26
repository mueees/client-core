define([
    'storage'
], function (storage) {
    var tokenName = 'client_token';

    function create(data){
        storage.set(tokenName, data);
    }

    function destroy(){
        storage.set(tokenName, null);
    }

    function isAlive(){
        return Boolean(storage.get(tokenName));
    }

    return {
        create: create,
        destroy: destroy,
        isAlive: isAlive
    }
});