import {
  Baby,
  BookOpen,
  Calculator,
  Gamepad2,
  Palette,
  Flower,
  Library,
  Pencil,
  Swords,
  Music,
  GraduationCap,
  Languages,
  Sparkles
} from 'lucide-react';

export const SERVICES = [
  {
    title: 'School',
    description: 'Play Group, Nursery, Jr KG, Sr KG. Days: Monday to Friday',
    icon: GraduationCap,
    color: 'bg-blue-100 text-blue-600',
    border: 'border-blue-200'
  },
  {
    title: 'Daycare',
    description: 'Preschool daycare and evening activity classes. A safe, nurturing home away from home. Days: Mon to Fri or Saturday and Sunday',
    icon: Baby,
    color: 'bg-yellow-100 text-yellow-600',
    border: 'border-yellow-200'
  },
  {
    title: 'Tuition',
    description: 'Personalized academic support (Nursery to 10th). Days: Monday to Saturday',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-600',
    border: 'border-blue-200'
  },
  {
    title: 'Abacus',
    description: 'Boosting mental calculation speed and brain development. Days: Monday to Friday OR Saturday and Sunday',
    icon: Calculator,
    color: 'bg-pink-100 text-pink-600',
    border: 'border-pink-200'
  },
  {
    title: 'Vedic Maths',
    description: 'Ancient mathematical techniques for faster calculations. Days: Monday to Friday OR Saturday and Sunday',
    icon: Calculator,
    color: 'bg-pink-100 text-pink-600',
    border: 'border-pink-200'
  },
  {
    title: 'Phonics',
    description: 'Building strong reading and pronunciation skills. Days: Monday to Friday',
    icon: Sparkles,
    color: 'bg-purple-100 text-purple-600',
    border: 'border-purple-200'
  },
  {
    title: 'Basic Grammar / Spoken English',
    description: 'Language skills for ages 5 to 15 years. Days: Monday to Friday',
    icon: Languages,
    color: 'bg-indigo-100 text-indigo-600',
    border: 'border-indigo-200'
  },
  {
    title: 'Chess',
    description: 'Strategic thinking and problem-solving through the royal game. Days: Monday, Wednesday, Friday',
    icon: Gamepad2,
    color: 'bg-purple-100 text-purple-600',
    border: 'border-purple-200'
  },
  {
    title: 'Drawing & Sketching',
    description: 'Unleashing creativity and imagination on canvas. Days: Monday to Friday',
    icon: Palette,
    color: 'bg-green-100 text-green-600',
    border: 'border-green-200'
  },
  {
    title: 'Yoga / Zumba',
    description: 'Fun fitness activities for physical and mental well-being. Days: Monday to Friday (Ladies & Kids batches)',
    icon: Flower,
    color: 'bg-teal-100 text-teal-600',
    border: 'border-teal-200'
  },
  {
    title: 'Reading Room',
    description: 'A quiet, resource-filled space to fall in love with books. Days: Daily',
    icon: Library,
    color: 'bg-orange-100 text-orange-600',
    border: 'border-orange-200'
  },
  {
    title: 'Handwriting / Calligraphy',
    description: 'Mastering the art of beautiful calligraphy and writing. Days: Monday to Friday',
    icon: Pencil,
    color: 'bg-indigo-100 text-indigo-600',
    border: 'border-indigo-200'
  },
  {
    title: 'Karate / Skating',
    description: 'Building discipline, strength, and coordination. Days: Monday to Saturday',
    icon: Swords,
    color: 'bg-red-100 text-red-600',
    border: 'border-red-200'
  },
  {
    title: 'Dance',
    description: 'Expressing joy and rhythm through movement. Days: Monday to Saturday',
    icon: Music,
    color: 'bg-rose-100 text-rose-600',
    border: 'border-rose-200'
  },
  {
    title: 'Music',
    description: 'Melodious music classes to build rhythm and confidence.',
    icon: Music,
    color: 'bg-rose-50 text-rose-600',
    border: 'border-rose-100'
  }
];

// Gallery media: images and videos from public/gallery (synced from "images assests")
export type GalleryMediaItem = { type: 'image'; url: string } | { type: 'video'; url: string };

const galleryUrl = (filename: string) =>
  `/gallery/${encodeURIComponent(filename).replace(/%2F/gi, '/')}`;

export const GALLERY_MEDIA: GalleryMediaItem[] = [
  // Images
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.47.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.48.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.48 (1).jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.49.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.51.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.52.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.52 (1).jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.53.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.54.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.55.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.55 (1).jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.56.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.00.59.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.02.09.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.02.10.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.02.11.jpeg') },
  { type: 'image', url: galleryUrl('WhatsApp Image 2026-09-30 at 06.02.13.jpeg') },
  // Videos
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 05.57.51.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 05.58.44.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 05.59.42.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 06.00.41.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 06.00.41 (1).mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 06.00.44.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 06.00.46.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 06.00.57.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 06.01.22.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 06.08.22.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 06.23.28.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 06.23.28 (1).mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 06.45.39.mp4') },
  { type: 'video', url: galleryUrl('WhatsApp Video 2026-09-30 at 21.22.41.mp4') },
];
