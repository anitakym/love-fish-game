/**
 * Created by kym on 9/6/2016.
 */
var haloObj = function()
{
    this.x =[];
    this.y =[];
    this.alive = [];
    this.r = [];
}

haloObj.prototype.num =5;
haloObj.prototype.init = function()
{
    for(var i=0; i<this.num;i++)
    {
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.r[i] = 0;
    }
}

haloObj.prototype.draw = function()
{
    ctx1.save();
    ctx1.lineWidth = 2;
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "rgba(134,45,145,1)";
    for(var i=0;i<this.num;i++)
    {
        if (this.alive[i])
        {
            //半径随着时间增大
            this.r[i] += deltaTime*0.02;
            if(this.r[i]>50)
            {
                this.alive[i] = false;
                break;
            }
            var alpha = 1 - this.r[i]/50;

            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            ctx1.closePath();
            ctx1.strokeStyle = "rgba(134,45,155,"+alpha+")";
            ctx1.stroke();
        }
    }
    ctx1.restore();
}

haloObj.prototype.born = function(x,y)
{
    for(var i = 0;i<this.num;i++)
    {
        if (!this.alive[i])
        {
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 20;
            this.alive[i] = true;
            return;
        }
    }
}