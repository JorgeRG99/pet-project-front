import { SERVER_ERROR, SUCCESSFUL_BOOKING, SUCCESSFUL_BOOKING_DELETE } from "@/configs/user-feedback-config";
import { UserSessionContext } from "@/context/userSession";
import { createBooking, deleteBooking, getBookingsPanel, getYourBookings } from "@/services/BookingService";
import { useContext } from "react";
import { toast } from "sonner";

export function useBookings() {
    const { userSession } = useContext(UserSessionContext)

    const yourBookings = async () => {
        const res = await getYourBookings(userSession.token)

        if (res.status === 200) {
            return res.response
        } else {
            toast.error(SERVER_ERROR);
            return []
        }
    }

    const addBooking = async (booking) => {
        const res = await createBooking(booking, userSession.token)

        if (res.status === 201) {
            toast.info(SUCCESSFUL_BOOKING);
        } else {
            toast.error(SERVER_ERROR);
        }
    }
    
    const bookingDelete = async (bookingId, setBookings) => {
        const res = await deleteBooking(userSession.token, bookingId)

        if(res.status === 200){
            setBookings(prevState => prevState.filter(booking => booking.id !== bookingId))
            toast.info(SUCCESSFUL_BOOKING_DELETE);
        } else {
            toast.error(SERVER_ERROR);
        }
    }

    const bookingsPanel = async () => {
        const res = await getBookingsPanel(userSession.token)

        if (res.status === 200) {
            return res.response
        } else {
            toast.error(SERVER_ERROR);
            return []
        }
    }

    return { addBooking, yourBookings, bookingDelete, bookingsPanel }
}