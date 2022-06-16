import { useState } from 'react'
import Calendar from 'react-calendar'
import '../calendar.css'

export default function CalendarSection() {
  const [date, setDate] = useState(new Date())
  const [nights, setNights] = useState(0)
  // console.log('date :>> ', date)

  const changeDate = (e) => {
    setDate(e)
    console.log('date :>> ', date)
    const oneDay = 1000 * 60 * 60 * 24
  }

  return (
    <div className='d-flex flex-column' id="listing-desc">
      <p>${nights} nights in treehouse</p>
      <p>
        {date.length > 0
          ? `${date[0].toDateString()} - ${date[1].toDateString()}`
          : null}
      </p>
      <Calendar
        next2Label={null}
        prev2Label={null}
        activeStartDate={null}
        selectRange={true}
        onChange={changeDate}
        value={date}
      />
    </div>
  );
}
