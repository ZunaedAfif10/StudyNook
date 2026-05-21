"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "react-toastify";


export default function EditModal({ room }) {

    const amenitiesOptions = [
        "Whiteboard",
        "Projector",
        "Wi-Fi",
        "Power Outlets",
        "Quiet Zone",
        "Air Conditioning",
    ];
    // console.log(room)

    const { data: session } = useSession();

    // console.log(session);
    const user = session?.user
    const { _id } = room;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const roomData = {
            ...Object.fromEntries(formData.entries()),
            user_Id: user?.id,
            amenities: formData.getAll("amenities"),
        };

        const { data: tokenData } = await authClient.token()

        const res = await fetch(`http://localhost:5000/rooms/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(roomData)
            // credentials: "include"
        });

        // console.log(roomData);
        const data = res.json();
        toast.success('Room Updated successfully');
        window.location.reload();
        // console.log(data)
    }

    return (
        <Modal>
            <Button className={"border border-white/10 text-xl text-white bg-white/5 px-7 backdrop-blur-lg transition hover:bg-white/10 w-full sm:flex-1  py-3 rounded-lg font-medium"}>Edit</Button>
            <Modal.Backdrop>
                <div>
                    <Modal.Container placement="auto" size="cover">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <Envelope className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Edit Room</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="space-y-6">
                                        <div>
                                            <label className="mb-2 block text-sm text-slate-200">
                                                Room Name
                                            </label>
                                            <input
                                                type="text"
                                                name="roomName"
                                                required
                                                defaultValue={room.roomName}
                                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm text-slate-200">
                                                Description
                                            </label>
                                            <textarea
                                                name="description"
                                                required
                                                rows={5}
                                                defaultValue={room.description}
                                                placeholder="Write room details..."
                                                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm text-slate-200">
                                                Image URL
                                            </label>
                                            <input
                                                type="url"
                                                name="image"
                                                defaultValue={room.image}
                                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm text-slate-200">
                                                    Floor
                                                </label>
                                                <input
                                                    type="text"
                                                    name="floor"
                                                    defaultValue={room.floor}
                                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm text-slate-200">
                                                    Capacity
                                                </label>

                                                <input
                                                    type="number"
                                                    name="capacity"
                                                    defaultValue={room.capacity}
                                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm text-slate-200">
                                                Hourly Rate
                                            </label>
                                            <input
                                                type="number"
                                                name="hourlyRate"
                                                defaultValue={room.hourlyRate}
                                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-4 block text-sm text-slate-200">
                                                Amenities
                                            </label>
                                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                                {amenitiesOptions.map((item) => (
                                                    <label
                                                        key={item}
                                                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 cursor-pointer hover:border-sky-500/40 transition"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            name="amenities"
                                                            value={item}
                                                            className="h-4 w-4 accent-sky-500"
                                                        />
                                                        <span className="text-sm">{item}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 sm:flex-row">
                                            <button
                                                type="submit"
                                                className="w-full rounded-2xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500"
                                            >
                                                Update
                                            </button>
                                            <button
                                                type="reset"
                                                className="w-full rounded-2xl border border-sky-500 px-6 py-3 font-semibold text-sky-400 transition hover:bg-sky-500/10"
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </div>
            </Modal.Backdrop>
        </Modal>
    )
}
