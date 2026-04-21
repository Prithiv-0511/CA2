import React from "react";

function StatsCard({ title, value, testid }) {
  return (
    <div data-testid={testid} style={styles.card}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
    width: "220px",
    textAlign: "center"
  }
};

export default StatsCard;