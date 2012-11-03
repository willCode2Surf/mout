define(function () {

    /**
     * Array lastIndexOf
     * @version 0.3.0 (2012/07/26)
     */
    function lastIndexOf(arr, item, fromIndex) {
        var len = arr.length >>> 0;
        fromIndex = (fromIndex == null || fromIndex >= len)? len - 1 : fromIndex;
        fromIndex = (fromIndex < 0)? len + fromIndex : fromIndex;
        while (fromIndex >= 0) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (arr[fromIndex] === item) {
                return fromIndex;
            }
            fromIndex--;
        }
        return -1;
    }

    return lastIndexOf;
});
