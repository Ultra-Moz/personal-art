import React from 'react'

const STATIC_IMAGES = [
  { src: "/images/computer-table/Background.PNG", alt: "background" },
  { src: "/images/computer-table/awards.PNG", alt: "awards" },
  { src: "/images/computer-table/books.PNG", alt: "books" },
  { src: "/images/computer-table/cpu-table.PNG", alt: "table" },
  { src: "/images/computer-table/cpu.PNG", alt: "cpu" },
  { src: "/images/computer-table/setup.PNG", alt: "setup" },
  { src: "/images/computer-table/sofa.PNG", alt: "sofa" },
  { src: "/images/computer-table/table.PNG", alt: "table" },
  { src: "/images/computer-table/things.PNG", alt: "things" },
  { src: "/images/computer-table/diary-closed.PNG", alt: "diary" },
  { src: "/images/computer-table/complete.png", alt: "complete" },
];

const HOVER_IMAGES =[
   {
    id: "diary",
    alt: "diary",
    closed: "/images/computer-table/diary-closed.PNG",
    opened: "/images/computer-table/diary-opened.PNG",
  },
]


const ComputerTableScene = () => {
  return (
    <>
    {STATIC_IMAGES.map(({ src, alt }) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full"
        />
      ))}
    </>
  )
}

export default ComputerTableScene