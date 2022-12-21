song = "";
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;

function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0,0,600,500);
}
function preload(){
    song = loadSound("Jarico - Landscape.mp3");
    song = loadSound("Electro-Light - Symbolism.mp3");
}
function play(){
    song.play();
    song.setVolume(1)
    song.rate(1)
}
function modelLoaded()
{
    console.log("PoseNet is Initialized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("LeftWrist x =" + leftWrist_x +"LeftWrist y =" +leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("RightWrist x =" + rightWrist_x +"RightWrist y =" +rightWrist_y);
    }
}