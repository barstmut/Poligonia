class Scene
{
	constructor()
	{
		this.gameObjects = [];	
		
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 100);
		this.camera.position.z = -10;
		this.camera.lookAt(0,0,0);
		
		this.sceneHUD = new THREE.Scene();
		this.cameraHUD = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
		this.cameraHUD.position.z = 10;
	}
	
	Update()
	{
		
		console.log("Scene");
		for(var i = 0 ; i < this.gameObjects.length ; i++)
		{
			this.gameObjects[i].Update();
		}
		
	}
	
	Draw( buffer )
	{
		buffer.render(this.scene,this.camera);
		buffer.render(this.sceneHUD,this.cameraHUD);
	}
}