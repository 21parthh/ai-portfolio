import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ProjectsPage from "./pages/ProjectsPage";
import MindPage from "./pages/MindPage";
import NotFound from "./pages/NotFound";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/mind" element={<MindPage />} />
            {/* Legacy routes */}
            <Route path="/work" element={<Navigate to="/" replace />} />
            <Route path="/blogs" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default App;
