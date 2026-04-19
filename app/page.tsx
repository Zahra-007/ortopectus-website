"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ══════════════════════════════════════════
   TRANSLATIONS
   ══════════════════════════════════════════ */
const en = {
  topBar: {
    phone: "+52 55 4000 7890",
    email: "contact@ortopectus.com",
    address: "Av. Reforma 550, Suite 1200, Mexico City",
    followUs: "Follow Us On:",
  },
  nav: ["Home", "About Us", "Services", "Doctors", "Contact Us"],
  langBtn: "ES",
  appointmentBtn: "Book Appointment",
  heroBadge: "24/7 EMERGENCY SERVICE",
  heroH1a: "Caring for",
  heroH1b: "Health",
  heroH1c: "Caring for You",
  heroP:
    "Where precision surgery meets aesthetic refinement. Our internationally trained specialists deliver minimally invasive thoracic and aesthetic solutions with measurable outcomes.",
  heroBtn1: "DISCOVER MORE",
  heroBtn2: "SEE ALL SERVICES",

  aboutBadge: "ABOUT US — ORTOPECTUS",
  aboutH2: "Advanced Thoracic & Aesthetic Care Solutions",
  aboutP:
    "Our integral thoracic & aesthetic clinic combines world-class surgical expertise with compassionate patient care. We are committed to delivering the highest standards in thoracic medicine and aesthetic surgery.",
  aboutFeatures: [
    "Specialized Thoracic Surgeons",
    "Advanced Medical Equipment",
    "Minimally Invasive Techniques",
    "International Standards",
    "Aesthetic Surgery Excellence",
    "Post-operative Recovery",
  ],
  aboutBtn: "MORE ABOUT US",

  ctaH2: "We're Welcoming New Patients And Can't Wait To Meet You!",
  ctaP: "Our integral clinic specializes in thoracic surgery and aesthetic procedures. We provide comprehensive care from diagnosis through recovery, with internationally trained specialists dedicated to your wellbeing.",
  ctaBtn1: "BOOK APPOINTMENT",
  ctaBtn2: "GET FREE CONSULTING",

  whyBadge: "WHY CHOOSE US",
  whyH2: "We Are Always Open For Your Health Services",
  whyItems: [
    {
      h: "Compassionate & Expert Care",
      p: "Our team of dedicated thoracic surgeons combines years of experience with a genuine commitment to providing the best possible outcomes for every patient.",
    },
    {
      h: "Patient-Centered Approach",
      p: "Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions, and develop personalized treatment plans.",
    },
    {
      h: "Personalized Treatment Plans",
      p: "Every patient is unique. We create customized surgical and recovery plans tailored to your specific condition, body type, and aesthetic goals.",
    },
  ],

  stats: [
    { num: 1200, suffix: "+", label: "Surgeries Performed" },
    { num: 15, suffix: "+", label: "Years of Experience" },
    { num: 98, suffix: "%", label: "Recovery Success" },
    { num: 30, suffix: "+", label: "Awards & Certifications" },
  ],

  doctorsBadge: "EXPERT DOCTORS",
  doctorsH2: "Meet Our Professional Surgeons",
  doctors: [
    { name: "Dr. Carlos Mendez", specialty: "Thoracic Surgeon" },
    { name: "Dr. Laura Vega", specialty: "Aesthetic Specialist" },
    { name: "Dr. Miguel Herrera", specialty: "Reconstructive Surgery" },
    { name: "Dr. Sofia Ramirez", specialty: "Pain Management" },
  ],

  svcBadge: "OUR SPECIALISATIONS",
  svcH2: "Comprehensive Thoracic & Aesthetic Services",
  services: [
    {
      h: "Chest Deformities",
      p: "Pectus excavatum & carinatum correction with advanced minimally invasive techniques.",
      icon: "chest",
    },
    {
      h: "Thoracic Reconstruction",
      p: "Advanced chest wall reconstruction & repair for complex thoracic conditions.",
      icon: "reconstruction",
    },
    {
      h: "Rib Remodeling",
      p: "Cosmetic rib reshaping & symmetry for improved aesthetics and function.",
      icon: "rib",
    },
    {
      h: "Pain Management",
      p: "Multimodal interventional protocols for chronic thoracic pain relief.",
      icon: "pain",
    },
    {
      h: "Thoracic Trauma Care",
      p: "Emergency treatment for rib fractures, pneumothorax & thoracic injuries.",
      icon: "trauma",
    },
    {
      h: "Hyperhidrosis Treatment",
      p: "Endoscopic thoracic sympathectomy for excessive sweating resolution.",
      icon: "sweat",
    },
  ],

  scheduleH2: "Working Hours",
  scheduleDesc: "Visit us during our regular hours for consultations and treatments.",
  schedule: [
    { day: "Monday – Tuesday:", time: "9am – 6pm" },
    { day: "Wednesday – Thursday:", time: "8am – 5pm" },
    { day: "Friday:", time: "7am – 10pm" },
    { day: "Saturday:", time: "10am – 7pm" },
    { day: "Sunday:", time: "Closed" },
  ],
  appointFormH2: "Make An Appointment",
  formLabels: { name: "Your Name", email: "Your Email", phone: "Phone Number", dept: "Choose Department", date: "Date", time: "Time" },
  formBtn: "BOOK AN APPOINTMENT",
  departments: ["Thoracic Surgery", "Aesthetic Surgery", "Rib Remodeling", "Pain Management", "Trauma Care"],

  processBadge: "WORK PROCESS",
  processH2: "Let's See How We Work",
  processSteps: [
    { num: "01", h: "Book Appointment", p: "Schedule your initial consultation online or by phone." },
    { num: "02", h: "Consultation", p: "Meet with our specialist for diagnosis and treatment planning." },
    { num: "03", h: "Treatment Plan", p: "Receive your personalized surgical or therapeutic plan." },
    { num: "04", h: "Recovery", p: "Expert post-operative care for rapid, comfortable recovery." },
  ],

  contactLabel: "SCHEDULE A CONSULTATION",
  contactH2: "Start Your Treatment Journey Today",
  contactDesc: "Our patient coordinators are available Mon–Sat. All inquiries are treated with complete confidentiality.",
  contactDetails: [
    "Av. Reforma 550, Suite 1200, Mexico City",
    "+52 55 4000 7890",
    "contact@ortopectus.com",
    "Mon–Sat · 8:00 – 18:00",
  ],

  footerDesc: "Integral Thoracic & Aesthetic Clinic providing world-class surgical care in Mexico City.",
  footerHeadings: ["Services", "Quick Links", "Contact Info"],
  footerServices: ["Chest Deformities", "Thoracic Reconstruction", "Rib Remodeling", "Pain Management", "Hyperhidrosis"],
  footerLinks: ["About Us", "Our Doctors", "Appointments", "Patient Portal", "Insurance & Billing"],
  footerContact: ["+52 55 4000 7890", "contact@ortopectus.com", "Av. Reforma 550, Mexico City", "Mon–Sat, 8:00–18:00"],
  footerCopy: "© 2026 Ortopectus. All rights reserved.",

  successTitle: "Request Received!",
  successMsg: "We'll contact you within 24 hours.",
};

const es: typeof en = {
  topBar: {
    phone: "+52 55 4000 7890",
    email: "contact@ortopectus.com",
    address: "Av. Reforma 550, Suite 1200, Ciudad de México",
    followUs: "Síguenos:",
  },
  nav: ["Inicio", "Nosotros", "Servicios", "Médicos", "Contacto"],
  langBtn: "EN",
  appointmentBtn: "CITA AHORA",
  heroBadge: "SERVICIO DE EMERGENCIA 24/7",
  heroH1a: "Cuidando tu",
  heroH1b: "Salud",
  heroH1c: "Cuidando de Ti",
  heroP:
    "Donde la cirugía de precisión se une al refinamiento estético. Nuestros especialistas con formación internacional ofrecen soluciones mínimamente invasivas con resultados medibles.",
  heroBtn1: "DESCUBRIR MÁS",
  heroBtn2: "VER SERVICIOS",

  aboutBadge: "NOSOTROS — ORTOPECTUS",
  aboutH2: "Soluciones Avanzadas en Cirugía Torácica y Estética",
  aboutP:
    "Nuestra clínica integral torácica y estética combina experiencia quirúrgica de clase mundial con atención compasiva al paciente. Nos comprometemos a ofrecer los más altos estándares en medicina torácica y cirugía estética.",
  aboutFeatures: [
    "Cirujanos Torácicos Especializados",
    "Equipamiento Médico Avanzado",
    "Técnicas Mínimamente Invasivas",
    "Estándares Internacionales",
    "Excelencia en Cirugía Estética",
    "Recuperación Posoperatoria",
  ],
  aboutBtn: "MÁS SOBRE NOSOTROS",

  ctaH2: "¡Damos la Bienvenida a Nuevos Pacientes y Esperamos Conocerte!",
  ctaP: "Nuestra clínica integral se especializa en cirugía torácica y procedimientos estéticos. Brindamos atención integral desde el diagnóstico hasta la recuperación.",
  ctaBtn1: "RESERVAR CITA",
  ctaBtn2: "CONSULTA GRATUITA",

  whyBadge: "POR QUÉ ELEGIRNOS",
  whyH2: "Siempre Abiertos Para Su Salud",
  whyItems: [
    {
      h: "Atención Experta y Compasiva",
      p: "Nuestro equipo de cirujanos torácicos dedicados combina años de experiencia con un compromiso genuino para brindar los mejores resultados.",
    },
    {
      h: "Enfoque Centrado en el Paciente",
      p: "Su salud y bienestar son nuestras principales prioridades. Nos tomamos el tiempo para escuchar sus inquietudes y responder sus preguntas.",
    },
    {
      h: "Planes de Tratamiento Personalizados",
      p: "Cada paciente es único. Creamos planes quirúrgicos y de recuperación personalizados según su condición, tipo de cuerpo y objetivos.",
    },
  ],

  stats: [
    { num: 1200, suffix: "+", label: "Cirugías Realizadas" },
    { num: 15, suffix: "+", label: "Años de Experiencia" },
    { num: 98, suffix: "%", label: "Éxito en Recuperación" },
    { num: 30, suffix: "+", label: "Premios y Certificaciones" },
  ],

  doctorsBadge: "MÉDICOS EXPERTOS",
  doctorsH2: "Conozca a Nuestros Cirujanos",
  doctors: [
    { name: "Dr. Carlos Mendez", specialty: "Cirujano Torácico" },
    { name: "Dra. Laura Vega", specialty: "Especialista Estética" },
    { name: "Dr. Miguel Herrera", specialty: "Cirugía Reconstructiva" },
    { name: "Dra. Sofia Ramirez", specialty: "Manejo del Dolor" },
  ],

  svcBadge: "NUESTRAS ESPECIALIZACIONES",
  svcH2: "Servicios Integrales Torácicos y Estéticos",
  services: [
    {
      h: "Deformidades del Tórax",
      p: "Corrección de pectus excavatum y carinatum con técnicas mínimamente invasivas avanzadas.",
      icon: "chest",
    },
    {
      h: "Reconstrucción Torácica",
      p: "Reconstrucción avanzada de pared torácica para condiciones complejas.",
      icon: "reconstruction",
    },
    {
      h: "Remodelado de Costillas",
      p: "Remodelado cosmético y simetría para mejor estética y función.",
      icon: "rib",
    },
    {
      h: "Manejo del Dolor",
      p: "Protocolos intervencionales multimodales para alivio del dolor torácico crónico.",
      icon: "pain",
    },
    {
      h: "Trauma Torácico",
      p: "Tratamiento de emergencia para fracturas costales, neumotórax y lesiones torácicas.",
      icon: "trauma",
    },
    {
      h: "Tratamiento Hiperhidrosis",
      p: "Simpatectomía torácica endoscópica para resolución de sudoración excesiva.",
      icon: "sweat",
    },
  ],

  scheduleH2: "Horario de Atención",
  scheduleDesc: "Visítenos durante nuestro horario regular para consultas y tratamientos.",
  schedule: [
    { day: "Lunes – Martes:", time: "9am – 6pm" },
    { day: "Miércoles – Jueves:", time: "8am – 5pm" },
    { day: "Viernes:", time: "7am – 10pm" },
    { day: "Sábado:", time: "10am – 7pm" },
    { day: "Domingo:", time: "Cerrado" },
  ],
  appointFormH2: "Agendar una Cita",
  formLabels: { name: "Su Nombre", email: "Su Correo", phone: "Teléfono", dept: "Elegir Departamento", date: "Fecha", time: "Hora" },
  formBtn: "AGENDAR CITA",
  departments: ["Cirugía Torácica", "Cirugía Estética", "Remodelado de Costillas", "Manejo del Dolor", "Trauma"],

  processBadge: "PROCESO DE TRABAJO",
  processH2: "Cómo Trabajamos",
  processSteps: [
    { num: "01", h: "Agendar Cita", p: "Programe su consulta inicial en línea o por teléfono." },
    { num: "02", h: "Consulta", p: "Reunión con nuestro especialista para diagnóstico y planificación." },
    { num: "03", h: "Plan de Tratamiento", p: "Reciba su plan quirúrgico o terapéutico personalizado." },
    { num: "04", h: "Recuperación", p: "Atención posoperatoria experta para una recuperación rápida." },
  ],

  contactLabel: "AGENDAR UNA CONSULTA",
  contactH2: "Comience su Viaje de Tratamiento Hoy",
  contactDesc: "Nuestros coordinadores están disponibles Lun–Sáb. Toda consulta se trata con absoluta confidencialidad.",
  contactDetails: [
    "Av. Reforma 550, Suite 1200, Ciudad de México",
    "+52 55 4000 7890",
    "contact@ortopectus.com",
    "Lun–Sáb · 8:00 – 18:00",
  ],

  footerDesc: "Clínica Integral Torácica y Estética brindando atención quirúrgica de clase mundial en la Ciudad de México.",
  footerHeadings: ["Servicios", "Enlaces Rápidos", "Contacto"],
  footerServices: ["Deformidades del Tórax", "Reconstrucción Torácica", "Remodelado de Costillas", "Manejo del Dolor", "Hiperhidrosis"],
  footerLinks: ["Nosotros", "Nuestros Médicos", "Citas", "Portal del Paciente", "Seguros y Facturación"],
  footerContact: ["+52 55 4000 7890", "contact@ortopectus.com", "Av. Reforma 550, CDMX", "Lun–Sáb, 8:00–18:00"],
  footerCopy: "© 2026 Ortopectus. Todos los derechos reservados.",

  successTitle: "¡Solicitud Recibida!",
  successMsg: "Le contactaremos dentro de 24 horas.",
};

/* ══════════════════════════════════════════
   SVG ICONS
   ══════════════════════════════════════════ */

function MedicalCross({ size = 24, color = "#00C897" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2h6v6h6v6h-6v6H9v-6H3V8h6z" fill={color} opacity=".15" stroke={color} />
    </svg>
  );
}

function HeartPulse({ color = "#00C897" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 11H7v-1h4.5V7h1v6z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

/* Service Icons */
function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    chest: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" /><path d="M2 20h20" /><path d="M14 12v.01" /><path d="M12 8v8" /><path d="M8 12h8" />
      </svg>
    ),
    reconstruction: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="M8 12h8" />
      </svg>
    ),
    rib: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01z" />
      </svg>
    ),
    pain: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    trauma: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    sweat: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
  };
  return icons[type] || icons.chest;
}

/* ══════════════════════════════════════════
   ANIMATED COUNTER HOOK
   ══════════════════════════════════════════ */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref };
}

/* ══════════════════════════════════════════
   IMAGE PLACEHOLDER PATHS
   ──────────────────────────────────────────
   Drop your images in /public with these names:
   - /hero-doctor.png
   - /about-1.jpg, /about-2.jpg, /about-3.jpg, /about-4.jpg
   - /doctors-group.jpg
   - /surgery.jpg
   - /doctor-1.jpg, /doctor-2.jpg, /doctor-3.jpg, /doctor-4.jpg
   - /process-1.jpg, /process-2.jpg, /process-3.jpg, /process-4.jpg
   - /schedule-1.jpg, /schedule-2.jpg
   ══════════════════════════════════════════ */

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = lang === "en" ? en : es;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stat0 = useCounter(t.stats[0].num);
  const stat1 = useCounter(t.stats[1].num);
  const stat2 = useCounter(t.stats[2].num);
  const stat3 = useCounter(t.stats[3].num);
  const statRefs = [stat0, stat1, stat2, stat3];

  return (
    <>
      <style>{`
        /* ═══════════════════════════════
           TOP INFO BAR
           ═══════════════════════════════ */
        .top-bar {
          background: var(--navy);
          color: rgba(255,255,255,.85);
          font-size: 12.5px;
          padding: 8px 0;
        }
        .top-bar-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .top-bar-left {
          display: flex; align-items: center; gap: 24px;
        }
        .top-bar-item {
          display: flex; align-items: center; gap: 6px;
          color: rgba(255,255,255,.8);
        }
        .top-bar-right {
          display: flex; align-items: center; gap: 16px;
        }
        .top-bar-right .lang-btn {
          background: transparent; border: 1px solid rgba(255,255,255,.25);
          color: #fff; padding: 3px 12px; border-radius: 4px;
          font-size: 11px; font-weight: 600; cursor: pointer;
          transition: all var(--transition);
        }
        .top-bar-right .lang-btn:hover {
          background: rgba(255,255,255,.1);
        }
        .social-icons {
          display: flex; gap: 8px; align-items: center;
        }
        .social-icons span {
          font-size: 11.5px; color: rgba(255,255,255,.6);
        }
        .social-icon {
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(255,255,255,.1);
          display: flex; align-items: center; justify-content: center;
          transition: all var(--transition); cursor: pointer;
        }
        .social-icon:hover { background: var(--green); }
        .social-icon svg { width: 13px; height: 13px; fill: white; }

        /* ═══════════════════════════════
           NAVBAR
           ═══════════════════════════════ */
        .navbar {
          background: ${scrolled ? 'white' : 'rgba(255,255,255,.97)'};
          position: sticky; top: 0; z-index: 100;
          box-shadow: ${scrolled ? '0 4px 20px rgba(0,0,0,.1)' : '0 2px 8px rgba(0,0,0,.05)'};
          transition: all .3s ease;
        }
        .navbar-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          display: flex; align-items: center; height: 72px;
        }
        .nav-logo {
          display: flex; align-items: center; gap: 10px;
          margin-right: 48px; flex-shrink: 0;
        }
        .nav-logo-icon {
          width: 44px; height: 44px;
          background: linear-gradient(135deg, var(--blue), var(--green));
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }
        .nav-brand { font-size: 18px; font-weight: 800; color: var(--navy); letter-spacing: .02em; }
        .nav-sub { font-size: 10px; color: var(--text-muted); letter-spacing: .06em; font-weight: 500; }
        .nav-links { display: flex; align-items: center; gap: 4px; flex: 1; }
        .nav-links a {
          color: var(--navy); font-size: 14px; font-weight: 600;
          padding: 8px 16px; border-radius: 6px;
          transition: all var(--transition);
          position: relative;
        }
        .nav-links a:hover { color: var(--blue); background: var(--bg-light); }
        .nav-right {
          margin-left: auto; display: flex; align-items: center; gap: 14px;
        }
        .nav-search-btn {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid var(--border);
          background: transparent; color: var(--text-light);
          display: flex; align-items: center; justify-content: center;
          transition: all var(--transition); cursor: pointer;
        }
        .nav-search-btn:hover { border-color: var(--blue); color: var(--blue); }
        .btn-appointment {
          background: var(--green); color: white;
          font-size: 12px; font-weight: 700;
          padding: 12px 24px; border-radius: var(--radius);
          border: none; letter-spacing: .05em;
          transition: all var(--transition);
          white-space: nowrap;
        }
        .btn-appointment:hover { background: var(--green-dark); transform: translateY(-1px); }

        /* ═══════════════════════════════
           HERO
           ═══════════════════════════════ */
        .hero {
          position: relative;
          min-height: 600px;
          background: linear-gradient(135deg, #EBF3FF 0%, #F0F7FF 40%, #E8F4FE 70%, #F5FAFF 100%);
          display: flex; align-items: center;
          overflow: hidden;
          padding: 60px 0;
        }
        .hero-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: 40px;
          position: relative; z-index: 2;
        }
        .hero-content { max-width: 520px; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          color: var(--green); font-size: 13px; font-weight: 700;
          letter-spacing: .08em; margin-bottom: 20px;
        }
        .hero-badge svg { flex-shrink: 0; }
        .hero h1 {
          font-size: 52px; font-weight: 800; line-height: 1.1;
          color: var(--navy); margin-bottom: 20px;
        }
        .hero h1 .highlight {
          color: var(--green);
          position: relative;
        }
        .hero h1 .highlight::after {
          content: '';
          position: absolute; bottom: 2px; left: 0; right: 0;
          height: 3px; background: var(--green); border-radius: 2px;
        }
        .hero p {
          font-size: 15px; color: var(--text-light);
          line-height: 1.8; margin-bottom: 32px; max-width: 440px;
        }
        .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-blue {
          background: var(--blue); color: white;
          font-size: 12px; font-weight: 700;
          padding: 14px 28px; border-radius: var(--radius);
          border: none; letter-spacing: .06em;
          transition: all var(--transition);
        }
        .btn-blue:hover { background: var(--blue-dark); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(11,92,255,.3); }
        .btn-outline {
          background: transparent; color: var(--navy);
          font-size: 12px; font-weight: 700;
          padding: 13px 28px; border-radius: var(--radius);
          border: 2px solid var(--navy); letter-spacing: .06em;
          transition: all var(--transition);
        }
        .btn-outline:hover { background: var(--navy); color: white; }
        .hero-image {
          position: relative; display: flex;
          justify-content: center; align-items: flex-end;
          height: 480px;
        }
        .hero-image-wrapper {
          position: relative; width: 380px; height: 460px;
          border-radius: 0 0 190px 190px;
          overflow: hidden; z-index: 2;
        }
        .hero-image-bg {
          position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
          width: 360px; height: 420px;
          background: var(--blue);
          border-radius: 0 0 180px 180px;
          z-index: 1;
        }

        /* Decorative shapes */
        .deco-cross-1 { position: absolute; top: 60px; right: 80px; z-index: 3; animation: float 4s ease-in-out infinite; }
        .deco-cross-2 { position: absolute; top: 140px; left: 40px; z-index: 1; animation: float 5s ease-in-out infinite 1s; }
        .deco-cross-3 { position: absolute; bottom: 100px; right: 40px; z-index: 3; animation: float 3.5s ease-in-out infinite .5s; }
        .deco-dots {
          position: absolute; top: 80px; left: -10px; z-index: 1;
          display: grid; grid-template-columns: repeat(5,8px); gap: 6px;
        }
        .deco-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue); opacity: .3;
        }
        .deco-circle-outline {
          position: absolute; bottom: 80px; left: -30px;
          width: 180px; height: 180px; border-radius: 50%;
          border: 2px solid rgba(11,92,255,.1);
          z-index: 0;
        }
        .deco-circle-fill {
          position: absolute; top: -40px; right: -60px;
          width: 200px; height: 200px; border-radius: 50%;
          background: rgba(11,92,255,.05);
          z-index: 0;
        }
        .deco-bracket {
          position: absolute; top: 170px; left: 20px;
          width: 24px; height: 24px; border-left: 3px solid var(--blue);
          border-top: 3px solid var(--blue); z-index: 1;
        }
        .deco-bracket-2 {
          position: absolute; bottom: 120px; right: 60px;
          width: 20px; height: 20px; border-right: 3px solid var(--blue);
          border-bottom: 3px solid var(--blue); z-index: 1;
        }

        /* ═══════════════════════════════
           ABOUT SECTION
           ═══════════════════════════════ */
        .about {
          padding: 90px 0;
          background: white;
          position: relative;
          overflow: hidden;
        }
        .about::after {
          content: ''; position: absolute;
          right: -100px; top: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0,200,151,.05) 0%, transparent 60%);
          pointer-events: none;
        }
        .about-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center;
        }
        .about-photos {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 16px; position: relative;
        }
        .about-photo {
          border-radius: var(--radius-lg);
          overflow: hidden; position: relative;
          height: 200px; background: var(--bg-section);
        }
        .about-photo:nth-child(1) { border-radius: var(--radius-lg) var(--radius-lg) 0 var(--radius-lg); }
        .about-photo:nth-child(2) { border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 0; }
        .about-photo:nth-child(3) {
          border-radius: 0 var(--radius-lg) var(--radius-lg) var(--radius-lg);
          grid-column: 1 / 2;
        }
        .about-photo:nth-child(4) {
          border-radius: var(--radius-lg) 0 var(--radius-lg) var(--radius-lg);
        }
        .about-doctor-card {
          position: absolute; bottom: -20px; left: 50%;
          transform: translateX(-50%);
          background: white; border-radius: var(--radius-lg);
          padding: 16px 24px; box-shadow: var(--shadow-lg);
          text-align: center; z-index: 2; min-width: 200px;
        }
        .about-doctor-card h4 { font-size: 14px; font-weight: 700; color: var(--navy); margin-bottom: 2px; }
        .about-doctor-card p { font-size: 11px; color: var(--text-muted); margin-bottom: 6px; }
        .about-doctor-card .stars { color: #FFB800; font-size: 13px; margin-bottom: 4px; }
        .about-doctor-card .phone-link { font-size: 12px; color: var(--green); font-weight: 600; display: flex; align-items: center; gap: 4px; justify-content: center; }

        .about-content { }
        .section-badge {
          display: inline-flex; align-items: center; gap: 8px;
          color: var(--green); font-size: 13px; font-weight: 700;
          letter-spacing: .08em; margin-bottom: 14px;
          text-transform: uppercase;
        }
        .section-title {
          font-size: 36px; font-weight: 800; color: var(--navy);
          line-height: 1.2; margin-bottom: 18px;
        }
        .section-desc {
          font-size: 14.5px; color: var(--text-light);
          line-height: 1.8; margin-bottom: 24px;
        }
        .about-features {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px;
          margin-bottom: 28px;
        }
        .about-feature {
          display: flex; align-items: center; gap: 10px;
          font-size: 14px; font-weight: 600; color: var(--navy);
        }
        .btn-green-filled {
          display: inline-block;
          background: var(--green); color: white;
          font-size: 12px; font-weight: 700;
          padding: 14px 32px; border-radius: var(--radius);
          border: none; letter-spacing: .06em;
          transition: all var(--transition);
        }
        .btn-green-filled:hover { background: var(--green-dark); transform: translateY(-1px); }

        /* ═══════════════════════════════
           CTA BANNER
           ═══════════════════════════════ */
        .cta-banner {
          background: var(--blue);
          min-height: 340px;
          display: flex; align-items: center;
          position: relative; overflow: hidden;
        }
        .cta-banner::before {
          content: 'ORTOPECTUS';
          position: absolute; top: -20px; left: -20px;
          font-size: 160px; font-weight: 900;
          color: rgba(255,255,255,.05);
          letter-spacing: .05em; white-space: nowrap;
          pointer-events: none;
        }
        .cta-inner {
          max-width: 1200px; margin: 0 auto; padding: 40px 24px;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: 40px;
          position: relative; z-index: 1;
        }
        .cta-content h2 {
          font-size: 34px; font-weight: 800; color: white;
          line-height: 1.2; margin-bottom: 16px;
        }
        .cta-content p {
          font-size: 14px; color: rgba(255,255,255,.7);
          line-height: 1.8; margin-bottom: 28px; max-width: 420px;
        }
        .cta-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-white {
          background: white; color: var(--blue);
          font-size: 12px; font-weight: 700;
          padding: 14px 28px; border-radius: var(--radius);
          border: none; letter-spacing: .06em;
          transition: all var(--transition);
        }
        .btn-white:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,.2); }
        .btn-white-outline {
          background: transparent; color: white;
          font-size: 12px; font-weight: 700;
          padding: 13px 28px; border-radius: var(--radius);
          border: 2px solid rgba(255,255,255,.5);
          letter-spacing: .06em;
          transition: all var(--transition);
        }
        .btn-white-outline:hover { background: rgba(255,255,255,.1); border-color: white; }
        .cta-image {
          display: flex; justify-content: flex-end; align-items: flex-end;
          position: relative; height: 320px;
        }
        .cta-image-wrapper {
          position: relative; width: 100%; height: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        /* ═══════════════════════════════
           WHY CHOOSE US
           ═══════════════════════════════ */
        .why {
          padding: 90px 0;
          background: white;
        }
        .why-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center;
        }
        .why-item {
          display: flex; gap: 18px; margin-bottom: 28px;
          padding-bottom: 28px; border-bottom: 1px solid var(--border);
        }
        .why-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .why-num {
          width: 48px; height: 48px; border-radius: 50%;
          background: linear-gradient(135deg, var(--green), #00E5A0);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; font-weight: 800; color: white;
          flex-shrink: 0;
        }
        .why-text h4 { font-size: 17px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
        .why-text p { font-size: 13.5px; color: var(--text-light); line-height: 1.7; }
        .why-image {
          position: relative; height: 420px;
          border-radius: var(--radius-xl);
          overflow: hidden;
        }
        .why-play-btn {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 64px; height: 64px; border-radius: 50%;
          background: var(--blue); border: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all var(--transition);
          box-shadow: 0 8px 30px rgba(11,92,255,.4);
        }
        .why-play-btn:hover { transform: translate(-50%, -50%) scale(1.08); }

        /* ═══════════════════════════════
           STATS
           ═══════════════════════════════ */
        .stats-bar {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
          padding: 36px 0;
        }
        .stats-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .stat-item {
          text-align: center; padding: 10px 20px;
          border-right: 1px solid rgba(255,255,255,.12);
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-size: 44px; font-weight: 900; color: white;
          line-height: 1; margin-bottom: 6px;
        }
        .stat-num .suffix { color: var(--green); }
        .stat-label {
          font-size: 12.5px; color: rgba(255,255,255,.55);
          letter-spacing: .04em;
        }

        /* ═══════════════════════════════
           DOCTORS
           ═══════════════════════════════ */
        .doctors {
          padding: 90px 0;
          background: var(--bg-light);
          position: relative;
        }
        .doctors-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          text-align: center;
        }
        .doctors-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 24px; margin-top: 40px;
        }
        .doctor-card {
          text-align: center;
          transition: all var(--transition);
        }
        .doctor-card:hover { transform: translateY(-4px); }
        .doctor-photo {
          width: 100%; height: 280px;
          border-radius: var(--radius-xl);
          overflow: hidden; position: relative;
          background: linear-gradient(135deg, #E0F5EF 0%, #D4F2E9 100%);
          margin-bottom: 18px;
        }
        .doctor-photo-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(10,27,63,.6) 100%);
          opacity: 0; transition: opacity var(--transition);
        }
        .doctor-card:hover .doctor-photo-overlay { opacity: 1; }
        .doctor-social {
          position: absolute; bottom: 16px; left: 50%;
          transform: translateX(-50%);
          display: flex; gap: 8px;
          opacity: 0; transition: all var(--transition);
        }
        .doctor-card:hover .doctor-social { opacity: 1; }
        .doctor-social a {
          width: 32px; height: 32px; border-radius: 50%;
          background: var(--blue); display: flex;
          align-items: center; justify-content: center;
          transition: all var(--transition);
        }
        .doctor-social a:hover { background: var(--green); }
        .doctor-card h4 { font-size: 17px; font-weight: 700; color: var(--navy); margin-bottom: 4px; }
        .doctor-card p { font-size: 13px; color: var(--text-muted); }

        /* ═══════════════════════════════
           SERVICES
           ═══════════════════════════════ */
        .services {
          padding: 90px 0;
          background: white;
        }
        .services-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          text-align: center;
        }
        .services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 24px; margin-top: 40px;
          text-align: left;
        }
        .service-card {
          background: white; border-radius: var(--radius-lg);
          padding: 32px 28px;
          border: 1px solid var(--border);
          transition: all var(--transition);
          position: relative; overflow: hidden;
        }
        .service-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--green));
          transform: scaleX(0); transform-origin: left;
          transition: transform var(--transition);
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }
        .service-card:hover::after { transform: scaleX(1); }
        .service-icon {
          width: 60px; height: 60px; border-radius: var(--radius);
          background: linear-gradient(135deg, var(--blue), #3D7FFF);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: all var(--transition);
        }
        .service-card:hover .service-icon {
          background: linear-gradient(135deg, var(--green), #00E5A0);
        }
        .service-card h4 { font-size: 17px; font-weight: 700; color: var(--navy); margin-bottom: 10px; }
        .service-card p { font-size: 13.5px; color: var(--text-light); line-height: 1.7; }

        /* ═══════════════════════════════
           SCHEDULE + APPOINTMENT
           ═══════════════════════════════ */
        .schedule-section {
          padding: 90px 0;
          background: var(--bg-light);
          position: relative;
        }
        .schedule-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 40px; align-items: start;
        }
        .schedule-left {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .schedule-card {
          background: var(--blue);
          border-radius: var(--radius-lg);
          padding: 28px 24px;
          color: white;
          grid-row: 1 / 3;
        }
        .schedule-card h3 { font-size: 22px; font-weight: 800; margin-bottom: 8px; }
        .schedule-card .desc { font-size: 12.5px; color: rgba(255,255,255,.65); margin-bottom: 20px; line-height: 1.6; }
        .schedule-row {
          display: flex; justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,.15);
          font-size: 13px;
        }
        .schedule-row:last-child { border-bottom: none; }
        .schedule-row .day { color: rgba(255,255,255,.8); }
        .schedule-row .time { color: white; font-weight: 600; }
        .schedule-img {
          border-radius: var(--radius-lg); overflow: hidden;
          height: 180px; position: relative;
          background: var(--bg-section);
        }

        .appointment-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: 36px;
          box-shadow: var(--shadow-md);
        }
        .appointment-card h3 { font-size: 24px; font-weight: 800; color: var(--navy); margin-bottom: 24px; }
        .form-input-wrap {
          position: relative; margin-bottom: 16px;
        }
        .form-input-wrap input,
        .form-input-wrap select {
          width: 100%; padding: 14px 16px 14px 44px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          font-size: 14px; color: var(--text);
          background: var(--bg-light);
          outline: none;
          transition: border var(--transition);
        }
        .form-input-wrap select {
          appearance: none; -webkit-appearance: none;
          cursor: pointer;
        }
        .form-input-wrap input:focus,
        .form-input-wrap select:focus { border-color: var(--blue); }
        .form-input-wrap input::placeholder { color: var(--text-muted); }
        .form-input-wrap .input-icon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          display: flex; align-items: center;
        }
        .form-row-2 {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }
        .btn-green-lg {
          width: 100%; padding: 16px;
          background: var(--green); color: white;
          font-size: 13px; font-weight: 700;
          border: none; border-radius: var(--radius);
          letter-spacing: .06em;
          transition: all var(--transition);
        }
        .btn-green-lg:hover { background: var(--green-dark); }

        /* ═══════════════════════════════
           WORK PROCESS
           ═══════════════════════════════ */
        .process {
          padding: 90px 0;
          background: white;
          text-align: center;
        }
        .process-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
        }
        .process-steps {
          display: flex; align-items: flex-start;
          justify-content: center; gap: 16px;
          margin-top: 50px; position: relative;
        }
        .process-step {
          display: flex; flex-direction: column;
          align-items: center; flex: 1; max-width: 220px;
          position: relative;
        }
        .process-circle {
          width: 120px; height: 120px; border-radius: 50%;
          overflow: hidden; position: relative;
          border: 3px solid var(--green);
          background: var(--bg-section);
          margin-bottom: 20px;
        }
        .process-num {
          position: absolute; top: 0; right: 20px;
          width: 32px; height: 32px; border-radius: 50%;
          background: var(--green); color: white;
          font-size: 13px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          z-index: 5; border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .process-step h4 { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
        .process-step p { font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }
        .process-arrow {
          position: absolute; top: 55px; right: -30px;
          color: var(--text-muted); opacity: .4;
          font-size: 28px;
        }
        .process-step:last-child .process-arrow { display: none; }

        /* ═══════════════════════════════
           FOOTER
           ═══════════════════════════════ */
        .footer {
          background: var(--navy);
          padding: 60px 0 0;
        }
        .footer-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
        }
        .footer-grid {
          display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 32px; padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .footer-brand { }
        .footer-logo {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 16px;
        }
        .footer-logo-icon {
          width: 40px; height: 40px;
          background: linear-gradient(135deg, var(--blue), var(--green));
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        }
        .footer-logo-text { font-size: 18px; font-weight: 800; color: white; }
        .footer-desc { font-size: 13px; color: rgba(255,255,255,.45); line-height: 1.8; margin-bottom: 20px; }
        .footer-social {
          display: flex; gap: 8px;
        }
        .footer-social a {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,.08);
          display: flex; align-items: center; justify-content: center;
          transition: all var(--transition);
        }
        .footer-social a:hover { background: var(--green); }
        .footer-col h5 {
          color: white; font-size: 15px; font-weight: 700;
          margin-bottom: 20px;
          position: relative; padding-bottom: 12px;
        }
        .footer-col h5::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; width: 30px; height: 2px;
          background: var(--green);
        }
        .footer-col a {
          display: block; color: rgba(255,255,255,.45);
          font-size: 13.5px; margin-bottom: 12px;
          transition: color var(--transition);
        }
        .footer-col a:hover { color: var(--green); }
        .footer-contact-item {
          display: flex; align-items: center; gap: 10px;
          color: rgba(255,255,255,.45);
          font-size: 13.5px; margin-bottom: 12px;
        }
        .footer-contact-item svg { flex-shrink: 0; color: var(--green); }
        .footer-bottom {
          padding: 20px 0;
          display: flex; justify-content: space-between;
          align-items: center;
        }
        .footer-copy { color: rgba(255,255,255,.3); font-size: 12px; }
        .footer-links a {
          color: rgba(255,255,255,.3); font-size: 12px;
          margin-left: 20px;
        }
        .footer-links a:hover { color: rgba(255,255,255,.7); }

        /* ═══════════════════════════════
           RESPONSIVE
           ═══════════════════════════════ */
        @media (max-width: 960px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-image { display: none; }
          .hero h1 { font-size: 38px; }

          .about-inner { grid-template-columns: 1fr; }
          .about-photos { max-width: 500px; margin: 0 auto; }

          .cta-inner { grid-template-columns: 1fr; }
          .cta-image { display: none; }

          .why-inner { grid-template-columns: 1fr; }
          .why-image { height: 300px; }

          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-item { padding: 20px; border-bottom: 1px solid rgba(255,255,255,.12); }
          .stat-item:nth-child(2) { border-right: none; }

          .doctors-grid { grid-template-columns: repeat(2, 1fr); }

          .services-grid { grid-template-columns: repeat(2, 1fr); }

          .schedule-inner { grid-template-columns: 1fr; }

          .footer-grid { grid-template-columns: 1fr 1fr; }

          .top-bar-left { display: none; }

          .nav-links a { font-size: 12px; padding: 6px 10px; }
        }

        @media (max-width: 640px) {
          .hero h1 { font-size: 30px; }
          .section-title { font-size: 28px; }

          .services-grid { grid-template-columns: 1fr; }
          .doctors-grid { grid-template-columns: 1fr 1fr; }
          .about-features { grid-template-columns: 1fr; }
          .process-steps { flex-direction: column; align-items: center; }
          .process-arrow { display: none !important; }
          .stats-inner { grid-template-columns: 1fr 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
          .schedule-left { grid-template-columns: 1fr; }
          .schedule-card { grid-row: auto; }
          .navbar-inner { height: 60px; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* ═══ TOP BAR ═══ */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <div className="top-bar-item"><PhoneIcon />{t.topBar.phone}</div>
            <div className="top-bar-item"><EmailIcon />{t.topBar.email}</div>
            <div className="top-bar-item"><LocationIcon />{t.topBar.address}</div>
          </div>
          <div className="top-bar-right">
            <button className="lang-btn" onClick={() => setLang(lang === "en" ? "es" : "en")}>
              {t.langBtn}
            </button>
            <div className="social-icons">
              <span>{t.topBar.followUs}</span>
              {["M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z"
              ].map((d, i) => (
                <a key={i} className="social-icon" href="#" aria-label={`Social ${i}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ NAVBAR ═══ */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="nav-logo">
            <div className="nav-logo-icon">
              <MedicalCross size={22} color="white" />
            </div>
            <div>
              <div className="nav-brand">Ortopectus</div>
              <div className="nav-sub">THORACIC & AESTHETIC</div>
            </div>
          </div>

          <div className="nav-links">
            {t.nav.map((label, i) => (
              <a key={i} href={
                i === 0 ? "#" :
                  i === 1 ? "#about" :
                    i === 2 ? "#services" :
                      i === 3 ? "#doctors" :
                        "#contact"
              }>
                {label}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <button className="nav-search-btn" aria-label="Search">
              <SearchIcon />
            </button>
            <button className="btn-appointment" onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}>
              {t.appointmentBtn}
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="hero" id="hero">
        {/* Decorative elements */}
        <div className="deco-dots" style={{ top: 80, left: 60 }}>
          {Array.from({ length: 25 }).map((_, i) => <div className="deco-dot" key={i} />)}
        </div>
        <div className="deco-circle-outline" />
        <div className="deco-circle-fill" />
        <div className="deco-bracket" />
        <div className="deco-bracket-2" />

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <MedicalCross size={20} />
              {t.heroBadge}
            </div>
            <h1>
              {t.heroH1a} <span className="highlight">{t.heroH1b}</span><br />
              {t.heroH1c}
            </h1>
            <p>{t.heroP}</p>
            <div className="hero-btns">
              <button className="btn-blue" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                {t.heroBtn1}
              </button>
              <button className="btn-outline" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                {t.heroBtn2}
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="deco-cross-1"><MedicalCross size={36} color="#0B5CFF" /></div>
            <div className="deco-cross-2"><MedicalCross size={28} color="#00C897" /></div>
            <div className="deco-cross-3"><MedicalCross size={30} color="#0B5CFF" /></div>
            <div className="hero-image-bg" />
            <div className="hero-image-wrapper">
              {/* Drop your hero doctor image at /public/hero-image.png */}
              <Image
                src="/hero-image.png"
                alt="Professional Doctor"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-photos">
            {[1, 2, 3, 4].map(n => (
              <div className="about-photo" key={n}>
                {/* Drop images at /public/about-1.jpg through about-4.jpg */}
                <Image
                  src={`/about-${n}.jpg`}
                  alt={`Medical care ${n}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
            <div className="about-doctor-card">
              <h4>Dr. Carlos Mendez</h4>
              <p>Lead Thoracic Surgeon</p>
              <div className="stars">★★★★★</div>
              <div className="phone-link">
                <PhoneIcon /> {t.topBar.phone}
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="section-badge">
              <MedicalCross size={20} />
              {t.aboutBadge}
            </div>
            <h2 className="section-title">{t.aboutH2}</h2>
            <p className="section-desc">{t.aboutP}</p>
            <div className="about-features">
              {t.aboutFeatures.map((feat, i) => (
                <div className="about-feature" key={i}>
                  <HeartPulse /> {feat}
                </div>
              ))}
            </div>
            <button className="btn-green-filled" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              {t.aboutBtn}
            </button>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="cta-banner">
        <div className="cta-inner">
          <div className="cta-content">
            <h2>{t.ctaH2}</h2>
            <p>{t.ctaP}</p>
            <div className="cta-btns">
              <button className="btn-white" onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}>
                {t.ctaBtn1}
              </button>
              <button className="btn-white-outline">{t.ctaBtn2}</button>
            </div>
          </div>
          <div className="cta-image">
            <div className="cta-image-wrapper">
              {/* Drop your group doctor image at /public/doctors-group.jpg */}
              <Image
                src="/doctors-group.jpg"
                alt="Medical Team"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="why" id="why">
        <div className="why-inner">
          <div>
            <div className="section-badge">
              <MedicalCross size={20} />
              {t.whyBadge}
            </div>
            <h2 className="section-title">{t.whyH2}</h2>

            {t.whyItems.map((item, i) => (
              <div className="why-item" key={i}>
                <div className="why-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="why-text">
                  <h4>{item.h}</h4>
                  <p>{item.p}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="why-image">
            {/* Drop your surgery image at /public/surgery.jpg */}
            <Image
              src="/surgery.jpg"
              alt="Surgery in progress"
              fill
              style={{ objectFit: "cover" }}
            />
            <button className="why-play-btn" aria-label="Play video">
              <PlayIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="stats-bar">
        <div className="stats-inner">
          {t.stats.map((s, i) => (
            <div className="stat-item" key={i} ref={statRefs[i].ref}>
              <div className="stat-num">
                {statRefs[i].count}<span className="suffix">{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ DOCTORS ═══ */}
      <section className="doctors" id="doctors">
        <div className="doctors-inner">
          <div className="section-badge" style={{ justifyContent: "center" }}>
            <MedicalCross size={20} />
            {t.doctorsBadge}
          </div>
          <h2 className="section-title">{t.doctorsH2}</h2>

          <div className="doctors-grid">
            {t.doctors.map((doc, i) => (
              <div className="doctor-card" key={i}>
                <div className="doctor-photo">
                  {/* Drop doctor photos at /public/doctor-1.jpg through doctor-4.jpg */}
                  <Image
                    src={`/doctor-${i + 1}.jpg`}
                    alt={doc.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                  <div className="doctor-photo-overlay" />
                  <div className="doctor-social">
                    {["M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                      "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                      "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                    ].map((d, j) => (
                      <a key={j} href="#" aria-label={`Social ${j}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={d} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
                <h4>{doc.name}</h4>
                <p>{doc.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="services" id="services">
        <div className="services-inner">
          <div className="section-badge" style={{ justifyContent: "center" }}>
            <MedicalCross size={20} />
            {t.svcBadge}
          </div>
          <h2 className="section-title">{t.svcH2}</h2>

          <div className="services-grid">
            {t.services.map((svc, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">
                  <ServiceIcon type={svc.icon} />
                </div>
                <h4>{svc.h}</h4>
                <p>{svc.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SCHEDULE + APPOINTMENT ═══ */}
      <section className="schedule-section" id="appointment">
        <div className="schedule-inner">
          <div className="schedule-left">
            <div className="schedule-card">
              <h3>{t.scheduleH2}</h3>
              <p className="desc">{t.scheduleDesc}</p>
              {t.schedule.map((row, i) => (
                <div className="schedule-row" key={i}>
                  <span className="day">{row.day}</span>
                  <span className="time">{row.time}</span>
                </div>
              ))}
            </div>
            <div className="schedule-img">
              {/* Drop image at /public/schedule-1.jpg */}
              <Image src="/schedule-1.jpg" alt="Doctor with patient" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="schedule-img">
              {/* Drop image at /public/schedule-2.jpg */}
              <Image src="/schedule-2.jpg" alt="Medical team" fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="appointment-card">
            <h3>{t.appointFormH2}</h3>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #00C897, #00E5A0)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>{t.successTitle}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14 }}>{t.successMsg}</p>
              </div>
            ) : (
              <>
                <div className="form-input-wrap">
                  <span className="input-icon"><UserIcon /></span>
                  <input type="text" placeholder={t.formLabels.name} />
                </div>
                <div className="form-input-wrap">
                  <span className="input-icon"><EmailIcon /></span>
                  <input type="email" placeholder={t.formLabels.email} />
                </div>
                <div className="form-input-wrap">
                  <span className="input-icon"><PhoneIcon /></span>
                  <input type="tel" placeholder={t.formLabels.phone} />
                </div>
                <div className="form-input-wrap">
                  <span className="input-icon"><MedicalCross size={16} color="#999" /></span>
                  <select defaultValue="">
                    <option value="" disabled>{t.formLabels.dept}</option>
                    {t.departments.map((d, i) => <option key={i} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="form-row-2">
                  <div className="form-input-wrap">
                    <span className="input-icon"><CalendarIcon /></span>
                    <input type="date" />
                  </div>
                  <div className="form-input-wrap">
                    <span className="input-icon"><ClockIcon /></span>
                    <input type="time" />
                  </div>
                </div>
                <button className="btn-green-lg" onClick={() => setSubmitted(true)} style={{ marginTop: 8 }}>
                  {t.formBtn}
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ═══ WORK PROCESS ═══ */}
      <section className="process">
        <div className="process-inner">
          <div className="section-badge" style={{ justifyContent: "center" }}>
            <MedicalCross size={20} />
            {t.processBadge}
          </div>
          <h2 className="section-title">{t.processH2}</h2>

          <div className="process-steps">
            {t.processSteps.map((step, i) => (
              <div className="process-step" key={i}>
                <div className="process-circle">
                  {/* Drop process images at /public/process-1.jpg through process-4.jpg */}
                  <Image
                    src={`/process-${i + 1}.jpg`}
                    alt={step.h}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="process-num">{step.num}</div>
                <h4>{step.h}</h4>
                <p>{step.p}</p>
                {i < 3 && <span className="process-arrow">⟶</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <MedicalCross size={20} color="white" />
                </div>
                <span className="footer-logo-text">Ortopectus</span>
              </div>
              <p className="footer-desc">{t.footerDesc}</p>
              <div className="footer-social">
                {["M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                  "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                  "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z",
                  "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"
                ].map((d, i) => (
                  <a key={i} href="#" aria-label={`Social ${i}`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h5>{t.footerHeadings[0]}</h5>
              {t.footerServices.map((s, i) => <a key={i} href="#services">{s}</a>)}
            </div>

            <div className="footer-col">
              <h5>{t.footerHeadings[1]}</h5>
              {t.footerLinks.map((l, i) => <a key={i} href="#">{l}</a>)}
            </div>

            <div className="footer-col">
              <h5>{t.footerHeadings[2]}</h5>
              {[
                { icon: <PhoneIcon />, text: t.footerContact[0] },
                { icon: <EmailIcon />, text: t.footerContact[1] },
                { icon: <LocationIcon />, text: t.footerContact[2] },
                { icon: <ClockIcon />, text: t.footerContact[3] },
              ].map((item, i) => (
                <div className="footer-contact-item" key={i}>
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">{t.footerCopy}</span>
            <span className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}