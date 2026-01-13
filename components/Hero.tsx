"use client";
import Scroller from "./ui/Scroller";
import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import facebookAnim from "@/public/Facebook/facebook.json";
import instagramAnim from "@/public/Instagram/instagram.json";
import twitterAnim from "@/public/Twitter/twitter.json";

function Hero() {
  const facebookRef = useRef<LottieRefCurrentProps | null>(null);
  const instagramRef = useRef<LottieRefCurrentProps | null>(null);
  const twitterRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <div className="p-2 text-white dark:text-primary bg-linear-to-b from-neutral-200 dark:from-neutral-700/70 from-95% h-screen max-h-fit">
      <div className="h-220 max-h-full rounded-3xl relative bg-cover bg-center overflow-hidden">
        {/* bg */}
        <div className="absolute z-1 inset-0 rounded-3xl dark:saturate-0 dark:brightness-40">
          <img src="bg.jpeg" alt="" className="size-full brightness-125" />
        </div>
        {/* title */}
        <div className="absolute font-nerko top-0 left-0 w-full z-2 flex justify-center px-20 pt-28">
          <Scroller
            // markers={true}
            toX={-270}
            startPx={300}
            endPx={800}
            startPercent={50}
            endPercent={0}
          >
            <div className="text-8xl md:text-[12rem] font-black">
              Wint Thandar <span className="lg:hidden">Htun</span>
            </div>
          </Scroller>
        </div>
        <div className="absolute font-nerko bottom-0 left-0 w-full z-4 hidden lg:flex justify-center items-end px-5 pb-28">
          <Scroller
            // markers={true}
            toX={300}
            startPx={-200}
            endPx={800}
            startPercent={50}
            endPercent={0}
          >
            <div className="text-8xl md:text-[12rem] font-black px-20">
              Htun
            </div>
          </Scroller>
        </div>
        {/* photo */}
        <div className="absolute pointer-events-none inset-0 z-3 bottom-0 flex items-end justify-center">
          <img
            src="gugue.png"
            alt=""
            className="h-120 md:h-186 dark:brightness-95"
          />
        </div>
        <div className="absolute z-11 bottom-0 right-0 p-1 md:p-3 flex gap-3">
          <Scroller
            // markers={true}
            toX={200}
            toRotate={480}
            startPx={-50}
            endPx={800}
            startPercent={70}
            endPercent={0}
          >
            <a
              href="#"
              className="flex hover:scale-110 duration-300 bg-white dark:bg-primary dark:bg-neutral-200 border-2 border-black rounded-full"
            >
              <div
                onMouseEnter={() => {
                  facebookRef.current?.setDirection(1);
                  facebookRef.current?.play();
                }}
                onMouseLeave={() => {
                  facebookRef.current?.setDirection(-1);
                  facebookRef.current?.play();
                }}
                className="dark:invert"
              >
                <Lottie
                  lottieRef={facebookRef}
                  animationData={facebookAnim}
                  loop={false}
                  autoplay={false}
                  className="size-8 md:size-9 pe-0.5 rounded-full"
                />
              </div>
            </a>
          </Scroller>
          <Scroller
            // markers={true}
            toX={200}
            toRotate={480}
            startPx={-70}
            endPx={800}
            startPercent={70}
            endPercent={0}
          >
            <a
              href="#"
              className="flex hover:scale-110 duration-300 bg-white dark:bg-primary dark:bg-neutral-200 border-2 border-black rounded-full"
            >
              <div
                onMouseEnter={() => {
                  instagramRef.current?.setDirection(1);
                  instagramRef.current?.play();
                }}
                onMouseLeave={() => {
                  instagramRef.current?.setDirection(-1);
                  instagramRef.current?.play();
                }}
                className="dark:invert"
              >
                <Lottie
                  lottieRef={instagramRef}
                  animationData={instagramAnim}
                  loop={false}
                  autoplay={false}
                  className="size-8 md:size-9 p-0.5 rounded-full"
                />
              </div>
            </a>
          </Scroller>
          <Scroller
            // markers={true}
            toX={200}
            toRotate={480}
            startPx={-90}
            endPx={800}
            startPercent={70}
            endPercent={0}
          >
            <a
              href="#"
              className="flex hover:scale-110 duration-300 bg-white dark:bg-primary dark:bg-neutral-200 border-2 border-black rounded-full"
            >
              <div
                onMouseEnter={() => {
                  twitterRef.current?.setDirection(1);
                  twitterRef.current?.play();
                }}
                onMouseLeave={() => {
                  twitterRef.current?.setDirection(-1);
                  twitterRef.current?.play();
                }}
                className="dark:invert"
              >
                <Lottie
                  lottieRef={twitterRef}
                  animationData={twitterAnim}
                  loop={false}
                  autoplay={false}
                  className="size-8 md:size-9 p-0.5 translate-x-0.5 rounded-full"
                />
              </div>
            </a>
          </Scroller>
        </div>
      </div>
    </div>
  );
}

export default Hero;
