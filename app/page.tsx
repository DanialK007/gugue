import Hero from "@/components/Hero";
import Scroller from "@/components/ui/Scroller";
function page() {
  return (
    <>
      <Hero />

      {/* second page */}
      <div className="h-220 -mt-8 pt-6 relative">
        <div className="absolute z-0 inset-0">
          <img
            src="newspaper.png"
            alt="news"
            className="size-full object-cover opacity-30 brightness-70"
          />
        </div>
        <div className="h-full overflow-hidden relative">
          <div className="absolute z-10 left-64 md:left-36 top-58 md:top-20">
            <Scroller fromY={400} startPx={-800} endPx={0}>
              <img
                src="tape.jpeg"
                alt="tape"
                className="h-32 md:h-58 rotate-20"
              />
            </Scroller>
          </div>

          <div className="absolute z-10 right-20 top-0">
            <Scroller fromY={-350} startPx={400} endPx={800}>
              <img src="phone.jpeg" alt="phone" className="w-58" />
            </Scroller>
          </div>

          <div className="rotate-20 absolute z-10 left-10 md:left-20 bottom-120 md:bottom-20">
            <Scroller fromX={-300} fromRotate={360} startPx={-300} endPx={-300}>
              <img src="star.jpeg" alt="star" className="h-20 md:h-28" />
            </Scroller>
          </div>

          <div className="absolute z-10 me-8 md:me-0 left-0 bottom-0 w-full flex justify-center px-10">
            <Scroller fromY={300} startPx={-300} endPx={-300}>
              <img
                src="guCam.jpeg"
                alt="gu"
                className="w-full md:w-110 cutout-border"
              />
            </Scroller>
          </div>

          <div className="absolute z-9 inset-0 -translate-y-56 md:translate-y-0 text-4xl lg:text-8xl text-primary font-nerko flex gap-12 md:gap-120 items-center justify-center">
            <Scroller fromX={360} startPx={-400} endPx={0}>
              <div className="w-36 lg:w-86">Architect</div>
            </Scroller>
            <Scroller fromX={-360} startPx={-400} endPx={0}>
              <div className="ps-10 w-36 lg:w-86">Artist</div>
            </Scroller>
          </div>

          <div className="absolute z-10 right-0 md:right-28 -bottom-5 md:bottom-20 scale-70 md:scale-100 rotate-10">
            <Scroller fromX={300} startPx={-300} endPx={-300}>
              <div className="w-40 h-56 relative text-sm p-4 bg-white shadow-lg shadow-black/20">
                <div className="font-schoolbell">
                  Aspiring architect with a soul for art and an eye for detail.
                  From the rhythm of music to the precision of a sketch, my work
                  explores how different art forms can inspire better living
                  spaces.
                </div>

                <img
                  src="clip.png"
                  alt=""
                  className="h-20 absolute z-10 -right-8 -top-12"
                />
              </div>
            </Scroller>
          </div>
        </div>
      </div>

      <div className="p-5 bg-primary bg-[#b32432] text-white flex justify-between text-xs">
        <div className="">2026 @ Copyright</div>
        <div className="">
          Made by{" "}
          <a
            href="kaungkhantkyaw.online"
            className="hover:underline font-bold font-schoolbell"
          >
            Danial
          </a>{" "}
          ♥
        </div>
      </div>
    </>
  );
}

export default page;
