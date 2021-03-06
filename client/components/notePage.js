Template.notePage.events({
	'click .remove' : function(){
		var currentNoteId = this._id;
		Notes.remove(currentNoteId);
		Router.go('noteList');
	},
	'click .complete' : function(e){
		var currentNoteId = this._id;
		var noteProperties = {
			title: $("#title").val(),
			description: $("#description").val()
		}
		Notes.update(currentNoteId, {$set: noteProperties}, function(error){
			if(error){
				alert(error.reason);
			}else{
				Router.go('noteList');
			}
		});
	}
});

// Rendering
Template.notePage.rendered = function(){
	var removedHeight =  $(".navbar-inner").height();
	removedHeight += $(".align-top").height();
	removedHeight += 60;
	var targetHeight = $(window).height() - removedHeight;
	console.log(targetHeight);
	$(".full-height").height(targetHeight);
}

Template.notePage.created = function(){
	$(window).resize(function(){
		var removedHeight =  $(".navbar-inner").height();
		removedHeight += $(".align-top").height();
		removedHeight += 60;
		var targetHeight = $(window).height() - removedHeight;
		console.log(targetHeight);
		$(".full-height").height(targetHeight);
	});
}
