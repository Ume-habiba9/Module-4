console.log('Solution of Assignment-4:');


var hellospeaker="Hello";
var byespeaker="GoodBye";
(function display() {
	var names=["Yaakov","John","Jen","Jason","paul","Frank","Larry","Paula","Laura","Jim"];
       for (var i=0;i<names.length; i++) {
		 var firstLetter=names[i].charAt(0).toLowerCase();
  if (firstLetter == 'j') {
    console.log(byespeaker + " " +names[i]);
  } else {
    console.log(hellospeaker+ " "+ names[i]);
  }
}

})();