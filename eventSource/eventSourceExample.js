const city = document.getElementById('city');
const label = document.getElementById('selected_city');
const form = document.getElementById('realTimeForm');
const secondsToUpdate = document.getElementById('seconds');
const close = document.getElementById('close');
const time = document.getElementById('time');

// const URL = '//localhost:3000/event-stream';
const URL = 'https://righteous-quiet-sphynx.glitch.me/event-stream';
let selectedCityName = 'Asia/Calcutta';
let selectedCityValue = 'Asia/Calcutta';

function onSelectCity(event) {
    selectedCityValue = event.target.value;
    selectedCityName = event.target.options[event.target.selectedIndex].text;
}
let eventStream;
function showBtnClick(event) {
    label.innerHTML = 'Current Time for '+ selectedCityName;
    // Close connect if already present
    closeConnection();

    eventStream = new EventSource(`${URL}?city=${selectedCityValue}&sec=${secondsToUpdate.value}`);
    eventStream.addEventListener('open', () => {
        console.log("Connected and subscribed to channel ");
    });
    eventStream.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        console.log(' eventStream data', data);
        time.innerHTML = data.dateTime;
    });
    eventStream.addEventListener('close', (err) => {
        console.error("EventSource failed:", err);
    });
    event.preventDefault();
}

function closeConnection() {
    if(eventStream) {
        eventStream.close();
    }
}

city.addEventListener('change', onSelectCity, false);
form.addEventListener('submit', showBtnClick, false);
close.addEventListener('click', closeConnection, false);




