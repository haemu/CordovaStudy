var UserService = function() {

	this.initialize = function() {
		var deferred = $.Deferred();
		deferred.resolve();
		return  deferred.promise();
	}

	this.getUser = function(searchKey) {
		var deferred = $.Deferred();
		var results = users.filter(function(index) {
			return index.indexOf('searchKey') > -1;
		});

		deferred.resolve(results);
		return deferred.promise();
	}

	var users = [
		{"username": "nhm", "image": ""}
	];
}