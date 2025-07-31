var _callback_from_mod = function (attr) {

    var _str = "Bot says " + (attr.get("current")).toString();
    sendChat(speakingAs = 'Bot1', input = _str);
    sendChat(
        'Test Module',
        '<span style="color: red ;">' +
        'State test' +
        '</span> ' +
        '<span style="color: blue ;">' +
        'Script v started times!' +
        '</span>'
    );
};

on('change:attribute', function (obj, prev) {
    log("New attr obj:");
    log(obj);

    log("Previous attr obj:");
    log(prev);

    var _triggers = findObjs({ _type: "attribute", _characterid: obj.get("_characterid") });

    log("Triggers:");
    log(_triggers);

    if (_triggers === undefined) {
        throw "We failed to find any changed attributes!";
    }

    var diff = _.omit(obj, function (v, k) { return prev[k] === v; })
    log("diffing fields:");
    log(diff);

    // Actually, diff seemts to be always an object, so might skip this in the future
    // Need to test more
    if (Array.isArray(obj) === true) {
        throw "For now, I expect that sheetworkers in the character sheet will update at most 1 attribute at a time."
    };

    if (diff.get("name") === "attr_to_mod") {
        log("callback called");
        _callback_from_mod(diff);
    };
});
