app.config(['$googleDefaultsProvider', '$facebookDefaultsProvider',
    function ($googleDefaultsProvider, $facebookDefaultsProvider) {

        $googleDefaultsProvider.useConfig({
            client_id: 'YOUR CLIENT ID',
            client_secret: 'YOUR CLIENT SECRET',
            scope: 'api.url change here....'
        });

        $facebookDefaultsProvider.useConfig({
            client_id: 'YOUR APP ID',
            scope: 'api.url of facebook change here....'
        });

}]);