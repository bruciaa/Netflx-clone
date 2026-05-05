'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Row({ title }: { title: string }) {
  const router = useRouter();
  const movies = Array.from({ length: 12 });

  return (
    <div className="px-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex overflow-x-scroll gap-4">
        {movies.map((_, i) => (
          <div
            key={i}
            onClick={() => router.push(`/watch/${i}`)}
            className="min-w-[200px] cursor-pointer hover:scale-110 transition"
          >
            <Image
              src={`https://picsum.photos/300/400?random=${i}`}
              alt="movie"
              width={200}
              height={300}
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
