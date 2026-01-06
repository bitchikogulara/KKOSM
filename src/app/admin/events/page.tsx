"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Image from "next/image";

interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    image: string;
}

export default function EventsAdminPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = () => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) setEvents(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this event?")) return;

        try {
            const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
            if (res.ok) {
                setEvents(events.filter((e) => e.id !== id));
            } else {
                alert("Failed to delete event");
            }
        } catch (err) {
            console.error(err);
            alert("Error deleting event");
        }
    };

    if (loading) return <div>Loading events...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Manage Events</h1>
                <Link href="/admin/events/new">
                    <Button>Create New Event</Button>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {events.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                    No events found. Create one to get started.
                                </td>
                            </tr>
                        ) : (
                            events.map((event) => (
                                <tr key={event.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="relative w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                                            {(event.image.startsWith("http") || event.image.startsWith("/")) ? (
                                                <Image src={event.image} alt={event.title} fill className="object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">Invalid</div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium">{event.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{event.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{event.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link href={`/admin/events/${event.id}/edit`} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</Link>
                                        <button onClick={() => handleDelete(event.id)} className="text-red-600 hover:text-red-900">Delete</button>
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
