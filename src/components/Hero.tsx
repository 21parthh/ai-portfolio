export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto border border-red-500 px-6">
                <div className="opacity-0 animate-fade-in space-y-16">
                    {/* Main heading */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter"></h1>
                            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-primary">
                                Hey, I’m Parth Making machines a little smarter.
                            </h1>
                        </div>

                        <div className="space-y-3 ">
                            <p className="text-xl md:text-2xl text-foreground/80">
                                AI Engineer & Developer
                            </p>
                            {/* <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Building intelligent systems and elegant web experiences. 
                Focused on ML research, computer vision, and scalable architectures.
              </p> */}
                        </div>
                    </div>

                    {/* Status & CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                        <a
                            href="#featured"
                            className="group inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                        >
                            <span className="text-2xl">View Projects</span>
                            <span className="group-hover:translate-x-2 transition-transform">
                                →
                            </span>
                        </a>

                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-2xl text-muted-foreground">
                                Available for opportunities
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
