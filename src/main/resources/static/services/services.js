
angular.module("customServices", [])
    .provider("logService", function () {
        var counter = true;
        var debug = true;
        var count = 0;

        return {
            messageCounterEnabled: function (setting) {
                if(angular.isDefined(setting)) {
                    counter = setting;
                    return this;
                } else {
                    return counter;
                }
            },
            debugEnabled: function (setting) {
                if(angular.isDefined(setting)) {
                    debug = setting;
                    return this;
                } else {
                    return debug;
                }
            },
            $get: function ($log) {
                return {
                    log: function (msg) {
                        if(debug) {
                            var countMsg = counter ? count++ +"": " ";
                            $log.debug("(LOG " + countMsg+")" + msg);
                        }
                    }
                }
            }
        }
    });