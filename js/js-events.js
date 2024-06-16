document.getElementById('example2').addEventListener('click', function (event) {
    alert('Hello! This is an event listener.');

    console.log('Event Target:', event.target);
    console.log('Event Type:', event.type);
    console.log('Event Timestamp:', event.timeStamp);

    event.preventDefault();
});
