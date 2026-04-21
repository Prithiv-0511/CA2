import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Food Orders</h2>

      <div>
        <Link to="/orders" style={styles.link}>Orders</Link>
        <Link to="/filter" style={styles.link}>Filter</Link>
        <Link to="/stats" style={styles.link}>Stats</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#111",
    color: "#fff"
  },
  link: {
    color: "#fff",
    marginLeft: "15px",
    textDecoration: "none"
  }
};

export default Navbar;