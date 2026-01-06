"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import MediaUpload from "@/components/ui/media-upload";
import Image from "next/image";

interface MediaItem {
    id: number;
    url: string;
    type: "image" | "video";
    title?: string;
    createdAt: string;
}

export default function AdminMediaPage() {
    const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    const fetchMedia = async () => {
        try {
            const res = await fetch("/api/media");
            if (res.ok) {
                const data = await res.json();
                setMediaItems(data);
            }
        } catch (error) {
            console.error("Failed to fetch media", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMedia();
    }, []);

    const handleUpload = async (url: string, type: 'image' | 'video') => {
        setUploading(true);
        try {
            const res = await fetch("/api/media", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, type }),
            });

            if (res.ok) {
                fetchMedia(); // Refresh list
            } else {
                alert("Failed to save media");
            }
        } catch (error) {
            console.error("Error saving media:", error);
            alert("Error saving media");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this item?")) return;

        try {
            const res = await fetch(`/api/media/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setMediaItems(prev => prev.filter(item => item.id !== id));
            } else {
                alert("Failed to delete item");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div className="max-w-[1600px] mx-auto pb-20 px-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Media Gallery Management</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Upload Section */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100 sticky top-6">
                        <h2 className="text-lg font-semibold mb-4">Upload New Media</h2>
                        <MediaUpload
                            value=""
                            onChange={handleUpload}
                            disabled={uploading}
                        />
                        <p className="text-sm text-gray-500 mt-4">
                            Uploaded media will automatically appear in the News & Media Gallery.
                            <br />
                            <strong>Note:</strong> The latest uploaded photos will also appear in the "Into the Spotlight" section on the homepage.
                        </p>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        <h2 className="text-lg font-semibold mb-6">Gallery Items ({mediaItems.length})</h2>

                        {loading ? (
                            <p>Loading gallery...</p>
                        ) : mediaItems.length === 0 ? (
                            <p className="text-gray-500 italic">No media items found.</p>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {mediaItems.map((item) => (
                                    <div key={item.id} className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                        {item.type === 'video' ? (
                                            <video src={item.url} className="w-full h-full object-cover" />
                                        ) : (
                                            <Image
                                                src={item.url}
                                                alt="Gallery Item"
                                                fill
                                                className="object-cover"
                                            />
                                        )}

                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                                                title="Delete"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                            </button>
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition"
                                                title="View"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
                                            </a>
                                        </div>
                                        <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 text-white text-[10px] uppercase font-bold rounded">
                                            {item.type}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
