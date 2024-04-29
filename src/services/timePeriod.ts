
import { TimePeriod } from "@/types";
import moment from "moment";

export function getTimePeriod(label: TimePeriod) {
    const endDate = moment().endOf('day');
    const currentDate = moment().endOf('day');
    let startDate;
    switch (label) {
        case '1D':
            startDate = currentDate.subtract(1, 'days');
            break;
        case '1W':
            startDate = currentDate.subtract(1, 'weeks');
            break;
        case '1M':
            startDate = currentDate.subtract(1, 'months');
            break;
        case '6M':
            startDate = currentDate.subtract(6, 'months');
            break;
        case '1Y':
            startDate = currentDate.subtract(1, 'years');
            break;
        default:
            startDate = currentDate.subtract(1, 'days');
            break;
    }
    return { startDate: startDate.unix(), endDate: endDate.unix() };

}