var user='';
google.load("feeds", "1");
function initialize(){
	var url = 'https://github.com/'+user+'.atom';
  	var feed = new google.feeds.Feed(url);
	feed.includeHistoricalEntries();
  	feed.load(function(result) {
    	if (!result.error) {
			$('#feedContainer .name').text(result.feed.title);
			$('#feedContainer .link').text(result.feed.url);
			$('#feedContainer .description').text(result.feed.description);
			var container = $('#feedContainer');
      		for (var i = 0; i < result.feed.entries.length; i++) {
        		var entry = result.feed.entries[i];
				container.append($('<div><h3>'+entry.title+'</h3><p>'+entry.content+'</p></div>'));
      		}
    	}
  	});
}
google.setOnLoadCallback(initialize);
