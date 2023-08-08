export const getScoreColor = voteAverage => {
    if (Math.round(voteAverage * 10) >= 70) return '#6c3';
    if (Math.round(voteAverage * 10) > 50 && Math.round(voteAverage * 10) < 70)
      return '#fc3';
    if (Math.round(voteAverage * 10) <= 50) return '#f00';
  };