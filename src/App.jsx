// src/App.jsx

import React, { useState, useEffect } from "react";
import { MoodType } from "./utils/moodData";
import MoodSelector from "./components/MoodSelector";
import MoodCalendar from "./components/MoodCalendar";
import "./styles/main.scss";

function App() {
  const [moodData , setMoodData] = useState ({});

  useEffect(() => {
    const storedData = localStorage.getItem("moods");
    if (storedData) {
      setMoodData(JSON.parse(storedData));
    }
  }, []);

  // حفظ البيانات في localStorage كل ما تغيّر moodData
  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moodData));
  }, [moodData]);

  // عند اختيار مزاج
  const handleMoodSelect = (selectedMood) => {
    const today = new Date().toISOString().split("T")[0]; // تاريخ اليوم بصيغة YYYY-MM-DD
    setMoodData((prev) => ({
      ...prev,
      [today]: selectedMood,
    }));
  };

  return (
    <div className="app-container">
      <h1>📝 يوميات مزاجك</h1>

      <MoodSelector onSelect={handleMoodSelect} moodList={MoodType} />

      <MoodCalendar moodData={moodData} />
    </div>
  );
}

export default App;
