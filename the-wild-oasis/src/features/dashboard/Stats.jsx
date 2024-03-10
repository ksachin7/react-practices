import React from 'react'
import Stat from './Stat'
import { HiOutlineBackspace, HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';
import { Checkbox } from '../../ui';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
    // const numberOfBookings = bookings.length;
    // const sales= bookings.reduce((acc, cur)=>acc+cur.totalPrice, 0);
    // const totalCheckins= confirmedStays.length;
    // const occupancyRate= confirmedStays.reduce((acc, cur)=>acc+cur.numNights)/(numDays*cabinCount);
    const numberOfBookings = 0;
    const sales= 0;
    const totalCheckins= 0;
    const occupancyRate= 0;

    return (
        <>
            <Stat
                title='Bookings'
                color='blue'
                icon={<HiOutlineBriefcase />}
                value={numberOfBookings}
            />
            <Stat
                title='Sales'
                color='green'
                icon={<HiOutlineBanknotes />}
                value={formatCurrency(sales)}
            />
            <Stat
                title='Check-ins'
                color='indigo'
                icon={<HiOutlineCalendarDays />}
                value={totalCheckins}
            />
            <Stat
                title='Occupancy rate'
                color='Yellow'
                icon={<HiOutlineChartBar />}
                value={Math.round(occupancyRate*100)+'%'}
            />

        </>
    )
}

export default Stats