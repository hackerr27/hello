document.getElementById('changeMessage').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Will you be my Valentine?';
    document.getElementById('changeMessage').style.display = 'none';
    document.getElementById('options').style.display = 'block';
});

document.getElementById('yesButton').addEventListener('click', function() {
    const pdfUrl = 'secret.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'secret.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('Oops! Wrong option, think again.');
});
