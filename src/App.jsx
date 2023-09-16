import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="max-w-[1600px] w-full flex flex-col min-h-screen bg-white">
        <Navigation />
        <Header />
      </main>

      {/* About */}
      <section className="bg-white flex flex-col gap-3 w-full max-w-[1600px] items-start py-5 md:py-16 lg:py-20 xl:py-28 px-5 md:px-20 lg:px-40 xl:px-80 ">
        <h1 className="text-lg font-medium xl:text-3xl xl:leading-snug">
          Welcome to QuantumLeap Technologies
        </h1>
        <p className=" xl:text-xl xl:leading-loose text-sm leading-relaxed">
          At QuantumLeap Technologies, we're redefining the future. With
          innovation at our core, we're your partner in pioneering the next
          generation of technology solutions. Welcome to a world where
          possibilities are limitless.
        </p>
      </section>

      {/* About Collage*/}
      <section className="bg-white flex max-w-[1600px] justify-center px-3 md:px-12 items-center overflow-hidden w-full relative h-full before:absolute before:aspect-square before:bg-[#F3F2F8] before:h-full before:right-0">
        <img
          src="/photo-1.jpg"
          alt="Photo 1"
          className="w-3/5 py-12 pl-3 pr-8 sm:py-16 md:pl-6 md:pr-12 lg:py-20 lg:pl-12 lg:pr-16 xl:py-28 xl:pl-16 xl:pr-24  z-20 "
        />
        <img
          src="/photo-2.jpg"
          alt="Photo 2"
          className="w-2/5 py-6 pr-3 md:py-12 md:pl-3 z-20"
        />
      </section>

      {/* About */}
      <section className="bg-white flex flex-col gap-3 w-full max-w-[1600px] items-start py-5 md:py-16 lg:py-20 xl:py-28 px-5 md:px-20 lg:px-40 xl:px-80">
        <h1 className="text-lg font-medium xl:text-3xl xl:leading-snug">
          Unlocking Tomorrow Today
        </h1>
        <p className=" xl:text-xl xl:leading-loose text-sm leading-relaxed">
          Our vision is simple yet profound: to be the catalyst for
          groundbreaking advancements that empower humanity. We strive to bridge
          the gap between imagination and realization, propelling the world
          forward.
        </p>
      </section>

      {/* Video */}
      <section className="bg-white px-5 py-5 w-full max-w-[1600px] align-middle m-auto grid">
        <div className="flex flex-col items-center">
          <figure className="overflow-hidden aspect-video relative min-w-[280px] max-w-[800px] w-full">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/JhHMJCUmq28?si=Po6SYKNzS1K2gFFR"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="left-0 top-0 h-full w-full absolute"
            ></iframe>
          </figure>

          <figcaption className="p-2 text-sm font-medium w-full max-w-[800px]">
            Why QuantumLeap?
          </figcaption>
        </div>
      </section>

      {/* About */}
      <section className="bg-white flex flex-col gap-3 w-full max-w-[1600px] items-start py-5 md:py-16 lg:py-20 xl:py-28 px-5 md:px-20 lg:px-40 xl:px-80">
        <h1 className="text-lg font-medium xl:text-3xl xl:leading-snug">
          Explore Innovation with QuantumLeap
        </h1>
        <p className=" xl:text-xl xl:leading-loose text-sm leading-relaxed">
          Innovation is in our DNA. At QuantumLeap Technologies, we push the
          boundaries of what's possible. Our team of brilliant minds is
          dedicated to creating solutions that transform industries and reshape
          the world as we know it.
        </p>
      </section>

      {/* About Collage*/}
      <section className="bg-white max-w-[1600px] flex justify-center px-3 md:px-12 items-center overflow-hidden w-full relative h-full before:absolute before:w-3/5 before:bg-[#F3F2F8] before:h-full before:left-0">
        <div className="w-2/5 py-6 pr-3 md:py-12 md:pl-3 z-20 flex flex-col gap-6 md:gap-16 xl:gap-24 xl:py-24">
          <img src="/photo-3.jpg" alt="Photo 3" className="" />
          <img src="/photo-4.jpg" alt="Photo 4" className="" />
        </div>
        <img
          src="/photo-5.jpg"
          alt="Photo 5"
          className="w-3/5 py-12 pl-3 pr-3 sm:py-16 md:pl-6 md:pr-12 lg:py-20 lg:pl-12 lg:pr-16 xl:py-36 xl:pl-16 xl:pr-24 z-20 "
        />
      </section>

      {/* About */}
      <section className="bg-white flex flex-col gap-3 w-full max-w-[1600px] items-start py-5 md:py-16 lg:py-20 xl:py-28 px-5 md:px-20 lg:px-40 xl:px-80">
        <h1 className="text-lg font-medium xl:text-3xl xl:leading-snug">
          Revolutionize Your Business
        </h1>
        <p className=" xl:text-xl xl:leading-loose text-sm leading-relaxed">
          Discover a world of cutting-edge solutions designed to elevate your
          business. From artificial intelligence to quantum computing, our
          technologies are designed to take your operations to the next level.
        </p>
      </section>

      {/* Image */}
      <section className="bg-white px-5 py-5 w-full max-w-[1600px] align-middle m-auto grid">
        <div className="flex flex-col items-center">
          <img
            src="/poster-meet-the-makers.jpg"
            alt="Poster Meet The Makers"
            className="max-w-[1200px] w-full"
          />
        </div>
      </section>

      {/* About */}
      <section className="bg-white flex flex-col gap-3 w-full max-w-[1600px] items-start py-5 md:py-16 lg:py-20 xl:py-28 px-5 md:px-20 lg:px-40 xl:px-80">
        <h1 className="text-lg font-medium xl:text-3xl xl:leading-snug">
          The Future of Computing is Here
        </h1>
        <p className=" xl:text-xl xl:leading-loose text-sm leading-relaxed">
          Quantum computing is no longer science fiction – it's the reality
          we're pioneering. Dive into the world of qubits and quantum supremacy,
          where computation knows no bounds.
        </p>
      </section>

      {/* About Collage*/}
      <section className="bg-white flex max-w-[1600px] justify-center items-center overflow-hidden w-full relative h-full before:absolute before:aspect-square before:bg-[#F3F2F8] before:h-full before:w-3/5 before:z-10">
        <div className="w-1/2 h-4/5 z-20  aspect-square grid place-items-center">
          <img
            src="/photo-6-a.jpg"
            alt="Photo 6"
            className="p-6 md:p-16 lg:p-20 xl:p-36"
          />
        </div>
        <div className="w-1/2 h-4/5 z-20 aspect-square relative">
          <img
            src="/photo-7.jpg"
            alt="Photo 7"
            className="absolute right-0 aspect-square h-4/5 top-1/2 bottom-1/2 m-auto md:h-5/6 lg:h-4/5"
          />
        </div>
        {/*
         */}
      </section>

      {/* About */}
      <section className="bg-white flex flex-col gap-3 w-full max-w-[1600px] items-start py-5 md:py-16 lg:py-20 xl:py-28 px-5 md:px-20 lg:px-40 xl:px-80">
        <h1 className="text-lg font-medium xl:text-3xl xl:leading-snug">
          Together, We'll Shape the Future
        </h1>
        <p className=" xl:text-xl xl:leading-loose text-sm leading-relaxed">
          Join hands with us to unlock unprecedented potential. Whether you're
          an entrepreneur, a corporation, or a researcher, QuantumLeap
          Technologies is your partner on the path to progress.
        </p>
      </section>

      <section className="px-5 py-5 bg-white flex flex-col place-items-center w-full md:px-12 lg:px-24 xl:flex-row h-full max-w-[1600px] ">
        <img
          src="/photo-8.jpg"
          alt="Photo 8"
          className="w-full xl:aspect-square object-cover xl:w-1/2"
        />
        <div className="flex flex-col gap-4 bg-[#231D35] text-lg font-medium xl:text-3xl xl:leading-snug p-6 md:p-14 md:gap-8 xl:w-1/2 xl:aspect-square justify-center xl:p-28 text-white">
          <p className="">
            Ready to embark on a journey of innovation and transformation? Reach
            out to QuantumLeap Technologies today, and let's embark on a quantum
            conversation that will change the way you think about technology.
          </p>
          <a className="text-[#FF764D]">
            <p>See latest jobs</p>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
