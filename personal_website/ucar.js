
// aksiyon ne ise border genislemesini sagliyor
function increaseBorder(id) {
    document.getElementById(id).style.borderRightWidth="14px";

}

// aksiyon ne ise border genislemesini sagliyor yani resetliyor
function resetBorder (id) {
    document.getElementById(id).style.borderWidth="4px";
}

// fotonun hidden visible ozelligi olusmasini sagliyor
function togglePhoto(id) {
    var photo = document.getElementById('photo');
    if (photo.style.visibility==='hidden'){
        photo.style.visibility='visible';
    }
    else {
        photo.style.visibility='hidden';
    }
}

function darkTheme() {
    if (document.body.style.backgroundColor==="white"){
        document.body.style.backgroundColor="rgb(93, 87, 87)"
    }
    else {
        document.body.style.backgroundColor="white"
    }
}


//audionun baslayip durmasini sagliyor
function muteSong() {
    var audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause(); 
    }
}

// volume'u onloadda 0.1e set ediyor 
function setVolumeTo10() {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = 0.1; 
}


// anchorlarin hepsini aliyor
var anchors = document.getElementsByTagName('a');

// anchorlar arasinda dolasiyor
for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('mouseover', function() {
        this.style.textDecoration = 'underline';
    });
    anchors[i].addEventListener('mouseout', function() {
        this.style.textDecoration = 'none';
    });
}

