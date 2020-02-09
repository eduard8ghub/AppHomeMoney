import {formatDistanceStrict} from "date-fns";
import startOfDay from "date-fns/startOfDay";
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';
import isToday from 'date-fns/isToday';
import format from 'date-fns/format'
import isAfter from 'date-fns/isAfter'


export const searchHistoryPopup = (events, selectedPeriod, filterConfigType, filterConfigEvents) => {
    let currentDate = format(new Date(events[0].date), 'dd.MM.yyyy');
    // console.log(currentDate);
    //
    // // console.log(new Date());
    // console.log(new Date(currentDate));

    console.log(filterConfigType);
    console.log(filterConfigEvents);

    if(selectedPeriod.periodSearch === 'd') {
        let res = events.filter(e => isToday(new Date(e.date)));

        if(filterConfigType) {
            console.log(filterConfigType);
        }
    }

    if(selectedPeriod.periodSearch === 'w') {
        const weekBefore = subWeeks(new Date(), 1);
        const res = events.filter(e => isAfter(new Date(e.date), weekBefore))
    }

    if(selectedPeriod.periodSearch === 'm') {
        const monthBefore = subMonths(new Date(), 1);
        const res = events.filter(e => isAfter(new Date(e.date), monthBefore))
    }






























    // console.log(events[0].date);
    // console.log(new Date(events[0].date));

    // console.log(new Date(events[7].date));
    // console.log(new Date(events[0].date));
    // let res = isToday(new Date(events[0].date));
    // console.log(events[0].date.split(' ')[0]);


    // console.log(subMonths(new Date(), 1));
    // console.log(subWeeks(new Date(), 1));

    // console.log(formatDistanceStrict(
    //     new Date(2000, 1, 22),
    //     new Date(2000, 3, 22),
    // ))



    // const d2 = +events[1].date.split(' ')[0].replace(/[^-0-9]/gim,'');
    const d2 = +events[1].date
        .split(' ')[0]
        .split('.')
        .splice(0, 2)
        .toString()
        .replace(/[^-0-9]/gim,'');

    // const diffTime = Math.abs(d1 - d2);
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // console.log(diffTime);

    // let d1 = "02.07.2020";
    //
    // let d1N = +d2.replace(/[^-0-9]/gim,'');
    // let d2N = +d2.replace(/[^-0-9]/gim,'') - 7;
    //
    // const test = Math.abs(d1N - d2N);

    events.filter((e) => {
        // console.log(e.date + '  ' + new Date(e.date));

        // console.log(e.date);
        let t = Object.assign({}, e);
        t = t.date
            .split(' ')[0]
            .split('.')
            .splice(0, 2)
            .toString()
            .replace(/[^-0-9]/gim,'');
        // console.log(t);
        // return t[field].toLowerCase().includes(value.toLowerCase());
    });

};