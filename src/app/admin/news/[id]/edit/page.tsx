"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/ui/image-upload";

export default function EditNewsPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        content: "",
        large: false
    });

    useEffect(() => {
        if (id) {
            fetch(`/api/news/${id}`)
                .then(res => {
                    if (!res.ok) throw new Error("Failed to fetch article");
                    return res.json();
                })
                .then(data => {
                    setFormData({
                        title: data.title || "",
                        description: data.description || "",
                        image: data.image || "",
                        content: data.content || "",
                        large: data.large || false
                    });
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    alert("Error loading article");
                    router.push("/admin/news");
                });
        }
    }, [id, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const res = await fetch(`/api/news/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/admin/news");
            } else {
                alert("Failed to update article");
            }
        } catch (err) {
            console.error(err);
            alert("Error updating article");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Edit Article</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow border border-gray-100">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Title</label>
                    <Input name="title" value={formData.title} onChange={handleChange} required placeholder="Article headline" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Image</label>
                    <ImageUpload
                        value={formData.image}
                        onChange={(url: string) => setFormData({ ...formData, image: url })}
                        disabled={saving}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Short Description</label>
                    <Textarea name="description" value={formData.description} onChange={handleChange} required className="h-24" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Full Content</label>
                    <Textarea name="content" value={formData.content} onChange={handleChange} className="h-40" />
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="large"
                        id="large"
                        checked={formData.large}
                        onChange={handleChange}
                        className="w-4 h-4 text-yellow-600 rounded"
                    />
                    <label htmlFor="large" className="text-sm font-medium">Featured (Large display)</label>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
                    <Button type="submit" disabled={saving}>{saving ? "Saving..." : "Save Changes"}</Button>
                </div>
            </form>
        </div>
    );
}
