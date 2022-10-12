const sendApiCall = document.getElementById('sendApiCall');
const output = document.getElementById('output');

const URL = (location.host === 'localhost:1234') ? '//localhost:3000/apitest' : 'https://righteous-quiet-sphynx.glitch.me/apitest';
const EURL = (location.host === 'localhost:1234') ? '//localhost:3000/esource' : 'https://righteous-quiet-sphynx.glitch.me/esource';
sendApiCall.addEventListener('click', () => {
    // send api call
    addLogs('Requesting server to process large data');
    document.body.style.cursor = 'wait';
    fetch(URL).then((res) => {
        return res.json();
    }).then((result) => {
        addLogs(result.data);
        // Event Source Object
        let eventStream = new EventSource(`${EURL}`);
        eventStream.addEventListener('open', () => {
            console.log("Connected and subscribed to channel ");
        });
        eventStream.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
            console.log(' eventStream data', data);
            addLogs(data.msg);
            document.body.style.cursor = 'default';
            eventStream.close();
        });
        eventStream.addEventListener('error', (err) => {
            document.body.style.cursor = 'default';
            console.error("EventSource failed:", err);
        });
    });
});

function addLogs(log) {
    const p = document.createElement('p');
    p.innerHTML = log;
    output.appendChild(p);
}
