import Image from "next/image";

type BeforeAfterStaticProps = {
  leftImage: string;
  leftLabel: string;
  rightImage: string;
  rightLabel: string;
};

export default function BeforeAfterStatic({
  leftImage,
  leftLabel,
  rightImage,
  rightLabel,
}: BeforeAfterStaticProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        { src: leftImage, label: leftLabel },
        { src: rightImage, label: rightLabel },
      ].map((item) => (
        <figure
          className="overflow-hidden rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white"
          key={item.label}
        >
          <div className="relative h-[240px] bg-leaf md:h-[300px]">
            <Image
              alt={item.label}
              className="object-cover"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src={item.src}
            />
          </div>
          <figcaption className="px-4 py-3 text-center text-sm font-semibold text-forest">
            {item.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export type { BeforeAfterStaticProps };
