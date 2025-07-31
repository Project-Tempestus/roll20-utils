// Notes and GMnotes need callbacks to retrieve them
var get_note = function (item) {
    var result;
    item.get("notes", function (values) {
        result = values;
    })
    return result;
};

// Print notes matching search criteria
on('ready', function () {
    var search_key = {
        "_type": "handout",
        "inplayerjournals": "all", //Only if GM shared with all players
        "archived": false,
    };
    var handouts = findObjs(search_key);

    var all_notes = [];
    for (let i = 0; i < handouts.length; i++) {
        var note = {};
        note["name"] = handouts[i].get("name");
        note["text"] = get_note(handouts[i]);
        all_notes.push(note);
    }

    log("---- Notes shared with all players without GM info ----");
    log(all_notes);
    log("---- **** ----");
});
