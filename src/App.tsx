/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Milk, 
  Droplets, 
  Leaf, 
  ChevronLeft, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter,
  Sparkles,
  Heart,
  Recycle
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FLAVORS = [
  {
    id: 1,
    name: 'Çikolatalı Süt',
    description: 'Gerçek Belçika çikolatası ve taze Çatalca sütü.',
    color: 'bg-[#3E2723]',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1550583724-125581f77833?auto=format&fit=crop&q=80&w=800',
    tag: 'Klasik'
  },
  {
    id: 2,
    name: 'Nane-Limonlu Süt',
    description: 'Ferahlatıcı nane ve taze limon kabuğu rendesi.',
    color: 'bg-mint',
    textColor: 'text-chocolate',
    image: 'https://images.unsplash.com/photo-1556767667-0754773d5f08?auto=format&fit=crop&q=80&w=800',
    tag: 'Sıra Dışı'
  },
  {
    id: 3,
    name: 'Orman Meyveli Kefir',
    description: 'Probiyotik zengini, yaban mersini ve ahududu patlaması.',
    color: 'bg-berry',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&q=80&w=800',
    tag: 'Sağlıklı'
  }
];

export default function App() {
  const [activeFlavor, setActiveFlavor] = useState(0);

  const nextFlavor = () => setActiveFlavor((prev) => (prev + 1) % FLAVORS.length);
  const prevFlavor = () => setActiveFlavor((prev) => (prev - 1 + FLAVORS.length) % FLAVORS.length);

  return (
    <div className="min-h-screen selection:bg-strawberry selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b-3 border-chocolate px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-strawberry p-2 pop-art-border rounded-full">
              <Milk className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-rounded font-black tracking-tighter uppercase">
              Hilal’in Süt Dünyası
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-bold uppercase text-sm tracking-widest">
            <a href="#freshness" className="hover:text-strawberry transition-colors">Tazelik</a>
            <a href="#flavors" className="hover:text-strawberry transition-colors">Lezzetler</a>
            <a href="#eco" className="hover:text-strawberry transition-colors">Eko-Dostu</a>
            <a href="#hilal" className="hover:text-strawberry transition-colors">Hilal Kimdir?</a>
          </div>

          <button className="bg-strawberry text-white px-6 py-2 rounded-full font-bold pop-art-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all pop-art-border uppercase text-xs tracking-widest">
            Sipariş Ver
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full pop-art-border pop-art-shadow-sm">
              <Sparkles className="w-4 h-4 text-strawberry" />
              <span className="text-xs font-bold uppercase tracking-widest">Çatalca'dan Taptaze</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter">
              Sütün En <span className="text-strawberry">Renkli</span> Hali!
            </h1>
            
            <p className="text-lg md:text-xl font-medium max-w-lg leading-relaxed">
              Doğanın saflığını Pop-Art enerjisiyle birleştirdik. Hilal’in Süt Dünyası'nda her yudum bir festival, her şişe bir sanat eseri.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-strawberry text-white px-8 py-4 rounded-2xl font-black text-xl pop-art-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all pop-art-border uppercase tracking-tighter">
                Hemen Keşfet
              </button>
              <button className="bg-white text-chocolate px-8 py-4 rounded-2xl font-black text-xl pop-art-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all pop-art-border uppercase tracking-tighter">
                Hikayemiz
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden pop-art-border pop-art-shadow aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&q=80&w=1000" 
                alt="Milk Splash with Strawberries"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-strawberry/40 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-mint rounded-full pop-art-border flex items-center justify-center z-20"
            >
              <span className="font-black text-xs uppercase text-center leading-none tracking-tighter">
                100%<br/>Doğal
              </span>
            </motion.div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-strawberry rounded-2xl pop-art-border pop-art-shadow-sm z-20 flex items-center justify-center rotate-12">
              <Heart className="text-white w-10 h-10 fill-current" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Freshness Section */}
      <section id="freshness" className="py-24 bg-white border-y-3 border-chocolate relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl uppercase tracking-tighter">Tazeliğin Neşesi</h2>
            <p className="text-xl font-medium max-w-2xl mx-auto">
              Çatalca'nın yemyeşil meralarından, gün doğmadan toplanan sütler, en saf haliyle sofranıza geliyor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'Yerel Çiftlikler', desc: 'Sadece Çatalca’nın seçkin aile çiftliklerinden.', color: 'bg-mint' },
              { icon: Droplets, title: 'Saf İçerik', desc: 'Katkı maddesi yok, koruyucu yok. Sadece doğa.', color: 'bg-strawberry' },
              { icon: Milk, title: 'Günlük Üretim', desc: 'Her sabah taze sağılır, aynı gün şişelenir.', color: 'bg-cream' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn("p-8 rounded-3xl pop-art-border pop-art-shadow-sm space-y-4", item.color)}
              >
                <item.icon className="w-12 h-12" />
                <h3 className="text-2xl uppercase tracking-tighter">{item.title}</h3>
                <p className="font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors Carousel */}
      <section id="flavors" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl uppercase tracking-tighter">İmza Lezzetler</h2>
              <p className="text-xl font-medium">Sıradan sütlerin ötesinde bir deneyim.</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevFlavor}
                className="p-4 bg-white rounded-full pop-art-border pop-art-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextFlavor}
                className="p-4 bg-white rounded-full pop-art-border pop-art-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavor}
                initial={{ opacity: 0, scale: 0.9, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -100 }}
                className={cn(
                  "absolute inset-0 rounded-[3rem] pop-art-border pop-art-shadow overflow-hidden grid md:grid-cols-2",
                  FLAVORS[activeFlavor].color
                )}
              >
                <div className="p-12 flex flex-col justify-center space-y-6">
                  <span className="inline-block bg-white text-chocolate px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest self-start pop-art-border">
                    {FLAVORS[activeFlavor].tag}
                  </span>
                  <h3 className={cn("text-4xl md:text-6xl uppercase tracking-tighter", FLAVORS[activeFlavor].textColor)}>
                    {FLAVORS[activeFlavor].name}
                  </h3>
                  <p className={cn("text-xl font-medium", FLAVORS[activeFlavor].textColor)}>
                    {FLAVORS[activeFlavor].description}
                  </p>
                  <button className="bg-white text-chocolate px-8 py-4 rounded-2xl font-black text-xl pop-art-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all pop-art-border uppercase tracking-tighter self-start">
                    Sepete Ekle
                  </button>
                </div>
                <div className="relative h-full hidden md:block">
                  <img 
                    src={FLAVORS[activeFlavor].image} 
                    alt={FLAVORS[activeFlavor].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Eco Section */}
      <section id="eco" className="py-24 bg-chocolate text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="w-20 h-20 bg-mint rounded-full flex items-center justify-center pop-art-border -rotate-12">
              <Recycle className="text-chocolate w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl uppercase tracking-tighter">Sadece Çevre Dostu Cam</h2>
            <p className="text-xl font-medium opacity-90 leading-relaxed">
              Plastiğe hayır diyoruz! Tüm ürünlerimiz geri dönüştürülebilir, şık cam şişelerde sunulur. Sütün tadını bozmayan, doğayı koruyan tek seçim.
            </p>
            <ul className="space-y-4 font-bold uppercase tracking-widest text-sm">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-strawberry rounded-full" />
                Sıfır Atık Hedefi
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-strawberry rounded-full" />
                Şişe İade Sistemi
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-strawberry rounded-full" />
                Kimyasal İçermeyen Cam
              </li>
            </ul>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000" 
              alt="Glass Milk Bottles"
              className="rounded-[3rem] pop-art-border pop-art-shadow-sm border-white"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Entrepreneur Section */}
      <section id="hilal" className="py-24 px-6 bg-strawberry/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden pop-art-border pop-art-shadow relative">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000" 
                alt="Hilal in Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-strawberry/20 mix-blend-overlay" />
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl pop-art-border pop-art-shadow-sm rotate-3">
              <p className="font-black text-xl uppercase tracking-tighter">Kurucumuz Hilal</p>
            </div>
          </motion.div>

          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl uppercase tracking-tighter leading-none">
              Bir Hayalin <span className="text-strawberry">Sütle</span> Buluşması
            </h2>
            <p className="text-xl font-medium leading-relaxed">
              Hilal, modern bir girişimci ve bir lezzet tutkunu. Çatalca'nın geleneksel süt kültürünü, modern bir vizyon ve Pop-Art estetiğiyle yeniden yorumladı. Onun için süt sadece bir içecek değil, bir yaşam tarzı.
            </p>
            <div className="p-8 bg-white rounded-3xl pop-art-border pop-art-shadow-sm italic font-medium text-lg relative">
              <span className="text-6xl text-strawberry opacity-20 absolute top-2 left-4">"</span>
              Amacım, çocukluğumuzun o saf süt tadını, bugünün enerjisiyle birleştirip her eve neşe götürmek.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chocolate text-white py-20 px-6 border-t-3 border-chocolate">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-strawberry p-2 pop-art-border rounded-full">
                <Milk className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-rounded font-black tracking-tighter uppercase">
                Hilal’in Süt Dünyası
              </span>
            </div>
            <p className="font-medium opacity-80">
              Tazelik, renk ve neşe dolu bir dünya. Çatalca'dan sevgilerle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-strawberry transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-strawberry transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-strawberry transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Hızlı Linkler</h4>
            <ul className="space-y-4 font-bold opacity-80">
              <li><a href="#" className="hover:text-strawberry transition-colors">Ana Sayfa</a></li>
              <li><a href="#freshness" className="hover:text-strawberry transition-colors">Tazelik</a></li>
              <li><a href="#flavors" className="hover:text-strawberry transition-colors">Lezzetler</a></li>
              <li><a href="#hilal" className="hover:text-strawberry transition-colors">Hilal Kimdir?</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">İletişim</h4>
            <ul className="space-y-4 font-bold opacity-80">
              <li>Merhaba@hilalinsutdunyasi.com</li>
              <li>+90 (212) 555 00 00</li>
              <li>Çatalca, İstanbul</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Bültene Katıl</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="E-posta adresiniz"
                className="bg-white/10 border-2 border-white/20 rounded-xl px-4 py-2 w-full focus:outline-none focus:border-strawberry transition-colors"
              />
              <button className="bg-strawberry px-4 py-2 rounded-xl font-bold pop-art-border">
                Katıl
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center font-bold opacity-60 text-sm">
          © 2026 Hilal’in Süt Dünyası. Tüm Hakları Saklıdır.
        </div>
      </footer>
    </div>
  );
}
