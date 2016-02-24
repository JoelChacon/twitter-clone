$(document).ready(function(){
	$("textarea").focus(function(){
		$(this).css({"height": "55px"})
		$("#tweet-controls").show();
	});

	$('textarea').keydown(function() {
		var leftWith = 140 - $(this).val().length;

		$('#char-count').text(leftWith);

		if(leftWith <= 10) {
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', '#999');
		}

		if ($(this).val().length > 140) {
			$('#tweet-submit').attr('disabled', 'disabled');
		} else {
			$('#tweet-submit').removeAttr('disabled');
		}
	});

	$('#tweet-submit').click(function() {
		var tweetWords = $('.tweet-compose').val();
		var newTweet = $('.tweet').clone().eq(0);
		var myName = $('#myName').html();
		var picture = $('#twitterpic').attr('src');

		newTweet.find('.tweet-text').html(tweetWords);
		newTweet.find('.fullname').html(myName);
		newTweet.find('.username').html("@Ben");
		newTweet.find('.avatar').attr('src', picture);

		newTweet.prependTo('#stream');
		//$('#stream').prepend($(newTweet));
		$('textarea').val('');
		$('#char-count').text("140");
	});

//retweet, timestamp buttons only expand if the tweet is clicked on//
$('.tweet').click(function() {
			//animate and show the reply/stats
			$(this).find('.stats').show({duration: 400});
		})


});