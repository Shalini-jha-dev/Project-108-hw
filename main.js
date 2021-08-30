Webcam.set({
    width : 350,
    height :300,
    image_format : 'png',
    image_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NL_VzqfLX/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "the first Prediction is" + prediction_1;
    speak_data_2 = "and the second Prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error("error");
    }
    else{
        console.log(results)
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label == "Amazing")
        {
            document.getElementById("result_gesture_name").innerHTML = "Amazing ";
            document.getElementById("update_gesture").innerHTML = "I &#128076;";
        }

        if (results[0].label == "Victory")
        {
            document.getElementById("result_gesture_name").innerHTML = "Victory ";
            document.getElementById("update_gesture").innerHTML = "I &#9996;";
        }

        if (results[0].label == "Good")
        {
            document.getElementById("result_gesture_name").innerHTML = "Good ";
            document.getElementById("update_gesture").innerHTML = "I &#128077;";
        }

        if (results[0].label == "Clap")
        {
            document.getElementById("result_gesture_name").innerHTML = "Clap ";
            document.getElementById("update_gesture").innerHTML = "I &#128079;";
        }

        if (results[0].label == "Call Me")
        {
            document.getElementById("result_gesture_name").innerHTML = "Call Me ";
            document.getElementById("update_gesture").innerHTML = "I &#129305;";
        }

        if (results[0].label == "Wish You Luck")
        {
            document.getElementById("result_gesture_name").innerHTML = "Wish You Luck ";
            document.getElementById("update_gesture").innerHTML = "I &#129310;";
        }

        if (results[1].label == "Amazing")
        {
            document.getElementById("result_gesture_name2").innerHTML = "Amazing ";
            document.getElementById("update_gesture2").innerHTML = "I &#128076;";
        }

        if (results[1].label == "Victory")
        {
            document.getElementById("result_gesture_name2").innerHTML = "Victory ";
            document.getElementById("update_gesture2").innerHTML = "I &#9996;";
        }

        if (results[1].label == "Good")
        {
            document.getElementById("result_gesture_name2").innerHTML = "Good ";
            document.getElementById("update_gesture2").innerHTML = "I &#128077;";
        }

        if (results[1].label == "Clap")
        {
            document.getElementById("result_gesture_name2").innerHTML = "Clap ";
            document.getElementById("update_gesture2").innerHTML = "I &#128079;";
        }

        if (results[1].label == "Call Me")
        {
            document.getElementById("result_gesture_name2").innerHTML = "Call Me ";
            document.getElementById("update_gesture2").innerHTML = "I &#129305;";
        }

        if (results[1].label == "Wish You Luck")
        {
            document.getElementById("result_gesture_name2").innerHTML = "Wish You Luck ";
            document.getElementById("update_gesture2").innerHTML = "I &#129310;";
        }
    }
}