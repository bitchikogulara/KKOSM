"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/button";

export default function ContactUsPage() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-40 px-4 bg-gray-50">
            {/* Background Image - Height 35% */}
            <div className="absolute top-0 left-0 w-full h-[40vh]">
                <Image
                    src="/images/contactpage/hero.jpg"
                    alt="Contact Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Form Card */}
            <div className="relative bg-white rounded-[10px] p-8 md:p-12 w-full md:w-[46rem] h-auto drop-shadow-[0_4px_50px_rgba(0,0,0,0.25)] flex flex-col pt-16 md:pt-20">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-3xl font-bold text-black mb-3">
                        დაგვიკავშირდი
                    </h1>
                    <p className="text-[#828282] text-base">
                        გთხოვთ მიუთითოთ აქტიური საკონტაქტო ინფორმაცია
                    </p>
                </div>

                <form onSubmit={async (e) => {
                    e.preventDefault();
                    // Simple form data gathering - in real app use controlled inputs or FormData
                    const formData = new FormData(e.currentTarget);
                    const data = {
                        firstName: formData.get("firstName"),
                        lastName: formData.get("lastName"),
                        email: formData.get("email"),
                        phone: formData.get("phone"),
                        message: formData.get("message"),
                    };

                    try {
                        const res = await fetch("/api/contact", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(data),
                        });
                        if (res.ok) {
                            alert("Message sent successfully!");
                            (e.target as HTMLFormElement).reset();
                        } else {
                            alert("Failed to send message.");
                        }
                    } catch (err) {
                        alert("Error sending message.");
                    }
                }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-lg font-bold text-[#828282]">
                                სახელი
                            </label>
                            <Input
                                id="firstName"
                                name="firstName"
                                placeholder="გთხოვთ შეიყვანოთ სახელი"
                                className="h-[50px] text-base"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-lg font-bold text-[#828282]">
                                გვარი
                            </label>
                            <Input
                                id="lastName"
                                name="lastName"
                                placeholder="გთხოვთ შეიყვანოთ გვარი"
                                className="h-[50px] text-base"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-lg font-bold text-[#828282]">
                                ელ. ფოსტა
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="გთხოვთ შეიყვანოთ მეილი"
                                className="h-[50px] text-base"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-lg font-bold text-[#828282]">
                                ტელ. ნომერი
                            </label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="გთხოვთ შეიყვანოთ ტელ. ნომერი"
                                className="h-[50px] text-base"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-lg font-bold text-[#828282]">
                            შეტყობინება
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="რისი თქმა გსურთ..."
                            className="min-h-[150px] text-base resize-none"
                            required
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <Button
                            type="submit"
                            className="w-full px-12 py-3 text-lg font-bold bg-[#F9C322] hover:bg-[#e0b01f] text-white rounded-[10px]"
                        >
                            გაგზავნა
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
