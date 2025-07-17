import React, { useState, useEffect } from "react";
import { MoodType } from "../utils/MoodData" ;

let moodList = MoodType; 

function MoodSelector({ moodList, onSelect }) {
  return (
    <div className="mood-selector">
      {moodList.map((mood, index) => (
        <div key={index} onClick={() => onSelect(mood)} className="mood-item">
          {mood.emoji} {mood.name}
        </div>
      ))}
    </div>
  );
}

export default MoodSelector;
