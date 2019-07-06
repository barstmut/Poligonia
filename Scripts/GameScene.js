class GameScene
{
	constructor()
	{
		this.gameObjects = [];		
		this.scene = new THREE.Scene();
		
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 100);
		this.camera.position.z = 10;
		
		this.skyBox = CubeTextureLoader.load([
			'Assets2D/Background/sky_02.png',
			'Assets2D/Background/sky_10.png', 
			'Assets2D/Background/sky_06.png', 
			'Assets2D/Background/sky_08.png',
			'Assets2D/Background/sky_07.png', 
			'Assets2D/Background/sky_05.png' 
		  ]);		  
		this.scene.background = this.skyBox;
		
		this.light = new THREE.AmbientLight( 0x404040 ); this.scene.add(this.light);
		this.player = new Player(0,0,0,this.scene,Models[0]);

	}
	
	Update()
	{
		for(var i = 0 ; i < this.gameObjects.length ; i++)
		{
			this.gameObjects[i].Update();
		}
	}
	
	Draw( buffer )
	{
		buffer.render(this.scene,this.camera);
	}
}



