function page() {
  return (
    <div>
      {/* first page */}
      <div className="h-220 relative bg-cover bg-center overflow-hidden">
        <div className="absolute -z-1 inset-0">
          <img src="bg.jpeg" alt="" className="size-full brightness-125" />
        </div>
        <div className="absolute top-0 left-0 w-full z-0 flex justify-center lg:pt-24">
          <div className="text-[12rem] font-black text-white text-r ose-500/80">
            Wint Thandar
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-2 flex justify-center items-end lg:pb-24">
          <div className="text-[12rem] font-black text-white text-r ose-500/80">
            Htun
          </div>
        </div>
        <div className="absolute pointer-events-none inset-0 z-1 bottom-0 flex items-end justify-center">
          <img src="gugue.png" alt="" className="" />
        </div>
        {/* 
        <img
          src="star.jpeg"
          alt=""
          className="h-28 rotate-20 absolute z-10 left-20 bottom-20"
        /> */}
      </div>

      {/* second page */}
      <div className="h-220 relative">
        <div className="absolute -z-1 inset-0">
          <img
            src="newspaper.png"
            alt="news"
            className="size-full object-cover opacity-60 brightness-70"
          />
        </div>

        <img
          src="star.jpeg"
          alt=""
          className="h-28 rotate-20 absolute z-10 left-20 bottom-20"
        />

        <img
          src="tape.jpeg"
          alt=""
          className="h-58 rotate-20 absolute z-10 left-36 top-20"
        />

        <img
          src="phone.jpeg"
          alt=""
          className="w-58 absolute z-10 right-20 top-0"
        />

        <img
          src="guCam.jpeg"
          alt=""
          className="w-110 absolute z-10 left-1/2 -translate-x-1/2 bottom-0 sat urate-0 cutout-border"
        />

        <div className="absolute z-10 right-28 bottom-20 bg-white shadow rotate-10">
          <div className="w-40 h-56 relative text-sm p-4">
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              fugit earum facilis in minima adipisci, esse expedita ratione
              officiis voluptatibus provident.
            </div>

            <img
              src="clip.png"
              alt=""
              className="h-20 absolute z-10 -right-8 -top-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
