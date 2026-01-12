import Scroller from "./ui/Scroller";

function Hero() {
  return (
    <div className="h-220 relative bg-cover bg-center overflow-hidden">
      <div className="absolute -z-1 inset-0">
        <img src="bg.jpeg" alt="" className="size-full brightness-125" />
      </div>
      <div className="absolute font-nerko top-0 left-0 w-full z-0 flex justify-center px-20 pt-28">
        <Scroller
          // markers={true}
          toX={-270}
          startPx={300}
          endPx={800}
          startPercent={50}
          endPercent={0}
        >
          <div className="text-8xl md:text-[12rem] font-black text-white">
            Wint Thandar <span className="lg:hidden">Htun</span>
          </div>
        </Scroller>
      </div>
      <div className="absolute font-nerko bottom-0 left-0 w-full z-2 hidden lg:flex justify-center items-end px-5 pb-28">
        <Scroller
          // markers={true}
          toX={300}
          startPx={-200}
          endPx={800}
          startPercent={50}
          endPercent={0}
        >
          <div className="text-8xl md:text-[12rem] font-black text-white px-20">
            Htun
          </div>
        </Scroller>
      </div>
      <div className="absolute pointer-events-none inset-0 z-1 bottom-0 flex items-end justify-center">
        <img src="gugue.png" alt="" className="h-150 md:h-200" />
      </div>
    </div>
  );
}

export default Hero;
