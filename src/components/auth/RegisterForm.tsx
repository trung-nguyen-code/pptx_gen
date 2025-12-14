"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";

const registerSchema = z.object({
    name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
});

type RegisterValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterValues>({
        resolver: zodResolver(registerSchema),
    });

    async function onSubmit(data: RegisterValues) {
        setIsLoading(true);
        // Simulate API call
        console.log("Register data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        alert("Đăng ký thành công! Vui lòng kiểm tra email của bạn.");
    }

    return (
        <Card className="w-full max-w-md bg-background/50 backdrop-blur-xl border-white/10">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Tạo tài khoản</CardTitle>
                <CardDescription className="text-center">
                    Nhập thông tin của bạn để bắt đầu tạo bài thuyết trình
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Họ và tên</Label>
                        <Input id="name" placeholder="Nguyễn Văn A" {...register("name")} />
                        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="name@example.com" {...register("email")} />
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Mật khẩu</Label>
                        <Input id="password" type="password" {...register("password")} />
                        {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                    </div>
                    <Button className="w-full" type="submit" disabled={isLoading} variant="premium">
                        {isLoading ? "Đang xử lý..." : "Đăng ký"}
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
                <div className="text-sm text-center text-muted-foreground">
                    Đã có tài khoản?{" "}
                    <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                        Đăng nhập
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
