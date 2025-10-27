import { Header } from "@/components/Header";
import { Work } from "@/components/Work";
import { FloatingNav } from "@/components/FloatingNav";

const WorkPage = () => {
    return (
        <div className="relative">
            <div className="max-w-6xl mx-auto pt-24">
                <Work />
            </div>
            <FloatingNav />
        </div>
    );
};

export default WorkPage;
