import React from "react"

const logos = [
  "/public/images/Femina 1.png",
  "/public/images/Group 212.png",
  "/public/images/Aristo Smat logo 1.png",
  "/public/images/MAC-Cosmetics-logo 1.png",
  "/public/images/Super Yuda 1.png",
  "/public/images/wework-logo 1.png",
  "/public/images/Arcaffe 1.png",
  "/public/images/Good Pharm 1.png",
  "/public/images/TOUS 2.png",
  "/public/images/f-54-logo-web 1.png",
  "/public/images/slaks logo 1.png",
]

const ClientLogos = () => {
  const renderLogo = (src, index) => (
    <img
      key={index}
      src={src}
      alt={`Client logo ${index + 1}`}
      className="max-h-8 max-w-[90px] object-contain"
    />
  )

  return (
    <div className="flex flex-col gap-5 mb-8">
      <div className="flex justify-center gap-8 flex-wrap">
        {logos.slice(0, 6).map(renderLogo)}
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {logos.slice(6, 11).map(renderLogo)}
      </div>
    </div>
  )
}

export default ClientLogos