import DemoVideoPlayer from "./video-player";
import Reveal from "../ui/reveal";

function getYouTubeEmbedUrl(url?: string) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);
    const videoId =
      parsedUrl.hostname === "youtu.be"
        ? parsedUrl.pathname.slice(1)
        : (parsedUrl.searchParams.get("v") ??
          parsedUrl.pathname.match(/\/embed\/([^/]+)/)?.[1] ??
          parsedUrl.pathname.match(/\/shorts\/([^/]+)/)?.[1]);

    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

export default function DemoSection() {
  const embedUrl = getYouTubeEmbedUrl(
    "https://www.youtube.com/watch?v=zc3-cws_dJg",
  );

  return (
    <section
      id="demo"
      className="relative flex min-h-[min(100svh,760px)] items-center overflow-hidden bg-[#203d1f] px-6 py-20 text-[#f1ebe2] sm:px-10 lg:px-14"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(241, 235, 226, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(241, 235, 226, 0.055) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1px_1.25fr] lg:gap-10 xl:gap-14">
          <Reveal className="flex max-w-[min(100%,450px)] flex-col gap-4 lg:gap-8">
            <div>
              <p className="mb-4 w-fit bg-[#f1ebe2] p-2 font-bebas text-base uppercase tracking-[0.18em] text-[#203d1f] sm:px-3 sm:py-2 sm:text-sm">
                VÍDEO
              </p>
              <h2 className="flex flex-col gap-2 font-bebas text-[clamp(2.8rem,5vw,4.5rem)] uppercase leading-[0.9]">
                <span>Conheça a ideia</span>
                <span className="block">por trás do</span>
                <span className="block text-[#4bd12d]">SIGA Cattle</span>
              </h2>
            </div>
            <p className="max-w-2xl font-inter text-sm leading-relaxed text-[#f1ebe2]/90 sm:text-base">
              Veja em menos de 3 minutos por que criamos o Siga Cattle: um
              sistema de gestão pecuária feito para funcionar onde a internet
              não chega.
            </p>
          </Reveal>

          <div className="hidden h-full min-h-80 w-1 bg-[#f1ebe2]/80 lg:block" />
          <div className="h-1 w-full bg-[#f1ebe2]/80 lg:hidden" />

          <Reveal className="min-w-0" hover>
            <div className="w-full overflow-hidden border border-[#f1ebe2]/80 bg-black shadow-[6px_6px_0_0_#4bd12d]">
              {embedUrl ? (
                <DemoVideoPlayer embedUrl={embedUrl} />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-[#173318] px-6 text-center text-[#f1ebe2]">
                  <div>
                    <p className="font-bebas text-3xl uppercase sm:text-4xl">
                      Vídeo demonstrativo
                    </p>
                    <p className="mt-2 font-inter text-xs text-[#f1ebe2]/80 sm:text-sm">
                      O vídeo do YouTube será exibido aqui.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-10 w-fit lg:mt-24 sm:mt-12">
          <a
            href="#contact"
            className="flex min-h-12 items-center justify-center bg-[#f1ebe2] px-7 py-3 font-bebas text-lg uppercase text-[#203d1f] shadow-[4px_4px_0_0_#4bd12d] transition-colors hover:bg-white"
          >
            Quero ver isso na minha fazenda
          </a>
        </Reveal>
      </div>
    </section>
  );
}
