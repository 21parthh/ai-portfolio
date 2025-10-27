import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold hover:text-primary transition-colors">
          Parth Deore
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm transition-colors ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/work" 
            className={`text-sm transition-colors ${
              location.pathname === "/work" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Work
          </Link>
          <Link 
            to="/blogs" 
            className={`text-sm transition-colors ${
              location.pathname === "/blogs" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Blog
          </Link>
          <Link 
            to="/mind" 
            className={`text-sm transition-colors ${
              location.pathname === "/mind" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Mind
          </Link>
        </nav>
      </div>
    </header>
  );
};
