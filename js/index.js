'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#video');
    const playButton = document.querySelector('#play-button');
    const pauseButton = document.querySelector('#pause-button');

    const play = () => {
        video.play();
    };

    const pause = () => {
        video.pause();
    };

    const addHandlers = () => {
        playButton.addEventListener('click', play);
        pauseButton.addEventListener('click', pause);

    };

    addHandlers();
});