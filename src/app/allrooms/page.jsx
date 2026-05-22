import FilterClient from '@/components/FilterClient/FilterClient';
import RoomCard from '@/components/RoomCard/RoomCard';
import { getRooms } from '@/lib/data';
// import { getRooms } from '@/lib/data';

export const metadata = {
  title: "StudyNook - Explore Rooms",
};

export default async function page() {

    const roomData = await getRooms()
    // console.log(data);
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex flex-col gap-10 justify-center items-center px-4 py-10">
            <div className="w-full lg:container md:container mx-auto">
                <FilterClient rooms={roomData} />
            </div>
        </div>
    )
}
