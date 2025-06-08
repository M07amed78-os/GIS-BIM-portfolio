'use client';
import React from 'react';

export default function Section({ title, link }) {
  return (
    <section className="my-10 px-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          View Project →
        </a>
      )}
    </section>
  );
}
