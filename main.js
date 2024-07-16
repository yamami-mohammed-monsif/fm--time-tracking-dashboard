
const dailyBtn = document.getElementById('day');
const weeklyBtn = document.getElementById('week');
const monthlyBtn = document.getElementById('month');

const current = document.getElementsByClassName('current');
const previous = document.getElementsByClassName('previous');


    fetch('data.json').then(
        (data) => {
            if(data.ok) {
                return data.json();
            }
        }
    ).then(

        (myData) => {

            dailyBtn.addEventListener('click', () => {

                dailyBtn.classList.add('active');
                weeklyBtn.classList.remove('active');
                monthlyBtn.classList.remove('active');

                for(var i = 0; i < current.length; i++) {
                    current[i].innerHTML = myData[i].timeframes.daily.current + 'hrs';
                    previous[i].innerHTML = 'Yesterday - ' + myData[i].timeframes.daily.previous + 'hrs';
                }
            })

            weeklyBtn.addEventListener('click', () => {

                dailyBtn.classList.remove('active');
                weeklyBtn.classList.add('active');
                monthlyBtn.classList.remove('active');

                for(var i = 0; i < current.length; i++) {
                    current[i].innerHTML = myData[i].timeframes.weekly.current + 'hrs';
                    previous[i].innerHTML = 'Last week - ' + myData[i].timeframes.weekly.previous + 'hrs';
                }
            })

            monthlyBtn.addEventListener('click', () => {

                dailyBtn.classList.remove('active');
                weeklyBtn.classList.remove('active');
                monthlyBtn.classList.add('active');

                for(var i = 0; i < current.length; i++) {
                    current[i].innerHTML = myData[i].timeframes.monthly.current + 'hrs';
                    previous[i].innerHTML = 'Last month - ' + myData[i].timeframes.monthly.previous + 'hrs';
                }
            })
        }
    )