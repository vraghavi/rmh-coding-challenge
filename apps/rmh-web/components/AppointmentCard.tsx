import { useState } from "react";
import { Appointment } from "./Appointments";
import { useDispatch } from "react-redux";
import { setAppointmentData } from "@/features/appointmentSlice";

interface AppointmentCardProps {
    appointment: Appointment;
}

export const AppointmentsCard = ({ appointment }: AppointmentCardProps) => {

    const dispatch = useDispatch();

    const saveApptInStore = () => {
        // to save appointment in store
        dispatch(setAppointmentData(appointment));
    }


    const [appt, setAppt] = useState<Appointment>(appointment);

    return (<div className="p-4 flex justify-around text-sm w-full border-b-2">
        <img className="w-10 h-10" src="/avatar.png" />
        <span> {appointment.patientName}</span>
        <img className="w-5 h-5" src="/message-regular.svg" alt="" onClick={saveApptInStore} />
    </div>);
}