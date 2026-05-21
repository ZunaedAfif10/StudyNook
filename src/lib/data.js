export async function getRooms() {
    const res = await fetch('http://localhost:5000/rooms');
    return res.json();
}
