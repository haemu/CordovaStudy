var DataService = function() {

	this.initialize = function() {
		var deferred = $.Deferred();
		deferred.resolve();
		return deferred.promise();
	}

	this.getData = function(id) {
		var deferred = $.Deferred();
		var result = null;
		var l = words.length;
		for (var i = 0; i < l; i++) {
			if (words[i].id === id) {
				result = words[i];
				break;
			}
		}
		deferred.resolve(result);
		deferred.promise();
		return result;
	}

	this.searchData = function(data) {
		var deferred = $.Deferred();
		for (var i = 0; i < words.length; i++) {
			if (words[i].kanji === data[0]) {
				if (words[i].pronunciation !== data[1]) return false;
				if (words[i].meaning !== data[2]) return false;
				return true;
			}
		}
	}

	this.getAll = function() {
		var deferred = $.Deferred();
		var result = words;
		deferred.resolve(result);
		deferred.promise();
		return result;
	}

	this.getDataRange = function(arr) {
		var deferred = $.Deferred();
		var result = new Array();
		for (var i = 0; i < arr.length; i++) {
			result[i] = this.getData(arr[i]);
		}
		return result;
	}

	var words = [
		{"id": 1, "kanji": "勉強", "pronunciation": "べん きょう", "meaning": "study"},
		{"id": 2, "kanji": "練習", "pronunciation": "れん しゅう", "meaning": "practice"},
		{"id": 3, "kanji": "準備", "pronunciation": "じゅん び", "meaning": "prepare"},
		{"id": 4, "kanji": "説明", "pronunciation": "せつ めい", "meaning": "explain"},
		{"id": 5, "kanji": "理解", "pronunciation": "り かい", "meaning": "understand"},
		{"id": 6, "kanji": "解決", "pronunciation": "かい けつ", "meaning": "solve"},
		{"id": 7, "kanji": "問題", "pronunciation": "もん だい", "meaning": "problem, question"},
		{"id": 8, "kanji": "課題", "pronunciation": "か だい", "meaning": "issue"},
		{"id": 9, "kanji": "故障", "pronunciation": "こ しょう", "meaning": "failure"},
		{"id": 10, "kanji": "報告", "pronunciation": "ほう こく", "meaning": "reporting"},
		{"id": 11, "kanji": "連絡", "pronunciation": "れん らく", "meaning": "contact, connect"},
		{"id": 12, "kanji": "相談", "pronunciation": "そう だん", "meaning": "consult, discuss"},
		{"id": 13, "kanji": "利用", "pronunciation": "り よう", "meaning": "use"},
		{"id":14,"kanji": "使用", "pronunciation": "し よう", "meaning": "use"},
		{"id":15,"kanji": "選択", "pronunciation": "せん たく", "meaning": "select"},
		{"id":16,"kanji": "品質", "pronunciation": "ひん しつ", "meaning": "quality"},
		{"id":17,"kanji": "情報", "pronunciation": "じょう ほう", "meaning": "information"},
		{"id":18,"kanji": "紹介", "pronunciation": "しょう かい", "meaning": "introduction"},
		{"id":19,"kanji": "記述", "pronunciation": "き じゅつ", "meaning": "description"},
		{"id":20,"kanji": "期限", "pronunciation": "き げん", "meaning": "limit"},
		{"id":21,"kanji": "期間", "pronunciation": "き かん", "meaning": "period"},
		{"id":22,"kanji": "記入", "pronunciation": "き にゅう", "meaning": "entry"},
		{"id":23,"kanji": "実績", "pronunciation": "じっ せき", "meaning": "actual result"},
		{"id":24,"kanji": "予定", "pronunciation": "よ てい", "meaning": "plan"},
		{"id":25,"kanji": "計画", "pronunciation": "けい かく", "meaning": "plan"},
		{"id":26,"kanji": "手段", "pronunciation": "しゅ だん", "meaning": "way"},
		{"id":27,"kanji": "方法", "pronunciation": "ほう ほう", "meaning": "way"},
		{"id":28,"kanji": "原因", "pronunciation": "げん いん", "meaning": "cause"},
		{"id":29,"kanji": "規約", "pronunciation": "き やく", "meaning": "rule, standard"},
		{"id":30,"kanji": "作成", "pronunciation": "さく せい", "meaning": "create"},
		{"id":31,"kanji": "修正", "pronunciation": "しゅう せい", "meaning": "correction"},
		{"id":32,"kanji": "改修", "pronunciation": "かい しゅう", "meaning": "repair"},
		{"id":33,"kanji": "編集", "pronunciation": "へん しゅう", "meaning": "editing"},
		{"id":34,"kanji": "更新", "pronunciation": "こう しん", "meaning": "update"},
		{"id":35,"kanji": "変更", "pronunciation": "へん こう", "meaning": "change/ modify"},
		{"id":36,"kanji": "登録", "pronunciation": "とう ろく", "meaning": "function"},
		{"id":37,"kanji": "追加", "pronunciation": "つい か", "meaning": "add"},
		{"id":38,"kanji": "削除", "pronunciation": "さく じょ", "meaning": "delete"},
		{"id":39,"kanji": "検索", "pronunciation": "けん さく", "meaning": "search"},
		{"id":40,"kanji": "印刷", "pronunciation": "いん さつ", "meaning": "print"},
		{"id":41,"kanji": "取得", "pronunciation": "しゅ とく", "meaning": "get"},
		{"id":42,"kanji": "設定", "pronunciation": "せっ てい", "meaning": "setting up/configuration"},
		{"id":43,"kanji": "表示", "pronunciation": "ひょう じ", "meaning": "display"},
		{"id":44,"kanji": "発生", "pronunciation": "はっ せい", "meaning": "occur"},
		{"id":45,"kanji": "戻る", "pronunciation": "もど る", "meaning": "display"},
		{"id":46,"kanji": "送信", "pronunciation": "そう しん", "meaning": "send (mail)"},
		{"id":47,"kanji": "返却", "pronunciation": "へん きゃく", "meaning": "return"},
		{"id":48,"kanji": "要求", "pronunciation": "よう きゅう", "meaning": "request"},
		{"id":49,"kanji": "応答", "pronunciation": "おう とう", "meaning": "response"},
		{"id":50,"kanji": "仕様", "pronunciation": "し よう", "meaning": "specification"},
		{"id":51,"kanji": "要件", "pronunciation": "よう けん", "meaning": "requirement"}

	];
}