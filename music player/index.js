var music=document.querySelector("audio");
var play=document.getElementById("play");
var song=document.getElementById("song");
var artist=document.getElementById("artist");
var pre=document.getElementById("prev");
var next=document.getElementById("next");
var img=document.querySelector("img");
const songs=[
    {
        name:"song1",
        title:"Kinna Sona",
        artist:"Sunil Kamath",
    },
    {
        name:"song2",
        title:"Alvida",
        artist:"Nikhil D'Souza",
    },
    {
        name:"song3",
        title:"Dil Jaaniye",
        artist:"Jubin Nautiyal",
    },
    {
        name:"song4",
        title:"Ghalat Fehmi",
        artist:"Asim Azhar", 
    },
    {
        name:"song5",
        title:"Jaan Nisaar",
        artist:"Arjit Singh",
    },
];
let playing=false;
play.addEventListener("click",playmusic);
function playmusic()
{
    if(playing)
    {
        pauseMusic();
    }
    else{
        playMusic();
    }
}
function pauseMusic()
{
    playing=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
}
function playMusic()
{
    playing=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
}
var index=0;
next.addEventListener("click",nextSong);
function nextSong()
{
    index=(index+1)%songs.length;
    loadSong(songs[index]);
    playMusic();
}
pre.addEventListener("click",preSong);
function preSong()
{
    index=(index-1+songs.length)%songs.length;
    loadSong(songs[index]);
    playMusic();
}
function loadSong(songs)
{
    song.innerHTML=songs.title;
    artist.innerHTML=songs.artist;
    img.src="image/"+songs.name+".jpg";
    music.src="music/"+songs.name+".mp3";
}
var shuffle=document.getElementById("random");
shuffle.addEventListener("click",randomSong);
function randomSong()
{
    index=Math.floor(Math.random()*songs.length);
    loadSong(songs[index]);
    playMusic();
}
var repeat=document.getElementById("repeat");
repeat.addEventListener("click",repeatSong);
function repeatSong()
{
    loadSong(songs[index]);
    playMusic();
}