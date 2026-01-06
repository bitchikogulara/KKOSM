"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button";

export default function SubmissionsPage() {
    const [data, setData] = useState<{ contacts: any[], registrations: any[] }>({ contacts: [], registrations: [] });
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'contacts' | 'registrations'>('contacts');

    useEffect(() => {
        fetch("/api/submissions")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading submissions...</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Submissions</h1>

            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => setActiveTab('contacts')}
                    className={`px-4 py-2 rounded-md font-medium ${activeTab === 'contacts' ? 'bg-yellow-dark text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                    Contact Requests ({data.contacts.length})
                </button>
                <button
                    onClick={() => setActiveTab('registrations')}
                    className={`px-4 py-2 rounded-md font-medium ${activeTab === 'registrations' ? 'bg-yellow-dark text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                    Registrations ({data.registrations.length})
                </button>
            </div>

            <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
                {activeTab === 'contacts' ? (
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.contacts.length === 0 ? (
                                <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">No contact requests.</td></tr>
                            ) : (
                                data.contacts.map((item: any) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">{new Date(item.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium">{item.firstName} {item.lastName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{item.email}</td>
                                        <td className="px-6 py-4 text-sm truncate max-w-xs">{item.message}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                ) : (
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Motivation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.registrations.length === 0 ? (
                                <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">No registrations.</td></tr>
                            ) : (
                                data.registrations.map((item: any) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">{new Date(item.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium">{item.firstName} {item.lastName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{item.email}</td>
                                        <td className="px-6 py-4 text-sm truncate max-w-xs">{item.motivation}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
