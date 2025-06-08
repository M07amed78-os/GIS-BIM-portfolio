'use client';
import React from 'react';

export default function VideoSection({ title, videos }) {
  return (
    <section className="my-10 px-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video, idx) => (
          <div key={idx} className="bg-gray-800 p-2 rounded shadow">
            <video controls className="w-full mb-2 rounded">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-white">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
