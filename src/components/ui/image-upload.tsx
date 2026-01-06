"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import Image from "next/image";

interface ImageUploadProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    value,
    onChange,
    disabled
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onUpload = (result: any) => {
        onChange(result.info.secure_url);
    };

    if (!isMounted) {
        return null;
    }

    return (
        <div className="space-y-4 w-full flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
            <CldUploadWidget
                onSuccess={onUpload}
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "kkosm_unsigned"}
            >
                {({ open }) => {
                    const onClick = () => {
                        open();
                    };

                    return (
                        <div className="flex flex-col items-center gap-4 w-full">
                            {value ? (
                                <div className="relative w-full h-60 rounded-md overflow-hidden">
                                    <div className="z-10 absolute top-2 right-2">
                                        <Button
                                            type="button"
                                            onClick={onClick}
                                            variant="secondary"
                                            className="h-8 text-xs"
                                        >
                                            Change Image
                                        </Button>
                                    </div>
                                    <Image
                                        fill
                                        className="object-cover"
                                        alt="Image"
                                        src={value}
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-6 text-center">
                                    <div className="mb-4 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                    </div>
                                    <Button
                                        type="button"
                                        disabled={disabled}
                                        variant="secondary"
                                        onClick={onClick}
                                    >
                                        Upload an Image
                                    </Button>
                                    <p className="mt-2 text-sm text-gray-500">Supports JPG, PNG, WEBP</p>
                                </div>
                            )}
                        </div>
                    );
                }}
            </CldUploadWidget>
        </div>
    );
};

export default ImageUpload;
