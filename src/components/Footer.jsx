import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Food Delivery Orders</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    marginTop: "30px",
    background: "#111",
    color: "#fff"
  }
};

export default Footer;