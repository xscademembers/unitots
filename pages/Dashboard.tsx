import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, MessageSquare, ImageIcon, Plus, Trash2, GripVertical, Loader2, Home } from 'lucide-react';

const TOKEN_KEY = 'dashboard_token';
const API = '';

function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

// --- Login ---
const LoginForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof data.error === 'string' ? data.error : 'Login failed');
        return;
      }
      if (data.token) {
        setToken(data.token);
        onSuccess();
      } else setError('Login failed');
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        <h1 className="font-display text-2xl font-bold text-gray-800 mb-6 text-center">Dashboard Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>
          )}
          <div>
            <label htmlFor="dashboard-username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              id="dashboard-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 outline-none"
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="dashboard-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="dashboard-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 outline-none"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full min-h-[48px] py-3 rounded-lg font-bold text-white bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 size={20} className="animate-spin" /> : null}
            Sign in
          </button>
        </form>
        <p className="mt-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors"
          >
            <Home size={18} />
            Go back to home page
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

// --- Enquiries tab ---
interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  createdAt: string;
}

const EnquiriesTab: React.FC = () => {
  const [list, setList] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEnquiries = useCallback(async () => {
    const token = getToken();
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/api/enquiries`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Failed to load');
        setList([]);
        return;
      }
      setList(Array.isArray(data.enquiries) ? data.enquiries : []);
    } catch {
      setError('Network error');
      setList([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  const formatDate = (s: string) => {
    try {
      return new Date(s).toLocaleString();
    } catch {
      return s;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold text-gray-800">Enquiries</h2>
      {error && <div className="p-3 rounded-lg bg-red-50 text-red-700 text-sm">{error}</div>}
      {loading ? (
        <div className="flex items-center justify-center py-12"><Loader2 size={32} className="animate-spin text-yellow-500" /></div>
      ) : list.length === 0 ? (
        <p className="text-gray-500 py-8 text-center">No enquiries yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-3 font-semibold text-gray-700">Name</th>
                <th className="p-3 font-semibold text-gray-700">Email</th>
                <th className="p-3 font-semibold text-gray-700">Phone</th>
                <th className="p-3 font-semibold text-gray-700">Message</th>
                <th className="p-3 font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {list.map((row) => (
                <tr key={row._id} className="border-b border-gray-100 last:border-0">
                  <td className="p-3 text-gray-800">{row.name}</td>
                  <td className="p-3 text-gray-600">
                    <a href={`mailto:${row.email}`} className="text-blue-600 hover:underline">
                      {row.email}
                    </a>
                  </td>
                  <td className="p-3 text-gray-600">
                    <a href={`tel:${row.phone}`} className="text-blue-600 hover:underline">
                      {row.phone}
                    </a>
                  </td>
                  <td className="p-3 text-gray-600 max-w-sm whitespace-normal break-words">
                    {row.message || '—'}
                  </td>
                  <td className="p-3 text-gray-500 whitespace-nowrap">{formatDate(row.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// --- Manage Gallery tab ---
const MAX_FILE_MB = 5;

interface GalleryItem {
  _id: string;
  type: 'image' | 'video';
  mimeType?: string;
  // For new uploads we store base64 data
  data?: string;
  // For initial seeded items we keep using remote URLs
  url?: string;
  order: number;
}

const ManageGalleryTab: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);

  const token = getToken();

  const fetchGallery = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/api/gallery`);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Failed to load');
        setItems([]);
        return;
      }
      setItems(Array.isArray(data.items) ? data.items : []);
    } catch {
      setError('Network error');
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  const dataUrl = (item: GalleryItem) => {
    if (item.data) {
      const mime = item.mimeType || (item.type === 'video' ? 'video/mp4' : 'image/jpeg');
      return `data:${mime};base64,${item.data}`;
    }
    return item.url || '';
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !token) return;
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setAddError(`File must be ${MAX_FILE_MB} MB or smaller`);
      return;
    }
    setAddError(null);
    setUploading(true);
    const type = file.type.startsWith('video/') ? 'video' : 'image';
    const reader = new FileReader();
    reader.onload = async () => {
      const data = String(reader.result).split(',')[1];
      if (!data) {
        setAddError('Failed to read file');
        setUploading(false);
        return;
      }
      try {
        const res = await fetch(`${API}/api/gallery`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ type, data, mimeType: file.type }),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
          setAddError(json.error || 'Upload failed');
          return;
        }
        await fetchGallery();
      } catch {
        setAddError('Network error');
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = async (id: string) => {
    if (!token || !confirm('Delete this item?')) return;
    try {
      const res = await fetch(`${API}/api/gallery?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) await fetchGallery();
    } catch {
      setError('Delete failed');
    }
  };

  const handleDragStart = (id: string) => setDraggedId(id);
  const handleDragOver = (e: React.DragEvent) => e.preventDefault();
  const handleDrop = async (targetId: string) => {
    if (!draggedId || draggedId === targetId) {
      setDraggedId(null);
      return;
    }
    const idx = items.findIndex((i) => i._id === draggedId);
    const targetIdx = items.findIndex((i) => i._id === targetId);
    if (idx === -1 || targetIdx === -1) {
      setDraggedId(null);
      return;
    }
    const reordered = [...items];
    const [removed] = reordered.splice(idx, 1);
    reordered.splice(targetIdx, 0, removed);
    setItems(reordered);
    setDraggedId(null);
    if (!token) return;
    try {
      await fetch(`${API}/api/gallery`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ orderedIds: reordered.map((i) => i._id) }),
      });
    } catch {
      setError('Failed to save order');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold text-gray-800">Manage Gallery</h2>
      <p className="text-sm text-gray-600">Add images or videos (max {MAX_FILE_MB} MB). Drag to reorder.</p>
      {error && <div className="p-3 rounded-lg bg-red-50 text-red-700 text-sm">{error}</div>}
      {addError && <div className="p-3 rounded-lg bg-amber-50 text-amber-800 text-sm">{addError}</div>}

      <label className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-yellow-500 text-white font-bold cursor-pointer hover:bg-yellow-600 disabled:opacity-50">
        <Plus size={20} />
        Add new item (max {MAX_FILE_MB} MB)
        <input
          type="file"
          accept="image/*,video/*"
          className="sr-only"
          onChange={handleFile}
          disabled={uploading}
        />
      </label>
      {uploading && <p className="text-sm text-gray-500 flex items-center gap-2"><Loader2 size={16} className="animate-spin" /> Uploading…</p>}

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 size={32} className="animate-spin text-yellow-500" /></div>
      ) : items.length === 0 ? (
        <p className="text-gray-500 py-8 text-center">No gallery items. Add one above.</p>
      ) : (
        <div
          className="gallery-masonry columns-1 sm:columns-2 lg:columns-3 w-full"
          style={{ columnGap: '20px' }}
        >
          {items.map((item) => (
            <div
              key={item._id}
              draggable
              onDragStart={() => handleDragStart(item._id)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(item._id)}
              className={`relative mb-5 rounded-xl border-2 bg-gray-100 overflow-hidden ${
                draggedId === item._id ? 'opacity-50 border-yellow-500' : 'border-transparent'
              }`}
            >
              <div className="flex items-center gap-1 absolute top-1 left-1 z-10 bg-black/50 rounded p-1 text-white">
                <GripVertical size={16} />
                <span className="text-xs">Drag</span>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(item._id)}
                className="absolute top-1 right-1 z-10 p-1.5 rounded-lg bg-red-500 text-white hover:bg-red-600"
                aria-label="Delete"
              >
                <Trash2 size={16} />
              </button>
              <div className="aspect-square flex items-center justify-center p-2">
                {item.type === 'image' ? (
                  <img
                    src={dataUrl(item)}
                    alt=""
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                ) : (
                  <video
                    src={dataUrl(item)}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    muted
                    playsInline
                    preload="metadata"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Main Dashboard ---
const Dashboard: React.FC = () => {
  const [token, setTokenState] = useState<string | null>(null);
  const [tab, setTab] = useState<'enquiries' | 'gallery'>('enquiries');

  useEffect(() => {
    setTokenState(getToken());
  }, []);

  const handleLoginSuccess = () => setTokenState(getToken());
  const handleLogout = () => {
    clearToken();
    setTokenState(null);
  };

  if (token === null) {
    return <LoginForm onSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="font-display text-xl font-bold text-gray-800">UNITOTS Dashboard</h1>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors"
          >
            <Home size={18} />
            Go to home page
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>
      <nav className="bg-white border-b border-gray-200 px-4 flex gap-1">
        <button
          type="button"
          onClick={() => setTab('enquiries')}
          className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 -mb-px transition-colors ${
            tab === 'enquiries' ? 'border-yellow-500 text-yellow-700' : 'border-transparent text-gray-600 hover:text-gray-800'
          }`}
        >
          <MessageSquare size={18} />
          Enquiries
        </button>
        <button
          type="button"
          onClick={() => setTab('gallery')}
          className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 -mb-px transition-colors ${
            tab === 'gallery' ? 'border-yellow-500 text-yellow-700' : 'border-transparent text-gray-600 hover:text-gray-800'
          }`}
        >
          <ImageIcon size={18} />
          Manage Gallery
        </button>
      </nav>
      <main className="max-w-6xl mx-auto p-4 sm:p-6">
        {tab === 'enquiries' && <EnquiriesTab />}
        {tab === 'gallery' && <ManageGalleryTab />}
      </main>
    </div>
  );
};

export default Dashboard;
