/* global window, document, console, $,  */
"use-strict";

var NOTETITLE = document.getElementById('note-title');
var NOTEBODY = document.getElementById('note-body');

window.onload = function() {
    // In the following line, you should include the prefixes of implementations you want to test.
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    // Moreover, you may need references to some window.IDB* objects:
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB. You will not be able to save and edit notes.");
    }

    var DBOpenRequest = window.indexedDB.open("notes", 4);

    // Gecko-only IndexedDB temp storage option:
    // var request = window.indexedDB.open("notes", {version: 4, storage: "temporary"});

    // if the database was NOT properly initialized...
    DBOpenRequest.onerror = function(event) {
        var message = `Error initializing database: ${event.target.error.name} ${event.target.error}`;
        $.jGrowl(message, {group: 'failure-growl'});
        console.error(message);
    };

    // if the database was properly initialized...
    DBOpenRequest.onsuccess = function(event) {
        // store the result of opening the database in the db variable. This is used a lot below
        NOTETAKER.db = DBOpenRequest.result;

        // Run the displayExistingNotes() function to populate the note list with all the to-do list data already in the IDB
        NOTETAKER.displayExistingNotes();
    };

    // This event handles the event whereby a new version of the database needs to be created
    // Either one has not been created before, or a new version number has been submitted via the window.indexedDB.open line above it is only implemented in recent browsers
    DBOpenRequest.onupgradeneeded = function(event) { 
        var db = event.target.result;

        db.onerror = function(event) {
            var message = `Error loading database: ${event.target.error.name} ${event.target.error}`;
            $.jGrowl(message, {group: 'failure-growl'});
            console.error(message);
        };

        // Create an objectStore for this database
        var objectStore = db.createObjectStore("notes", { autoIncrement: true, keyPath: 'id'});

        // define what data items the objectStore will contain
        objectStore.createIndex("noteTitle", "noteTitle", { unique: false });
        objectStore.createIndex("noteBody", "noteBody", { unique: false });
    };

    NOTETITLE.focus();
};

var NOTETAKER = new Vue({
    el: "#noteTaker",
    data: {
        editingNote: false,
        noteTitle: "",
        noteBody: "",
        noteID: undefined,
        notes: []
    },
    methods: {
        _getShortTitle: function(fullTitle) {
            var MAXTITLELENGTH = 16;

            if (fullTitle.length > MAXTITLELENGTH) {
                return fullTitle.substring(0, MAXTITLELENGTH) + "...";
            } else {
                return fullTitle;
            }
        },
        _getShortBody: function(fullBody) {
            var MAXBODYLENGTH = 25;

            if (fullBody.length > MAXBODYLENGTH) {
                return fullBody.substring(0, MAXBODYLENGTH) + "...";
            } else {
                return fullBody;
            }
        },
        openNote: function(noteID, noteTitle, noteBody) {
            this.noteTitle = noteTitle;
            this.noteBody = noteBody;
            this.noteID = noteID;

            this.editingNote = true;
            NOTEBODY.focus();
        },
        displayExistingNotes: function() {
            var _this = this;

            _this.notes = [];

            // open object store
            var objectStore = NOTETAKER.db.transaction("notes").objectStore('notes');

            // list all of the notes in the database
            objectStore.openCursor().onsuccess = function(event) {
                var cursor = event.target.result;

                if (cursor) {
                    _this.notes.push({
                        title: _this._getShortTitle(cursor.value.noteTitle),
                        body: _this._getShortBody(cursor.value.noteBody),
                        id: cursor.value.id
                    });

                    cursor.continue();
                }
            };

            NOTETITLE.focus();
        },
        addNote: function() {
            var _this = this;

            if(_this.noteTitle === '') {
                $.jGrowl("Please enter a name for the note", {group: 'warning-growl'});
                return;
            } else {
                // grab the values entered into the form fields and store them in an object ready for being inserted into the IDB
                var newNote = { noteTitle: _this.noteTitle, noteBody: _this.noteBody };

                // open a read/write db transaction, ready for adding the data
                var objectStore = NOTETAKER.db.transaction(["notes"], "readwrite").objectStore("notes");
                var request = objectStore.add(newNote);

                request.onerror = function(event) {
                    var message = `Error saving note: ${event.target.error.name} ${event.target.error}`;
                    $.jGrowl(message, {group: 'failure-growl'});
                    console.error(message);
                };

                request.onsuccess = function(event) {
                    $.jGrowl('Note saved', {group: 'success-growl'});

                    // clear the form, ready for adding the next entry
                    _this.noteTitle = "";
                    _this.noteBody = "";
                };
            }

            // UPDATEBUTTON.setAttribute("note-id", undefined);
            _this.editingNote = false;
            _this.displayExistingNotes();
        },
        deleteNote: function(noteID, noteTitle) {
            var _this = this;

            if (noteID === '' && noteTitle === '') {
                noteID = _this.noteID;
                noteTitle = _this.noteTitle;
            }

            // retrieve the title of the note we want to delete 
            var deletingNoteID = Number(noteID);

            // confirm that the user really wants to delete the note
            if (confirm("Are you sure you want to delete this note: " + noteTitle + "?") === true) {
                // open a database transaction and delete the note, finding it by the name we retrieved above
                var objectStore = NOTETAKER.db.transaction(["notes"], "readwrite").objectStore("notes");
                var request = objectStore.delete(deletingNoteID);

                // report error
                request.onerror = function(event) {
                    var message = `Error deleting note: ${event.target.error.name} ${event.target.error}`;
                    $.jGrowl(message, {group: 'failure-growl'});
                    console.error(message);
                };

                // report that the data item has been deleted
                request.onsuccess = function() {
                    $.jGrowl('Note deleted', {group: 'success-growl'});
                };

                NOTETAKER.displayExistingNotes();
            }
        },
        updateNote: function() {
            var _this = this;

            var updatingNoteID = Number(_this.noteID);
            var objectStore = NOTETAKER.db.transaction(["notes"], "readwrite").objectStore("notes");
            var request = objectStore.get(updatingNoteID);

            request.onerror = function(event) {
                var message = `Error retrieving note to update it: ${event.target.error.name} ${event.target.error}`;
                $.jGrowl(message, {group: 'failure-growl'});
                console.error(message);
            };

            request.onsuccess = function(event) {
                var data = event.target.result;

                // update the notes values
                data.noteTitle = _this.noteTitle;
                data.noteBody = _this.noteBody;

                // Put this updated object back into the database.
                var requestUpdate = objectStore.put(data);

                requestUpdate.onerror = function(event) {
                    var message = `Error updating note: ${event.target.error.name} ${event.target.error}`;
                    $.jGrowl(message, {group: 'failure-growl'});
                    console.error(message);
                };

                requestUpdate.onsuccess = function(event) {
                    this.editingNote = false;
                    _this.noteTitle = "";
                    _this.noteBody = "";
                    NOTETAKER.displayExistingNotes();
                };
            };
        },
        deleteDB: function() {
            if (confirm("Are you sure you want to delete ALL of the notes?") === true) {
                window.indexedDB.deleteDatabase("notes");
                // refresh the page
                document.location.reload(true);
            }
        },
    }
});
