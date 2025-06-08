'use client';
import React from 'react';

export default function Gallery({ title, images }) {
  return (
    <section className="my-10 px-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="bg-gray-800 p-2 rounded shadow">
            <img src={img.src} alt={img.title} className="w-full rounded mb-2" />
            <p className="text-sm text-white">{img.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
