'use client'

import { useParams } from 'next/navigation';

export default function WatchPage() {
  const params = useParams();

  return (
    <div className="h-screen bg-black flex flex-col">
      <h1 className="p-4 text-xl">Playing Movie {params?.id}</h1>
      <video
        className="w-full h-full"
        controls
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </div>
  );
}
