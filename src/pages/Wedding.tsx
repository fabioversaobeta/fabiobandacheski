import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import clsx from "clsx";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/hurricane/400.css";
import { Seo } from "../components/seo/Seo";
import { Gallery } from "../components/wedding/Gallery";
import { siteConfig } from "../config/site";
import { ceremony, couple, godparents, reception, wedding, weddingNav, welcome } from "../data/wedding";

function Section({
  id,
  title,
  tinted,
  children,
}: {
  id: string;
  title: string;
  tinted?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={clsx("scroll-mt-14 px-5 py-16 sm:py-20", tinted ? "bg-[#f7f8f5]" : "bg-white")}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-script text-6xl leading-none text-sage sm:text-7xl">{title}</h2>
        <div className="mt-8 space-y-8">{children}</div>
      </div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-wedding-ink sm:text-lg">
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

function PersonGrid({ people }: { people: { name: string; image: string }[] }) {
  return (
    <ul className="mx-auto grid max-w-xl grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10">
      {people.map((person) => (
        <li key={person.name} className="flex flex-col items-center gap-3">
          <img
            src={person.image}
            alt={person.name}
            width={270}
            height={270}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full max-w-[270px] rounded-full object-cover"
          />
          <span className="text-base text-[#868686]">{person.name}</span>
        </li>
      ))}
    </ul>
  );
}

function Place({
  image,
  venue,
  mapQuery,
  children,
}: {
  image: string;
  venue: string;
  mapQuery: string;
  children: ReactNode;
}) {
  return (
    <>
      <figure>
        <img
          src={image}
          alt={venue}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto w-full max-w-[980px] object-cover"
        />
        <figcaption className="mt-3 text-sm text-[#868686]">{venue}</figcaption>
      </figure>
      <div className="space-y-1 text-base leading-relaxed text-wedding-ink sm:text-lg">{children}</div>
      <div className="aspect-4/3 w-full overflow-hidden sm:aspect-video">
        <iframe
          title={`Mapa: ${venue}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="size-full border-0"
        />
      </div>
    </>
  );
}

export function Wedding() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = weddingNav.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      onClick={() => setMenuOpen(false)}
      className="px-3 py-3 text-sm font-bold uppercase tracking-wide text-white/90 transition-colors hover:text-white md:py-4"
    >
      {item.label}
    </a>
  ));

  return (
    <div lang="pt-BR" className="bg-white font-wedding text-[#868686]">
      <Seo
        title="Fabio e Debora — 19/09/2026"
        path={wedding.path}
        description="Site do casamento de Fabio e Debora, 19 de setembro de 2026, em Colombo/PR."
        image={`${siteConfig.url}${wedding.hero}`}
        noindex
      />

      <header className="sticky top-0 z-50 bg-wedding-nav/95 backdrop-blur">
        <nav aria-label="Principal" className="mx-auto flex max-w-5xl items-center justify-between px-3 md:justify-center">
          <div className="hidden md:flex">{navLinks}</div>
          <span className="font-script py-2 text-3xl leading-none text-white md:hidden">{wedding.names}</span>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded text-white md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="wedding-mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>
        <div
          id="wedding-mobile-nav"
          className={clsx("flex-col border-t border-white/10 bg-wedding-nav px-3 pb-3 md:hidden", menuOpen ? "flex" : "hidden")}
        >
          {navLinks}
        </div>
      </header>

      <main>
        <div
          className="relative flex min-h-[70svh] items-end justify-center bg-cover bg-center px-5 pb-16 text-center sm:min-h-[85svh] sm:items-center sm:pb-0"
          style={{ backgroundImage: `url(${wedding.hero})` }}
        >
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
          <div className="relative text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            <h1 className="font-script text-7xl leading-none sm:text-8xl md:text-9xl">{wedding.names}</h1>
            <p className="mt-4 flex items-center justify-center gap-3 text-lg font-bold tracking-[0.2em] sm:text-xl">
              <span>{wedding.date.day}</span>
              <span aria-hidden="true">|</span>
              <span>{wedding.date.month}</span>
              <span aria-hidden="true">|</span>
              <span>{wedding.date.year}</span>
            </p>
          </div>
        </div>

        <Section id="home" title={welcome.title}>
          <Paragraphs items={welcome.paragraphs} />
        </Section>

        <Section id="o-casal" title={couple.title} tinted>
          <PersonGrid people={couple.people} />
          <Paragraphs items={couple.paragraphs} />
          <div className="aspect-video w-full overflow-hidden">
            <iframe
              title={wedding.videoTitle}
              src={`https://www.youtube.com/embed/${wedding.videoId}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="size-full border-0"
            />
          </div>
          <Gallery images={couple.gallery} label="Fotos do casal" />
        </Section>

        <Section id="padrinhos" title={godparents.title}>
          <Paragraphs items={godparents.paragraphs} />
          <PersonGrid people={godparents.people} />
        </Section>

        <Section id="cerimonia" title={ceremony.title} tinted>
          <Place image={ceremony.image} venue={ceremony.venue} mapQuery={ceremony.mapQuery}>
            <p>A cerimônia será realizada no dia</p>
            <p className="font-bold">{ceremony.when}.</p>
            <p className="font-bold">{ceremony.venue}</p>
            <p className="font-bold">{ceremony.address}</p>
          </Place>
        </Section>

        <Section id="recepcao" title={reception.title}>
          <Place image={reception.image} venue={reception.venue} mapQuery={reception.mapQuery}>
            <p>Após a cerimônia a recepção acontecerá no</p>
            <p>
              <strong>{reception.venue}</strong>, localizado no endereço
            </p>
            <p className="font-bold">{reception.address}</p>
          </Place>
        </Section>
      </main>
    </div>
  );
}
