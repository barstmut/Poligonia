class Time 
{
    constructor()
    {
        this.time = new THREE.Clock(true);
        this.time.running = true;
        this.time.start();
        this.actualTime = this.time.startTime;
        this.elapsedTime = 0;
        this.lastTime = this.actualTime;
        this.deltaTime = 0;
    }

    Update()
    {
        this.time.start();
        this.actualTime = this.time.startTime;
        this.deltaTime = this.actualTime - this.lastTime;
        this.elapsedTime += this.deltaTime;
        this.lastTime = this.actualTime;
    }

    DeltaTime()
    {
        return this.deltaTime/1000;
    }

    ElpasedTime()
    {
        return this.elapsedTime/1000;
    }
}

var time = new Time();