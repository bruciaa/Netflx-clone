export default function Banner() {
  return (
    <div
      className="h-[70vh] flex flex-col justify-end p-10 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4')" }}
    >
      <h1 className="text-5xl font-bold mb-4">Featured Title</h1>
      <p className="max-w-lg mb-4">
        A beautiful Netflix-style banner component. Replace with real data later.
      </p>
      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded">Play</button>
        <button className="bg-gray-700 px-6 py-2 rounded">More Info</button>
      </div>
    </div>
  );
}
