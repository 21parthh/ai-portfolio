import { Header } from "@/components/Header";
import { FloatingNav } from "@/components/FloatingNav";
import { Music, Quote, HelpCircle, Camera, Heart } from "lucide-react";

const galleryItems = [
    { src: "vyc9foumaognto8wkuv8", text: "Whispers of Autumn" },
    {
        src: "WhatsApp_Image_2025-02-06_at_20.32.15_c0a6ccbc_n6o031",
        text: "Painted Sky Fire",
    },
    { src: "dyvw7qtftdfjz8t4y6an", text: "Peak Against the Sky" },
    { src: "iphon4_bo1xgd", text: "Summer Garden Joy" },
    { src: "ogbbdqabuel1hyqm08p2", text: "Urban Nights" },
    { src: "mxzrgychkqfauy9oei87", text: "Green Valley" },
    { src: "o6zya7cllixvmqjmibdy", text: "Peaceful Green Escape" },
    { src: "iphon2_luzrfw", text: "Smile" },
    { src: "IMG_8544_w3e9lt", text: "Capturing the Moment" },
];

const MindPage = () => {
    return (
        <div className="relative">
            <div className="max-w-4xl mx-auto px-6 py-32 pt-48">
                <div className="mb-20 opacity-0 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
                        Here's what's on my mind
                    </h1>
                    <div className="w-20 h-1 bg-primary" />
                    <p className="text-gray-400 text-justify text-xl leading-relaxed mt-8">
                        Quotes, lyrics, thoughts, preferences, the classic "What
                        if?, family, Added Questions, incredible people I've
                        met, and snapshots of my life. There's a lot going on in
                        my mind.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-medium  mb-4 text-primary">
                        Favorite & Preferences
                    </h2>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl text-muted-foreground  uppercase tracking-wider mb-2">
                                Favorite Color
                            </h3>
                            <p className="text-lg">Navy blue</p>
                        </div>
                        <div>
                            <h3 className="text-xl text-muted-foreground uppercase tracking-wider mb-2">
                                Favorite Season
                            </h3>
                            <p className="text-lg flex items-center gap-2">
                                <p> Autumn 🍂</p>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-medium mt-20 mb-8 text-primary">
                            Lyrics
                        </h2>
                        <div
                            className="space-y-6 text-gray-400 font-normal text-justify text-5xl"
                            style={{
                                fontFamily: "Stalemate, serif",
                            }}
                        >
                            <blockquote className="border-l-2 border-zinc-700 pl-4">
                                "We ain't picture perfect, but we worth the
                                picture still."
                                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                    – J. Cole
                                </span>
                            </blockquote>

                            <blockquote className="border-l-2 border-zinc-700 pl-4">
                                "You can't always get what you want. But, if you
                                try sometime, you find you get what you need."
                                <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                                    — The Rolling Stones
                                </span>
                            </blockquote>
                        </div>
                    </div>

                    <div className="mt-20">
                        <h2 className="text-2xl font-medium text-primary mb-8">
                            Quotes
                        </h2>
                        <div
                            className="space-y-6 text-gray-400 text-5xl font-normal"
                            style={{
                                fontFamily: "Stalemate, serif",
                            }}
                        >
                            <blockquote className="border-l-2 border-zinc-700 pl-4">
                                “The only way to do great work is to love what
                                you do.”
                                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                                    – Steve Jobs
                                </span>
                            </blockquote>

                            <blockquote className="border-l-2 border-zinc-700 pl-4">
                                “Success is not final, failure is not fatal: It
                                is the courage to continue that counts.”
                                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                    – Winston Churchill
                                </span>
                            </blockquote>

                            <blockquote className="border-l-2 border-zinc-700 pl-4">
                                “In the middle of every difficulty lies
                                opportunity.”
                                <span className="bg-gradient-to-r from-indigo-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                                    – Albert Einstein
                                </span>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: "400ms" }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Camera className="w-6 h-6 text-primary mt-20 " />
                        <h2 className="text-2xl md:text-2xl mt-20 font-bold text-primary">
                            Random photos I've taken
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {galleryItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-lg cursor-pointer"
                            >
                                <img
                                    src={`https://res.cloudinary.com/dh5trkmtb/image/upload/v1738853630/${item.src}.jpg`}
                                    alt={item.text}
                                    loading="lazy"
                                    className="w-full h-full object-cover aspect-square transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                                />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-lg font-semibold drop-shadow-lg text-center px-4">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FloatingNav />
        </div>
    );
};

export default MindPage;
