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
    description: 'Preschool daycare and evening activity classes. A safe, nurturing home away from home. Days: Saturday and Sunday',
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

// Gallery media: images and videos (no duplicates)
export type GalleryMediaItem = { type: 'image'; url: string } | { type: 'video'; url: string };

export const GALLERY_MEDIA: GalleryMediaItem[] = [
  // Images
  { type: 'image', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-01-30%20at%2015.48.23%20(1).jpeg' },
  { type: 'image', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-01-30%20at%2015.48.23%20(2).jpeg' },
  { type: 'image', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-01-30%20at%2015.48.23.jpeg' },
  { type: 'image', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-01-30%20at%2015.48.24%20(1).jpeg' },
  { type: 'image', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-01-30%20at%2015.48.24.jpeg' },
  { type: 'image', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-01-30%20at%2015.48.24%20(2).jpeg' },
  { type: 'image', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-01-30%20at%2015.48.25%20(1).jpeg' },
  { type: 'image', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-01-30%20at%2015.48.25%20(2).jpeg' },
  { type: 'image', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-01-30%20at%2015.48.25.jpeg' },
  { type: 'image', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-01-30%20at%2022.25.24.jpeg' },
  // Videos
  { type: 'video', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Video%202026-01-30%20at%2015.48.21.mp4' },
  { type: 'video', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Video%202026-01-30%20at%2015.48.22%20(1).mp4' },
  { type: 'video', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Video%202026-01-30%20at%2015.48.22%20(2).mp4' },
  { type: 'video', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Video%202026-01-30%20at%2015.48.22.mp4' },
  { type: 'video', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Video%202026-01-30%20at%2015.48.26%20(3).mp4' },
  { type: 'video', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Video%202026-01-30%20at%2015.48.26.mp4' },
  { type: 'video', url: 'https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Video%202026-01-31%20at%2012.56.28.mp4' },
];
