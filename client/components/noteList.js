Template.noteList.helpers({
	notes: function(){
    if(Session.get("isArchive") == true){
      return Notes.find({isArchive: true});
    }else{
      return Notes.find({isArchive: false});
    }
	},
  currentState: function(){
    if(Session.get("isArchive")){
      return "Archive...";
    }else{
      return "Notes...";
    }
  }
});

Template.noteList.rendered = function(){
  Session.set("isArchive", "false");
};
