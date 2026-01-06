"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/ui/image-upload"; // Imported ImageUpload

import EventCard from "@/components/pages/events/EventCard";
import { ThemeType, EventSection } from "@/components/pages/events/types";

export default function EditEventPage() {
    const router = useRouter();
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // Initial State
    const [formData, setFormData] = useState({
        title: "",
        tag: "Our next adventure",
        date: "",
        location: "",
        age: "",
        price: "",
        image: "",
        description: "",
        theme: "gold",
        category: "",
        specialDescription: "",
        showTimeline: true,
        timelineTitle: "Schedule"
    });

    // Dynamic State
    const [timeline, setTimeline] = useState<{ time: string; title: string; description: string }[]>([]);
    const [sections, setSections] = useState<EventSection[]>([]);

    useEffect(() => {
        if (params.id) {
            fetch(`/api/events/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setFormData({
                        title: data.title || "",
                        tag: data.tag || "",
                        date: data.date || "",
                        location: data.location || "",
                        age: data.age || "",
                        price: data.price || "",
                        image: data.image || "",
                        description: data.description || "",
                        theme: data.theme || "gold",
                        category: data.category || "",
                        specialDescription: data.specialDescription || "",
                        showTimeline: data.showTimeline ?? true,
                        timelineTitle: data.timelineTitle || "Schedule"
                    });
                    setTimeline(Array.isArray(data.timeline) ? data.timeline : []);
                    setSections(Array.isArray(data.sections) ? data.sections : []);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch event", err);
                    setLoading(false);
                });
        }
    }, [params.id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Timeline Handlers
    const addTimelineItem = () => {
        setTimeline(prev => [...prev, { time: "", title: "", description: "" }]);
    };
    const updateTimelineItem = (index: number, field: string, value: string) => {
        setTimeline(prev => prev.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
        ));
    };
    const removeTimelineItem = (index: number) => {
        setTimeline(prev => prev.filter((_, i) => i !== index));
    };

    // Section Handlers
    const addSection = (e?: React.MouseEvent) => {
        e?.preventDefault();
        // Default to list type
        setSections(prev => [...prev, { title: "", items: [""], description: undefined }]);
    };

    const updateSectionTitle = (index: number, value: string) => {
        setSections(prev => prev.map((section, i) =>
            i === index ? { ...section, title: value } : section
        ));
    };

    const toggleSectionType = (index: number, type: 'list' | 'text') => {
        setSections(prev => prev.map((section, i) => {
            if (i !== index) return section;

            if (type === 'list') {
                return { ...section, items: section.items || [""], description: undefined };
            } else {
                return { ...section, items: undefined, description: section.description || "" };
            }
        }));
    };

    const updateSectionDescription = (index: number, value: string) => {
        setSections(prev => prev.map((section, i) =>
            i === index ? { ...section, description: value } : section
        ));
    };

    const addSectionItem = (sectionIndex: number, e?: React.MouseEvent) => {
        e?.preventDefault();
        setSections(prev => prev.map((section, i) =>
            i === sectionIndex && section.items
                ? { ...section, items: [...section.items, ""] }
                : section
        ));
    };

    const updateSectionItem = (sectionIndex: number, itemIndex: number, value: string) => {
        setSections(prev => prev.map((section, sIdx) =>
            sIdx === sectionIndex && section.items
                ? {
                    ...section,
                    items: section.items.map((item, iIdx) => iIdx === itemIndex ? value : item)
                }
                : section
        ));
    };

    const removeSectionItem = (sectionIndex: number, itemIndex: number) => {
        setSections(prev => prev.map((section, sIdx) =>
            sIdx === sectionIndex && section.items
                ? { ...section, items: section.items.filter((_, iIdx) => iIdx !== itemIndex) }
                : section
        ));
    };

    const removeSection = (index: number) => {
        setSections(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const payload = {
                ...formData,
                timeline,
                sections
            };

            const res = await fetch(`/api/events/${params.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                router.push("/admin/events");
            } else {
                alert("Failed to update event");
            }
        } catch (err) {
            console.error(err);
            alert("Error updating event");
        } finally {
            setSubmitting(false);
        }
    };

    const [fullscreenPreview, setFullscreenPreview] = useState(false);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-[1600px] mx-auto pb-20 px-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Edit Event</h1>
                <Button
                    variant="outline"
                    type="button"
                    onClick={() => setFullscreenPreview(!fullscreenPreview)}
                    className="hidden xl:flex gap-2"
                >
                    {fullscreenPreview ? (
                        <>
                            <span>Show Editor</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="9" x2="9" y1="3" y2="21" /></svg>
                        </>
                    ) : (
                        <>
                            <span>Fullscreen Preview</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg>
                        </>
                    )}
                </Button>
            </div>

            <div className={`grid gap-8 items-start transition-all duration-300 ${fullscreenPreview ? 'grid-cols-1' : 'grid-cols-1 xl:grid-cols-2'}`}>

                {/* Left Column: Form Editor */}
                <form onSubmit={handleSubmit} className={`space-y-6 bg-white p-8 rounded-xl shadow border border-gray-100 ${fullscreenPreview ? 'hidden' : 'block'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Title</label>
                            <Input name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. Spring Camping Adventure" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Tag</label>
                            <Input name="tag" value={formData.tag} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Theme</label>
                            <select
                                name="theme"
                                value={formData.theme}
                                onChange={handleChange}
                                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                                <option value="gold">Gold (Default)</option>
                                <option value="green">Green</option>
                                <option value="red">Red</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Date (String)</label>
                            <Input name="date" value={formData.date} onChange={handleChange} required placeholder="e.g. September 30-31" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Location</label>
                            <Input name="location" value={formData.location} onChange={handleChange} required placeholder="e.g. Pine Ridge National Park" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Age Group</label>
                            <Input name="age" value={formData.age} onChange={handleChange} required placeholder="e.g. Ages 11-17" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Price</label>
                            <Input name="price" value={formData.price} onChange={handleChange} required placeholder="e.g. $45 per person" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Image</label>
                        <ImageUpload
                            value={formData.image}
                            onChange={(url: string) => setFormData(prev => ({ ...prev, image: url }))}
                            disabled={submitting}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Short Description</label>
                        <Textarea name="description" value={formData.description} onChange={handleChange} required className="h-24" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Special/Long Description</label>
                        <Textarea name="specialDescription" value={formData.specialDescription} onChange={handleChange} className="h-40" />
                    </div>

                    {/* Timeline Editor */}
                    <div className="border-t pt-6 bg-gray-50/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-800">Timeline Items</h3>
                            <Button type="button" variant="outline" onClick={addTimelineItem} className="bg-white">+ Add Step</Button>
                        </div>

                        <div className="mb-4 flex gap-4 items-center">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={formData.showTimeline}
                                    onChange={(e) => setFormData({ ...formData, showTimeline: e.target.checked })}
                                    className="rounded border-gray-300 text-neutral-600 focus:ring-neutral-500"
                                />
                                Show Timeline Section
                            </label>

                            {formData.showTimeline && (
                                <Input
                                    placeholder="Section Title (e.g. Schedule)"
                                    className="max-w-[200px]"
                                    value={formData.timelineTitle}
                                    onChange={(e) => setFormData({ ...formData, timelineTitle: e.target.value })}
                                />
                            )}
                        </div>

                        {formData.showTimeline && (
                            <div className="space-y-4">
                                {timeline.length === 0 && <p className="text-sm text-gray-500 italic">No timeline items added yet.</p>}
                                {timeline.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-md shadow-sm border border-gray-200">
                                        <div className="space-y-2 flex-1">
                                            <div className="flex gap-2">
                                                <Input className="w-1/3" placeholder="Time" value={item.time} onChange={(e) => updateTimelineItem(idx, 'time', e.target.value)} />
                                                <Input className="w-2/3" placeholder="Title" value={item.title} onChange={(e) => updateTimelineItem(idx, 'title', e.target.value)} />
                                            </div>
                                            <Input placeholder="Description (optional)" value={item.description} onChange={(e) => updateTimelineItem(idx, 'description', e.target.value)} />
                                        </div>
                                        <Button type="button" variant="ghost" onClick={() => removeTimelineItem(idx)} className="text-red-500 hover:bg-red-50">X</Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sections Editor */}
                    <div className="border-t pt-6 bg-gray-50/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-800">Detailed Sections</h3>
                            <button type="button" onClick={addSection} className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium text-sm transition-colors">+ Add Section</button>
                        </div>
                        <div className="space-y-6">
                            {sections.length === 0 && <p className="text-sm text-gray-500 italic">No sections added yet.</p>}
                            {sections.map((section, sIdx) => {
                                const isList = Array.isArray(section.items);
                                return (
                                    <div key={sIdx} className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                                        <div className="flex justify-between items-start mb-3 gap-4">
                                            <div className="flex-1 space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <Input
                                                        placeholder="Section Title (e.g. What to bring)"
                                                        value={section.title}
                                                        onChange={(e) => updateSectionTitle(sIdx, e.target.value)}
                                                        className="font-bold border-gray-300 focus:border-yellow-500 max-w-sm"
                                                    />
                                                    <div className="flex bg-gray-100 p-1 rounded-md">
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleSectionType(sIdx, 'list')}
                                                            className={`px-3 py-1 text-xs font-medium rounded ${isList ? 'bg-white shadow text-gray-800' : 'text-gray-500'}`}
                                                        >
                                                            List
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleSectionType(sIdx, 'text')}
                                                            className={`px-3 py-1 text-xs font-medium rounded ${!isList ? 'bg-white shadow text-gray-800' : 'text-gray-500'}`}
                                                        >
                                                            Text
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button type="button" variant="ghost" onClick={() => removeSection(sIdx)} className="text-red-500 hover:text-red-700 hover:bg-red-50 text-xs shrink-0">Delete Section</Button>
                                        </div>

                                        {isList ? (
                                            <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                                                {section.items!.map((item, iIdx) => (
                                                    <div key={iIdx} className="flex gap-2 items-center">
                                                        <span className="text-gray-400">•</span>
                                                        <Input placeholder="Item text..." value={item} onChange={(e) => updateSectionItem(sIdx, iIdx, e.target.value)} className="flex-1" />
                                                        <Button type="button" variant="ghost" onClick={() => removeSectionItem(sIdx, iIdx)} className="h-8 w-8 px-0 text-gray-400 hover:text-red-500">×</Button>
                                                    </div>
                                                ))}
                                                <button type="button" onClick={(e) => addSectionItem(sIdx, e)} className="text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 mt-2 font-medium bg-transparent border-none cursor-pointer">+ Add Item</button>
                                            </div>
                                        ) : (
                                            <div className="pl-4 border-l-2 border-gray-100">
                                                <Textarea
                                                    placeholder="Enter section description text..."
                                                    value={section.description || ""}
                                                    onChange={(e) => updateSectionDescription(sIdx, e.target.value)}
                                                    className="min-h-[100px]"
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t sticky bottom-0 bg-white/95 backdrop-blur py-4 -mx-8 px-8 border-t-gray-100">
                        <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
                        <Button type="submit" disabled={submitting}>{submitting ? "Saving..." : "Save Changes"}</Button>
                    </div>
                </form>

                {/* Right Column: Live Preview */}
                <div className={`hidden xl:block relative transition-all duration-300 ${fullscreenPreview ? 'm-auto max-w-[1200px]' : ''}`}>
                    <div className="sticky top-24">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-700">Live Preview</h2>
                            <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Theme: {formData.theme}</span>
                        </div>

                        <div className={`origin-top-left transition-all duration-300 border-4 border-dashed border-gray-200 rounded-3xl p-2 ${fullscreenPreview ? 'scale-100 w-full' : 'scale-[0.85] w-[115%]'}`}>
                            <EventCard
                                theme={formData.theme as ThemeType}
                                category={formData.category || "Event"}
                                date={formData.date || "Date"}
                                title={formData.title || "Event Title"}
                                location={formData.location || "Location"}
                                ageGroup={formData.age || "Age Group"}
                                price={formData.price || "Price"}
                                specialDescription={formData.specialDescription || formData.description}
                                timeline={timeline}
                                sections={sections}
                                showTimeline={formData.showTimeline}
                                timelineTitle={formData.timelineTitle}
                                image={formData.image}
                            />
                        </div>
                        <p className="mt-4 text-center text-gray-400 text-sm">
                            This is how the event page will look.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
