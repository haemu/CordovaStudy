var FileOperation = function() {

	this.fileDownload = function() {
		var fileTransfer = new FileTransfer();
		var uri = encodeURI("https://github.com/haemu/CordovaStudy");
		// var uri = encodeURI("https://onedrive.live.com/?id=root&cid=62318EA6F0F76204");
		var fileURL = 'file:///android_asset/www/doc';
		fileTransfer.download(
			//source
			uri,
			//target
			fileURL, 
			//successCallback
			function(entry) {
				console.log("download complete: " + entry.toURL());
				alert("File is downloaded. See " + entry.toURL());
			}, 
			//errorCallback
			function(error) {
				console.log("download error: " + error.source + ", " + error.target + ", " + error.code);
				alert("download error: " + error.source + ", " + error.target + ", " + error.code);
			},
			//trustAllHosts
			// default is false
			// true is not recommended for production use
			true, 
			//options
			{
				// headers: {
				// 	"Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
				// }
			}
		);
		// window.FileTransfer.

/////
//https://vxlabs.com/2016/03/17/fixing-the-cordova-browser-platform-access-control-allow-origin-error/
///////////////////////////
	}

	this.fileUpload = function() {
		
		window.requestFileSystem(
			//win
			window.TEMPORARY,
			//fail
			5 * 1024 * 1024,
			//args
			function(fs) {
				console.log('file system open: ' + fs.name);
				var fileName = "uploadSource.txt";
				var dirEntry = fs.root;
				dirEntry.getFile(
					fileName,
					{create: true, exclusive: false},
					function (fileEntry) {
						writeFile(fileEntry);
					},
					onErrorCreateFile
				);
			}//, onErrorLoad
		);
	}

	function writeFile(fileEntry, dataObj) {
		// Create a FileWriter object for our FileEntry (log.txt)
		fileEntry.createWriter(function(fileWriter) {
			fileWriter.onwriteend = function() {
				console.log('Successful file write...');
				upload(fileEntry);
			};

			fileWriter.onError = function(e) {
				console.log('Failed file write: ' + e.toString());
			};

 			if(!dataObj) {
 				dataObj = new Blob(['file data to upload'], {type: 'text/plain'});
 			}

 			fileWriter.write(dataObj);
		});
	}

	function upload(fileEntry) {
		// function upload() {
		// Assumes variable fileURL contains a valid URL to a text file on the device
		// var fileURL = 'cdvfile://localhost/persistent/path/to/file.txt';
		var fileURL = fileEntry.toURL();
		var success = function(r) {
			console.log('successful upload....');
			console.log('code = ' + r.responseCode);
			displayFileData(fileEntry.fullPath + 'content uploaded to server');
		}

		var fail = function(error) {
			alert('An error has occurred: Code = ' + error.code);
			console.log("upload error source " + error.source);
			console.log("upload error target " + error.target);
		}

		// var options = new FileUploadOptions(fileKey, fileName, mimeType, params, headers, httpMethod);
		var options = new FileUploadOptions();
		options.fileKey = 'file';
		options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
		options.mimeType = 'text/plain';

		var params = {};
		params.value1 = 'test';
		params.value2 = 'param';

		options.params = params;

		var ft = new FileTransfer();

		// var SERVER = 'https://github.com/haemu/CordovaStudy/blob/master';
		var SERVER = 'https://github.com/haemu/CordovaStudy';

		// SERVER must be a URL that can handle the request, like
		// http://some.server.com/upload.php
		ft.upload(
			fileURL, 
			//server
			encodeURI(SERVER), 
			//successCallback
			success,
			//errorCallback
			fail, 
			//options
			options
		);
	}

	this.fileOpen = function() {
		var name = 'Test',
			type = 'txt',
			fileURL = "file:///android_asset/www/doc";

		 	file = new window.File(name, fileURL, type, null, 1000);

		window.FileReader.readAsText(file);

		alert("file is opened.");
	}
}