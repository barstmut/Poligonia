class MovementController extends Behaviour
{
    constructor(gameObject, speed, acceleration, maxSpeed)
    {
        super(gameObject);
        this.speed = speed;
        this.acceleration = acceleration;
        this.maxSpeed = maxSpeed;
        this.direction = this.gameObject.mesh.getWorldDirection;
    }

    Update()
    {
        this.speed = this.speed + this.acceleration*TIME.getDelta();
        if(this.speed > this.maxSpeed)
        {
            this.speed = this.maxSpeed;
        }
        Move();
    }

    Move()
    {
        gameObject.transform.Translate(this.direction*this.speed*TIME.getDelta());
    }
}