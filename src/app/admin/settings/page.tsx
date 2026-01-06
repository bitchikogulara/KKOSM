"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Profile Section Component
const ProfileSettings = ({ user, onUpdate }: { user: any, onUpdate: (data: any) => Promise<void> }) => {
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            await onUpdate({ name, email, password });
            setMessage("Profile updated successfully");
            setPassword(""); // Clear password field
        } catch (err) {
            setMessage("Failed to update profile");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-lg">
            <h2 className="text-lg font-bold mb-4">Your Profile</h2>
            {message && <p className={`mb-4 text-sm ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>{message}</p>}

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input value={email} type="email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">New Password (leave empty to keep current)</label>
                    <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
                </div>
                <Button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
                </Button>
            </div>
        </form>
    );
};

// Team Management Component
const TeamManagement = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [roles] = useState(["ADMIN", "MODERATOR"]);
    const [loading, setLoading] = useState(true);

    // Add User State
    const [isAdding, setIsAdding] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "MODERATOR" });

    const fetchUsers = async () => {
        try {
            const res = await fetch("/api/admin/users");
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            }
        } catch (error) {
            console.error("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/admin/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });
            if (res.ok) {
                setIsAdding(false);
                setNewUser({ name: "", email: "", password: "", role: "MODERATOR" });
                fetchUsers();
            } else {
                alert("Failed to create user. Email might be duplicate.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteUser = async (id: number) => {
        if (!confirm("Are you sure you want to delete this user?")) return;
        try {
            const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
            if (res.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <div>Loading team...</div>;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Team Members</h2>
                <Button onClick={() => setIsAdding(!isAdding)} variant="outline">
                    {isAdding ? "Cancel" : "Add Member"}
                </Button>
            </div>

            {isAdding && (
                <form onSubmit={handleAddUser} className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-3">Add New Member</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <Input
                            placeholder="Name"
                            value={newUser.name}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            required
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            required
                            value={newUser.password}
                            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        />
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={newUser.role}
                            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                        >
                            <option value="ADMIN">Admin</option>
                            <option value="MODERATOR">Moderator</option>
                        </select>
                    </div>
                    <Button type="submit">Create User</Button>
                </form>
            )}

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b border-gray-200 text-gray-500 text-sm">
                        <tr>
                            <th className="pb-3 font-medium">Name</th>
                            <th className="pb-3 font-medium">Email</th>
                            <th className="pb-3 font-medium">Role</th>
                            <th className="pb-3 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users.map((u) => (
                            <tr key={u.id} className="group">
                                <td className="py-3 font-medium">{u.name || "N/A"}</td>
                                <td className="py-3 text-gray-600">{u.email}</td>
                                <td className="py-3">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${u.role === 'ADMIN' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                                        {u.role}
                                    </span>
                                </td>
                                <td className="py-3 text-right">
                                    <button
                                        onClick={() => handleDeleteUser(u.id)}
                                        className="text-red-500 hover:text-red-700 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default function SettingsPage() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const fetchProfile = async () => {
        try {
            const res = await fetch("/api/admin/profile");
            if (res.ok) {
                const data = await res.json();
                setUser(data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleUpdateProfile = async (data: any) => {
        const res = await fetch("/api/admin/profile", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed");
        fetchProfile(); // Refresh
    };

    if (loading) return <div className="p-8">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            <h1 className="text-2xl font-bold">Settings</h1>

            <div className="grid gap-8">
                {/* Profile Management - Available to Everyone */}
                <ProfileSettings user={user} onUpdate={handleUpdateProfile} />

                {/* Team Management - Only for Admins */}
                {user?.role === "ADMIN" && (
                    <TeamManagement />
                )}
            </div>
        </div>
    );
}
