import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import { Container, Time } from './styles';

const range = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map((hour) => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(
            (a) => parseISO(a.date).toString() === compareDate.toString()
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handleDay(add) {
    setDate(add ? addDays(date, 1) : subDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={() => handleDay(false)}>
          <MdChevronLeft size={36} color="#000" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={() => handleDay(true)}>
          <MdChevronRight size={36} color="#000" />
        </button>
      </header>

      <ul>
        {schedule.map((time) => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <div className="left">
              <strong>{time.time}</strong>
              <span>
                {time.appointment ? time.appointment.user.name : 'Em aberto'}
              </span>
            </div>
            <div className="right">
              <strong>{time.appointment ? 'Serviço: ' : ''} </strong>
              <span>
                {time.appointment ? time.appointment.product.name_product : ''}{' '}
              </span>
            </div>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
