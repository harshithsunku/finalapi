if(parseInt(req.params.size) == 1){
        var min = 0;
        var max = 24;
    }
    else if(parseInt(req.params.size) == 2){
        var min = 28;
        var max = 32;
    }
    else if(parseInt(req.params.size) == 3){
        var min = 39;
        var max = 43;
    }
    else if(parseInt(req.params.size) == 4){
        var min = 48;
        var max = 55;
    }
    else if(parseInt(req.params.size) == 5){
        var min = 60;
        var max = 200;
    }
    else if(parseInt(req.params.price) == 1){
        var p_min = 4999;
        var p_max = 9999;
    }
    else if(tprice === 2){
        var p_min = 10000;
        var p_max = 19999;
        console.log(p_min);
    }
    else if(parseInt(req.params.price) == 3){
        var p_min = 20000 ;
        var p_max = 35999;
    }
    else if(parseInt(req.params.price) == 4){
        var p_min = 36000;
        var p_max = 50999;
    }
    else if(parseInt(req.params.price) == 5){
        var p_min = 60000;
        var p_max = 1500000;
    }
    else if(parseInt(req.params.smart) == 1){
        var smart = "YES";
    }
    else if(parseInt(req.params.smart) == 2){
        var smart = "NO";
    }
    else if(parseInt(req.params.type) == 1){
        var type = "LED";
    }
    else if(parseInt(req.params.type) == 2){
        var type = "QLED";
    }
    else if(parseInt(req.params.type) == 3){
        var type = "OLED";
    }
    else if(parseInt(req.params.curve) == 1){
        var curve = "YES";
    }
    else if(parseInt(req.params.curve) == 2){
        var curve = "NO"
    }
    else if(parseInt(req.params.hdmi) == 1){
        var hdmi = 0;
    }
    else if(parseInt(req.params.hdmi) == 2){
        var hdmi = 1;
    }
    else if(parseInt(req.params.hdmi) == 3){
        var hdmi = 2;
    }
    else if(parseInt(req.params.hdmi) == 4){
        var hdmi = 3;
    }
    else if(parseInt(req.params.hdmi) == 5){
        var hdmi = 4;
    }