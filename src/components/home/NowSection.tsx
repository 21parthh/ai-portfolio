import { Clock, MapPin, Cloud } from "lucide-react";
import { useEffect, useState } from "react";

interface WeatherData {
    temp_c: number;
    temp_f: number;
    condition: {
        text: string;
    };
}

export const NowSection = () => {
    const [time, setTime] = useState<string>("");
    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            };
            setTime(now.toLocaleTimeString("en-US", options));
        };

        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    "https://api.weatherapi.com/v1/current.json?key=199f2656af974da1b1d71026250402&q=Pune"
                );
                if (!response.ok)
                    throw new Error("Failed to fetch weather data");
                const data = await response.json();
                setWeather(data.current);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchTime();
        fetchWeather();

        const intervalId = setInterval(fetchTime, 60000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
                    Now
                </h2>
                <div className="text-gray-400 leading-relaxed font-normal text-justify text-lg md:text-2xl md:leading-loose tracking-wide  mx-auto mb-24">
                    {weather && (
                        <p>
                            It's currently{" "}
                            <span className="font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                                {time}
                            </span>{" "}
                            in{" "}
                            <span className="font-semibold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Pune
                            </span>
                            , India. The weather is{" "}
                            <span className="font-medium bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                {weather.condition.text}
                            </span>{" "}
                            with a temperature of{" "}
                            <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                {weather.temp_c}°C
                            </span>{" "}
                            (
                            <span className="font-semibold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                                {weather.temp_f}°F
                            </span>
                            ).
                        </p>
                    )}
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 border-l-2 border-primary pl-6">
                        <h3 className="text-2xl font-bold mb-3">
                            What I'm Working On
                        </h3>
                        <ul className="space-y-2 text-muted-foreground text-xl">
                            <li>
                                • Building scalable AI infrastructure for
                                production environments
                            </li>
                            <li>
                                • Researching novel approaches to computer
                                vision optimization
                            </li>
                            <li>
                                • Contributing to open-source ML tools and
                                frameworks
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 border-l-2 border-primary pl-6">
                        <h3 className="text-2xl font-bold mb-3">
                            Currently Learning
                        </h3>
                        <ul className="space-y-2 text-muted-foreground  text-xl">
                            <li>
                                • Advanced transformer architectures and
                                attention mechanisms
                            </li>
                            <li>
                                • Edge computing and model compression
                                techniques
                            </li>
                            <li>
                                • Real-time system optimization and distributed
                                computing
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
