import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'
import {useState} from 'react'
function DatePicker1() {
    const [selectedDate,setSelectedDate]=useState(null);
    return (
        <div>
            <DatePicker selected={selectedDate} 
            onChange={date=> setSelectedDate(date)}
            dateFormat='dd/MM/yyyy' minDate={new Date()} isClearable showYearDropdown scrollableYearDropdown/>
            
        </div>
    )
}

export default DatePicker1
