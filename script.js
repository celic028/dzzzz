document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('responseMessage').innerHTML = 'Yay! I’m so happy you said yes!';
    document.getElementById('responseMessage').style.color = '#4caf50'; // Green for happiness!
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('responseMessage').innerHTML = 'Aww, that’s okay. I’ll still be here for you! <3';
    document.getElementById('responseMessage').style.color = '#f44336'; // Red for sympathy
});
