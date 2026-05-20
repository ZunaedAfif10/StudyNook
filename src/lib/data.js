export async function getRooms() {
    const res = await fetch('http://localhost:5000/rooms');
    return res.json();
}

export async function getRoomsById(id) {
    const res = await fetch(`http://localhost:5000/rooms/${id}`);
    return res.json();
}
