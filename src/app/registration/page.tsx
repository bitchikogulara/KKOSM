import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/button";

export default function RegistrationPage() {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
        "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-40 px-4 bg-gray-50">
            {/* Background Image - Height 40% */}
            <div className="absolute top-0 left-0 w-full h-[40vh]">
                <Image
                    src="/images/registrationpage/hero.jpg"
                    alt="Registration Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Form Card */}
            <div className="relative bg-white rounded-[10px] p-8 md:p-12 w-full md:w-[46rem] h-auto drop-shadow-[0_4px_50px_rgba(0,0,0,0.25)] flex flex-col pt-16 md:pt-20">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-3xl font-bold text-black mb-3">
                        გახდი სკაუტი
                    </h1>
                    <p className="text-[#828282] text-base">
                        მიუთითეთ სწორი ინფორმაცია და ჩვენი წარმომადგენელი დაგიკავშირდებათ შემდეგი სეზონის გახსნაზე.
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-lg font-bold text-[#828282]">
                                სახელი
                            </label>
                            <Input
                                id="firstName"
                                placeholder="გთხოვთ შეიყვანოთ სახელი"
                                className="h-[50px] text-base"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-lg font-bold text-[#828282]">
                                გვარი
                            </label>
                            <Input
                                id="lastName"
                                placeholder="გთხოვთ შეიყვანოთ გვარი"
                                className="h-[50px] text-base"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-lg font-bold text-[#828282]">
                            ელ. ფოსტა
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="გთხოვთ შეიყვანოთ მეილი"
                            className="h-[50px] text-base"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-lg font-bold text-[#828282]">
                            ტელ. ნომერი
                        </label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="გთხოვთ შეიყვანოთ ტელ. ნომერი"
                            className="h-[50px] text-base"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="space-y-2">
                        <label className="block text-lg font-bold text-[#828282]">
                            დაბადების თარიღი
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            {/* Day */}
                            <div className="relative">
                                <select
                                    className="w-full h-[50px] rounded-[4px] border border-[#E0E0E0] bg-white px-3 py-2 text-base text-[#828282] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-dark focus-visible:ring-offset-2 appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>დღე</option>
                                    {days.map(day => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Month */}
                            <div className="relative">
                                <select
                                    className="w-full h-[50px] rounded-[4px] border border-[#E0E0E0] bg-white px-3 py-2 text-base text-[#828282] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-dark focus-visible:ring-offset-2 appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>თვე</option>
                                    {months.map((month, index) => (
                                        <option key={index} value={index + 1}>{month}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Year */}
                            <div className="relative">
                                <select
                                    className="w-full h-[50px] rounded-[4px] border border-[#E0E0E0] bg-white px-3 py-2 text-base text-[#828282] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-dark focus-visible:ring-offset-2 appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>წელი</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="source" className="block text-lg font-bold text-[#828282]">
                            როგორ აღმოგვაჩინე?
                        </label>
                        <Input
                            id="source"
                            placeholder="როგორ აღმოგვაჩინე..."
                            className="h-[50px] text-base"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="motivation" className="block text-lg font-bold text-[#828282]">
                            სამოტივაციო წერილი
                        </label>
                        <Textarea
                            id="motivation"
                            placeholder="რისი თქმა გსურთ..."
                            className="min-h-[150px] text-base resize-none"
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
