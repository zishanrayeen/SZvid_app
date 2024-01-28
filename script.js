

//uploading system coding 

var up_btn = document.getElementById("up_btn");
up_btn.onchange= function(){

    var upd = document.getElementById("up_btn").value.replace(/.*(\/|\\)/,'');
    window.alert(upd );

    var abc = document.getElementById("vid_ply");
    abc.src=upd;
}





//play coding system 

var a = document.getElementById("srt_btn");
a.onclick= function(){

    var upld = document.getElementById("vid_ply" );
    var play = document.getElementById("srt_btn");
    var paude = document.getElementById("push_btn");
   
    //if start
    if(play.style.display="none"){

       upld.play(); 
        paude.style.display="block";
    }
}




//pause coding

var b = document.getElementById("push_btn");
b.onclick= function(){

    var plod = document.getElementById("vid_ply");
    var play = document.getElementById("srt_btn");
    var pd = document.getElementById("push_btn");

    //if start
    if(pd.style.display="none"){

        plod.pause()
        play.style.display="block";
        

    }

}




var clse = document.getElementById("clse");
clse.onclick= function(){

    window.close();
}