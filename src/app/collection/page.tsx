import { Navbar } from "@/components/layout/Navbar";

export default function CollectionPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 pt-32">
                <h1 className="text-4xl font-bold mb-4">Bộ sưu tập của bạn</h1>
                <p className="text-muted-foreground">Đây là nơi các bài thuyết trình đã tạo của bạn sẽ xuất hiện.</p>
            </main>
        </div>
    );
}
