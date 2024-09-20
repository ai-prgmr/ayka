import Image from "next/image";

function SplashScreen() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-400 bg-gradient-to-r from-[#90da7f] from-30% via-30% to-blue-600 to-90%">
      <video
        width="400"
        height="400"
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
      >
        <source src="/ayka/images/logo/logo132-dp.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SplashScreen;
