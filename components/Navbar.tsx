'use client'

import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-4 bg-gradient-to-b from-black">
      <h1 className="text-netflix text-2xl font-bold">NETFLIX</h1>
      <div className="space-x-6 hidden md:flex">
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>New</span>
        <span>My List</span>
      </div>
      <Search />
    </div>
  );
}
