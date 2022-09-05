import React, { useContext } from "react";
import { ManagementContext } from "../../../context/ManagementContext";

export default function Management() {
  const [management, setManagement] = useContext(ManagementContext);
  return (
    <div style={styles.managementContainer}>
      <h1> Management of Greenville Shipping and Stevedoring Company</h1>

      {management.map((worker) => (
        <div>
          <div>
            <img
              src={worker.employee.photo}
              width={400}
              height={400}
              alt="employee_photo"
            />
          </div>
          <div>
            <p style={{ marginTop: -2 }}>
              {worker.employee.firstName} {worker.employee.lastName}
            </p>
            <p style={{ marginTop: -15 }}>{worker.employee.position}</p>
            <p style={{ marginTop: -15 }}>{worker.employee.dob}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
const styles = {
  managementContainer: {
    marginTop: ".5%",
    marginLeft: ".5%",
    marginRight: ".5%",
    textAlign: "center",
    overflowY: "auto",
    height: 700,
  },
};
