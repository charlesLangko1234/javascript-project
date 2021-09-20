const inputSearch = document.querySelector('.search-input');
const btnSearch = document.querySelector('.search-button');

// Data display
const place = document.querySelector('.place');
const temp = document.querySelector('.temp');
const explain = document.querySelector('.explain');
const exp_humi = document.querySelector('.exp-humi');
const exp_wind = document.querySelector('.exp-wind');
const imgIcon = document.querySelector('.icon');
const data = document.querySelector('.data');

//Access API
function getDataAPI(placeName) {
    $.ajax({
        url:'http://api.weatherapi.com/v1/current.json',
        type:'get',
        dataType:'json',
        data: {
            'key':'5216a2f8b53840d9b2f134247212009',
            'q':placeName
        },
        success: function(result) {            
            place.innerHTML = `Weather in ${result.location.name}`;
            temp.innerHTML = result.current.temp_c;
            imgIcon.src = result.current.condition.icon;
            explain.innerHTML = result.current.condition.text;
            exp_humi.innerHTML = result.current.humidity+' %';
            exp_wind.innerHTML = result.current.wind_mph+' mph';
            console.log(place.innerHTML)
        }
    });
    data.style.display = 'block';
}


btnSearch.addEventListener('click', ()=>{
    console.log(inputSearch.value);
    getDataAPI(inputSearch.value);
});