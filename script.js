const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select Media Stream, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play(); // Corrected play method
        }
    } catch (error) {
        console.log('Whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    
    // Start Picture in Picture
    try {
        await videoElement.requestPictureInPicture();
    } catch (error) {
        console.log('Failed to start Picture-in-Picture:', error);
    }

    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();
