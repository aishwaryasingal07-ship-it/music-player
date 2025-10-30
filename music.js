
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");
/* ctrlicon hmne isko inline handling in events ki tarah use kiya h*/


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
};

/*  fa -pause icon || ka matlab hai song chl rha hai  and fa-play -> ka mtlb hai song ruk chuka hai 
agar icon me pause hau means song chl rha hai to uss buttuon ko remove kasro or play button yani rokne wala button add karo  par generally play and pause ka mtlb same hota h
 **if (ctrlicon.classList.contains("fa-pause")) check karta hai:

Agar icon me class "fa-pause" lagi hui hai ⇒ matlab song abhi play ho raha hai

To ab pause kar do aur icon ko play me badal do**
Song stopped	▶️ (fa-play)	Click	Song starts playing 🔊, icon becomes ⏸ (fa-pause)
Song playing	⏸ (fa-pause)	Click	Song pauses ⏹️, icon becomes ▶️ (fa-play) */




function playPause () {
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
    
}


if (song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}


progress.onchange = function(){
    song.play();
    song.currentTime= progress.value;
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
};