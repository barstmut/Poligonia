class SphereCollider extends Behavior
{
	constructor(gameObject, radius)
	{
		super(gameObject);
		this.position = new THREE.Vector3(this.gameObject.mesh.position.x, 
										this.gameObject.mesh.position.y, 
										this.gameObject.mesh.position.z);
		
		this.center = this.gameObject.mesh.center;
		this.radius = radius;
		this.collisionEnters = [];
		this.collisionStays = [];
		this.collisionExit = [];
	}
	
	Update()
	{
		super.Update();
		this.center = this.gameObject.mesh.center;
		for(var i = 0; i < this.collisionEnters.length; i++)
		{
			this.gameObject.OnCollisionEnter(this.collisionEnters[i]);
		}
		for(var i = 0; i < this.collisionStays.length; i++)
		{
			this.gameObject.OnCollisionStay(this.collisionStays[i]);
		}
		for(var i = 0; i < this.collisionExit.length; i++)
		{
			this.gameObject.OnCollisionExit(this.collisionExit[i]);
			this.collisionExit.splice(i,1);
		}
	}
	
	RemoveCollider(list, collider)
	{
		for(var i = 0; i < list.length; i++)
		{
			if(list[i] === collider)
				list.splice(i,1);
		}
	}
	
	CheckCollision(collider)
	{
		var radiusSum = this.radius + collider.radius;
		var distance = this.center.distanceTo(collider.center);
		
		this.AddCollision(collider, distance <= radiusSum);
	}

	
	AddCollision(collider, collision)
	{
		if(collision)
		{
			if(this.collisionEnters.includes(collider))
			{
				this.collisionStays.push(collider);
				this.RemoveCollider(this.collisionEnters,collider);
			}
			else
			{
				this.collisionEnters.push(collider);
			}
		}
		else
		{
			if(this.collisionEnters.includes(collider) || this.collisionStays.includes(collider))
			{
				this.collisionExit.push(collider);
				this.RemoveCollider(this.collisionEnters,collider);
				this.RemoveCollider(this.collisionStays,collider);
			}
		}
	}
}