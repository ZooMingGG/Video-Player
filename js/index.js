'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#video');
    const playButton = document.querySelector('#play-button');
    const pauseButton = document.querySelector('#pause-button');
    const volumeBar = document.querySelector('#volume-bar');
    const playProgressBar = document.querySelector('#play-progress-bar');

    const play = () => {
        video.play();
    };

    const pause = () => {
        video.pause();
    };

    const changeVolume = (event) => {
        let value = event.target.value;
        video.volume = value / 100;
    };

    const addHandlers = () => {
        playButton.addEventListener('click', play);
        pauseButton.addEventListener('click', pause);
        volumeBar.addEventListener('input', changeVolume);
    };

    addHandlers();
});