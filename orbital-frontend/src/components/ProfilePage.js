import React from "react";

const ProfilePage = () => {
  const profileData = {
    name: "Astronaut V",
    email: "john.doe@cosmoquest.com",
    role: "Commander",
  };

  const renderProfileInfo = () => {
    return `
Welcome to your Space Terminal, ${profileData.name}.

-------------------------------
USER INFORMATION:
-------------------------------
Name: ${profileData.name}
Email: ${profileData.email}
Role: ${profileData.role}

AVAILABLE COMMANDS:
1. Edit Profile
2. Change Password
3. Customize Theme
4. Logout
-------------------------------
Type a command to proceed:`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.cliBox}>
        <pre style={styles.text}>{renderProfileInfo()}</pre>
        <input
          type="text"
          placeholder="Type a command..."
          style={styles.input}
        />
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#0d0d0d", // Space black background
    color: "#00ff00", // Neon green text
    fontFamily: "Courier New, monospace", // CLI-like font
  },
  cliBox: {
    width: "900px",
    height: "500px",
    backgroundColor: "#1a1a1a", // Dark terminal background
    border: "2px solid #00ff00", // Neon green border
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 0 10px #00ff00",
    overflowY: "auto",
  },
  text: {
    whiteSpace: "pre-wrap",
    lineHeight: "1.5",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    backgroundColor: "#000",
    color: "#00ff00",
    border: "none",
    borderTop: "2px solid #00ff00",
    padding: "10px",
    fontSize: "14px",
    outline: "none",
    fontFamily: "Courier New, monospace",
  },
};

export default ProfilePage;
