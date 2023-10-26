"auto";

setScreenMetrics(1080, 1920);

let stop = images.read("/storage/emulated/0/脚本/stop.jpg");
let start = images.read("/storage/emulated/0/脚本/start.jpg");

//请求截图 true为横屏
if (!requestScreenCapture(false)) {
    toast("请求截图失败");
    exit();
}


let flag = true;
while (flag) {

    // 等待点击反馈时间
    click(180, 760);
    sleep(500);
    
    // 在截图中查看是否处于暂停状态
    var p = findImage(captureScreen(), stop);
    if (p) {
        click(68, 690);
        toast("开始播放...");
        console.log("开始播放...");

    } else {  
        toast("播放中...");
        console.log("播放中...");
    }
    sleep(1000 * 60 * 1);
}