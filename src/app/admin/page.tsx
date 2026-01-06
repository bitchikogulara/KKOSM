"use client";
import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        events: 0,
        news: 0,
        contactSubmissions: 0,
        registrations: 0,
    });

    useEffect(() => {
        // In a real app we would have a specialized stats API or fetch count from each
        // For now we'll just fetch list and count length (inefficient but works for small scale)
        const fetchStats = async () => {
            try {
                const [eventsRes, newsRes] = await Promise.all([
                    fetch("/api/events"),
                    fetch("/api/news")
                ]);
                // Note: We haven't built GET /api/contact or /api/registration yet for listing
                // So we'll skip those or return 0 for now.

                const events = await eventsRes.json();
                const news = await newsRes.json();

                setStats(prev => ({
                    ...prev,
                    events: Array.isArray(events) ? events.length : 0,
                    news: Array.isArray(news) ? news.length : 0,
                }));
            } catch (e) {
                console.error("Failed to fetch stats", e);
            }
        };
        fetchStats();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Events" count={stats.events} color="bg-blue-100 text-blue-800" />
                <StatCard title="News Articles" count={stats.news} color="bg-green-100 text-green-800" />
                <StatCard title="Contact Requests" count={stats.contactSubmissions} color="bg-yellow-100 text-yellow-800" />
                <StatCard title="Registrations" count={stats.registrations} color="bg-purple-100 text-purple-800" />
            </div>
        </div>
    );
}

const StatCard = ({ title, count, color }: { title: string; count: number; color: string }) => (
    <div className={`p-6 rounded-xl shadow-sm border border-gray-100 bg-white`}>
        <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
        <p className={`text-3xl font-bold ${color.split(" ")[1]}`}>{count}</p>
    </div>
);
