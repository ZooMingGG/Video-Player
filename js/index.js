'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.querySelector('#video-player');
    const video = document.querySelector('#video');
    const playButton = document.querySelector('#play-button');
    const pauseButton = document.querySelector('#pause-button');
    const fullscreenButton = document.querySelector('#fullscreen-button');
    const volumeBar = document.querySelector('#volume-bar');
    const playProgressBar = document.querySelector('#play-progress-bar');
    const changeSpeedButtons = document.querySelectorAll('.change-speed-button');

    const play = () => {
        video.play();
        playButton.classList.add('hidden');
        pauseButton.classList.remove('hidden');
    };

    const pause = () => {
        video.pause();
        pauseButton.classList.add('hidden');
        playButton.classList.remove('hidden');
    };

    const changeVolume = (event) => {
        video.volume = event.target.value / 100;
    };

    const progressBarUpdate = () => {
        playProgressBar.value = (video.currentTime / video.duration) * 100;
    };

    const videoRewind = () => {
        video.currentTime = video.duration / 100 * playProgressBar.value;
    };

    const fullscreen = (event) => {
        document.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement) {
                fullscreenButton.src = './images/expend-fullscreen-button.svg';
            }
        });

        if (!document.fullscreenElement) {
            videoPlayer.requestFullscreen();
            event.target.src = './images/compress-fullscreen-button.svg';
        } else {
            document.exitFullscreen();
            event.target.src = './images/expend-fullscreen-button.svg';
        }
    };

    const changeVideoSpeed = (event) => {
        video.playbackRate = event.target.dataset.value;
    };

    const addHandlers = () => {
        playButton.addEventListener('click', play);
        pauseButton.addEventListener('click', pause);
        volumeBar.addEventListener('input', changeVolume);
        video.addEventListener('timeupdate', progressBarUpdate);
        playProgressBar.addEventListener('input', videoRewind);
        fullscreenButton.addEventListener('click', fullscreen);
        changeSpeedButtons.forEach((item) => {
            item.addEventListener('click', changeVideoSpeed);
        });
    };

    addHandlers();
});