"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Image from "next/image";

interface Article {
    id: number;
    title: string;
    image: string;
    createdAt: string;
}

export default function NewsAdminPage() {
    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/news")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) setNews(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this article?")) return;

        try {
            const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
            if (res.ok) {
                setNews(news.filter(n => n.id !== id));
            } else {
                alert("Failed to delete");
            }
        } catch (err) {
            console.error(err);
            alert("Error deleting article");
        }
    };

    if (loading) return <div>Loading news...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Manage News & Media</h1>
                <Link href="/admin/news/new">
                    <Button>Create New Article</Button>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date Created</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {news.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                    No news found. Create one to get started.
                                </td>
                            </tr>
                        ) : (
                            news.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="relative w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                                            {/* Using standard img tag to avoid crashes with unconfigured hostnames (e.g. file://) */}
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={item.image || '/placeholder.png'} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium">{item.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link href={`/admin/news/${item.id}/edit`}>
                                            <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                        </Link>
                                        <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
