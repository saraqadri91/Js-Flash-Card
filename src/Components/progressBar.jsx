
export function ProgressBar({ current, total }) {
    const percent = Math.round((current / total) * 100);
  
    return (
      <div className="progress-container">
        <div className="progress-bar">
          <div className="fill" style={{ width: `${percent}%` }}>{percent}%</div>
        </div>
        <div className="counter">{current} of {total}</div>
      </div>
    );
  }
  