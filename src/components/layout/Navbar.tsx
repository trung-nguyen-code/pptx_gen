"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">AI PPT</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Trang chủ
                    </Link>
                    <Link href="/collection" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Danh mục
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Liên hệ
                    </Link>
                </nav>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm">
                        Đăng nhập
                    </Button>
                    <Link href="/register">
                        <Button size="sm" variant="premium">
                            Đăng ký
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-white/10 bg-background/95 backdrop-blur-xl"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <Link
                                href="/"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground px-2 py-1"
                                onClick={() => setIsOpen(false)}
                            >
                                Trang chủ
                            </Link>
                            <Link
                                href="/collection"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground px-2 py-1"
                                onClick={() => setIsOpen(false)}
                            >
                                Danh mục
                            </Link>
                            <Link
                                href="/contact"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground px-2 py-1"
                                onClick={() => setIsOpen(false)}
                            >
                                Liên hệ
                            </Link>
                            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                                <Button variant="ghost" className="w-full justify-start">
                                    Đăng nhập
                                </Button>
                                <Link href="/register" className="w-full">
                                    <Button variant="premium" className="w-full">
                                        Đăng ký
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
