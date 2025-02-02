document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('responseMessage').innerHTML = 'VOKIM PRASKA MO .. tako sam i mislio :)';
    document.getElementById('responseMessage').style.color = '#4caf50'; // Green for happiness!
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('responseMessage').innerHTML = 'ok briga me mrzim praska mo ne obracaj mi se mrs';
    document.getElementById('responseMessage').style.color = '#f44336'; // Red for sympathy
});
