Vue.filter('longtext', function(val, limit) {
    if (val) {
        if (val.length > limit) {
            return val.substr(0, limit) + "...";
        } else {
            return val;
        }
    } else {
        return "";
    }
});
