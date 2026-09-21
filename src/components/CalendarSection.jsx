import { useEffect, useMemo, useState } from "react";

const TARGET_DATE = new Date("2026-09-29T12:00:00+03:00");
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getTimeLeft() {
  const distance = TARGET_DATE.getTime() - Date.now();

  if (distance <= 0) {
    return {
      complete: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    complete: false,
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (timeLeft.complete) {
    return (
      <div className="married-message wedding-text" role="status">
        <span className="month-title married-title">Alhamdulillah</span>
        <p>
          Our marriage has been blessed. May Allah fill our life together with
          love, mercy, peace, and a lifetime of beautiful memories.
        </p>
      </div>
    );
  }

  const units = [
    ["Days", timeLeft.days],
    ["Hours", timeLeft.hours],
    ["Minutes", timeLeft.minutes],
    ["Seconds", timeLeft.seconds],
  ];

  return (
    <div className="countdown" role="timer" aria-live="polite">
      {units.map(([label, value], index) => (
        <div className="countdown-part" key={label}>
          <div className="countdown-unit">
            <strong className="month-title">{String(value).padStart(2, "0")}</strong>
            <span className="wedding-text">{label}</span>
          </div>
          {index < units.length - 1 && (
            <span className="countdown-separator month-title" aria-hidden="true">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CalendarSection() {
  const calendarDays = useMemo(() => {
    const leadingEmptyDays = 2; // September 1, 2026 is Tuesday.
    const days = Array.from({ length: 30 }, (_, index) => index + 1);
    return [...Array(leadingEmptyDays).fill(null), ...days];
  }, []);

  return (
    <section className="wedding-section calendar-section" aria-labelledby="calendar-title">
      <div className="section-inner calendar-content">
        <p className="eyebrow wedding-text">SAVE THE DATE</p>
        <h2 className="calendar-title month-title" id="calendar-title">
          September 2026
        </h2>

        <div className="calendar" aria-label="September 2026 calendar">
          <div className="calendar-weekdays month-title">
            {WEEKDAYS.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="calendar-grid month-title">
            {calendarDays.map((day, index) => (
              <div className="calendar-cell" key={`${day ?? "empty"}-${index}`}>
                {day === 29 ? (
                  <span className="special-day" aria-label="September 29, wedding day">
                    <span className="heart-ring" aria-hidden="true">♡</span>
                    <span className="special-day-number">29</span>
                  </span>
                ) : (
                  day
                )}
              </div>
            ))}
          </div>
        </div>

        <Countdown />
      </div>
    </section>
  );
}
