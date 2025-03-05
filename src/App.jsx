import React from 'react'
import './index.css'
const App = () => {
  const flowers = [
    {
      title: "Hoa Cúc Vàng",
      description: "Hoa cúc vàng tượng trưng cho sự trường thọ và may mắn.",
      img: "/images/cuc1.jpg",
    },
    {
      title: "Hoa Cúc Trắng",
      description: "Loài hoa của sự tinh khiết, thường được sử dụng trong các dịp trang trọng.",
      img: "/images/cuc2.jpg",
    },
    {
      title: "Hoa Cúc Hồng",
      description: "Mang ý nghĩa về tình cảm chân thành và sự tươi mới.",
      img: "/images/cuc3.jpg",
    },
    {
      title: "Hoa Cúc Nhật Bản",
      description: "Biểu tượng của hoàng gia Nhật Bản, thể hiện sự cao quý.",
      img: "/images/cuc4.jpg",
    },
    {
      title: "Cúc Dại",
      description: "Loài hoa nhỏ nhắn, mọc tự nhiên với vẻ đẹp hoang dã.",
      img: "/images/cuc5.jpg",
    },
    {
      title: "Cúc Dại",
      description: "Loài hoa nhỏ nhắn, mọc tự nhiên với vẻ đẹp hoang dã.",
      img: "/images/cuc6.jpg",
    },
  ];
  return (
    <div className="body">
      <div className="home relative ">
        <div className="navbar flex justify-between items-center flex-row bg-[url('/images/background.png')] bg-cover bg-center rounded-b-4xl">
          <img src="/images/flower.png" alt="" className="logo h-25 w-25" />
          <ul className="nav-items flex justify-between items-center flex-row m-1 relative left-20">
            <li className="mx-7 text-lg text-blue-500 hover:text-yellow-100 transition duration-300 ease-in-out">Home</li>
            <li className="mx-7 text-lg text-blue-500 hover:text-yellow-100 transition duration-300 ease-in-out">About</li>
            <li className="mx-7 text-lg text-blue-500 hover:text-yellow-100 transition duration-300 ease-in-out">Services</li>
            <li className="mx-7 text-lg text-blue-500 hover:text-yellow-100 transition duration-300 ease-in-out">Contact</li>
          </ul>

          <div className="search text-lightblue">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Any Thing"
                className="search-bar text-center text-yellow-100 border-2 border-white bg-transparent mr-3 rounded-3xl py-2 px-4 placeholder:text-amber-200 hover:bg-white transition duration-300 focus:border-blue-300 focus:outline-none"
              />
              <button
                type="submit"
                className="text-yellow-100 border-2 border-white px-4 py-2 rounded-3xl hover:bg-white hover:text-blue-300 transition duration-300"
              >
                Search
              </button>
            </div>

          </div>
        </div>
        <div className="content bg-blue-200 shadow-2xl rounded-2xl w-display h-display flex justify-between items-center flex-row mt-6">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">🌼 Masonry Layout - Hoa Cúc 🌼</h1>
            <div className="columns-3 gap-4">
              {flowers.map((flower, index) => (
                <div key={index} className="mb-4 break-inside-avoid bg-white shadow-lg rounded-xl overflow-hidden">
                  <img src={flower.img} alt={flower.title} className="w-full h-auto object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-yellow-600">{flower.title}</h2>
                    <p className="text-gray-600 mt-2">{flower.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="display ">
        <div className="menu"></div>
        <div className="menu-content"></div>
      </div>
    </div>
  )
}

export default App

