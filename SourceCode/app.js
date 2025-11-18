const previousMusic = document.querySelector(".previous-music")
const playMusic = document.querySelector(".play-music")
const pauseMusic = document.querySelector(".pause-music")
const nextMusic = document.querySelector(".next-music")
const audioElem = document.querySelector("audio")
const speedMusic = document.getElementsByClassName("speed-music")
const timeMinus = document.querySelector(".timeMinus")
const timePlus = document.querySelector(".timePlus")

let musicsScr = [
    "./music/Saed Shayeste - Tanaz (320).mp3",
    "./music/sossein_sanati_naz_nakon 128.mp3",
    "./music/Vatanam 2.mp3"
]

let audioIndex = 0


previousMusic.addEventListener("click", function () {

    audioIndex--

    if(audioIndex < 0) {
        audioIndex = 2
    }
    audioElem.setAttribute("src", musicsScr[audioIndex])
    audioElem.play()

})

playMusic.addEventListener("click", function () {
    audioElem.play()
})


pauseMusic.addEventListener("click", function () {
    audioElem.pause()
})


nextMusic.addEventListener("click", function () {
    audioIndex++
    if(audioIndex > musicsScr.length - 1) {
        audioIndex = 0 
    }

    audioElem.setAttribute("src", musicsScr[audioIndex])
    audioElem.play()
})

speedMusic.addEventListener("click" ,function () {
    audioElem.playbackRate = 2
})

timeMinus.addEventListener("click" , function() {
    audioElem.currentTime -= 5
})

timePlus.addEventListener("click" , function() {
    audioElem.currentTime += 5
})