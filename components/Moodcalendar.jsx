// src/components/MoodCalendar.jsx

import React from "react";

function MoodCalendar({ moodData }) {
  // نجيب التواريخ المخزنة (مفاتيح object)
  const dates = Object.keys(moodData).sort((a, b) => new Date(b) - new Date(a)); // ترتيب تنازلي

  return (
    <div className="mood-calendar">
      <h2>التقويم</h2>
      <div className="calendar-grid">
        {dates.length === 0 && <p>لا توجد بيانات مزاجية حتى الآن.</p>}

        {dates.map((date) => {
          const mood = moodData[date];
          return (
            <div
              key={date}
              className="calendar-day"
              style={{ backgroundColor: mood.color || "#eee" }}
              title={`${date} - ${mood.name}`}
            >
              <span className="emoji">{mood.emoji}</span>
              <span className="date">{date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoodCalendar;
