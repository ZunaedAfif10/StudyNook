export async function getRooms() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`,{cache: "no-store"});
    return res.json();
}
