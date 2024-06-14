
export default function Hero({first, second}) {
  return (
    <>
      <section className="h-[200px] flex justify-center bg-cover bg-center"  style={{"backgroundImage": "url('/tiendamia/hero_bg.png')"}}>
      <article className="w-[1080px] flex flex-col items-start justify-center ps-[20px]">
          <span className="text-white font-bold text-[20px]">{first}</span>
          <span className="text-white font-bold text-[50px]">{second}</span>
        </article>
      </section>
    </>
  );
}
