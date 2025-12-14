import { Navbar } from "@/components/layout/Navbar";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 pt-32">
                <h1 className="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h1>
                <p className="text-muted-foreground">Hãy liên hệ với chúng tôi để được hỗ trợ hoặc giải đáp thắc mắc.</p>
            </main>
        </div>
    );
}
