//Program for Yellow Team

//Goalie Left
function goalieLeft()
{
    if(api.onLine()){
        api.move(api.lineAngle()+180 , SPEED);
    }
    else{
        api.setDribbler(false);
        var ballAngle=api.ballAngle();
        if(api.distance(api.distance.BACK)>(60+LEFT))
            ballAngle = 180;
        else if(ballAngle>180||ballAngle<0)
            ballAngle=270;
        else
            ballAngle=90;
        api.move(ballAngle, SPEED);

        if(api.ballInDribbler())
            api.shoot();
    }
}

//Striker Left
function strikerLeft()
{
    if (api.onLine()) {
        api.move(api.lineAngle() + 180, SPEED);
    }
    else {
        var angle = api.ballAngle();

        if (api.ballInDribbler()) {
            angle = 0;
            api.setDribbler(false);
            api.shoot();
        }
        else if(api.ballIntensity() > 2800){
            if(Math.abs(angle) > 90){
                if(angle < 0)
                    angle -=90;
                else
                    angle +=90;
            }
            else if (Math.abs(angle) > 60)
                angle *= 2;
            else
                angle *= 2;
        }
        api.move(angle, SPEED);
    }
}
