import React from "react";

const medalMap = {
  0: { emoji: "🥇", label: "Gold", glow: "#ffd700" },
  1: { emoji: "🥇", label: "Gold", glow: "#ffd700" },
  2: { emoji: "🥇", label: "Gold", glow: "#ffd700" },
  3: { emoji: "🏆", label: "Winner", glow: "#c770f0" },
  4: { emoji: "🥈", label: "Silver", glow: "#c0c0c0" },
  5: { emoji: "🥈", label: "Silver", glow: "#c0c0c0" },
  6: { emoji: "🥈", label: "Silver", glow: "#c0c0c0" },
};

function AchievementCard({ title, description, date, imgPath, index }) {
  const medal = medalMap[index] || { emoji: "🏅", label: "Award", glow: "#c770f0" };

  return (
    <div className="ach-card" style={{ "--glow": medal.glow }}>
      {/* Top image */}
      {imgPath && (
        <div className="ach-card-img-wrap">
          <img src={imgPath} alt={title} className="ach-card-img" />
          <div className="ach-card-img-overlay" />
        </div>
      )}

      {/* Medal badge */}
      <div className="ach-medal" style={{ color: medal.glow, borderColor: medal.glow }}>
        <span className="ach-medal-emoji">{medal.emoji}</span>
      </div>

      <div className="ach-card-body">
        <div className="ach-date">{date}</div>
        <h5 className="ach-title">{title}</h5>
        <p className="ach-desc">{description}</p>
      </div>
    </div>
  );
}

export default AchievementCard;
