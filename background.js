chrome.omnibox.onInputEntered.addListener(
    function(text){
	text = text.replace("#", "%23");
	var url = "http://realtime.search.yahoo.co.jp/search?p=" + text;
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.update(tab.id, {url:url});
        });
    }
);
