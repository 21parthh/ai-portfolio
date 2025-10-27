import { Header } from "@/components/Header";
import { Blogs } from "@/components/Blogs";
import { FloatingNav } from "@/components/FloatingNav";

const BlogsPage = () => {
    return (
        <div className="relative">
            <div className="max-w-6xl mx-auto pt-24">
                <Blogs />
            </div>
            <FloatingNav />
        </div>
    );
};

export default BlogsPage;
