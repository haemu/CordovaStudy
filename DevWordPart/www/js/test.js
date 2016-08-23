
var index = 0;

var quiz = {
	
	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {

		var service = new DataService();
		// get 10 random words
		var data;
		service.initialize().done(function() {
			var totalWords = service.getAll();
			var numArr = quiz.getRandomNumber(10, totalWords.length);console.log(numArr);
			data = service.getDataRange(numArr);
		});
		
		var answer = [3];
		// index to id in words of DataService
		// following statement is for testing all words in DataService
		// index = quiz.fillData(answer, index); 

		// following statement is for testing range of words in DataService (currently range in 10)
		index = quiz.fillRandomData(answer, index, data);

		$('.choiceBtn').on('click', function(event) {
			/* Act on the event */
			index = quiz.choiceBtn($($(this).html()).html(), answer, index, data);

		});

		$('.selectBtn').on('click', function(event) {
			/* Act on the event */
			index = quiz.selectBtn($($(this).html()).html(), answer, index, data);

		});

		if (navigator.notification) {
			window.alert = function(message) {
				navigator.notification.alert(
					message,
					null,
					"Completed!",
					"OK"
				);
			};
		}
	},

	fillData: function(answer, page) {
		var service = new DataService();

		service.initialize().done(function() {
			// get all words
			var allData = service.getAll();
			if (page < allData.length) {
				var index = page;
				++page;		
				var data = service.getData(++index);

				if (null !== data) {
					$('.quiz').text(data.kanji);
					answer[0] = data.kanji;
				}

				for (var i = 1; i <= 3; i++) {
					var data;
					if (index > allData.length) {
						index = 1;
						data = service.getData(index++);
					} else {
						data = service.getData(index++);
					}

					if (null !== data) {
						// alert(data.kanji + ", " + data.pronunciation + ", " + data.meaning);			
						$('#choice' + i).text(data.pronunciation);
						if ((i + 1) <= 3) { 
							$('#select' + (i + 1)).text(data.meaning);
						} else {
							$('#select1').text(data.meaning);
						}
					}
				}
			} else {
				alert("Thank you for participating!");
				if (cordova.platformId === 'android') {
		               window.location = "index.html";
		        } else if (cordova.platformId === 'browser') {
		            window.location.href = "index.html";
		        }
			}
		});
		return page;
	},
	// get random words in range 10
	fillRandomData: function(answer, page, allData) {

			if (page < allData.length) {
				var index = page;
				++page;		
				var data = allData[index];

				if (null !== data || undefined !== data) {
					$('.quiz').text(data.kanji);
					answer[0] = data.kanji;
				}

				var kanjiLocation = quiz.getRandomNumber(3, 3);
				var meaningLocation = quiz.getRandomNumber(3, 3);

				for (var i = 0; i < 3; i++) {

					if (index > allData.length - 1) {
						index = 0;
						data = allData[index++];
					} else {
						data = allData[index++];
					}

					if (null !== data || undefined !== data) {		

						$('#choice' + kanjiLocation[i]).text(data.pronunciation);
						$('#select' + meaningLocation[i]).text(data.meaning);
					}
				}
			} else {
				alert("Thank you for participating!");
				if (cordova.platformId === 'android') {
		               window.location = "index.html";
		        } else if (cordova.platformId === 'browser') {
		            window.location.href = "index.html";
		        }
			}
		return page;
	},	

	choiceBtn: function(data, answer, index, wordRange) {
		answer[1] = data;

		if (quiz.isAnswerAll(answer)) {

			var service = new DataService();

			if (service.searchData(answer)) {
				$('.result').html('<span class="glyphicon glyphicon-thumbs-up correct" aria-hidden="true"></span>');
			} else {
				$('.result').html('<span class="glyphicon glyphicon-thumbs-down wrong" aria-hidden="true"></span>');
			}
			
			index = quiz.changeNext(answer, index, wordRange);
		}

		return index;
	},

	selectBtn: function(data, answer, index, wordRange) {
		answer[2] = data;

		if (quiz.isAnswerAll(answer)) {

			var service = new DataService();

			if (service.searchData(answer)) {
				$('.result').html('<span class="glyphicon glyphicon-thumbs-up correct" aria-hidden="true"></span>');
			} else {
				$('.result').html('<span class="glyphicon glyphicon-thumbs-down wrong" aria-hidden="true"></span>');
			}
			
			index = quiz.changeNext(answer, index, wordRange);
		}

		return index;
	},

	isAnswerAll: function(answer) {
		for (var i = 0; i < 3; i++) {
			if (null === answer[i] || undefined === answer[i]) {
				return false;
			}
		}
		return true;
	},

	changeNext: function(answer, index, wordRange) {
		var next = index;

		setTimeout(function() {
			// Changes the element in fruits to undefined
			for (var i = 0; i < 3; i++) {
				delete answer[i];
			}
			$('.result').html('');
			quiz.fillRandomData(answer, index, wordRange);
		},1000);

		return ++next;
	},
	// get 10 random number
	getRandomNumber: function(range, dataRange) {
		var arr = [range];
		var index = 0;
    	do {
     		var x = Math.floor((Math.random() * dataRange) + 1);
       		if (quiz.checkArray(arr, x)) {
           		arr[index] = x;
           		index++;
       		}
    	} while (arr.length < range);
    	return arr;
	},

	checkArray: function(arr, i) {
		for (var j = 0; j < arr.length; j++) {
        	if (arr[j] === i) {
        		return false;
        	}
    	}
    	return true;
	}
};

quiz.initialize();

