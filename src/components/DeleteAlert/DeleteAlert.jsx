"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteAlert({ room }) {

    const { _id } = room

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/rooms/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            // credentials: "include"
        });

        const data = await res.json();
        toast.success('Room deleted successfully');
        redirect('/allrooms')
        // console.log(data);
    };
    return (
        <AlertDialog>
            <Button className={"text-White text-xl rounded-none w-full sm:flex-1 bg-red-500 hover:bg-red-600 py-3"} variant="none">
                Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete destination permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{room.roomName}</strong>{" "}
                                and all of its data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}