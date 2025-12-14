import { Navbar } from "@/components/layout/Navbar";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 flex items-center justify-center p-4 pt-20 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] translate-y-1/3 -translate-x-1/3" />
                </div>

                <div className="relative z-10 w-full max-w-md">
                    <RegisterForm />
                </div>
            </main>
        </div>
    );
}
