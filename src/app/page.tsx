"use client";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Presentation, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />

      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/10 blur-[100px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] translate-y-1/3 translate-x-1/3" />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3" />
            <span>Trình tạo bài thuyết trình hỗ trợ bởi AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
          >
            Tạo bài thuyết trình <br className="hidden md:block" />
            <span className="gradient-text">ấn tượng chỉ trong vài giây</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Biến ý tưởng của bạn thành các slide PowerPoint chuyên nghiệp ngay lập tức.
            Không cần kỹ năng thiết kế. Hãy tập trung vào câu chuyện của bạn, để AI lo phần còn lại.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" variant="premium" className="h-12 px-8 text-base group">
              Tạo bài thuyết trình
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              Xem ví dụ
            </Button>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
          >
            {[
              {
                icon: Zap,
                title: "Cực kỳ nhanh chóng",
                description: "Tạo trọn bộ slide trong chưa đầy 60 giây."
              },
              {
                icon: Presentation,
                title: "Bố cục chuyên nghiệp",
                description: "Truy cập hàng trăm mẫu cao cấp được tự động điều chỉnh cho bạn."
              },
              {
                icon: Sparkles,
                title: "Nội dung & Hình ảnh AI",
                description: "Tóm tắt văn bản tự động và tạo hình ảnh phù hợp."
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm text-left">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
