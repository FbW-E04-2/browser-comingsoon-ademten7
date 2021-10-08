import { para1, para2, para3, para4, iTags } from "./defineLocaters.js"

const totalTimes = () => {
    //https://en.wikipedia.org/wiki/ISO_8601
    // The ISO 8601 format:
    // const deadline = '2015-12-31';
    // const deadline = 'December 31 2015 23:59:59 GMT+0200';

    const endDate = "December 31 2021 23:59:59 GMT+0200";
    //console.log(Date.parse(new Date()));//it gives us millisecond from 1/1/1970==>1633554375000
    const totalTime = Date.parse(endDate) - Date.parse(new Date()); //it gives millisecond

    const totalDay = Math.floor(totalTime / (24 * 60 * 60 * 1000));

    let remainMillisecond = totalTime % (24 * 60 * 60 * 1000);

    const totalHours = Math.floor(remainMillisecond / (60 * 60 * 1000));

    remainMillisecond %= (60 * 60 * 1000);

    const totalMinutes = Math.floor(remainMillisecond / (60 * 1000))

    remainMillisecond %= (60 * 1000);

    const totalSeconds = Math.floor(remainMillisecond / (1000));

    let rest;

    [...rest] = [totalDay, totalHours, totalMinutes, totalSeconds]; //return array

    return rest;

}

const showTime = () => {

    para1.innerHTML = `<span><b>${totalTimes()[0]} </b>days</span>`
    para2.innerHTML = `<span><b>${totalTimes()[1]} </b>hours</span>`
    para3.innerHTML = `<span><b>${totalTimes()[2]} </b>minutes</span>`
    para4.innerHTML = `<span><b>${totalTimes()[3]} </b>seconds</span>`

}

export const setIntervalFunc = () => {
    setInterval(showTime, 1000);
}

export const hoverEffect = () => {

    iTags.forEach(tag => {
        console.log(tag);
        tag.addEventListener("mouseover", (e) => {

            tag.style.cssText = "transform: scale(2)"
        })

        tag.addEventListener("mouseout", (e) => {
            tag.style.cssText = "transform: scale(1)"
        })
    })




}