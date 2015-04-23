document.onkeydown = typeCheck;

function typeCheck(){
	if ((event.keyCode >= 48 && event.keyCode <= 57) && !event.shiftKey){
   		calc_run(event.keyCode-48);
    	}
    	switch(event.keyCode){
    	case 67:
    		calc_reset();
    		break;
    	case 187:
    		calc_run('+');
    		break;
    	case 189:
    		calc_run('-');
    		break;
    	case 56:
    		if(event.shiftKey){
    			calc_run('*');
    		}
    		break;
    	case 191:
    		calc_run('/');
    		break;
    	case 13:
    		calc_equal();
    		break;
    	case 190:
    		calc_period()
    		break;
    	default:
    		//console.log(event.keyCode);
    		break;	
    }
}