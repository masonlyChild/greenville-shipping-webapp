import React from "react";

export default function MobileScreen() {
  return <div style={styles.mobileScreen}>MobileScreen</div>;
}
const styles = {
  mobileScreen: {
    width: 80,
    height: 80,
    margin: "0% auto",
    borderRadius: "50%" /*50%,8*/,
    boxShadow: "15 15 0 0 #e4dcf2",
  },
};
