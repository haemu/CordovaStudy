var PlayMedia = function() {

	this.launchMedia = function() {
		// var media = new Media(cordova.file.externalRootDirectory + '/Kyoe-sar-ma-ya.mp3');
		// var media = new Media('http://www.jango.com/stations/349018526/tunein?gclid=COWmrK_lsM4CFdiOaAodUzoAmA');
		// alert(media);
		path = 'audio/Kyoe-sar-ma-ya.amr';

		if (cordova.platformId === 'android') {
			path = '/android_asset/www/' + path;
		}
		var media = new Media(path, 	
			function() {
				console.log("Playing");
			},
			function(error) {
				alert("error: " + JSON.stringify(error) + JSON.stringify(error.message));
			}//,
			// function(status) {
			// 	if(status === Media.MEDIA_STOPPED && exit === !true) {
			// 		media.play();
			// 	}
			// }
		);
		media.play();
		return media;
		// window.Media.play(options);
	}

	this.pauseMedia = function(item) {
		if (item != null) {
			item.pause();
		}
		
	}

	this.stopMedia = function(item) {
		item.stop();
	}

	this.launchPlayer = function() {

		path = 'video/mv2.mp4';

		if (cordova.platformId === 'android') {
			path = 'file:///android_asset/www/' + path;
		}
		// VideoPlayer.play("http://www.google.com.mm/");
		// cordova.plugins.disusered.open(path);
		VideoPlayer.play(path); //using com.dawsonloudon.videoplayer plugin
	}
}