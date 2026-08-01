export const galleryItems = [
    { src: "vyc9foumaognto8wkuv8", text: "Autumn canopy" },
    {
        src: "WhatsApp_Image_2025-02-06_at_20.32.15_c0a6ccbc_n6o031",
        text: "Sunset over the lake",
    },
    { src: "dyvw7qtftdfjz8t4y6an", text: "Peak against the sky" },
    { src: "iphon4_bo1xgd", text: "Summer garden" },
    { src: "ogbbdqabuel1hyqm08p2", text: "String lights at night" },
    { src: "mxzrgychkqfauy9oei87", text: "Green valley" },
    { src: "o6zya7cllixvmqjmibdy", text: "Countryside view" },
    { src: "iphon2_luzrfw", text: "A smile" },
    { src: "IMG_8544_w3e9lt", text: "Capturing the moment" },
];

/* Film strip: photos drift horizontally, pause on hover.
   Track is duplicated for a seamless loop. */
export const PhotoStrip = () => (
    <div className="marquee">
        <div className="marquee-track">
            {[...galleryItems, ...galleryItems].map((item, index) => (
                <figure
                    key={`${item.src}-${index}`}
                    aria-hidden={index >= galleryItems.length || undefined}
                    className="photo-lift group relative shrink-0 overflow-hidden rounded-lg bg-wash"
                >
                    <img
                        src={`https://res.cloudinary.com/dh5trkmtb/image/upload/f_auto,q_auto,w_400/v1738853630/${item.src}.jpg`}
                        alt={index < galleryItems.length ? item.text : ""}
                        loading={index < 4 ? "eager" : "lazy"}
                        decoding="async"
                        width={400}
                        height={400}
                        className="aspect-square h-44 w-44 object-cover"
                    />
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-2 pb-1.5 pt-6 font-mono text-micro text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {item.text}
                    </figcaption>
                </figure>
            ))}
        </div>
    </div>
);
