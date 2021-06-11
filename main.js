function preload(){

}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function draw(){
image(video, 0, 0, 300, 300);
classifier.classify(video, getResult);
}

function getResult(error, result){
if(error){
    console.log(error);
} else {
    console.log(result);
    document.getElementById("mobilenet_result").innerHTML = result[0].label;
}
}

function googleLens(){
    window.location = 'googleLens.html';
}