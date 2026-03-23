import React, { useState } from 'react';
import { 
  Printer, 
  ShieldCheck, 
  Cpu, 
  Handshake, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

declare global {
  interface Window {
    fbq: any;
  }
}

const LOGO_URL = "https://www.digitalsystem.biz/nuovosito/wp-content/uploads/2021/11/Nuovo-logo.jpg";

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={LOGO_URL} alt="Digital System Logo" className="h-10 object-contain" referrerPolicy="no-referrer" />
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
        <a href="#soluzione" className="hover:text-brand-blue transition-colors">Soluzioni</a>
        <a href="#vantaggi" className="hover:text-brand-blue transition-colors">Vantaggi Fiscali</a>
        <a href="#faq" className="hover:text-brand-blue transition-colors">FAQ</a>
        <a href="tel:+390852405821" className="flex items-center gap-2 text-brand-blue font-bold">
          <Phone size={16} /> 085 2405821
        </a>
      </div>
      <a href="#contatti" className="bg-brand-blue text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-[10px] sm:text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 whitespace-nowrap">
        PREVENTIVO GRATUITO
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 tech-grid">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/95 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
          PMI, CAF e Studi Professionali
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8"
        >
          Noleggio Stampanti: <span className="text-brand-blue">Zero Fermi Macchina</span>, Assistenza Immediata.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-600 mb-10 leading-relaxed"
        >
          Smetti di preoccuparti del toner esaurito o della stampante bloccata prima di una scadenza. Scegli il noleggio operativo "All Inclusive": macchine affidabili, monitoraggio da remoto e un canone fisso mensile senza sorprese.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a href="#contatti" className="group bg-brand-orange text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 flex items-center gap-2">
            RICHIEDI UN PREVENTIVO GRATUITO
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <Clock size={18} className="text-green-500" />
            Rispondiamo in meno di 2 ore. Nessun impegno.
          </div>
        </motion.div>
      </div>
    </div>
    
    {/* Abstract Tech Element */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-10 pointer-events-none">
      <Printer size={600} className="text-brand-blue" />
    </div>
  </section>
);

const Problem = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            La tua attuale stampante ti sta facendo perdere tempo (e soldi)?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Se gestisci un'azienda o uno studio professionale, sai bene quanto un problema di stampa possa bloccare il lavoro di tutto l'ufficio.
          </p>
          <div className="space-y-4">
            {[
              "Il toner finisce sempre nel momento sbagliato (e nessuno si è ricordato di ordinarlo).",
              "La stampante si inceppa proprio prima di consegnare un documento urgente a un cliente.",
              "Chiami l'assistenza e finisci in un call center infinito, aspettando giorni per un tecnico.",
              "Costi imprevisti: continui a pagare per riparazioni su una macchina ormai vecchia."
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <p className="text-slate-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-brand-blue font-bold text-lg italic">
            Non è colpa tua. Il problema è che stai usando la stampante come un prodotto da gestire, invece che come un servizio che lavora per te.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://us.123rf.com/450wm/wavebreakmediamicro/wavebreakmediamicro1511/wavebreakmediamicro151103012/47404442-imprenditore-stressato-sul-lavoro-in-ufficio-casuale.jpg?ver=6" 
              alt="Imprenditore stressato" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
            <div className="text-red-500 font-bold text-4xl mb-2 font-mono">25%</div>
            <p className="text-sm text-slate-500 font-medium">Tempo medio perso in ufficio per problemi tecnici evitabili.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="soluzione" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Il Noleggio "Senza Pensieri": Tu Stampi, Al Resto Pensiamo Noi.
        </h2>
        <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full" />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <ShieldCheck className="text-brand-blue" size={32} />,
            title: "Assistenza Full Day & Full Week",
            desc: "Il tuo lavoro non si ferma, e nemmeno noi. Garantiamo assistenza continua per assicurarti che la tua operatività non subisca mai interruzioni."
          },
          {
            icon: <Cpu className="text-brand-blue" size={32} />,
            title: "Controllo Remoto Intelligente",
            desc: "Preveniamo i problemi prima che si verifichino. Monitoriamo la tua stampante a distanza: interveniamo noi prima ancora che tu te ne accorga."
          },
          {
            icon: <Handshake className="text-brand-blue" size={32} />,
            title: "Rapporto Umano Diretto",
            desc: "Dimentica i call center automatizzati. Quando chiami, parli direttamente con chi risolverà il tuo problema presso la tua sede."
          },
          {
            icon: <TrendingUp className="text-brand-blue" size={32} />,
            title: "Costo Certo e Trasparente",
            desc: "Un unico canone mensile fisso. Nessun costo nascosto, nessuna spesa imprevista per i ricambi o per il toner."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-6 bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center border border-slate-100">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FiscalAdvantage = () => (
  <section id="vantaggi" className="py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 skew-x-12 translate-x-1/4 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Perché il Noleggio Operativo conviene più dell'Acquisto?
          </h2>
          <p className="text-xl text-blue-200 mb-10 italic">
            Risparmi subito e scarichi tutto dalle tasse.
          </p>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Acquistare una stampante multifunzione significa immobilizzare capitale e gestire l'ammortamento negli anni per un bene che diventa obsoleto in fretta.
          </p>
          
          <div className="space-y-6 mb-12">
            {[
              { title: "Deducibilità Totale al 100%", desc: "I canoni di noleggio sono interamente deducibili ai fini IRES e IRAP nell'anno di competenza." },
              { title: "Nessun ammortamento", desc: "La stampante non va a cespite, semplificando la gestione contabile." },
              { title: "Liquidità preservata", desc: "Non intacchi il capitale aziendale e mantieni intatte le tue linee di credito." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="text-brand-orange shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <a href="#contatti" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
            SCOPRI QUANTO PUOI RISPARMIARE
            <ArrowRight size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-brand-orange font-mono text-2xl font-bold mb-1">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Deducibilità</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-white font-mono text-2xl font-bold mb-1">ZERO</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Ammortamento</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-brand-blue p-6 rounded-2xl">
              <div className="text-white font-mono text-2xl font-bold mb-1">CASH</div>
              <div className="text-xs text-blue-100 uppercase tracking-widest font-bold">Liquidità</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="text-white font-mono text-2xl font-bold mb-1">IRES</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Vantaggio IRAP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Cosa dicono le Aziende e gli Studi che ci hanno già scelto
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            stars: 5,
            text: "Durante il periodo delle dichiarazioni dei redditi stampiamo migliaia di fogli. Prima era un incubo di inceppamenti e toner finiti. Da quando siamo passati al loro noleggio, la macchina non si è mai fermata. Il controllo remoto è una salvezza.",
            author: "Marco D.",
            role: "Titolare Studio Commerciale"
          },
          {
            stars: 5,
            text: "Avevamo tre vecchie stampanti di proprietà che ci costavano una fortuna in manutenzione. Ci hanno proposto una singola multifunzione a noleggio di ultima generazione. Abbiamo ridotto i costi del 25% e l'assistenza è velocissima.",
            author: "Elena S.",
            role: "Resp. Amministrativa Azienda Logistica"
          },
          {
            stars: 5,
            text: "La privacy e la velocità sono fondamentali nel nostro lavoro. La macchina che ci hanno fornito è velocissima nelle scansioni e sicura. Ma il vero plus è l'assistenza: sono intervenuti immediatamente un venerdì pomeriggio.",
            author: "Avv. Roberto L.",
            role: "Studio Legale"
          }
        ].map((review, i) => (
          <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col h-full">
            <div className="flex gap-1 mb-4">
              {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />)}
            </div>
            <p className="text-slate-700 italic mb-8 flex-grow">"{review.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                {review.author[0]}
              </div>
              <div>
                <div className="font-bold text-slate-900">{review.author}</div>
                <div className="text-xs text-slate-500 font-medium">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">{question}</span>
        <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24 bg-slate-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
        Hai ancora qualche dubbio? Ecco le risposte alle domande più frequenti.
      </h2>
      <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-sm border border-slate-100">
        <FAQItem 
          question="Cosa è incluso esattamente nel canone mensile?" 
          answer="Assolutamente tutto (tranne la carta). Il canone comprende: la stampante multifunzione, tutti i materiali di consumo (toner, tamburi, ecc.), la manutenzione ordinaria e straordinaria, i pezzi di ricambio, l'assistenza da remoto e l'intervento tecnico in sede. Nessun costo nascosto." 
        />
        <FAQItem 
          question="Cosa succede se la stampante si rompe e non può essere riparata subito?" 
          answer="Il nostro obiettivo è il 'Zero Fermi Macchina'. Se il guasto non è risolvibile in tempi brevissimi presso la tua sede, ti forniamo immediatamente una macchina sostitutiva ('muletto') per garantirti la continuità lavorativa." 
        />
        <FAQItem 
          question="Devo preoccuparmi di ordinare il toner quando sta per finire?" 
          answer="No, ci pensiamo noi. Grazie al nostro sistema di monitoraggio remoto, sappiamo in tempo reale i livelli dei consumabili della tua stampante. Ti spediamo o consegniamo il toner nuovo prima ancora che la macchina si blocchi." 
        />
        <FAQItem 
          question="Il noleggio è davvero deducibile al 100%?" 
          answer="Sì. A differenza dell'acquisto o del leasing finanziario, il noleggio operativo è considerato un servizio. Questo significa che i canoni sono interamente deducibili (100%) ai fini IRES e IRAP, senza dover gestire l'ammortamento dei cespiti." 
        />
        <FAQItem 
          question="Quali sono i vostri tempi di intervento?" 
          answer="Garantiamo un'assistenza 'Full day e full week'. Il nostro punto di forza è il rapporto diretto: niente attese infinite al telefono. Interveniamo nel minor tempo possibile per assicurare che il tuo ufficio non subisca rallentamenti." 
        />
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phone, setPhone] = useState('+39 ');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.startsWith('+39')) {
      setPhone(value);
    } else if (value.length < 3) {
      setPhone('+39 ');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const rawPhone = (form.elements.namedItem('telefono') as HTMLInputElement).value;
    const cleanPhone = rawPhone.replace('+39', '').trim();

    const formData = {
      nome: (form.elements.namedItem('nome') as HTMLInputElement).value,
      azienda: (form.elements.namedItem('azienda') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefono: cleanPhone,
    };

    try {
      const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzyOi7jT5doBZgaPVPnlhSqMf_uXNI5TBUTQjc8S43N17D9qPDapvbw_g1R45HPWlxD/exec';
      
      if (scriptURL) {
        // Invio dati a Google Sheets
        await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors', // Necessario per Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } else {
        console.warn("VITE_GOOGLE_SCRIPT_URL non configurato. I dati non verranno salvati su Google Sheets.");
        // Simuliamo un ritardo per l'esperienza utente
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setStatus('success');
      if (window.fbq) {
        window.fbq('track', 'Lead');
      }
    } catch (error) {
      console.error('Errore durante l\'invio:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contatti" className="py-24 bg-white tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Pronto a ottimizzare le stampe del tuo ufficio?
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Compila il modulo in meno di 1 minuto. Ti ricontatteremo a breve per capire le tue esigenze e preparare un preventivo personalizzato, senza alcun impegno da parte tua.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Chiama subito</div>
                  <div className="text-xl font-bold text-slate-900">(+39) 085 2405821</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Vieni a trovarci</div>
                  <div className="text-xl font-bold text-slate-900">Viale Gabriele D'Annunzio, 320</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-100 relative">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Richiesta Inviata!</h3>
                <p className="text-slate-600">Ti ricontatteremo entro 2 ore lavorative.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-brand-blue font-bold hover:underline">Invia un'altra richiesta</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nome e Cognome</label>
                    <input name="nome" required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Mario Rossi" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nome Azienda / Studio</label>
                    <input name="azienda" required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Studio S.r.l." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Aziendale</label>
                  <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="mario.rossi@azienda.it" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Telefono</label>
                  <input 
                    name="telefono" 
                    required 
                    type="tel" 
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                    placeholder="+39 333 1234567" 
                  />
                </div>
                <div className="flex items-start gap-3 py-2">
                  <input required type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" id="privacy" />
                  <label htmlFor="privacy" className="text-xs text-slate-500 leading-relaxed">
                    Accetto il trattamento dei dati personali secondo la <a href="#" className="underline">Privacy Policy</a>. I tuoi dati sono al sicuro.
                  </label>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-brand-blue text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      INVIO IN CORSO...
                    </>
                  ) : (
                    'RICHIEDI IL TUO PREVENTIVO GRATUITO'
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center font-medium">Si è verificato un errore. Riprova più tardi.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-xl">
            <img src={LOGO_URL} alt="Digital System" className="h-10 object-contain" referrerPolicy="no-referrer" />
          </div>
          <p className="max-w-md mb-6">
            Digital System è il partner tecnologico di riferimento per il noleggio operativo di stampanti multifunzione. Soluzioni all-inclusive per l'ufficio moderno.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Contatti</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-blue" />
              (+39) 085 2405821
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-brand-blue" />
              Viale Gabriele D'Annunzio, 320
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-blue" />
              info@digitalsystem.biz
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Dati Societari</h4>
          <ul className="space-y-4 text-sm">
            <li>Digital System S.r.l.</li>
            <li>P.IVA: 02099660686</li>
            <li>Sede Operativa: Pescara (PE)</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-800 text-center text-xs">
        © {new Date().getFullYear()} Digital System. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <FiscalAdvantage />
      <Reviews />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
