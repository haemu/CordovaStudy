var Picture = function() {

	// cordova-plugin-camera
		this.launchCamera = function() {
			navigator.camera.getPicture(success, error, {
				encodingType: Camera.EncodingType.PNG,
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.CAMERA});//PHOTOLIBRARY});
		}


		this.openGallery = function() {
			navigator.camera.getPicture(openSuccess, error, {
				encodingType: Camera.EncodingType.PNG,
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.PHOTOLIBRARY});
		}

	////////////////////////////////////////////// success callback /////////////////////////////////////////////////
	function success(msg) {
		if (msg !== null || msg !== "") {
			if (cordova.platformId === 'android') {
				$('#UserPicture').attr("src", msg);	
			} else if (cordova.platformId === 'browser') {
				$('#UserPicture').attr("src", "data:image/png;base64," + msg);	
			}
			$('#UserPicture').show();
		}
	}

	function openSuccess(msg) {

		if (msg !== null || msg !== "") {
			if (cordova.platformId === 'android') {
				$('#galleryPicture').attr("src", msg);
			} else if (cordova.platformId === 'browser') {
				$('#galleryPicture').attr("src", "data:image/png;base64," + msg);
			}
			$('#galleryPicture').show();
		}
	}

	////////////////////////////////////////////// error callback /////////////////////////////////////////////////
	function error(msg) {
		alert('Error: ' + msg);
	}
}