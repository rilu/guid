(function() {

	gg = function() {
		return Math.floor((1 + Math.random()) * 0x10000)
	             .toString(16)
	             .substring(1);
	},
	guid = function(){
		return gg() + gg() + '-' + gg() + '-' + gg() + '-' +
	         gg() + '-' + gg() + gg() + gg();
	}

	var g = guid();

	$('#guid').append(g);
	$('#copy').attr("data-clipboard-text", g);

	var clip = new ZeroClipboard($('#copy'));

	clip.on( 'complete', function ( client, args ) {
	  alert("Thank you for buying this guid, it's in your clipboard: " + args.text );
	} );


})();
