---
title: "Discovery cities"
date: 2025-12-01
description: "Development"
category: "development"
image: img/city.png
tools: "Figma, Adobe Photoshop"
services: "Concept Development, Web Development, WebRTC, Arduino, Rotary Encoder, VL53L0X, Servo Motor"
screen: img/city/startscherm.png
partners: "Devine"
---
<div class="project-switch">
    <button class="switch-btn active" data-project="webrtc">WebRTC</button>
    <button class="switch-btn" data-project="arduino">Arduino</button>
</div>

<div class="project-info active" id="webrtc">

<h2 class="subtitle">WebRTC</h2>

View and Influence Cities is an interactive experience in which users explore and transform a digital city. Movements and sound influence the city: tilting changes style or zoom, shaking distorts buildings, swiping and camera touch control day/night, and the microphone adjusts the crowding based on ambient sound.

<a class= "see-button" href="https://city-ilj6.onrender.com/" class="project__figma">Visit website</a>
</div>

<div class="project-info" id="arduino">

<h2 class="subtitle">Arduino</h2>

I further developed Discovery Cities by creating a physical Arduino interface that connects with the digital city. The physical controls allow users to interact with and influence the city through movement, light and distance.

A rotary encoder controls the zoom in and out of the city, while a VL53L0X distance sensor allows users to select between different cities. A photoresistor detects the surrounding light level and controls the day/night cycle. Buttons control the cultural shock interaction and reset the experience.

The physical interactions are enhanced with a servo motor, RGB LED, LEDs and a passive buzzer, providing visual, audio and physical feedback. This extension combines the existing digital experience with physical interaction to create a more immersive way of exploring the cities.

</div>

![city Brandboard](../../content/projecten/img/city/result-london.png)
![city Brandboard](../../content/projecten/img/city/result-paris.png)
![city Brandboard](../../content/projecten/img/city/result-tokyo.png)

<script>
    const switchButtons = document.querySelectorAll('.switch-btn');
    const projectInfos = document.querySelectorAll('.project-info');

    switchButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchButtons.forEach(btn => btn.classList.remove('active'));
            projectInfos.forEach(info => info.classList.remove('active'));

            button.classList.add('active');

            const targetId = button.getAttribute('data-project');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
</script>