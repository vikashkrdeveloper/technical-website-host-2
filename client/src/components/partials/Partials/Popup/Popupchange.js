 

function Popupchange() {
    const chartshowmessages = document.querySelector('#chartshowmessage');
    if (chartshowmessages.classList.contains('hidden')) {
        chartshowmessages.classList.remove('hidden');

    } else {
        chartshowmessages.classList.add('hidden');
    }
}

export default Popupchange
