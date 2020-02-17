function doFirst(){
    // barsize = 640;
    //先跟HTML畫面產生關連
    myMovie = document.getElementById('myMovie');
    playButton = document.getElementById('playButton');
    // stopButton = document.getElementById('stopButton');
    // upButton = document.getElementById('upButton');
    // downButton = document.getElementById('downButton');
    // muteButton = document.getElementById('muteButton');
    defaultBar = document.getElementById('defaultBar');
    progressBar = document.getElementById('progressBar');

    barsize = parseInt(window.getComputedStyle(defaultBar).width);
    
    //再建事件聆聽功能
    playButton.addEventListener('click',playOrPause);
    myMovie.addEventListener('click',playOrPause);
    // stopButton.addEventListener('click',stopMovie);
    // upButton.addEventListener('click',volumeUp);
    // downButton.addEventListener('click',volumeDown);
    // muteButton.addEventListener('click',volumeMute);
    defaultBar.addEventListener('click',clickedBar);
}
function playOrPause(){
    if(!myMovie.paused && !myMovie.ended){  //如果影片正在跑play，按按鈕會暫停
        myMovie.pause();
        playButton.innerText = 'play';
        // clearInterval(updatedBar);
    }else{
        myMovie.play();
        playButton.innerText = 'pause';
        //呼叫函數更新卷軸
        // updatedBar = setInterval(update,300);
        setInterval(update,300);
    }
}
function update(){
    if(!myMovie.ended){
        let size = barsize / myMovie.duration * myMovie.currentTime;
        progressBar.style.width = size + 'px';
    }else{
        progressBar.style.width = '0px';
        playButton.innerText = 'play';
    }
}
function clickedBar(e){
    let mouseX = e.clientX - progressBar.offsetLeft;
    progressBar.style.width = mouseX + 'px';

    let newTime = mouseX / (barsize / myMovie.duration);
    myMovie.currentTime = newTime;
}
window.addEventListener('load',doFirst);