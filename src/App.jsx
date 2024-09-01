import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTMrq0FOHuNe5LGnwADhZTgJf8Y0AytYVSA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQO1MZOV63Lu-EQyUMw9Hq8jbH9DtyduYWA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BqwP7ugXfks-whHs0jq3NiDDkWRQDOhvEA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdtPz7rQH2FbBNWMtLPmYdBJDBFU_4T4-6Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2ZBbdtuixOqivsK_v9L7aXLqsdlHI1XH1g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlyNlMb1NuqlB_jrlZ_7bGt-mJ1LIpP-2MQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4HzhGUH5VxRbqRCwTyNIyxGg505mum3rKw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IEbcsyiQ4k8s0r4fm9BxYa9s2BCgPHklhA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66dNe35poCdoAk6h9ZHM9eClBUUPetnDNcA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUb_SAqHuPx57Y-keP9dzAHNtoCo54OpRxQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVUEpDg6eztzAyr-Y_h0n96DTumNnOXRU5w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BjFcg6Sp0FkUslmmrCuWQQPFlTn0e23efg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiI76D9VIJtd-mUicPtv07vgr1ZcKobACqyg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIdeedIaI6-38gkUVGVgfmTCOKypmAcME-g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNQQ7fhk27ymnygeeOof3wJ0lu-4Z18qKlA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSWf2fFh46s1ETv5T7rb5elZnEJp5hprOLA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB8giTN9Hj8QAEz4DVdCtqWbfnrKoZSo2nA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmB8xc6rKmOProJfZNcdZdT6iIZKaHcLiBA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2wwPTUkgoDIa-KMkTajs816FNZmkAS575A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9BqL1np3rcb3Fofe736O6s79KRehA42Wfw&s",
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  return (
    <div className="app">
      <div className="image-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            className="image-thumbnail"
            onClick={() => handleImageClick(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="image-overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" className="image-fullscreen" />
        </div>
      )}
    </div>
  )
}
export default App
