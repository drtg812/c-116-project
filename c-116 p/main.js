moustacheX = 0;
moustacheY = 0;
lipstickX = 0;
lipstickY = 0;

function preload()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    clown_moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    clown_lipstiick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized')
}
function draw()
{
    image(video, 0, 0, 300, 300);
    FileList(255, 0, 0);
    stroke(255, 0, 0);
    circle(moustacheX, moustacheY, 20);
    image(clown_moustache, moustacheX, moustacheY, lipstickX, lipstickY, 30, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        moustacheX = results[0].pose.moustache.x;
        moustacheY = results[0].pose.moustache.y;
        lipstickX = results[0].pose.moustache.x;
        lipstickY = results[0].pose.moustache.y;
        console.log("moustache x = " + moustacheX);
        console.log("moustache y = " + moustacheY);
    }
}