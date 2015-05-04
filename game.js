
	window.addEventListener("load",function() {


		

	var Q = window.Q = Quintus({audioSupported: ["ogg"]}).include("Sprites,TMX, Scenes, Input, 2D, Anim, Touch, UI,Audio")
		.setup({width: 320,
				height: 480})
		.controls().touch().enableSound();




	Q.loadTMX("level.tmx",function(){
			


			Q.stageScene("level1");

	});		

	

	Q.scene("level1",function(stage)
	{


		Q.stageTMX("level.tmx",stage)
		
		

		stage.add("viewport")
		
	});

});


