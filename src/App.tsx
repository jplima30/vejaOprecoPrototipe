import React, { useState, useEffect, useRef } from 'react';
import {
  Activity,
  ArrowRight,
  Bell,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  ConciergeBell,
  CreditCard,
  Droplets,
  Headset,
  Heart,
  Home,
  Leaf,
  Lightbulb,
  LogOut,
  MapPin,
  MessageCircle,
  MessageSquare,
  Navigation,
  Pause,
  Play,
  Save,
  Search,
  Send,
  Settings,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Sun,
  Tag,
  ThumbsUp,
  Trash2,
  TrendingUp,
  TrendingDown,
  User,
  X,
  Check,
  ShoppingCart,
  Plus,
  Minus,
  Mail,
  Crown,
  BarChart2,
  Lock
} from 'lucide-react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Custom SVG Icons for categories to match the design closer
const CleaningIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 11L16 20C16 21 15 22 14 22L10 22C9 22 8 21 8 20L9 11" />
    <path d="M10 11V8" />
    <path d="M14 11V8" />
    <path d="M9 8H15V6H9V8Z" />
    <path d="M9 7H5L4 9" />
    <circle cx="18" cy="6" r="1" />
    <circle cx="21" cy="8" r="1.5" />
  </svg>
);

const MeatIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 6.5C15 5 11 5 8.5 6.5C5 8.5 4 13 6 16C8 19 13 20 16.5 18C19.5 16 21 11 17.5 6.5Z" />
    <path d="M14 10.5C14 11.3 13.3 12 12.5 12C11.7 12 11 11.3 11 10.5C11 9.7 11.7 9 12.5 9C13.3 9 14 9.7 14 10.5Z" />
    <path d="M9 14L12 17" />
  </svg>
);

const BroccoliIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Stalk */}
    <path d="M10 18 C10 15 9 13 8.5 11.5" />
    <path d="M14 18 C14 15 15 13 15.5 11.5" />
    <path d="M11.5 16 C11.5 14 10.5 13 9.5 11.5" />
    <path d="M12.5 16 C12.5 14 13.5 13 14.5 11.5" />
    
    {/* Florets Outline */}
    <path d="
      M 8.5 11.5
      C 6.5 12.5 4.5 11.5 4.5 10
      C 3 8.5 4 6.5 5.5 6.5
      C 6 5 8 5 9 6.5
      C 8.5 4.5 10 3.5 10.5 4.5
      C 11 3 13 3 13.5 4.5
      C 14 3.5 15.5 4.5 15 6.5
      C 16 5 18 5 18.5 6.5
      C 20 6.5 21 8.5 19.5 10
      C 19.5 11.5 17.5 12.5 15.5 11.5
    " />
    
    {/* Inner lines */}
    <path d="M 9 6.5 C 10 7.5 10 8.5 9 9.5" />
    <path d="M 15 6.5 C 14 7.5 14 8.5 15 9.5" />
    <path d="M 9.5 11.5 C 11 12.5 13 12.5 14.5 11.5" />
  </svg>
);

const BakeryIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 13.5C5.5 16.5 8 19 12 19C16 19 18.5 16.5 19.5 13.5C20.5 10.5 19 7 19 7C19 7 16 8 14 8C12 8 10 7 10 7C10 7 8 8 6 8C4 8 1 7 1 7C1 7 -0.5 10.5 4.5 13.5Z" />
    <path d="M8 10C8 12 9.5 14 12 14C14.5 14 16 12 16 10" />
  </svg>
);

const DrinkIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Glass */}
    <path d="M9 7 L9 12 C 9 15 10 16 10 18 L10 20 C 10 21 14 21 14 20 L14 18 C 14 16 15 15 15 12 L15 7" />
    <ellipse cx="12" cy="7" rx="3" ry="1" />
    <path d="M10 21 L14 21" />
    {/* Straw */}
    <path d="M13 14 L16 3" />
    {/* Lemon */}
    <path d="M9 8 C 6 8 6 4 9 4 C 10 4 10 6 9 8 Z" />
    {/* Liquid */}
    <path d="M9 12 C 11 13 13 11 15 12" />
  </svg>
);

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const AppleIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 384 512" fill="currentColor" className={className}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const GoogleIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 488 512" fill="currentColor" className={className}>
    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
  </svg>
);


const CATEGORIES = ['Limpeza', 'Carnes', 'Hortifruti', 'Padaria', 'Bebidas'] as const;
type Category = typeof CATEGORIES[number];

const getLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;

const SUPERMARKETS = [
  { id: 'assai', name: 'Assaí', promoStart: 13, promoEnd: 15, color: 'text-green-700', brandColor: '#e85d1a', brandTextColor: '#e85d1a', logo: getLogo('assai.com.br'), distance: 1.2, pos: { top: '40%', left: '35%' }, flyers: ['https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80'] },
  { id: 'lider', name: 'Líder', promoStart: 13, promoEnd: 19, color: 'text-red-600', brandColor: '#fc0000', brandTextColor: '#cc0000', logo: getLogo('supermercadoslider.com.br'), distance: 1.8, pos: { top: '35%', left: '60%' }, flyers: ['https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80'] },
  { id: 'atacadao', name: 'Atacadão', promoStart: 14, promoEnd: 16, color: 'text-green-700', brandColor: '#05851f', brandTextColor: '#dc910b', logo: getLogo('atacadao.com.br'), distance: 2.5, pos: { top: '65%', left: '45%' }, flyers: [] },
  { id: 'formosa', name: 'Formosa', promoStart: 15, promoEnd: 17, color: 'text-green-700', brandColor: '#030065', brandTextColor: '#0b27f3', logo: getLogo('formosanet.com.br'), distance: 3.1, pos: { top: '55%', left: '75%' }, flyers: ['https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80'] },
  { id: 'mateus', name: 'Mateus', promoStart: 13, promoEnd: 14, color: 'text-green-700', brandColor: '#040988', brandTextColor: '#ff0000', logo: getLogo('grupomateus.com.br'), distance: 4.2, pos: { top: '75%', left: '25%' }, flyers: ['https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80'] },
  { id: 'economico', name: 'Econômico', promoStart: 18, promoEnd: 19, color: 'text-gray-600', brandColor: '#f60505', brandTextColor: '#ff0000', brandNameColor: '#ffffff', logo: getLogo('economicoatacadao.com.br'), distance: 5.8, pos: { top: '20%', left: '80%' }, flyers: ['https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80'] },
  { id: 'precobaixo', name: 'Preço Baixo', promoStart: 16, promoEnd: 19, color: 'text-green-700', brandColor: '#0f0496', brandTextColor: '#0029ff', logo: getLogo('precobaixoatacarejo.com.br'), distance: 6.5, pos: { top: '85%', left: '65%' }, flyers: [] },
  { id: 'guerreirao', name: 'Guerreirão BR 316', promoStart: 14, promoEnd: 18, color: 'text-green-700', brandColor: '#0f3cd0', brandTextColor: '#1815d7', brandNameColor: '#fffd00', logo: getLogo('guerreirao.com.br'), distance: 8.4, pos: { top: '15%', left: '20%' }, flyers: ['https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80'] },
];

const PRODUCTS = [
  // Econômico
  { id: 'e1', name: 'Água Sanitária Econômica Branca 1L', price: 2.65, oldPrice: 3.50, image: 'https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?w=200&h=200&fit=crop', supermarketId: 'economico', category: 'Limpeza' },
  { id: 'e2', name: 'Desengordurante Veja 400ml', price: 10.79, oldPrice: 12.90, image: 'https://images.unsplash.com/photo-1585675100414-22cb7f52f3bb?w=200&h=200&fit=crop', supermarketId: 'economico', category: 'Limpeza' },
  { id: 'e3', name: 'Sabão em Pó Brilhante 400g', price: 4.89, oldPrice: 6.50, image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&h=200&fit=crop', supermarketId: 'economico', category: 'Limpeza' },
  
  // Guerreirão
  { id: 'g1', name: 'Sabão em Pó Ala 400g', price: 2.91, oldPrice: 4.50, image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&h=200&fit=crop', supermarketId: 'guerreirao', category: 'Limpeza' },
  { id: 'g2', name: 'Amaciante Downy Concentrado 500ml', price: 10.79, oldPrice: 14.90, image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&h=200&fit=crop', supermarketId: 'guerreirao', category: 'Limpeza' },
  { id: 'g3', name: 'Papel Higiênico Floral Tradicional 30m', price: 6.97, oldPrice: 8.90, image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=200&h=200&fit=crop', supermarketId: 'guerreirao', category: 'Limpeza' },

  // Líder
  { id: 'l1', name: 'Pizza Semipronta (kg)', price: 49.90, oldPrice: 59.90, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop', supermarketId: 'lider', category: 'Padaria' },
  
  // Mateus
  { id: 'm1', name: 'Batata Smaken Fries Congelada 2kg', price: 22.90, oldPrice: 28.90, image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=200&h=200&fit=crop', supermarketId: 'mateus', category: 'Carnes' },
  { id: 'm2', name: 'Salsicha Hot Dog Copacol 3kg', price: 18.87, oldPrice: 25.90, image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=200&h=200&fit=crop', supermarketId: 'mateus', category: 'Carnes' },
  { id: 'm3', name: 'Creme de Leite Italac 1,03kg', price: 13.99, oldPrice: 17.50, image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=200&h=200&fit=crop', supermarketId: 'mateus', category: 'Padaria' },
  { id: 'm4', name: 'Sabão em Pó Lume Maxx 4kg', price: 11.99, oldPrice: 15.90, image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&h=200&fit=crop', supermarketId: 'mateus', category: 'Limpeza' },
  { id: 'm5', name: 'Lava Roupas Dragão 3L', price: 18.99, oldPrice: 24.90, image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&h=200&fit=crop', supermarketId: 'mateus', category: 'Limpeza' },

  // Outros (Assaí, Atacadão, Formosa, Preço Baixo)
  { id: 'a1', name: 'Maçã Gala Nacional 1kg', price: 5.99, oldPrice: 7.99, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?w=200&h=200&fit=crop', supermarketId: 'assai', category: 'Hortifruti' },
  { id: 'a2', name: 'Picanha Bovina Friboi 1kg', price: 52.90, oldPrice: 65.90, image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=200&h=200&fit=crop', supermarketId: 'assai', category: 'Carnes' },
  { id: 'at1', name: 'Picanha Bovina Friboi 1kg', price: 49.90, oldPrice: 65.90, image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=200&h=200&fit=crop', supermarketId: 'atacadao', category: 'Carnes' },
  { id: 'f1', name: 'Banana Prata 1kg', price: 3.99, oldPrice: 4.99, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=200&h=200&fit=crop', supermarketId: 'formosa', category: 'Hortifruti' },
  { id: 'pb1', name: 'Sabão em Pó Omo 2kg', price: 22.90, oldPrice: 28.90, image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&h=200&fit=crop', supermarketId: 'precobaixo', category: 'Limpeza' },
  { id: 'b1', name: 'Coca-Cola 2L', price: 8.49, oldPrice: 10.50, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&h=200&fit=crop', supermarketId: 'mateus', category: 'Bebidas' },
  { id: 'b2', name: 'Coca-Cola 2L', price: 7.99, oldPrice: 10.50, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&h=200&fit=crop', supermarketId: 'atacadao', category: 'Bebidas' },
];

const WEEK_DAYS = [
  { day: 12, weekDay: 'DOM', isPast: true },
  { day: 13, weekDay: 'SEG', isPast: true },
  { day: 14, weekDay: 'TER', isPast: true },
  { day: 15, weekDay: 'QUA', isActive: true },
  { day: 16, weekDay: 'QUI', isFuture: true },
  { day: 17, weekDay: 'SEX', isFuture: true },
  { day: 18, weekDay: 'SÁB', isFuture: true },
  { day: 19, weekDay: 'DOM', isFuture: true },
];

const HARVEST_ITEMS = [
  { 
    icon: '🥑', name: 'Abacate na Safra', discount: '15%', benefit: 'Rico em Ômega 3 e gorduras boas',
    color: 'from-green-400 to-green-600',
    timeline: { start: 'Fevereiro', peak: 'Abril', end: 'Maio' },
    nutrients: [
      { icon: 'droplets', value: '80%', label: 'Gorduras Boas', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
      { icon: 'activity', value: '100%', label: 'Energia', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' }
    ]
  },
  { 
    icon: '🍋', name: 'Limão na Safra', discount: '20%', benefit: 'Alta Vitamina C e antioxidantes',
    color: 'from-emerald-400 to-teal-500',
    timeline: { start: 'Dezembro', peak: 'Abril', end: 'Julho' },
    nutrients: [
      { icon: 'sun', value: '100%', label: 'Vitamina C', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-100' },
      { icon: 'droplets', value: '90%', label: 'Antioxidantes', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' }
    ]
  },
  { 
    icon: '🍎', name: 'Maçã Gala na Safra', discount: '10%', benefit: 'Fibras, energia e saciedade',
    color: 'from-red-400 to-red-600',
    timeline: { start: 'Fevereiro', peak: 'Abril', end: 'Maio' },
    nutrients: [
      { icon: 'activity', value: '95%', label: 'Fibras', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' },
      { icon: 'sun', value: '70%', label: 'Vitaminas B', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' }
    ]
  }
];

const CATEGORY_ICONS = {
  Limpeza: CleaningIcon,
  Carnes: MeatIcon,
  Hortifruti: BroccoliIcon,
  Padaria: BakeryIcon,
  Bebidas: DrinkIcon,
};

const INITIAL_FEEDBACKS = [
  {
    id: 'f1',
    author: 'Maria Oliveira',
    avatar: 'https://i.pravatar.cc/150?img=5',
    content: 'Seria ótimo se o app tivesse uma opção de ler o código de barras dos produtos no mercado!',
    date: 'Há 2 dias',
    likes: 45,
    useful: 128,
    developerReply: {
      text: 'Olá Maria! Excelente ideia. Já estamos testando essa funcionalidade internamente e deve sair na próxima atualização. Obrigado pelo feedback!',
      date: 'Há 1 dia'
    }
  },
  {
    id: 'f2',
    author: 'Carlos Santos',
    avatar: 'https://i.pravatar.cc/150?img=11',
    content: 'Queria poder compartilhar a lista com a minha esposa e editarmos juntos em tempo real.',
    date: 'Há 1 semana',
    likes: 32,
    useful: 89
  }
];

const SAVED_LISTS = [
  {
    id: 'L1',
    name: 'Compras do Mês',
    date: '10/04/2026',
    itemsCount: 24,
    estimatedTotal: 345.90,
  },
  {
    id: 'L2',
    name: 'Churrasco Família',
    date: '12/04/2026',
    itemsCount: 8,
    estimatedTotal: 189.50,
  },
  {
    id: 'L3',
    name: 'Essenciais de Limpeza',
    date: '14/04/2026',
    itemsCount: 5,
    estimatedTotal: 85.30,
  }
];

const INITIAL_NOTIFICATIONS = [
  {
    id: 'n1',
    title: 'Resposta do Desenvolvedor',
    message: 'O desenvolvedor respondeu à sua sugestão sobre o leitor de código de barras.',
    date: 'Há 1 dia',
    read: false,
    type: 'reply'
  }
];

const PRICE_HISTORY_DATA = [
  { month: 'Nov', total: 310 },
  { month: 'Dez', total: 315 },
  { month: 'Jan', total: 325 },
  { month: 'Fev', total: 345 },
  { month: 'Mar', total: 340 },
  { month: 'Abr', total: 355 },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('Limpeza');
  const [activeSupermarkets, setActiveSupermarkets] = useState<string[]>([]);
  const [activeDay, setActiveDay] = useState(15);
  const [harvestIndex, setHarvestIndex] = useState(0);
  const [showHarvestDetails, setShowHarvestDetails] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [selectedFlyerMarket, setSelectedFlyerMarket] = useState<string | null>(null);

  // Shopping Cart & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ product: typeof PRODUCTS[0], quantity: number, checked?: boolean }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSuggestionsModalOpen, setIsSuggestionsModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMyListsOpen, setIsMyListsOpen] = useState(false);
  const [isPriceHistoryOpen, setIsPriceHistoryOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState(INITIAL_FEEDBACKS);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [newFeedback, setNewFeedback] = useState('');

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleSubmitFeedback = () => {
    if (!newFeedback.trim()) return;
    const newPost = {
      id: Date.now().toString(),
      author: 'João Silva', // Mocked user
      avatar: 'https://i.pravatar.cc/150?img=11',
      content: newFeedback,
      date: 'Agora',
      likes: 0,
      useful: 0
    };
    setFeedbacks([newPost, ...feedbacks]);
    setNewFeedback('');
  };

  const addToCart = (product: typeof PRODUCTS[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1, checked: false }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  const toggleCheck = (productId: string) => {
    setCart(prev => prev.map(item => 
      item.product.id === productId ? { ...item, checked: !item.checked } : item
    ));
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleShareWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `🛒 *Minha Lista de Compras - Veja o Preço* 🛒\n\n`;

    const groupedCart = cart.reduce((acc, item) => {
      const marketId = item.product.supermarketId;
      if (!acc[marketId]) acc[marketId] = [];
      acc[marketId].push(item);
      return acc;
    }, {} as Record<string, typeof cart>);

    let grandTotal = 0;
    let grandSavings = 0;

    Object.entries(groupedCart).forEach(([marketId, items]) => {
      const market = SUPERMARKETS.find(s => s.id === marketId);
      if (!market) return;

      message += `🏪 *${market.name}*\n`;
      
      let subtotal = 0;
      items.forEach(({ product, quantity }) => {
        const itemTotal = product.price * quantity;
        const itemSavings = (product.oldPrice - product.price) * quantity;
        subtotal += itemTotal;
        grandSavings += itemSavings;
        
        message += `- ${quantity}x ${product.name} (R$ ${product.price.toFixed(2).replace('.', ',')}/un) = R$ ${itemTotal.toFixed(2).replace('.', ',')}\n`;
      });
      
      grandTotal += subtotal;
      message += `_Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}_\n\n`;
    });

    message += `------------------------\n`;
    message += `💰 *Total Estimado:* R$ ${grandTotal.toFixed(2).replace('.', ',')}\n`;
    if (grandSavings > 0) {
      message += `✨ *Economia:* R$ ${grandSavings.toFixed(2).replace('.', ',')}\n`;
    }
    message += `\nGerado pelo app *Veja o Preço*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Continuous smooth auto-scroll for the timeline
  useEffect(() => {
    if (!isAutoScrolling) return;

    let animationFrameId: number;
    let direction = 1; // 1 for right, -1 for left
    const speed = 0.4; // Pixels per frame

    const scroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

        // Check boundaries and reverse direction if needed
        if (scrollLeft >= scrollWidth - clientWidth - 1) {
          direction = -1;
        } else if (scrollLeft <= 0) {
          direction = 1;
        }

        scrollContainerRef.current.scrollLeft += speed * direction;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start scrolling after a short delay
    const startDelay = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 1000);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrolling]);

  useEffect(() => {
    if (activeCategory !== 'Hortifruti') return;
    if (isPaused) return;

    const UPDATE_INTERVAL = 50;
    const SLIDE_DURATION = 8000; // 8 seconds per slide

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setHarvestIndex((idx) => (idx + 1) % HARVEST_ITEMS.length);
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / UPDATE_INTERVAL));
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, [activeCategory, isPaused]);

  const handleNextHarvest = () => {
    setHarvestIndex((idx) => (idx + 1) % HARVEST_ITEMS.length);
    setProgress(0);
  };

  const handlePrevHarvest = () => {
    setHarvestIndex((idx) => (idx - 1 + HARVEST_ITEMS.length) % HARVEST_ITEMS.length);
    setProgress(0);
  };

  const activeDateIndex = WEEK_DAYS.findIndex(d => d.day === activeDay);
  const activeDateObj = WEEK_DAYS[activeDateIndex] || WEEK_DAYS[3];

  const handlePrevDay = () => {
    if (activeDateIndex > 0) {
      setActiveDay(WEEK_DAYS[activeDateIndex - 1].day);
    }
  };

  const handleNextDay = () => {
    if (activeDateIndex < WEEK_DAYS.length - 1) {
      setActiveDay(WEEK_DAYS[activeDateIndex + 1].day);
    }
  };

  const currentCategoryProducts = PRODUCTS.filter(p => 
    p.category === activeCategory && 
    (activeSupermarkets.length === 0 || activeSupermarkets.includes(p.supermarketId)) &&
    (searchQuery === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleSupermarket = (id: string) => {
    setActiveSupermarkets(prev => 
      prev.includes(id) ? prev.filter(sId => sId !== id) : [...prev, id]
    );
  };
  
  const startIndex = Math.min(activeDateIndex, Math.max(0, WEEK_DAYS.length - 5));
  const visibleDays = WEEK_DAYS.slice(startIndex, startIndex + 5);
  const featuredSupermarketId = currentCategoryProducts.length > 0 ? currentCategoryProducts[0].supermarketId : 'assai';
  const featuredSupermarket = SUPERMARKETS.find(s => s.id === featuredSupermarketId) || SUPERMARKETS[0];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-8">
      {/* Mobile Device Frame */}
      <div className="w-full max-w-[400px] h-[850px] bg-[#FAD25A] rounded-[3rem] shadow-2xl overflow-hidden relative font-sans flex flex-col">
        
        {/* Header Section (Yellow) */}
        <div className="px-6 pt-12 pb-6 flex flex-col gap-4">
          {/* Top Row: Logo & Notifications */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-[#E85D1A] text-white p-1.5 rounded-xl shadow-sm transform -rotate-6">
                <Tag size={20} strokeWidth={2.5} />
              </div>
              <h1 className="font-black text-2xl tracking-tighter text-[#1C1C1E]">
                veja<span className="text-[#E85D1A]">o</span>preço
              </h1>
            </div>
            {/* Notifications */}
            <button 
              onClick={() => setIsNotificationsOpen(true)}
              className="relative w-10 h-10 bg-white/50 rounded-full flex items-center justify-center text-[#E85D1A] shadow-sm transition-transform active:scale-95"
            >
              <Bell size={20} strokeWidth={1.5} />
              {unreadCount > 0 && (
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              )}
            </button>
          </div>

          {/* Bottom Row: Search, Profile & Cart */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <form 
              className="flex-1 bg-white rounded-full h-12 flex items-center px-4 justify-between shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                (document.activeElement as HTMLElement)?.blur();
              }}
            >
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="text-[#1C1C1E] text-sm w-full bg-transparent outline-none pr-3 placeholder-gray-400 font-medium" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="bg-[#E85D1A] w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 cursor-pointer hover:bg-orange-600 transition-colors">
                <Search size={16} strokeWidth={2} />
              </button>
            </form>
            
            {/* User Profile */}
            <button 
              onClick={() => setIsProfileOpen(true)}
              className="relative w-12 h-12 rounded-full flex items-center justify-center text-[#E85D1A] shadow-sm shrink-0 transition-transform active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-[#FAD25A] to-yellow-600 rounded-full p-[2px]">
                <div className="w-full h-full bg-white rounded-full overflow-hidden border border-white">
                   <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-yellow-500 to-yellow-700 p-1 rounded-full shadow-md border border-white">
                <Crown size={10} className="text-white" fill="currentColor" />
              </div>
            </button>

            {/* Shopping List */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E85D1A] shadow-sm shrink-0 relative transition-transform active:scale-95"
            >
              <ClipboardList size={22} strokeWidth={1.5} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAD25A]">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Categories Section (Orange) */}
        <div className="bg-[#E85D1A] rounded-t-[2.5rem] pt-8 pb-8 px-2 relative z-10">
          <div className="flex justify-between items-end px-4">
            
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const Icon = CATEGORY_ICONS[cat];

              if (isActive) {
                return (
                  <div key={cat} className="flex flex-col items-center relative z-20 cursor-pointer w-[80px]" onClick={() => setActiveCategory(cat)}>
                    <div className="bg-[#F8F9FA] rounded-t-full w-[80px] pt-2 pb-4 flex flex-col items-center transition-all duration-300 relative">
                      {/* Left curve */}
                      <svg className="absolute bottom-0 -left-6 w-6 h-6 text-[#F8F9FA]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 24H24V0C24 13.2548 13.2548 24 0 24Z" />
                      </svg>
                      {/* Right curve */}
                      <svg className="absolute bottom-0 -right-6 w-6 h-6 text-[#F8F9FA]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 24H0V0C0 13.2548 10.7452 24 24 24Z" />
                      </svg>
                      
                      <div className="w-[60px] h-[72px] rounded-[2rem] bg-[#FAD25A] flex items-center justify-center text-[#E85D1A] relative z-10">
                        <Icon />
                      </div>
                      <span className="text-sm font-medium text-[#3A2A22] mt-2 relative z-10">{cat}</span>
                    </div>
                  </div>
                );
              }

              return (
                <div key={cat} className="flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 w-[60px] pb-4" onClick={() => setActiveCategory(cat)}>
                  <div className="w-[60px] h-[72px] rounded-[2rem] bg-[#FCE4A1] flex items-center justify-center text-[#E85D1A]">
                    <Icon />
                  </div>
                  <span className="text-sm font-medium text-[#3A2A22]">{cat}</span>
                </div>
              );
            })}

          </div>
        </div>

        {/* Main Content Area (iOS Grouped Background & Bottom Safe Area) */}
        <div className="bg-[#F2F2F7] flex-1 -mt-8 relative z-10 pt-10 px-6 pb-36 overflow-y-auto no-scrollbar">
          
          {/* Date Selector */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Timeline Date Selector (Image Style) */}
            <div className="w-full bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100 relative mb-4">
              {/* Header */}
              <div className="flex justify-between items-center mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <button onClick={handlePrevDay} disabled={activeDateIndex === 0} className="text-[#2B5CE6] hover:text-blue-700 disabled:opacity-30 p-1 bg-blue-50 rounded-full transition-colors">
                      <ChevronLeft size={16} />
                    </button>
                    <button onClick={handleNextDay} disabled={activeDateIndex === WEEK_DAYS.length - 1} className="text-[#2B5CE6] hover:text-blue-700 disabled:opacity-30 p-1 bg-blue-50 rounded-full transition-colors">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                  <span className="text-[#2B5CE6] font-semibold text-sm">Oferta Abril</span>
                </div>
                <span className="text-[#2B5CE6] text-sm font-medium bg-white pl-2">
                  {activeDateObj.day} {activeDateObj.weekDay} - Hoje
                </span>
              </div>

              {/* Timeline Body */}
              <div className="relative flex mt-2 h-[240px] overflow-hidden">
                {/* Dotted Lines Background */}
                <div className="absolute inset-0 flex flex-col z-0 left-14">
                  {visibleDays.map((_, i) => (
                    <div key={`line-${i}`} className="w-full h-[48px] flex items-center">
                      <div className="border-t border-dashed border-[#2B5CE6]/30 w-full"></div>
                    </div>
                  ))}
                </div>

                {/* Left Axis (Days) */}
                <div className="flex flex-col text-[#2B5CE6] font-medium text-xs bg-white z-10 w-14">
                  {visibleDays.map(d => (
                    <div key={d.day} className="h-[48px] flex items-center">
                      <span className={`bg-white pr-2 transition-all cursor-pointer hover:font-bold ${d.day === activeDay ? 'font-bold scale-110 origin-left text-sm' : 'opacity-70'}`} onClick={() => setActiveDay(d.day)}>
                        {d.day} {d.weekDay}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Content (The Event Blocks) */}
                <div 
                  ref={scrollContainerRef}
                  className="flex-1 relative z-10 pl-2 overflow-x-auto no-scrollbar"
                  onMouseEnter={() => setIsAutoScrolling(false)}
                  onMouseLeave={() => setIsAutoScrolling(true)}
                  onTouchStart={() => setIsAutoScrolling(false)}
                  onTouchEnd={() => setIsAutoScrolling(true)}
                >
                  <div className="relative h-full" style={{ minWidth: '100%', width: `${SUPERMARKETS.length * 66}px` }}>
                    {SUPERMARKETS.map((supermarket, index) => {
                      const startOffset = supermarket.promoStart - visibleDays[0].day;
                      const duration = supermarket.promoEnd - supermarket.promoStart + 1;
                      
                      // Only render if it overlaps with visible days
                      if (startOffset + duration <= 0 || startOffset >= visibleDays.length) return null;

                      const top = Math.max(0, startOffset * 48);
                      const height = duration * 48 - (startOffset < 0 ? Math.abs(startOffset) * 48 : 0);
                      const textColor = supermarket.id === 'mateus' ? 'text-gray-900' : 'text-white';

                      return (
                        <div 
                          key={supermarket.id} 
                          className={`absolute w-[58px] rounded-xl p-1 border-2 border-white shadow-sm flex flex-col items-center justify-center gap-0.5 transition-all duration-300 cursor-pointer hover:brightness-110 overflow-hidden`}
                          style={{ 
                            top: `${top + 4}px`, 
                            height: `${height - 8}px`,
                            left: `${index * 66}px`,
                            backgroundColor: supermarket.brandColor,
                            color: 'white',
                            opacity: activeSupermarkets.length === 0 || activeSupermarkets.includes(supermarket.id) ? 1 : 0.4
                          }}
                          onClick={() => toggleSupermarket(supermarket.id)}
                        >
                          <img src={supermarket.logo} alt={supermarket.name} className="w-5 h-5 rounded-full object-cover bg-white shadow-sm flex-shrink-0 mb-0.5" referrerPolicy="no-referrer" />
                          <span className={`text-[8px] font-bold leading-[1.1] text-center w-full whitespace-normal break-words ${textColor}`}>
                            {supermarket.name}
                          </span>
                          <span className={`text-[7px] font-medium leading-none opacity-90 text-center mt-0.5 ${textColor}`}>
                            {supermarket.promoStart}-{supermarket.promoEnd}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Harvest Info (Only for Hortifruti) */}
            {activeCategory === 'Hortifruti' && (
              <div 
                className="mb-5 relative h-14 rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-green-200 group bg-white"
                onClick={() => {
                  setShowHarvestDetails(true);
                  setProgress(0);
                  setIsPaused(false);
                }}
              >
                {HARVEST_ITEMS.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 flex items-center bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] px-1.5 transition-all duration-500 ease-in-out ${
                      idx === harvestIndex 
                        ? 'opacity-100 translate-y-0 z-10' 
                        : idx < harvestIndex 
                          ? 'opacity-0 -translate-y-full z-0' 
                          : 'opacity-0 translate-y-full z-0'
                    }`}
                  >
                    <div className="bg-white rounded-xl w-11 h-11 flex items-center justify-center shadow-sm mr-3 text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex flex-col overflow-hidden flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-green-900 font-bold text-xs leading-none truncate">{item.name}</span>
                        <span className="bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md leading-none flex items-center flex-shrink-0 shadow-sm">
                          <TrendingDown size={10} className="mr-0.5"/>{item.discount}
                        </span>
                      </div>
                      <span className="text-green-700 text-[10px] font-medium leading-none truncate">{item.benefit}</span>
                    </div>
                    <div className="bg-white/60 group-hover:bg-white rounded-full w-8 h-8 mr-1 flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-sm text-green-800 group-hover:scale-110">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Vitrine Showcase Section */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#1C1C1E] text-lg font-semibold tracking-tight">
                Vitrine: {activeCategory}
                {activeSupermarkets.length > 0 && (
                  <span className="text-[#E85D1A] ml-2 text-sm font-bold">
                    ({activeSupermarkets.length === 1 
                      ? SUPERMARKETS.find(s => s.id === activeSupermarkets[0])?.name 
                      : `${activeSupermarkets.length} lojas`})
                  </span>
                )}
              </h2>
              <span 
                className="text-[#E85D1A] text-xs font-semibold cursor-pointer hover:underline"
                onClick={() => setActiveSupermarkets([])}
              >
                {activeSupermarkets.length > 0 ? 'Limpar Filtro' : 'Ver todas'}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {currentCategoryProducts.map((product, idx) => {
                const market = SUPERMARKETS.find(m => m.id === product.supermarketId);
                
                return (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'both' }}
                  >
                    {/* Brand Color Accent Line (Shows on Hover) */}
                    <div 
                      className="absolute bottom-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                      style={{ backgroundColor: market?.brandColor || '#E85D1A' }}
                    />

                    {/* Stylish Supermarket Badge */}
                    <div 
                      className={`absolute top-2 left-2 z-10 flex items-center gap-1.5 px-2 py-1 rounded-full shadow-sm border ${!(market as any)?.brandTextColor && 'bg-white/95 backdrop-blur-md border-gray-100/80'}`}
                      style={{
                        backgroundColor: (market as any)?.brandTextColor ? market?.brandColor : undefined,
                        borderColor: (market as any)?.brandTextColor ? market?.brandColor : undefined
                      }}
                    >
                      <div className={`w-5 h-5 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center ${(market as any)?.brandTextColor ? 'bg-[#f9f9f9] shadow-inner' : 'bg-white'}`}>
                        {(market as any)?.brandTextColor ? (
                          <span className="text-[9px] font-black tracking-tighter" style={{ color: (market as any).brandTextColor, borderRadius: (market as any)?.brandNameColor ? '0px' : undefined }}>
                            {market?.name.split(' ').length > 1 ? (market.name.split(' ')[0][0] + market.name.split(' ')[1][0]).toUpperCase() : market?.name.substring(0, 2).toUpperCase()}
                          </span>
                        ) : (
                          <img 
                            src={market?.logo} 
                            alt={market?.name} 
                            className="w-full h-full object-contain"
                            onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${market?.name}&background=${market?.brandColor?.replace('#','') || '000'}&color=fff&bold=true`; }}
                          />
                        )}
                      </div>
                      <span className="text-[9px] font-bold tracking-tight" style={{ color: (market as any)?.brandNameColor || ((market as any)?.brandTextColor ? '#f3f3f3' : (market?.brandColor || '#1C1C1E')) }}>
                        {market?.name}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex flex-col flex-1 justify-between">
                      <h3 className="font-semibold text-[#1C1C1E] text-xs leading-tight mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-end justify-between">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-400 line-through">
                            R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs font-bold text-[#E85D1A]">R$</span>
                            <span className="text-lg font-black text-[#E85D1A] leading-none">
                              {product.price.toFixed(2).replace('.', ',')}
                            </span>
                          </div>
                        </div>
                        {(() => {
                          const cartItem = cart.find(item => item.product.id === product.id);
                          if (cartItem) {
                            return (
                              <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 h-8">
                                <button onClick={(e) => { e.stopPropagation(); cartItem.quantity === 1 ? removeFromCart(product.id) : updateQuantity(product.id, -1); }} className="w-7 h-full flex items-center justify-center text-gray-500 hover:text-[#E85D1A] active:scale-90 transition-transform">
                                  <Minus size={12} strokeWidth={3} />
                                </button>
                                <span className="text-xs font-bold w-3 text-center">{cartItem.quantity}</span>
                                <button onClick={(e) => { e.stopPropagation(); updateQuantity(product.id, 1); }} className="w-7 h-full flex items-center justify-center text-gray-500 hover:text-[#E85D1A] active:scale-90 transition-transform">
                                  <Plus size={12} strokeWidth={3} />
                                </button>
                              </div>
                            );
                          }
                          return (
                            <button 
                              onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                              className="w-8 h-8 rounded-full bg-[#E85D1A] text-white flex items-center justify-center shadow-sm hover:bg-[#d05015] transition-colors active:scale-90"
                            >
                              <Plus size={16} strokeWidth={3} />
                            </button>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {currentCategoryProducts.length === 0 && (
                <div className="col-span-2 text-sm text-gray-500 italic py-8 text-center bg-white rounded-2xl border border-gray-100">
                  Nenhuma oferta encontrada para esta categoria hoje.
                </div>
              )}
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#FCE4A1] p-1.5 rounded-full text-[#E85D1A]">
                <Navigation size={16} />
              </div>
              <h3 className="text-[#1C1C1E] font-semibold text-sm tracking-tight">Lojas mais próximas de sua localidade</h3>
            </div>
            
            <div className="relative w-full h-[220px] bg-[#E5E7EB] rounded-2xl overflow-hidden shadow-inner border border-gray-200">
              {/* Fake Map Background Pattern */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#9CA3AF 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
              
              {/* User Location Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-50"></div>
                </div>
              </div>

              {/* Supermarket Pins */}
              {SUPERMARKETS.map(market => {
                const isClosest = market.distance <= 3;
                const isActive = activeSupermarkets.includes(market.id);
                
                return (
                  <div 
                    key={`pin-${market.id}`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${isActive ? 'z-30 scale-125' : isClosest ? 'z-20 scale-110' : 'z-0 scale-90 opacity-80 hover:opacity-100'}`}
                    style={{ top: market.pos.top, left: market.pos.left }}
                    onClick={() => toggleSupermarket(market.id)}
                  >
                    <div className="relative flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full overflow-hidden border-2 shadow-md bg-white ${isActive ? 'border-[#E85D1A]' : isClosest ? 'border-[#FAD25A]' : 'border-white'}`}>
                        <img src={market.logo} alt={market.name} className="w-full h-full object-contain p-0.5" />
                      </div>
                      {/* Pin triangle */}
                      <div className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] -mt-1 ${isActive ? 'border-t-[#E85D1A]' : isClosest ? 'border-t-[#FAD25A]' : 'border-t-white'}`}></div>
                      
                      {/* Distance Badge for Closest */}
                      {isClosest && !isActive && (
                        <div className="absolute -bottom-4 bg-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm text-gray-600 border border-gray-100 whitespace-nowrap">
                          {market.distance} km
                        </div>
                      )}
                      {isActive && (
                        <div className="absolute -bottom-4 bg-[#E85D1A] text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm text-white whitespace-nowrap">
                          {market.distance} km
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#1C1C1E] text-xl font-semibold tracking-tight">Lojas e encartes disponíveis</h2>
            <div className="bg-[#E85D1A] w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm">
              <SlidersHorizontal size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* 2-Column Grid of Supermarkets */}
          <div className="grid grid-cols-2 gap-3">
            {SUPERMARKETS.map((market, index) => {
              const isActive = activeSupermarkets.includes(market.id);
              const hasFlyer = market.flyers && market.flyers.length > 0;
              
              return (
                <div 
                  key={market.id} 
                  onClick={() => setSelectedFlyerMarket(market.id)}
                  className={`${isActive ? 'bg-[#FAD25A] border-[#FAD25A] shadow-md' : 'bg-white border-gray-100 shadow-sm hover:border-gray-200'} rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 border animate-in fade-in slide-in-from-bottom-4`}
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                >
                  <div className={`w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-sm border ${isActive ? 'border-white/60' : 'border-gray-200'}`}>
                    <img 
                      src={market.logo} 
                      alt={market.name} 
                      className="w-full h-full object-contain p-1.5"
                      onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${market.name}&background=random&color=3A2A22&bold=true`; }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#1C1C1E] font-semibold text-sm leading-tight">{market.name}</span>
                    <div className={`flex items-center gap-1 mt-1 text-[10px] font-medium ${isActive ? 'text-[#E85D1A]' : 'text-gray-500'}`}>
                      <MapPin size={10} />
                      {market.distance} km
                    </div>
                    {hasFlyer ? (
                      <span className="text-[9px] text-green-600 font-bold mt-1 leading-tight">
                        Ofertas: {market.promoStart} a {market.promoEnd} de Abril
                      </span>
                    ) : (
                      <span className="text-[9px] text-gray-400 italic mt-1 leading-tight">
                        Sem encarte
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation (iOS Safe Area) */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#E85D1A] rounded-t-[2.5rem] pt-4 pb-8 px-8 flex justify-between items-center text-white z-20 shadow-[0_-10px_30px_rgba(232,93,26,0.2)]">
          <button className="flex flex-col items-center justify-center w-12 h-12 rounded-full border-2 border-white/20">
            <Home size={24} strokeWidth={2} />
          </button>
          <button 
            onClick={() => {
              setActiveCategory('Hortifruti');
              setShowHarvestDetails(true);
              setProgress(0);
              setIsPaused(false);
            }}
            className="flex flex-col items-center justify-center w-12 h-12 text-white/80 hover:text-white transition-colors"
          >
            <Leaf size={24} strokeWidth={2} />
          </button>
          <button className="flex flex-col items-center justify-center w-12 h-12 text-white/80 hover:text-white transition-colors">
            <Heart size={24} strokeWidth={2} />
          </button>
          <button className="flex flex-col items-center justify-center w-12 h-12 text-white/80 hover:text-white transition-colors">
            <ClipboardList size={24} strokeWidth={2} />
          </button>
          <button className="flex flex-col items-center justify-center w-12 h-12 text-white/80 hover:text-white transition-colors">
            <Headset size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Harvest Details Modal (iOS Sheet Style) */}
        {showHarvestDetails && (
          <>
            {/* Backdrop */}
            <div 
              className="absolute inset-0 z-40 bg-black/40 animate-in fade-in duration-300" 
              onClick={() => setShowHarvestDetails(false)} 
            />
            
            <div className="absolute inset-x-0 bottom-0 top-12 z-50 bg-[#F2F2F7] overflow-y-auto animate-in slide-in-from-bottom-full duration-300 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col no-scrollbar">
              {/* Header */}
              <div className="sticky top-0 bg-[#F2F2F7]/90 backdrop-blur-xl z-30 px-4 pt-3 pb-2 border-b border-gray-200/50">
                <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-3"></div>
                
                {/* Story Progress Bars */}
                <div className="flex gap-1.5 mb-3 px-2">
                  {HARVEST_ITEMS.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex-1 flex flex-col gap-1 cursor-pointer"
                      onClick={() => {
                        setHarvestIndex(idx);
                        setProgress(0);
                      }}
                    >
                      <div className="h-1.5 w-full bg-gray-300/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#E85D1A] transition-all duration-75 ease-linear"
                          style={{ 
                            width: idx === harvestIndex ? `${progress}%` : idx < harvestIndex ? '100%' : '0%' 
                          }}
                        />
                      </div>
                      <span className={`text-[9px] font-semibold text-center truncate ${idx === harvestIndex ? 'text-[#1C1C1E]' : 'text-[#3C3C43]'}`}>
                        {item.name.replace(' na Safra', '')}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between px-2">
                  <button 
                    onClick={() => setIsPaused(!isPaused)} 
                    className="w-10 h-10 flex items-center justify-center rounded-full text-[#1C1C1E] hover:bg-gray-200/50 transition-colors"
                  >
                    {isPaused ? <Play size={20} fill="currentColor" /> : <Pause size={20} fill="currentColor" />}
                  </button>
                  <h2 className="font-semibold text-[#1C1C1E] text-base">Inteligência de Safra</h2>
                  <button 
                    onClick={() => setShowHarvestDetails(false)} 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200/80 text-[#1C1C1E] hover:bg-gray-300 transition-colors"
                  >
                    <X size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 pb-12 flex-1">
                 {/* Hero */}
                 <div 
                    className={`bg-gradient-to-br ${HARVEST_ITEMS[harvestIndex].color} rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden mb-8`}
                    onPointerDown={() => setIsPaused(true)}
                    onPointerUp={() => setIsPaused(false)}
                    onPointerLeave={() => setIsPaused(false)}
                 >
                   {/* Invisible tap areas for navigation */}
                   <div className="absolute inset-y-0 left-0 w-1/3 z-20 cursor-pointer" onClick={(e) => { e.stopPropagation(); handlePrevHarvest(); }} />
                   <div className="absolute inset-y-0 right-0 w-1/3 z-20 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleNextHarvest(); }} />
                   
                   <Leaf className="absolute -right-6 -bottom-6 w-32 h-32 text-white opacity-20 rotate-12" />
                   <div className="text-6xl mb-4 relative z-10 drop-shadow-md">{HARVEST_ITEMS[harvestIndex].icon}</div>
                   <h1 className="text-2xl font-black mb-1 relative z-10 leading-tight">{HARVEST_ITEMS[harvestIndex].name}</h1>
                   <p className="text-white/90 text-sm relative z-10 font-medium">{HARVEST_ITEMS[harvestIndex].benefit}</p>
                   
                   <div className="mt-6 inline-flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border border-white/30 shadow-sm relative z-10">
                      <TrendingDown size={14} />
                      Economia média de {HARVEST_ITEMS[harvestIndex].discount}
                   </div>
                 </div>

                 {/* Timeline */}
                 <h3 className="font-semibold text-[#1C1C1E] text-lg mb-5 flex items-center gap-2">
                   <div className="bg-[#FCE4A1] p-1.5 rounded-lg text-[#E85D1A]"><Calendar size={18}/></div>
                   Linha do Tempo
                 </h3>
                 <div className="relative border-l-2 border-green-200 ml-4 mb-8 space-y-6">
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green-200 rounded-full border-2 border-white"></div>
                      <h4 className="font-semibold text-sm text-gray-500">Início ({HARVEST_ITEMS[harvestIndex].timeline.start})</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Frutos começam a amadurecer. Preços normais.</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute -left-[11px] top-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
                      <h4 className="font-bold text-base text-green-600">Pico da Safra (AGORA)</h4>
                      <p className="text-xs text-gray-600 font-medium mt-1 leading-relaxed">Máxima qualidade nutricional e maior oferta no mercado. Queda drástica nos preços!</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-gray-200 rounded-full border-2 border-white"></div>
                      <h4 className="font-semibold text-sm text-gray-500">Fim ({HARVEST_ITEMS[harvestIndex].timeline.end})</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Oferta diminui, preços voltam a subir.</p>
                    </div>
                 </div>

                 {/* Nutrients */}
                 <h3 className="font-semibold text-[#1C1C1E] text-lg mb-4 flex items-center gap-2">
                   <div className="bg-[#FCE4A1] p-1.5 rounded-lg text-[#E85D1A]"><Activity size={18}/></div>
                   Raio-X Nutricional
                 </h3>
                 <div className="grid grid-cols-2 gap-3 mb-8">
                   {HARVEST_ITEMS[harvestIndex].nutrients.map((nut, i) => (
                     <div key={i} className={`${nut.bg} rounded-2xl p-4 border ${nut.border} shadow-sm`}>
                       <div className={`${nut.color} mb-2`}>
                         {nut.icon === 'droplets' && <Droplets size={24} />}
                         {nut.icon === 'activity' && <Activity size={24} />}
                         {nut.icon === 'sun' && <Sun size={24} />}
                       </div>
                       <div className={`text-2xl font-black ${nut.color} mb-1`}>{nut.value}</div>
                       <div className={`text-xs ${nut.color} font-bold opacity-80`}>{nut.label}</div>
                     </div>
                   ))}
                 </div>

                 {/* Cost Benefit */}
                 <div className="bg-gradient-to-br from-[#FCE4A1]/40 to-[#FAD25A]/20 rounded-2xl p-5 border border-[#FAD25A]/50 shadow-sm">
                   <h3 className="font-semibold text-[#1C1C1E] text-base mb-2 flex items-center gap-2">
                     <TrendingDown className="text-[#E85D1A]" size={20}/> 
                     Por que está mais barato?
                   </h3>
                   <p className="text-sm text-[#3C3C43] leading-relaxed font-medium">
                     Durante a safra, o clima ideal faz com que a produção seja abundante. Com mais frutas disponíveis no mercado, o custo de transporte e armazenamento cai, e essa economia é repassada diretamente para você. <strong className="text-[#E85D1A]">É a natureza subsidiando sua saúde!</strong>
                   </p>
                 </div>
              </div>
            </div>
          </>
        )}

        {/* Flyer Modal */}
        {selectedFlyerMarket && (
          <>
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-200" onClick={() => setSelectedFlyerMarket(null)} />
            <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[400px] md:h-[80vh] bg-white rounded-3xl z-50 flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              
              {/* Header */}
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 overflow-hidden flex items-center justify-center p-1 shadow-sm">
                    <img 
                      src={SUPERMARKETS.find(s => s.id === selectedFlyerMarket)?.logo} 
                      alt="" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1E] leading-tight">
                      {SUPERMARKETS.find(s => s.id === selectedFlyerMarket)?.name}
                    </h3>
                    <p className="text-xs text-gray-500">Encartes e Ofertas</p>
                  </div>
                </div>
                <button onClick={() => setSelectedFlyerMarket(null)} className="p-2 bg-white rounded-full text-gray-500 hover:bg-gray-100 transition-colors shadow-sm border border-gray-200">
                  <X size={20} />
                </button>
              </div>
              
              {/* Body */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
                {(() => {
                  const market = SUPERMARKETS.find(s => s.id === selectedFlyerMarket);
                  if (market?.flyers && market.flyers.length > 0) {
                    return (
                      <div className="flex flex-col gap-4">
                        {market.flyers.map((flyer, idx) => (
                          <img 
                            key={idx} 
                            src={flyer} 
                            alt={`Encarte ${market.name} ${idx + 1}`} 
                            className="w-full rounded-xl shadow-sm border border-gray-200 object-cover" 
                          />
                        ))}
                      </div>
                    );
                  } else {
                    return (
                      <div className="flex flex-col items-center justify-center h-full text-center px-6 py-12">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                          <ShoppingBag size={24} className="text-gray-400" />
                        </div>
                        <h4 className="text-gray-900 font-semibold mb-1">Nenhum encarte disponível</h4>
                        <p className="text-sm text-gray-500">
                          Este supermercado não possui encartes cadastrados para este período.
                        </p>
                      </div>
                    );
                  }
                })()}
              </div>
            </div>
          </>
        )}

        {/* Full-screen Shopping List */}
        {isCartOpen && (
          <div className="absolute inset-0 bg-[#E85D1A] text-white z-50 flex flex-col animate-in slide-in-from-bottom-8 duration-300 rounded-[3rem] overflow-hidden">
            
            {/* Header */}
            <div className="pt-14 pb-4 px-6 flex items-center justify-between relative z-10 border-b border-white/10">
              <button onClick={() => setIsCartOpen(false)} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors active:scale-95">
                <ChevronLeft size={24} />
              </button>
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold leading-tight">Minha Lista</h2>
                <span className="text-xs font-medium text-white/80">{cartItemCount} {cartItemCount === 1 ? 'item' : 'itens'}</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsSuggestionsModalOpen(true)} 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors active:scale-95"
                  title="Sugerir Melhorias"
                >
                  <Lightbulb size={18} />
                </button>
                <button 
                  onClick={() => setCart([])} 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-500/80 transition-colors active:scale-95"
                  title="Limpar Lista"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto px-6 pb-6 pt-6 flex flex-col no-scrollbar">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center flex-1 text-center opacity-90">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <ClipboardList size={48} strokeWidth={1.5} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Sua lista está vazia</h3>
                  <p className="text-white/70 text-sm mb-8">Navegue pelas ofertas e adicione produtos para começar a economizar.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="bg-white text-[#E85D1A] font-bold px-8 py-3.5 rounded-full shadow-lg active:scale-95 transition-transform"
                  >
                    Explorar Ofertas
                  </button>
                </div>
              ) : (
                <div className="flex flex-col">
                  {/* Grouped Items */}
                  <div className="flex flex-col gap-4">
                      {(() => {
                        const groupedCart = cart.reduce((acc, item) => {
                          const marketId = item.product.supermarketId;
                          if (!acc[marketId]) acc[marketId] = [];
                          acc[marketId].push(item);
                          return acc;
                        }, {} as Record<string, typeof cart>);

                        let grandTotal = 0;
                        let grandSavings = 0;

                        return (
                          <>
                            {Object.entries(groupedCart).map(([marketId, items]) => {
                              const market = SUPERMARKETS.find(s => s.id === marketId);
                              if (!market) return null;

                              let marketTotal = 0;
                              items.forEach(item => {
                                const itemTotal = item.product.price * item.quantity;
                                marketTotal += itemTotal;
                                grandTotal += itemTotal;
                                grandSavings += (item.product.oldPrice - item.product.price) * item.quantity;
                              });

                              return (
                                <div key={marketId} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-sm">
                                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
                                      <img src={market.logo} alt={market.name} className="w-full h-full object-cover" />
                                    </div>
                                    {market.name}
                                  </h3>
                                  
                                  <div className="flex flex-col gap-3">
                                    {items.map(item => (
                                      <div key={item.product.id} className={`flex justify-between items-center gap-2 transition-all duration-300 ${item.checked ? 'opacity-50 grayscale-[0.5]' : ''}`}>
                                        <div className="flex items-center gap-3 flex-1">
                                          <button 
                                            onClick={() => toggleCheck(item.product.id)}
                                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${item.checked ? 'bg-green-500 border-green-500' : 'border-white/50'}`}
                                          >
                                            {item.checked && <Check size={14} strokeWidth={3} className="text-white" />}
                                          </button>
                                          
                                          <div className="w-10 h-10 rounded-lg bg-white overflow-hidden flex-shrink-0">
                                            <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className={`text-sm font-medium leading-tight line-clamp-1 ${item.checked ? 'line-through' : ''}`}>{item.product.name}</span>
                                            <span className="text-xs text-white/70">R$ {item.product.price.toFixed(2).replace('.', ',')}</span>
                                          </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                          <span className="font-semibold text-sm">R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                                          <div className="flex items-center gap-2 bg-white/10 rounded-full px-1.5 py-0.5">
                                            <button onClick={() => item.quantity === 1 ? removeFromCart(item.product.id) : updateQuantity(item.product.id, -1)} className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                              <Minus size={10} strokeWidth={3} />
                                            </button>
                                            <span className="text-xs font-bold w-3 text-center">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.product.id, 1)} className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                              <Plus size={10} strokeWidth={3} />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <div className="w-full h-px bg-white/20 my-3" />
                                  
                                  <div className="flex justify-between items-center text-sm font-bold">
                                    <span className="opacity-90">Subtotal {market.name}</span>
                                    <span>R$ {marketTotal.toFixed(2).replace('.', ',')}</span>
                                  </div>
                                </div>
                              );
                            })}

                            <div className="w-full h-px bg-white/30 my-2 border-dashed border-t border-white/30 bg-transparent" />
                            
                            {/* Totals */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 mb-6 border border-white/20 shadow-sm">
                              <div className="flex justify-between items-center text-sm mb-2">
                                <span className="opacity-90">Subtotal Geral</span>
                                <span className="font-semibold">R$ {grandTotal.toFixed(2).replace('.', ',')}</span>
                              </div>
                              <div className="flex justify-between items-center text-sm text-[#FAD25A] mb-3">
                                <span className="opacity-90">Economia Total</span>
                                <span className="font-semibold">- R$ {grandSavings.toFixed(2).replace('.', ',')}</span>
                              </div>
                              <div className="w-full h-px bg-white/30 border-dashed border-t border-white/30 bg-transparent my-3" />
                              <div className="flex justify-between items-center text-xl font-black mt-1">
                                <span>Total Estimado</span>
                                <span>R$ {(grandTotal).toFixed(2).replace('.', ',')}</span>
                              </div>
                            </div>

                            <div className="flex flex-col gap-3">
                              <button 
                                onClick={() => setIsLoginModalOpen(true)}
                                className="w-full bg-white text-[#E85D1A] font-bold text-lg py-3.5 rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
                              >
                                <Save size={20} />
                                Salvar Lista
                              </button>
                              <button 
                                onClick={handleShareWhatsApp}
                                className="w-full bg-[#FAD25A] text-[#E85D1A] font-bold text-lg py-3.5 rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
                              >
                                <WhatsAppIcon size={20} />
                                Compartilhar no WhatsApp
                              </button>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                )}
              </div>
          </div>
        )}

      {/* Profile Sidebar (Slide-over) */}
      {isProfileOpen && (
        <>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40 animate-in fade-in duration-300 rounded-[3rem]" onClick={() => setIsProfileOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-[#E85D1A] text-white z-50 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 rounded-l-[3rem] overflow-hidden">
            
            {/* Header */}
            <div className="pt-12 pb-6 px-6 flex items-center gap-4 relative">
              <button onClick={() => setIsProfileOpen(false)} className="absolute top-6 left-6 p-2 text-white/80 hover:text-white transition-colors">
                <ChevronLeft size={24} />
              </button>
              
              <div className="mt-8 flex items-center gap-4 w-full">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-[#FAD25A] to-yellow-600 rounded-full p-[3px] shadow-lg">
                    <img 
                      src="https://i.pravatar.cc/150?img=11" 
                      alt="User Profile" 
                      className="w-full h-full rounded-full border-2 border-[#E85D1A] object-cover bg-white"
                    />
                  </div>
                  <div className="absolute -bottom-2 right-0 bg-gradient-to-r from-yellow-600 to-yellow-500 px-2.5 py-0.5 rounded-full shadow-md border-[1.5px] border-white flex items-center gap-1 z-10">
                    <Crown size={10} className="text-white" fill="currentColor" />
                    <span className="text-[9px] font-black uppercase text-white tracking-wider">Premium</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold leading-tight">João Silva</h2>
                  <span className="text-xs text-white/70">joaosilva@email.com</span>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-1 no-scrollbar mt-4">
              
              <button 
                onClick={() => { setIsProfileOpen(false); setIsMyListsOpen(true); }}
                className="flex items-center gap-4 py-4 border-b border-white/10 hover:bg-white/5 transition-colors rounded-xl px-2 -mx-2"
              >
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#E85D1A]">
                  <ClipboardList size={20} strokeWidth={2} />
                </div>
                <span className="font-semibold text-[15px]">Minhas Listas</span>
              </button>

              <button className="flex items-center gap-4 py-4 border-b border-white/10 hover:bg-white/5 transition-colors rounded-xl px-2 -mx-2">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#E85D1A]">
                  <User size={20} strokeWidth={2} />
                </div>
                <span className="font-semibold text-[15px]">Meu Perfil</span>
              </button>

              <button 
                onClick={() => { setIsProfileOpen(false); setIsPriceHistoryOpen(true); }}
                className="flex items-center justify-between py-4 border-b border-white/10 hover:bg-white/5 transition-colors rounded-xl px-2 -mx-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white shadow-md">
                    <TrendingUp size={20} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[15px] flex items-center gap-2">
                      Histórico e Inflação
                    </span>
                    <span className="text-[10px] text-yellow-200 uppercase font-black tracking-wider flex items-center gap-1 mt-0.5">
                      <Crown size={10} fill="currentColor"/> Análise Premium
                    </span>
                  </div>
                </div>
                <ChevronRight size={16} className="text-white/50" />
              </button>

              <button className="flex items-center gap-4 py-4 border-b border-white/10 hover:bg-white/5 transition-colors rounded-xl px-2 -mx-2">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#E85D1A]">
                  <CreditCard size={20} strokeWidth={2} />
                </div>
                <span className="font-semibold text-[15px]">Métodos de Pagamento</span>
              </button>

              <button className="flex items-center gap-4 py-4 border-b border-white/10 hover:bg-white/5 transition-colors rounded-xl px-2 -mx-2">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#E85D1A]">
                  <Headset size={20} strokeWidth={2} />
                </div>
                <span className="font-semibold text-[15px]">Fale Conosco</span>
              </button>

              <button className="flex items-center gap-4 py-4 border-b border-white/10 hover:bg-white/5 transition-colors rounded-xl px-2 -mx-2">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#E85D1A]">
                  <MessageCircle size={20} strokeWidth={2} />
                </div>
                <span className="font-semibold text-[15px]">Ajuda e FAQs</span>
              </button>

              <button className="flex items-center gap-4 py-4 border-b border-white/10 hover:bg-white/5 transition-colors rounded-xl px-2 -mx-2">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#E85D1A]">
                  <Settings size={20} strokeWidth={2} />
                </div>
                <span className="font-semibold text-[15px]">Configurações</span>
              </button>

              <button className="flex items-center gap-4 py-4 hover:bg-white/5 transition-colors rounded-xl px-2 -mx-2 mt-auto mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#E85D1A]">
                  <LogOut size={20} strokeWidth={2} className="ml-1" />
                </div>
                <span className="font-semibold text-[15px]">Sair</span>
              </button>

            </div>
          </div>
        </>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="absolute inset-0 z-[60] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={() => setIsLoginModalOpen(false)} />
          <div className="bg-white w-full rounded-t-[2.5rem] p-6 pb-10 relative z-10 animate-in slide-in-from-bottom-full flex flex-col gap-4 shadow-2xl">
            <button onClick={() => setIsLoginModalOpen(false)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full transition-colors">
              <X size={20} />
            </button>
            
            <div className="text-center mb-2 mt-4">
              <div className="bg-[#E85D1A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#E85D1A]">
                <Save size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-black text-[#1C1C1E] mb-2">Salvar sua Lista</h2>
              <p className="text-gray-500 text-sm px-4">Crie uma conta ou faça login para acessar suas listas em qualquer dispositivo.</p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <button className="w-full bg-black text-white font-semibold text-base py-3.5 rounded-full shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-3">
                <AppleIcon size={20} />
                Continuar com Apple
              </button>
              <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold text-base py-3.5 rounded-full shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-3">
                <GoogleIcon size={20} />
                Continuar com Google
              </button>
              <button className="w-full bg-[#E85D1A] text-white font-semibold text-base py-3.5 rounded-full shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-3">
                <Mail size={20} />
                Continuar com Email
              </button>
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-4 px-4">
              Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.
            </p>
          </div>
        </div>
      )}

      {/* Suggestions Modal */}
      {isSuggestionsModalOpen && (
        <div className="absolute inset-0 z-[60] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={() => setIsSuggestionsModalOpen(false)} />
          <div className="bg-white w-full h-[90%] rounded-t-[2.5rem] flex flex-col relative z-10 animate-in slide-in-from-bottom-full shadow-2xl overflow-hidden">
            
            {/* Header */}
            <div className="p-6 pb-4 border-b border-gray-100 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-[#E85D1A]/10 p-2 rounded-xl text-[#E85D1A]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#1C1C1E] leading-tight">Sugestões</h2>
                  <p className="text-xs text-gray-500 font-medium">Ajude a melhorar o app</p>
                </div>
              </div>
              <button onClick={() => setIsSuggestionsModalOpen(false)} className="p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Feedback List */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-gray-50/50">
              {feedbacks.map(feedback => (
                <div key={feedback.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img src={feedback.avatar} alt={feedback.author} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-gray-900">{feedback.author}</span>
                        <span className="text-[10px] text-gray-400 font-medium">{feedback.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{feedback.content}</p>
                  
                  {feedback.developerReply && (
                    <div className="mb-4 bg-[#E85D1A]/5 border border-[#E85D1A]/20 rounded-xl p-3 ml-4 relative">
                      <div className="absolute -left-1.5 top-4 w-3 h-3 bg-[#E85D1A]/5 border-l border-t border-[#E85D1A]/20 rotate-[-45deg]"></div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="bg-[#E85D1A] text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">Desenvolvedor</div>
                        <span className="text-[10px] text-gray-400 font-medium">{feedback.developerReply.date}</span>
                      </div>
                      <p className="text-sm text-gray-800 leading-relaxed">{feedback.developerReply.text}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-4 border-t border-gray-50 pt-3">
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#E85D1A] transition-colors">
                      <ThumbsUp size={14} />
                      Útil ({feedback.useful})
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#E85D1A] transition-colors">
                      <Heart size={14} />
                      Gostei ({feedback.likes})
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0 pb-8">
              <div className="flex items-end gap-2 bg-gray-50 rounded-2xl p-2 border border-gray-200 focus-within:border-[#E85D1A] focus-within:ring-1 focus-within:ring-[#E85D1A] transition-all">
                <textarea 
                  value={newFeedback}
                  onChange={(e) => setNewFeedback(e.target.value)}
                  placeholder="Sugerir uma nova funcionalidade..."
                  className="flex-1 bg-transparent border-none focus:ring-0 resize-none text-sm p-2 max-h-32 min-h-[44px] outline-none"
                  rows={1}
                />
                <button 
                  onClick={handleSubmitFeedback}
                  disabled={!newFeedback.trim()}
                  className="w-10 h-10 rounded-xl bg-[#E85D1A] text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:bg-gray-300 transition-colors mb-0.5"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Notifications Modal */}
      {isNotificationsOpen && (
        <div className="absolute inset-0 z-[60] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={() => setIsNotificationsOpen(false)} />
          <div className="bg-white w-full h-[70%] rounded-t-[2.5rem] flex flex-col relative z-10 animate-in slide-in-from-bottom-full shadow-2xl overflow-hidden">
            <div className="p-6 pb-4 border-b border-gray-100 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-[#E85D1A]/10 p-2 rounded-xl text-[#E85D1A]">
                  <Bell size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#1C1C1E] leading-tight">Notificações</h2>
                </div>
              </div>
              <button onClick={() => {
                setIsNotificationsOpen(false);
                setNotifications(prev => prev.map(n => ({ ...n, read: true })));
              }} className="p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50/50">
              {notifications.length === 0 ? (
                 <p className="text-center text-gray-500 mt-10">Nenhuma notificação</p>
              ) : (
                notifications.map(notif => (
                  <div key={notif.id} className={`bg-white border ${notif.read ? 'border-gray-100' : 'border-[#E85D1A]/30 shadow-sm'} rounded-2xl p-4 flex gap-4`}>
                     <div className="mt-1">
                       <div className="w-8 h-8 rounded-full bg-[#E85D1A]/10 text-[#E85D1A] flex items-center justify-center">
                         <MessageCircle size={16} />
                       </div>
                     </div>
                     <div className="flex-1">
                       <div className="flex justify-between items-start mb-1">
                         <h4 className={`text-sm ${notif.read ? 'font-semibold text-gray-700' : 'font-bold text-gray-900'}`}>{notif.title}</h4>
                         <span className="text-[10px] text-gray-400">{notif.date}</span>
                       </div>
                       <p className="text-xs text-gray-600 leading-relaxed">{notif.message}</p>
                     </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* My Lists Modal */}
      {isMyListsOpen && (
        <div className="absolute inset-0 z-[60] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={() => setIsMyListsOpen(false)} />
          <div className="bg-white w-full h-[85%] rounded-t-[2.5rem] flex flex-col relative z-10 animate-in slide-in-from-bottom-full shadow-2xl overflow-hidden">
            
            {/* Header */}
            <div className="p-6 pb-4 border-b border-gray-100 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-[#E85D1A]/10 p-2 rounded-xl text-[#E85D1A]">
                  <ClipboardList size={24} strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#1C1C1E] leading-tight">Minhas Listas</h2>
                  <p className="text-xs text-gray-500 font-medium">Suas listas salvas</p>
                </div>
              </div>
              <button 
                onClick={() => setIsMyListsOpen(false)} 
                className="p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full transition-colors"
                title="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-gray-50/50">
              {SAVED_LISTS.map(list => (
                <div key={list.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{list.name}</h3>
                      <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                        <Calendar size={12} className="text-gray-300" />
                        {list.date}
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1" title="Excluir Lista">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-3 border border-gray-100">
                     <div className="flex flex-col flex-1">
                       <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">Total de Itens</span>
                       <span className="font-semibold text-sm text-gray-800">{list.itemsCount} itens</span>
                     </div>
                     <div className="w-px h-8 bg-gray-200"></div>
                     <div className="flex flex-col flex-1 text-right">
                       <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">Estimativa</span>
                       <span className="font-bold text-sm text-[#E85D1A]">R$ {list.estimatedTotal.toFixed(2).replace('.', ',')}</span>
                     </div>
                  </div>

                  <button className="w-full bg-black text-white font-bold text-sm py-3 rounded-xl hover:bg-gray-800 active:scale-95 transition-all flex items-center justify-center gap-2 mt-1">
                    <Play size={16} fill="currentColor" />
                    Carregar e Iniciar Compras
                  </button>
                </div>
              ))}
            </div>
            
            {/* Create New btn fixed bottom */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0 pb-8">
               <button 
                  onClick={() => { setIsMyListsOpen(false); setCart([]); setIsCartOpen(true); }}
                  className="w-full bg-white border-2 border-[#E85D1A] text-[#E85D1A] font-bold text-base py-3.5 rounded-2xl shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-2 hover:bg-[#E85D1A]/5"
                >
                 <Plus size={20} strokeWidth={2.5}/>
                 Criar Nova Lista Vazia
               </button>
            </div>

          </div>
        </div>
      )}

      {/* Price History / Premium Analysis Modal */}
      {isPriceHistoryOpen && (
        <div className="absolute inset-0 z-[60] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={() => setIsPriceHistoryOpen(false)} />
          <div className="bg-white w-full h-[95%] rounded-t-[2.5rem] flex flex-col relative z-10 animate-in slide-in-from-bottom-full shadow-2xl overflow-hidden">
            
            {/* Elegant Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center shrink-0 bg-gradient-to-r from-gray-900 to-[#1C1C1E]">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2.5 rounded-xl text-white shadow-lg shadow-yellow-500/20 border border-yellow-300/30">
                  <TrendingUp size={24} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-white leading-tight">Evolução de Preços</h2>
                    <div className="bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider flex items-center gap-1">
                      <Crown size={10} fill="currentColor"/> Pro
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">Sua inteligência de compras</p>
                </div>
              </div>
              <button 
                onClick={() => setIsPriceHistoryOpen(false)} 
                className="p-2 text-white/50 hover:text-white bg-white/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Dashboard */}
            <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-6 bg-gray-50/50 pb-20">
              
              {/* Insight Banner */}
              <div className="bg-gradient-to-br from-[#E85D1A] to-orange-600 p-5 rounded-3xl text-white shadow-lg shadow-orange-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <BarChart2 size={100} />
                </div>
                <h3 className="font-bold text-lg mb-2 -mt-3 relative z-10">Olá João,</h3>
                <p className="text-sm text-white/90 leading-relaxed mb-4 relative z-10">
                  Sua lista padrão <strong className="text-white">"Compras do Mês"</strong> no <strong className="text-white">Supermercado Líder</strong> sofreu um impacto de inflação de <span className="bg-white/20 px-1.5 py-0.5 rounded font-bold text-white">+14.5%</span> neste semestre.
                </p>
                <button className="bg-white text-[#E85D1A] font-bold text-xs px-4 py-2 rounded-xl active:scale-95 transition-transform shadow-sm relative z-10 w-full flex items-center justify-center gap-2">
                  <MapPin size={14} /> Mostrar Onde Comprar Mais Barato Hoje
                </button>
              </div>

              {/* Chart Section */}
              <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">Custo da "Compras do Mês"</h3>
                    <p className="text-xs text-gray-400 font-medium">Variação nos últimos 6 meses no <strong className="text-gray-500">Líder</strong></p>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Atual</span>
                    <span className="font-black text-xl text-gray-900">R$ 355<span className="text-sm">,00</span></span>
                  </div>
                </div>
                
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PRICE_HISTORY_DATA}>
                      <defs>
                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#E85D1A" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#E85D1A" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} dy={10} />
                      <YAxis domain={['dataMin - 10', 'dataMax + 10']} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} dx={-10} tickFormatter={(val) => `R$${val}`} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#E85D1A', fontWeight: 'bold' }}
                        formatter={(value) => [`R$ ${value}.00`, 'Custo']}
                        labelStyle={{ color: '#6b7280', fontSize: '12px', marginBottom: '4px' }}
                      />
                      <Area type="monotone" dataKey="total" stroke="#E85D1A" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Variations - Separated */}
              <div className="flex flex-col gap-6 mt-2">
                
                {/* Intro to User's Items */}
                <div className="mb-2">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">Impacto nas Suas Últimas Listas</h3>
                  <p className="text-xs text-gray-500">Acompanhamento dos itens que você mais compra no <strong className="text-gray-600">Líder</strong></p>
                </div>

                {/* Increased */}
                <div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <TrendingUp size={16} className="text-red-500"/> Subiram de Preço
                  </h4>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: 'Picanha Bovina Friboi 1kg', category: 'Carnes', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=200&h=200&fit=crop', oldPrice: 52.90, current: 65.90, diff: '+24.5%', supermarket: 'Líder', supermarketColor: '#fc0000', supermarketTextColor: '#cc0000', supermarketInitial: 'LÍ' },
                      { name: 'Sabão em Pó Omo 2kg', category: 'Limpeza', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&h=200&fit=crop', oldPrice: 22.90, current: 28.90, diff: '+26.2%', supermarket: 'Assaí', supermarketColor: '#e85d1a', supermarketInitial: 'AS' },
                      { name: 'Creme de Leite Italac 1,03kg', category: 'Padaria', image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=200&h=200&fit=crop', oldPrice: 13.99, current: 14.50, diff: '+3.6%', supermarket: 'Mateus', supermarketColor: '#040988', supermarketTextColor: '#ff0000', supermarketInitial: 'MA' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 p-3 rounded-2xl flex items-center gap-3 shadow-sm relative overflow-visible group mt-3">
                        
                        <div className="absolute -right-1.5 -top-3.5 z-10 flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full shadow border transition-transform hover:scale-105" style={{ backgroundColor: item.supermarketColor, borderColor: item.supermarketColor }}>
                          <span className="text-[10px] font-bold text-[#f3f3f3]">{item.supermarket}</span>
                          <div className="w-5 h-5 rounded-full bg-[#f9f9f9] flex items-center justify-center text-[9px] font-black tracking-tighter shadow-inner" style={{ color: item.supermarketTextColor || item.supermarketColor }}>{item.supermarketInitial}</div>
                        </div>

                        <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden border border-gray-100 relative mt-2">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
                          <div className="absolute bottom-0 inset-x-0 h-1 bg-red-500"></div>
                        </div>
                        <div className="flex-1 min-w-0 mt-2">
                           <p className="font-bold text-sm text-gray-900 leading-tight truncate">{item.name}</p>
                           <div className="flex items-center gap-1.5 mt-1">
                             <p className="text-[10px] uppercase font-bold text-gray-400">{item.category}</p>
                           </div>
                           <div className="flex items-center gap-2 mt-1.5">
                             <span className="text-xs text-gray-400 line-through">R$ {item.oldPrice.toFixed(2).replace('.', ',')}</span>
                             <ArrowRight size={10} className="text-gray-300" />
                             <span className="text-xs font-bold text-gray-800">R$ {item.current.toFixed(2).replace('.', ',')}</span>
                           </div>
                        </div>
                        <div className="text-right flex flex-col justify-center shrink-0">
                           <div className="flex flex-col items-end gap-1">
                             <div className="flex items-center gap-1 bg-red-50 text-red-600 px-2 py-0.5 rounded-md">
                               <TrendingUp size={12} strokeWidth={3} />
                               <span className="text-xs font-black">{item.diff}</span>
                             </div>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decreased */}
                <div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2 mt-4">
                    <TrendingDown size={16} className="text-green-500"/> Caíram de Preço
                  </h4>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: 'Maçã Gala Nacional 1kg', category: 'Hortifruti', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?w=200&h=200&fit=crop', oldPrice: 7.99, current: 5.99, diff: '-25.0%', supermarket: 'Atacadão', supermarketColor: '#05851f', supermarketTextColor: '#dc910b', supermarketInitial: 'AT' },
                      { name: 'Desengordurante Veja 400ml', category: 'Limpeza', image: 'https://images.unsplash.com/photo-1585675100414-22cb7f52f3bb?w=200&h=200&fit=crop', oldPrice: 12.90, current: 10.79, diff: '-16.3%', supermarket: 'Preço Baixo', supermarketColor: '#0f0496', supermarketTextColor: '#0029ff', supermarketInitial: 'PB' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 p-3 rounded-2xl flex items-center gap-3 shadow-sm relative overflow-visible group mt-3">
                        
                        <div className="absolute -right-1.5 -top-3.5 z-10 flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full shadow border transition-transform hover:scale-105" style={{ backgroundColor: item.supermarketColor, borderColor: item.supermarketColor }}>
                          <span className="text-[10px] font-bold text-[#f3f3f3]">{item.supermarket}</span>
                          <div className="w-5 h-5 rounded-full bg-[#f9f9f9] flex items-center justify-center text-[9px] font-black tracking-tighter shadow-inner" style={{ color: item.supermarketTextColor || item.supermarketColor }}>{item.supermarketInitial}</div>
                        </div>

                        <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden border border-gray-100 relative mt-2">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
                          <div className="absolute bottom-0 inset-x-0 h-1 bg-green-500"></div>
                        </div>
                        <div className="flex-1 min-w-0 mt-2">
                           <p className="font-bold text-sm text-gray-900 leading-tight truncate">{item.name}</p>
                           <div className="flex items-center gap-1.5 mt-1">
                             <p className="text-[10px] uppercase font-bold text-gray-400">{item.category}</p>
                           </div>
                           <div className="flex items-center gap-2 mt-1.5">
                             <span className="text-xs text-gray-400 line-through">R$ {item.oldPrice.toFixed(2).replace('.', ',')}</span>
                             <ArrowRight size={10} className="text-gray-300" />
                             <span className="text-xs font-bold text-gray-800">R$ {item.current.toFixed(2).replace('.', ',')}</span>
                           </div>
                        </div>
                        <div className="text-right flex flex-col justify-center shrink-0">
                           <div className="flex flex-col items-end gap-1">
                             <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-0.5 rounded-md">
                               <TrendingDown size={12} strokeWidth={3} />
                               <span className="text-xs font-black">{item.diff}</span>
                             </div>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Separator */}
                <div className="w-full h-px bg-gray-200 my-2"></div>

                {/* Similar Products Suggestions */}
                <div className="mb-4">
                  <div className="mb-4">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">Alternativas Similares em Conta</h3>
                    <p className="text-xs text-gray-500">Descubra onde comprar mais barato hoje</p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {[
                      { 
                        name: 'Sabão em Pó Brilhante 2kg', 
                        category: 'Limpeza', 
                        image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&h=200&fit=crop', 
                        current: 21.90, 
                        brandColor: '#E85D1A',
                        target: 'Substituto para Sabão Omo', 
                        savings: 'Economize R$ 7,00',
                        market: 'Formosa Mix',
                        supermarketColor: '#030065',
                        supermarketTextColor: '#0b27f3',
                        supermarketInitial: 'FM'
                      },
                      { 
                        name: 'Alcatra Bovina Maturatta 1kg', 
                        category: 'Carnes', 
                        image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=200&h=200&fit=crop', 
                        current: 44.90, 
                        brandColor: '#E85D1A',
                        target: 'Substituto para Picanha', 
                        savings: 'Economize R$ 21,00',
                        market: 'Atacadão',
                        supermarketColor: '#05851f',
                        supermarketTextColor: '#dc910b',
                        supermarketInitial: 'AT'
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-orange-50 to-white border border-orange-100 p-3 rounded-2xl flex items-center gap-3 shadow-sm relative overflow-visible mt-2">
                        
                        <div className="absolute -right-1.5 -top-3.5 z-10 flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full shadow border transition-transform hover:scale-105" style={{ backgroundColor: item.supermarketColor, borderColor: item.supermarketColor }}>
                          <span className="text-[10px] font-bold text-[#f3f3f3]">{item.market}</span>
                          <div className="w-5 h-5 rounded-full bg-[#f9f9f9] flex items-center justify-center text-[9px] font-black tracking-tighter shadow-inner" style={{ color: item.supermarketTextColor || item.supermarketColor }}>{item.supermarketInitial}</div>
                        </div>

                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200/40 to-transparent rounded-full -mr-10 -mt-10 blur-xl"></div>
                        
                        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden border border-orange-100 shadow-sm relative z-10 mt-2">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
                        </div>
                        
                        <div className="flex-1 min-w-0 relative z-10 mt-1">
                           <div className="flex items-center gap-1.5 mb-1.5">
                             <Sparkles size={12} className="text-[#E85D1A]" />
                             <span className="text-[10px] font-bold text-[#E85D1A] uppercase tracking-wider">{item.target}</span>
                           </div>
                           <p className="font-bold text-sm text-gray-900 leading-tight truncate mb-1">{item.name}</p>
                           
                           <div className="flex items-center gap-2 mt-2">
                             <span className="text-sm font-black text-gray-900">R$ {item.current.toFixed(2).replace('.', ',')}</span>
                             <div className="bg-[#E85D1A] text-white text-[10px] font-bold px-2 py-1 rounded-md ml-auto">
                               {item.savings}
                             </div>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      </div>
      
      {/* Global styles for hiding scrollbar but keeping functionality */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
