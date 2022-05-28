https://teachablemachine.withgoogle.com/models/-PLixHZiL/

Webcam.set({
    width:350,
    height:300,
    dest_width:680,
    dest_height:480,
    image_format:png,
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="capture_image"src="'+data_uri+'"/> ';
    })
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/-PLixHZiL/',modelloaded);
function modelloaded(){
    console.log("model loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first prediction is "+prediction_1;
    speak_data2="And the second prediction is "+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterthis);
}