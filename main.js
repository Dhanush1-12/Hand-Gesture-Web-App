prediction="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach( '#camera' );

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hSKFz-HXV/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check(){
    image=document.getElementById("captured_image");
    classifier.classify(image,gotResult);
}

function gotResult(error,result){
    if(error){
        console.log("error");
    }
    else{
        console.log(result);
        gesture=result[0].label;
        document.getElementById("result_emotion_name").innerHTML=gesture;
        if(gesture=="amazing"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        else if(gesture=="best"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        else if(gesture=="victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        else if(gesture=="dislike"){
            document.getElementById("update_emoji").innerHTML="&#128078;";
        }
        else if(gesture=="hai"){
            document.getElementById("update_emoji").innerHTML="&#9995;";
        }
        
    }
}


