import Hero from "./_components/hero";

export default function Home() {
  return (
    <section className="h-screen w-full">
      <div className="flex flex-col">
        <div className="relative flex flex-col h-full w-full">
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-360px] left-0 z-[1] w-full h-full object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
          <Hero />
        </div>
      </div>
    </section>
  );
}
