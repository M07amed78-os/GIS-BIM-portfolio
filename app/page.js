'use client';

import React from 'react';
import Head from 'next/head';
import Section from './components/Section';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title> GIS & BIM Portfolio </title>
      </Head>

      <h1 className="text-3xl font-bold text-center pt-6">GIS & BIM Portfolio</h1>

      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-2xl font-bold mb-4">Interactive ArcGIS Web Scene</h2>
        <a
          href="https://www.arcgis.com/home/webscene/viewer.html?webscene=7ca76928f1994628857e6445a16d0ffb"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          View Project →
        </a>
        <div className="w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow-lg">
          <img
            src="/bim_webscene.png"
            alt="Interactive Web Scene Thumbnail"
            className="w-full h-auto object-cover rounded"
          />
          <p className="text-center mt-2 text-white text-base">Interactive Web Scene Thumbnail</p>
        </div>
      </div>

      <Gallery title="Model Geolocation & Querying Workflows" images={[
        { src: "/start_forming_query.png.png", title: "Starting Query on Object IDs" },
        { src: "/definition_query.png.png", title: "Defining Layer Filter Query" },
        { src: "/move_model_ground.png.png", title: "Model Positioned in 3D Urban Scene" },
        { src: "/buildings_properties.png.png", title: "Accessing Building Properties in Layer" },
        { src: "/suggest_location.png.png", title: "Providing Address to Suggest Location" },
        { src: "/assign_coordinate_system.png.png", title: "Assigning RD New Coordinate System" },
        { src: "/geolocate_buildings.png.png", title: "Model Aligned to Ground Control Points" },
        { src: "/georeference_model.png.png", title: "Using Georeference Tools for Accuracy" }
      ]} />

      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-2xl font-bold mb-4">Room-Level Real Estate Web App</h2>
        <a
          href="https://www.arcgis.com/home/webscene/viewer.html?webscene=cfd0a5150d7946759fb8b9684c2d7fbd"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          View Project →
        </a>
        <div className="w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow-lg">
          <img
            src="/rooms_webscene.png"
            alt="Room-Level Web App Thumbnail"
            className="w-full h-auto object-cover rounded"
          />
          <p className="text-center mt-2 text-white text-base">Room-Level Web App Thumbnail</p>
        </div>
      </div>
      <Gallery title="Pop-ups and Space Management" images={[
        { src: "/room_attributes.png", title: "Room Attributes Table" },
        { src: "/relationship_class.png", title: "Creating Relationship Class" },
        { src: "/popup_demo.png", title: "Pop-up with Room Info" }
      ]} />

      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-2xl font-bold mb-4">Construction Plan 3D Scene</h2>
        <a
          href="https://learngis.maps.arcgis.com/home/webscene/viewer.html?webscene=dace3ae1eb894e2ea37668e671ab389c"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          View Project →
        </a>
        <div className="w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow-lg">
          <img
            src="/construction_scene.png"
            alt="Construction Plan 3D Scene Thumbnail"
            className="w-full h-auto object-cover rounded"
          />
          <p className="text-center mt-2 text-white text-base">Construction Plan 3D Scene Thumbnail</p>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-2xl font-bold text-center mb-6">GIS Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Wadi Al-Arish Poster */}
          <div className="w-full md:w-[45%] bg-gray-800 rounded-lg p-4 shadow-lg">
            <img
              src="/wadi_arish_summary.png.png"
              alt="Project Poster: Wadi Al-Arish Hydrology"
              className="w-full h-auto object-cover rounded"
            />
            <p className="text-center mt-2 text-white font-medium">
              Project Poster: Wadi Al-Arish Hydrology
            </p>
          </div>

          {/* U.S. Revenue Dashboard */}
          <div className="w-full md:w-[45%] bg-gray-800 rounded-lg p-4 shadow-lg">
            <img
              src="/us_revenue_dashboard.png.png"
              alt="U.S. Revenue Dashboard (Tableau)"
              className="w-full h-auto object-cover rounded"
            />
            <p className="text-center mt-2 text-white font-medium">
              U.S. Revenue Dashboard (Tableau)
            </p>
            <div className="flex justify-center mt-3">
              <a
                href="https://public.tableau.com/app/profile/mohamed.adel8081/viz/InsightsAnalysisofRevenueTrendsDashboard/InsightsAnalysisofRevenueTrendsDashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>


      <Gallery images={[
        { src: "/sewer_network_ny.png.png", title: "Sewer Network Overview" },
        { src: "/water_network_banafsaj.png.png", title: "Full Water Network Study Area" },
        { src: "/topo_map_al_tur.png.png", title: "Digitized Topographic Map of Al Tur" },
        { src: "/zagazig_highways.png.png", title: "Classified Highway Map of Zagazig" }
      ]} />


      <VideoSection title="Create ArcGIS GeoBIM Project" videos={[
        { src: "/authorizing_geobim.mp4.mp4", title: "Authorizing ArcGIS GeoBIM" },
        { src: "/configure_app.mp4.mp4", title: "Configure the App" },
        { src: "/create_app.mp4.mp4", title: "Create the App" },
        { src: "/new_project.mp4.mp4", title: "Start New Project" },
        { src: "/geobim_links.mp4.mp4", title: "Navigate Links Panel" },
        { src: "/geobim_tools.mp4.mp4", title: "Explore Tools Menu" }
      ]} />
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <div className="space-y-2">
          <p className="text-lg font-semibold">Contact Info</p>
          <p>
            <span className="text-green-400 text-xl">📲</span> +20 01552342926
          </p>
          <p>
            <span className="text-white text-xl font-bold">✉️</span> mohamedadel.782001@gmail.com
          </p>
        </div>
      </footer>

    </main>
  );
}
