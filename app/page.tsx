import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Second from "@/components/Second";
import Third from "@/components/Third";
import { AnimatedThemeToggler } from "@/components/ui/AnimatedThemeToggler";
import { Pointer } from "@/components/ui/Pointer";

function page() {
  return (
    <>
      <Pointer className="fill-red-600 dark:stroke-neutral-900 block z-99 size-10 -rotate-78 active:scale-90" />

      <AnimatedThemeToggler className="fixed size-9 md:size-10 border-2 border-black rounded-full flex items-center justify-center dark:rotate-360 duration-300 bg-white dark:bg-primary text-black dark:text-white top-3 md:top-5 right-3 md:right-5 z-30" />

      <Hero />

      <Second />

      <Third />

      <Footer />
    </>
  );
}

export default page;
