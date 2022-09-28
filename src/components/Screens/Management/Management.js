import React, { useContext } from "react";
import { ManagementContext } from "../../../context/ManagementContext";

export default function Management() {
  const [management, setManagement] = useContext(ManagementContext);
  return (
    <div style={styles.managementContainer}>
      <h1> Management of Greenville Shipping and Stevedoring Company</h1>

      {management.map((worker) => (
        <div style={styles.itemsCont}>
          <div>
            <img
              src={worker.employee.photo}
              width={200}
              height={200}
              alt="employee_photo"
              style={styles.emPhoto}
            />
            <div>
              <p style={{ marginTop: -2 }}>
                {worker.employee.firstName} {worker.employee.lastName}
              </p>
              <p style={{ marginTop: -15 }}>{worker.employee.position}</p>
              <p style={{ marginTop: -15 }}>{worker.employee.dob}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
const styles = {
  managementContainer: {
    marginTop: 20,
    // marginLeft: ".5%",
    // marginRight: ".5%",
    textAlign: "center",
  },
  itemsCont: {
    display: "inline-flex",
    marginLeft: 10,
    marginRigt: 10,
  },
  emPhoto: {
    borderRadius: "50%",
  },
};
// import { useMediaQuery } from "react-responsive";
// export default function NavBarButton({ to, buttonName }) {
//   const isMobileSmall = useMediaQuery({
//     query: "min-device-width: 500px)",
//   });
//   const widthTest = window.innerWidth;

//   if (isMobileSmall === widthTest) {
//     alert("yes");
//   }
//   const isMobileMedium = useMediaQuery({
//     query: "min-device-width: 375px)",
//   });
//   const isMobileLarge = useMediaQuery({
//     query: "min-device-width: 425px)",
//   });

//   const isTabletDevice = useMediaQuery({
//     query: "(min-device-width: 768px)",
//   });

//   const isLaptop = useMediaQuery({
//     query: "(min-device-width: 1024px)",
//   });

//   const isDesktop = useMediaQuery({
//     query: "(min-device-width: 1200px)",
//   });

//   const isBigScreen = useMediaQuery({
//     query: "(min-device-width: 1201px )",
//   });
