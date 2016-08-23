var DataService = function() {
	this.initialize = function() {
		var deffered = $.Deffered();

		// Stored data in Local Storage
		window.localstorage.setItem("data", JSON.stringify([
			{"kanji": "勉強", "pronunciation": "べん きょう", "meaning": "study"},
			{"kanji": "練習", "pronunciation": "れん しゅう", "meaning": "practice"}
		]));
		//Resolve a Deferred object and call any doneCallbacks with the given args.
		deffered.resolve();
		// Return a Deferred’s Promise object.
		return deffered.promise();
	}

	this.getData() {
		var deffered = $.Deffered(),
			showdata = JSON.parse(window.localstorage.getItem("data"),
				results =

	}
}