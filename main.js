var nosex=0;
var nosey=0;
var leftwristx=0;
var rightwristx=0;
var difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modalloaded);
    posenet.on("pose",gotposes);
}

function draw() {
    background("#969A97");
    fill("#00FFFF");
    stroke("#00FFFF");
    square(nosex,nosey,difference);
    document.getElementById("square_side").innerHTML="width and height of square is "+difference+" px";
}

function modalloaded() {
    console.log("modal loaded");
}

function gotposes(results) {
    if (results.length>0) {
        console.log(results); 
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(nosex);
        console.log(nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx - rightwristx);
        console.log(leftwristx);
        console.log(rightwristx);
        console.log(difference);
        
    }
}