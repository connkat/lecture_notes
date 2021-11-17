import axios from "axios";
import { useEffect, useState } from "react";

function Appointment() {
  const [appointments, setAppointments] = useState({});
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [apptId, setApptId] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8001/api/appointments`).then((result) => {
      setAppointments(result.data);
      console.log(result);
    });
  }, []);

  useEffect(() => {
    console.log("appt changed");
    const targetAppt = appointments[apptId];
    console.log(targetAppt);
    setSelectedAppt(targetAppt);
  }, [apptId, appointments]);

  return (
    <div className="Appointment">
      <h1>Appointment</h1>

      <h2> total appointments: {Object.keys(appointments).length} </h2>
      <div>
        <div>
          <label>Enter ApptID </label>
          <br />
          <input
            value={apptId}
            onChange={(event) => setApptId(event.target.value)}
          />
        </div>

        <div>
          <h2>Selected appt: </h2>

          {selectedAppt && <p> interview id: {selectedAppt.id} </p>}
          {selectedAppt && <p> interview time: {selectedAppt.time} </p>}
          {selectedAppt && selectedAppt.interview && (
            <p>student is: {selectedAppt.interview.student} </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appointment;
