'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.querySelector('#video-player');
    const video = document.querySelector('#video');
    const playButton = document.querySelector('#play-button');
    const pauseButton = document.querySelector('#pause-button');
    const fullscreenButton = document.querySelector('#fullscreen-button');
    const volumeBar = document.querySelector('#volume-bar');
    const playProgressBar = document.querySelector('#play-progress-bar');

    const play = () => {
        video.play();
    };

    const pause = () => {
        video.pause();
    };

    const changeVolume = (event) => {
        video.volume = event.target.value / 100;
    };

    const progressBarUpdate = () => {
        playProgressBar.value = (video.currentTime / video.duration) * 100;
    };

    const videoRewind = () => {
        video.currentTime = video.duration / 100 * playProgressBar.value
    };

    const enterFullscreen = () => {
        if (videoPlayer.requestFullscreen) {
            videoPlayer.requestFullscreen();
        } else if (videoPlayer.mozRequestFullScreen) {
            videoPlayer.mozRequestFullScreen();
        } else if (videoPlayer.webkitRequestFullscreen) {
            videoPlayer.webkitRequestFullscreen();
        }
    };

    const addHandlers = () => {
        playButton.addEventListener('click', play);
        pauseButton.addEventListener('click', pause);
        volumeBar.addEventListener('input', changeVolume);
        video.addEventListener('timeupdate', progressBarUpdate);
        playProgressBar.addEventListener('input', videoRewind);
        fullscreenButton.addEventListener('click', enterFullscreen);
    };

    addHandlers();
});