"use client";

import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

import Image from "next/image";
import Link from "next/link";

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const items = [
    {
      src: "/images/fotoGalery/1.jpg",
      type: "image",
    },
    {
      src: "https://www.youtube.com/watch?v=EIUJfXk3_3w",
      type: "video",
      poster: "https://img.youtube.com/vi/EIUJfXk3_3w/maxresdefault.jpg",
    },
    {
      src: "https://www.youtube.com/watch?v=GQ_pTmcXNrQ",
      type: "video",
      poster: "https://img.youtube.com/vi/GQ_pTmcXNrQ/maxresdefault.jpg",
    },
    {
      src: "https://www.youtube.com/watch?v=rn9fzmeMaTo",
      type: "video",
      poster: "https://img.youtube.com/vi/rn9fzmeMaTo/maxresdefault.jpg",
    },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f8f8" }}>
      <LightGallery
        elementClassNames="LightGallery"
        onInit={onInit}
        speed={300}
        plugins={[lgThumbnail, lgZoom, lgVideo]}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.src}
            data-src={item.src}
            data-sub-html={
              item.type === "video"
                ? `<h4>Video ${index + 1}</h4>`
                : `<h4>Image ${index + 1}</h4>`
            }
            data-poster={item.poster} // Добавляем постер для видео
            style={{
              position: "relative",
              height: "300px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
          >
            {item.type === "image" ? (
              <Image
                alt={`img${index + 1}`}
                src={item.src}
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            ) :
              console.log('falllll')
            //   (
            //   <img
            //     width="300"
            //     height="100"
            //     src={item.poster}
            //     alt={`video${index + 1}`}
            //     style={{
            //       objectFit: "cover",
            //     }}
            //   />
            // )
            }
          </Link>
        ))}
      </LightGallery>
    </div>
  );
}

export default Gallery;