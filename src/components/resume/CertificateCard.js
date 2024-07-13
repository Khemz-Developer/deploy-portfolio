import React from 'react'



const CertificateCard = ({title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-4 h-auto xl:py-5 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
    <div className="w-full h-[80%] overflow-hidden rounded-lg">
      <img
        className="object-cover w-full duration-300 cursor-pointer h-60 group-hover:scale-110"
        src={src}
        alt="src"
      />
    </div>
    <div className="flex flex-col w-full gap-6 mt-5">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-normal uppercase text-cyan-600">
            {title}
          </h3>
         
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default CertificateCard
