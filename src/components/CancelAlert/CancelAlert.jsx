"use client";
import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

export default function CancelAlert({ book }) {
    const handleCancel = async (_id) => {
        const { data: tokenData } = await authClient.token()
        
        const res = await fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify({
                status: "cancelled"
            })
            // credentials: "include"
        });
        window.location.reload();
        const data = await res.json();
        console.log(data);
    }
    return (
        <AlertDialog>
            <Button className={"text-red-500 rounded-none"} variant="outline">
                Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Cancel destination permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently cancel <strong>{book.roomName}</strong>{" "}
                                This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Undo
                            </Button>
                            <Button onClick={() => handleCancel(book._id)} slot="close" variant="danger">
                                Proceed
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    )
}
