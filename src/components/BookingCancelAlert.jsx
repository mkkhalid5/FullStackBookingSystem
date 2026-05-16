"use client";
import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import toast from "react-hot-toast";
import { IoTrashBin } from "react-icons/io5";

const BookingCancelAlert = ({booking}) => {
    const {destinationName, _id} = booking;
        const handleDelete = async () =>{
          const {data: tokenData} = await authClient.token()

            const res = await fetch(`http://localhost:5000/bookings/${_id}`,{
                method: 'DELETE',
                headers:{
                    'content-type': 'application/json',
                    authorization: `Bearer ${tokenData?.token}`
                }
            })
    
            const result = await res.json();
            if (result.deletedCount > 0) {
            toast.error("Booking deleted successfull!")
            window.location.reload();
        }
        }
    return (
         <AlertDialog>
      <Button className={'text-red-500 rounded-none'} variant="outline"><IoTrashBin /> Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Bookings permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Confirm
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default BookingCancelAlert;