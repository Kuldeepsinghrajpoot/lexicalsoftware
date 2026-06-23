"use client";

import { useState, useEffect } from "react";
import {
  Check, ChevronRight, RotateCcw, Activity, Clock,
  List, Send, X, HelpCircle, Download, Copy,
} from "lucide-react";

interface ProjectType {
  id: string; name: string; emoji: string; desc: string;
  basePoints: number; baseTimeline: string;
  hasPages: boolean; hasScreens: boolean;
}
interface SizeOption {
  id: string; label: string; sublabel: string;
  points: number; timeAdd: string;
}
interface FeatureItem {
  id: string; label: string; points: number; tooltip: string;
}
interface FeatureGroup { group: string; items: FeatureItem[]; }
interface Constraints { disabled: string[]; autoChecked: string[]; }
interface FormData {
  name: string; email: string; phone: string;
  address: string; city: string; state: string; pincode: string;
  hearAbout: string; message: string;
}

const projectTypes: ProjectType[] = [
  { id: "landing", name: "Landing Page", emoji: "🖥️", desc: "Single page to showcase your business or product", basePoints: 2, baseTimeline: "2–4 days", hasPages: false, hasScreens: false },
  { id: "website", name: "Full Website", emoji: "🌐", desc: "Multi-page site with backend & database", basePoints: 8, baseTimeline: "1–3 weeks", hasPages: true, hasScreens: false },
  { id: "app", name: "Mobile App", emoji: "📱", desc: "iOS & Android app (React Native / Flutter)", basePoints: 12, baseTimeline: "3–6 weeks", hasPages: false, hasScreens: true },
  { id: "webapp", name: "Web Application", emoji: "⚙️", desc: "Complex app with auth, dashboard & APIs", basePoints: 15, baseTimeline: "4–8 weeks", hasPages: true, hasScreens: false },
  { id: "ecommerce", name: "E-Commerce Store", emoji: "🛒", desc: "Online store with products, cart & payments", basePoints: 10, baseTimeline: "2–5 weeks", hasPages: true, hasScreens: false },
  { id: "maintenance", name: "Maintenance Plan", emoji: "🔧", desc: "Monthly support, updates & monitoring", basePoints: 1, baseTimeline: "Ongoing", hasPages: false, hasScreens: false },
];

const pageCounts: SizeOption[] = [
  { id: "p1", label: "1–3", sublabel: "pages", points: 0, timeAdd: "" },
  { id: "p2", label: "4–7", sublabel: "pages", points: 2, timeAdd: "+3 days" },
  { id: "p3", label: "8–15", sublabel: "pages", points: 4, timeAdd: "+1 week" },
  { id: "p4", label: "15+", sublabel: "pages", points: 7, timeAdd: "+2 weeks" },
];

const screenCounts: SizeOption[] = [
  { id: "s1", label: "1–5", sublabel: "screens", points: 0, timeAdd: "" },
  { id: "s2", label: "6–12", sublabel: "screens", points: 3, timeAdd: "+1 week" },
  { id: "s3", label: "13–25", sublabel: "screens", points: 6, timeAdd: "+2 weeks" },
  { id: "s4", label: "25+", sublabel: "screens", points: 10, timeAdd: "+4 weeks" },
];

const featureGroups: FeatureGroup[] = [
  {
    group: "Auth & Users",
    items: [
      { id: "auth", label: "User Login / Sign-up", points: 2, tooltip: "Allow users to create accounts and log in securely to your platform." },
      { id: "roles", label: "Role-based Permissions", points: 3, tooltip: "Different access levels for admins, editors, and regular users." },
      { id: "social_login", label: "Google / Social Login", points: 1, tooltip: "Let users sign in with Google — reduces signup friction significantly." },
      { id: "otp", label: "OTP / Phone Verification", points: 2, tooltip: "Verify users via SMS OTP for added security." },
    ],
  },
  {
    group: "Payments",
    items: [
      { id: "razorpay", label: "Razorpay Integration", points: 3, tooltip: "Accept UPI, cards, net banking — best for Indian customers." },
      { id: "stripe", label: "Stripe / International", points: 3, tooltip: "Accept international payments in multiple currencies." },
      { id: "subscription", label: "Subscription / Plans", points: 4, tooltip: "Recurring billing — monthly or yearly plans for users." },
      { id: "invoice", label: "Invoice Generation", points: 2, tooltip: "Auto-generate professional PDF invoices for every transaction." },
    ],
  },
  {
    group: "Communication",
    items: [
      { id: "whatsapp", label: "WhatsApp API", points: 2, tooltip: "Send order updates and alerts via WhatsApp Business API." },
      { id: "sms", label: "SMS Notifications", points: 1, tooltip: "Send OTPs, alerts, or reminders via SMS." },
      { id: "email_notif", label: "Email Notifications", points: 1, tooltip: "Automated emails for signups, orders, and system alerts." },
      { id: "push", label: "Push Notifications", points: 2, tooltip: "Real-time notifications to users' phones or browsers." },
    ],
  },
  {
    group: "Content & CMS",
    items: [
      { id: "blog", label: "Blog / Articles", points: 2, tooltip: "Publish blog posts — great for SEO and building authority." },
      { id: "cms", label: "Content Management (CMS)", points: 4, tooltip: "Update your website content without touching code." },
      { id: "multilang", label: "Multi-language Support", points: 3, tooltip: "Serve users in Hindi, English, or other regional languages." },
      { id: "media", label: "Media Upload & Storage", points: 2, tooltip: "Let users upload images, documents, or videos — stored securely." },
    ],
  },
  {
    group: "Admin & Analytics",
    items: [
      { id: "admin", label: "Admin Dashboard", points: 5, tooltip: "A private panel to manage users, orders, and all content." },
      { id: "analytics", label: "Analytics & Reports", points: 3, tooltip: "Track user behavior, sales, and key metrics in real time." },
      { id: "export", label: "Data Export (CSV/PDF)", points: 1, tooltip: "Let admins download data as spreadsheets or PDF reports." },
      { id: "logs", label: "Activity / Audit Logs", points: 2, tooltip: "Track who did what and when — important for compliance." },
    ],
  },
  {
    group: "SEO & Marketing",
    items: [
      { id: "seo", label: "On-page SEO Setup", points: 1, tooltip: "Helps your website rank on Google and get free organic traffic." },
      { id: "og", label: "Social Share (OG Tags)", points: 1, tooltip: "Look good when your links are shared on WhatsApp or LinkedIn." },
      { id: "sitemap", label: "Sitemap & Robots.txt", points: 1, tooltip: "Helps Google discover and index all your pages faster." },
      { id: "gtm", label: "Google Tag Manager", points: 1, tooltip: "Easily add Analytics, Facebook Pixel, and more — no code needed." },
    ],
  },
];

const smartConstraints: Record<string, Constraints> = {
  landing: { disabled: ["admin", "cms", "analytics", "subscription", "roles", "export", "logs", "push", "multilang"], autoChecked: ["seo", "og"] },
  website: { disabled: ["push"], autoChecked: ["seo", "sitemap"] },
  app: { disabled: ["sitemap", "og", "cms"], autoChecked: ["push", "auth"] },
  webapp: { disabled: [], autoChecked: ["auth", "admin"] },
  ecommerce: { disabled: [], autoChecked: ["razorpay", "auth", "admin"] },
  maintenance: { disabled: [], autoChecked: [] },
};

const scopeBoundariesMap: Record<string, string[]> = {
  landing: ["Content writing or copywriting", "Logo or graphic design", "Domain & hosting purchase", "SEO content strategy", "Paid ad campaigns"],
  website: ["Content writing", "Logo design", "Domain & hosting", "Third-party API subscriptions", "Ongoing maintenance after delivery"],
  app: ["App Store / Play Store fees", "Third-party API costs", "Content or media creation", "Ongoing server costs", "Post-delivery maintenance"],
  webapp: ["Third-party API subscriptions", "Server infrastructure costs", "Content migration", "Staff training beyond 1 session", "Post-delivery bugs beyond 15 days"],
  ecommerce: ["Product photography", "Content writing for products", "Payment gateway KYC", "Third-party logistics integration", "Marketing or SEO campaigns"],
  maintenance: ["New feature development", "Design overhauls", "Third-party API costs", "Domain or hosting renewals", "Content creation"],
};

function getComplexity(points: number) {
  if (points <= 5) return { label: "Simple", bg: "bg-green-500", text: "text-green-700" };
  if (points <= 14) return { label: "Medium", bg: "bg-yellow-500", text: "text-yellow-700" };
  if (points <= 25) return { label: "High", bg: "bg-orange-500", text: "text-orange-700" };
  return { label: "Enterprise", bg: "bg-red-500", text: "text-red-700" };
}

function generateScopeId() {
  return `LSW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
}

function getFormattedDate() {
  return new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [scopeId] = useState(() => generateScopeId());
  const [sendStatus, setSendStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [hasDraft, setHasDraft] = useState(false);
  const [pdfB64, setPdfB64] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "", hearAbout: "", message: "",
  });

  const project = projectTypes.find((p) => p.id === selectedType);
  const isMaintenance = selectedType === "maintenance";
  const needsSize = project?.hasPages || project?.hasScreens;
  const sizeOptions = project?.hasScreens ? screenCounts : pageCounts;
  const constraints = selectedType ? smartConstraints[selectedType] : null;

  useEffect(() => {
    if (constraints?.autoChecked) {
      setSelectedFeatures((prev) => {
        const next = [...prev];
        constraints.autoChecked.forEach((id) => { if (!next.includes(id)) next.push(id); });
        return next;
      });
    }
  }, [selectedType]); // eslint-disable-line

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("lsw-scope-draft", JSON.stringify({ step, selectedType, selectedSize, selectedFeatures }));
  }, [step, selectedType, selectedSize, selectedFeatures]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem("lsw-scope-draft");
      if (saved) {
        const draft = JSON.parse(saved);
        if (draft.selectedType) {
          setHasDraft(true);
          setSelectedType(draft.selectedType);
          setSelectedSize(draft.selectedSize ?? null);
          setSelectedFeatures(draft.selectedFeatures ?? []);
          setStep(draft.step ?? 1);
        }
      }
    } catch {}
  }, []); // eslint-disable-line

  let totalPoints = project?.basePoints ?? 0;
  if (selectedSize && needsSize) {
    const size = sizeOptions.find((s) => s.id === selectedSize);
    if (size) totalPoints += size.points;
  }
  const selectedFeatureObjects = featureGroups.flatMap((g) => g.items).filter((f) => selectedFeatures.includes(f.id));
  selectedFeatureObjects.forEach((f) => { totalPoints += f.points; });

  const complexity = getComplexity(totalPoints);
  const fillPercentage = Math.min((totalPoints / 40) * 100, 100);

  const toggleFeature = (id: string) => {
    if (constraints?.disabled.includes(id) || constraints?.autoChecked.includes(id)) return;
    setSelectedFeatures((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  };

  const reset = () => {
    setStep(1); setSelectedType(null); setSelectedSize(null); setSelectedFeatures([]);
    setHasDraft(false); setPdfB64(null); setSendStatus("idle");
    if (typeof window !== "undefined") localStorage.removeItem("lsw-scope-draft");
  };

  const featureLabels = selectedFeatureObjects.map((f) => f.label).join(", ");

  const copyId = () => {
    navigator.clipboard.writeText(scopeId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadPDFFromB64 = (b64: string) => {
    const a = document.createElement("a");
    a.href = `data:application/pdf;base64,${b64}`;
    a.download = `LSW-Scope-${scopeId}.pdf`;
    a.click();
  };

  const generatePDFBase64 = async (): Promise<string> => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const W = 210; const M = 18; let y = 0;

    const C = {
      blue: [37, 99, 235] as [number, number, number],
      dark: [15, 23, 42] as [number, number, number],
      gray: [100, 116, 139] as [number, number, number],
      light: [248, 250, 252] as [number, number, number],
      white: [255, 255, 255] as [number, number, number],
      border: [226, 232, 240] as [number, number, number],
      lightBlue: [238, 244, 255] as [number, number, number],
    };
    const complexityColorMap: Record<string, [number, number, number]> = {
      Simple: [34, 197, 94], Medium: [234, 179, 8],
      High: [249, 115, 22], Enterprise: [239, 68, 68],
    };
    const barColor = complexityColorMap[complexity.label] ?? C.blue;

    const addWatermark = () => {
      if (!formData.name) return;
      doc.setTextColor(236, 241, 252); doc.setFontSize(11); doc.setFont("helvetica", "bold");
      for (let wx = -10; wx < W; wx += 80) {
        for (let wy = 30; wy < 285; wy += 55) {
          doc.text(`Prepared for ${formData.name}`, wx, wy, { angle: 35 });
        }
      }
    };

    const addFooter = () => {
      doc.setFillColor(...C.dark); doc.rect(0, 282, W, 15, "F");
      doc.setTextColor(...C.white); doc.setFontSize(7); doc.setFont("helvetica", "normal");
doc.text("Lexical Software  |  softwarelexical@gmail.com  |  +91 9144462693  |  +91 7415557442  |  www.lexicalsoftware.in", W / 2, 289, { align: "center" });      doc.setTextColor(148, 163, 184);
      doc.text("CONFIDENTIAL — This document is prepared for the recipient only. Not for redistribution.", W / 2, 294, { align: "center" });
    };

    const checkPage = (h: number) => {
      if (y + h > 268) {
        addFooter(); doc.addPage();
        addWatermark();
        y = 18;
      }
    };

    // Watermark first on page 1 — header draws on top
    addWatermark();

    let logoBase64: string | null = null;
    try {
      const res = await fetch("/images/logo/lexical-mark.jpg");
      const blob = await res.blob();
      logoBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch {}

    // HEADER
    doc.setFillColor(...C.blue); doc.rect(0, 0, W, 34, "F");
    if (logoBase64) {
      doc.addImage(logoBase64, "JPEG", M, 5, 24, 24);
    } else {
      doc.setFillColor(...C.white); doc.roundedRect(M, 7, 18, 18, 2, 2, "F");
      doc.setTextColor(...C.blue); doc.setFontSize(11); doc.setFont("helvetica", "bold");
      doc.text("L", M + 6, 19);
    }
    doc.setTextColor(...C.white);
    doc.setFontSize(16); doc.setFont("helvetica", "bold");
    doc.text("LEXICAL SOFTWARE", M + 30, 13);
    doc.setFontSize(7.5); doc.setFont("helvetica", "normal");
    doc.text("Web & App Development Studio  |  lexicalsoftware.in", M + 30, 20);
doc.text("+91 9144462693  |  +91 7415557442  |  softwarelexical@gmail.com", M + 30, 27);
    doc.setFontSize(7.5); doc.setFont("helvetica", "bold");
    doc.text(`Scope ID: ${scopeId}`, W - M, 11, { align: "right" });
    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${getFormattedDate()}`, W - M, 18, { align: "right" });
    y = 42;

    // PROJECT SUMMARY
    checkPage(36);
    doc.setFillColor(...C.light); doc.roundedRect(M, y, W - M * 2, 26, 3, 3, "F");
    doc.setFillColor(...barColor); doc.roundedRect(M, y, 3, 26, 1, 1, "F");
    doc.setTextColor(...C.dark); doc.setFontSize(13); doc.setFont("helvetica", "bold");
    doc.text(`${project?.name ?? "—"} — ${complexity.label} Build`, M + 8, y + 10);
    doc.setFontSize(8.5); doc.setFont("helvetica", "normal"); doc.setTextColor(...C.gray);
    doc.text(`Timeline: ${project?.baseTimeline ?? "N/A"}`, M + 8, y + 19);
    doc.text(`Features Selected: ${selectedFeatureObjects.length}`, M + 80, y + 19);
    y += 32;

    // COMPLEXITY METER
    checkPage(22);
    doc.setTextColor(...C.dark); doc.setFontSize(9); doc.setFont("helvetica", "bold");
    doc.text("Project Complexity", M, y + 4); y += 8;
    doc.setFillColor(...C.border); doc.roundedRect(M, y, W - M * 2, 5, 2, 2, "F");
    doc.setFillColor(...barColor);
    doc.roundedRect(M, y, Math.max(((W - M * 2) * fillPercentage) / 100, 5), 5, 2, 2, "F");
    doc.setFontSize(8); doc.setFont("helvetica", "bold"); doc.setTextColor(...barColor);
    doc.text(`${complexity.label} Complexity`, W - M, y + 4, { align: "right" });
    y += 13;

    // SELECTED FEATURES
    if (selectedFeatureObjects.length > 0) {
      checkPage(15);
      doc.setTextColor(...C.dark); doc.setFontSize(9); doc.setFont("helvetica", "bold");
      doc.text("Selected Features", M, y + 5); y += 10;
      featureGroups.forEach((grp) => {
        const gf = grp.items.filter((f) => selectedFeatures.includes(f.id));
        if (!gf.length) return;
        checkPage(7 + gf.length * 6 + 2);
        doc.setFillColor(241, 245, 249); doc.rect(M, y, W - M * 2, 6, "F");
        doc.setTextColor(...C.gray); doc.setFontSize(7); doc.setFont("helvetica", "bold");
        doc.text(grp.group.toUpperCase(), M + 3, y + 4.2); y += 7;
        gf.forEach((feat) => {
          checkPage(7);
          doc.setTextColor(...C.dark); doc.setFontSize(8.5); doc.setFont("helvetica", "normal");
          doc.setFillColor(...C.blue); doc.circle(M + 3, y + 2.8, 1, "F");
          doc.text(feat.label, M + 8, y + 4.2); y += 6;
        }); y += 2;
      });
    } else {
      checkPage(12);
      doc.setTextColor(...C.gray); doc.setFontSize(8.5);
      doc.text("No extra features selected.", M, y + 5); y += 10;
    }
    y += 5;

    // WHAT'S INCLUDED
    checkPage(42);
    doc.setFillColor(...C.lightBlue); doc.roundedRect(M, y, W - M * 2, 36, 3, 3, "F");
    doc.setTextColor(...C.blue); doc.setFontSize(9); doc.setFont("helvetica", "bold");
    doc.text("What's Included in Every Project", M + 5, y + 8);
    doc.setTextColor(...C.dark); doc.setFontSize(8); doc.setFont("helvetica", "normal");
    ["Full deployment to your hosting (Vercel, AWS, or VPS of your choice)",
     "Complete testing and QA before final delivery",
     "README with setup and deployment instructions",
     "15-day post-launch bug fix window at no extra cost",
     "Direct communication with your developer throughout",
    ].forEach((item, i) => {
      doc.setFillColor(...C.blue); doc.circle(M + 5, y + 15 + i * 5.2, 0.9, "F");
      doc.setTextColor(...C.dark); doc.text(item, M + 9, y + 16.5 + i * 5.2);
    }); y += 42;

    // SCOPE BOUNDARIES
    const boundaries = selectedType ? (scopeBoundariesMap[selectedType] ?? []) : [];
    if (boundaries.length > 0) {
      const boxH = boundaries.length * 5.5 + 14;
      checkPage(boxH + 4);
      doc.setFillColor(255, 247, 237); doc.roundedRect(M, y, W - M * 2, boxH, 3, 3, "F");
      doc.setTextColor(180, 70, 10); doc.setFontSize(9); doc.setFont("helvetica", "bold");
      doc.text("Not Included in This Scope", M + 5, y + 8);
      doc.setFontSize(8); doc.setFont("helvetica", "normal"); doc.setTextColor(...C.gray);
      boundaries.forEach((b, i) => { doc.text(`- ${b}`, M + 5, y + 15 + i * 5.5); });
      y += boxH + 6;
    }

    // WHY LEXICAL
    checkPage(36);
    doc.setFillColor(...C.dark); doc.roundedRect(M, y, W - M * 2, 34, 3, 3, "F");
    doc.setTextColor(...C.white); doc.setFontSize(9); doc.setFont("helvetica", "bold");
    doc.text("Why Lexical Software?", M + 5, y + 8);
    doc.setFontSize(8); doc.setFont("helvetica", "normal");
    ["Full deployment access handed over — hosting, domain, cloud, everything",
     "You talk directly to the developer building your product, no middlemen",
     "Weekly staging links — you see real progress, not just status updates",
     "Small focused team — your project gets full attention, start to finish",
    ].forEach((r, i) => {
      doc.setFillColor(...C.white); doc.circle(M + 5, y + 15 + i * 5.2, 0.9, "F");
      doc.setTextColor(...C.white); doc.text(r, M + 9, y + 16.5 + i * 5.2);
    }); y += 36;

    // NEXT STEPS
    checkPage(55);
    doc.setFillColor(...C.blue); doc.roundedRect(M, y, W - M * 2, 7, 2, 2, "F");
    doc.setTextColor(...C.white); doc.setFontSize(8.5); doc.setFont("helvetica", "bold");
    doc.text("NEXT STEPS", M + 5, y + 5); y += 10;
    doc.setTextColor(...C.dark); doc.setFontSize(8.5); doc.setFont("helvetica", "normal");
    ["1. Reply to this document or email us at softwarelexical@gmail.com",
     "2. Scope, timeline & payment terms confirmed in writing",
     "3. 40% advance payment — development begins within 24 hours",
     "4. Weekly staging updates — review and give feedback anytime",
     "5. Final delivery, deployment & complete handover",
    ].forEach((s) => { doc.text(s, M, y + 5); y += 6.5; }); y += 4;

    // PAYMENT TERMS
    checkPage(20);
    doc.setFillColor(...C.light); doc.roundedRect(M, y, W - M * 2, 14, 3, 3, "F");
    doc.setTextColor(...C.dark); doc.setFontSize(8.5); doc.setFont("helvetica", "bold");
    doc.text("PAYMENT TERMS", M + 5, y + 6);
    doc.setFont("helvetica", "normal");
    doc.text("40% advance to begin   |   30% at midpoint   |   30% on final delivery", M + 5, y + 11.5);
    y += 18;

    // ESTIMATED START DATE
    checkPage(14);
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 2);
    const startDateStr = startDate.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    doc.setFillColor(238, 250, 238); doc.roundedRect(M, y, W - M * 2, 12, 3, 3, "F");
    doc.setTextColor(22, 101, 52); doc.setFontSize(8); doc.setFont("helvetica", "bold");
    doc.text("Estimated Start Date:", M + 5, y + 5);
    doc.setFont("helvetica", "normal");
    doc.text(`If you proceed today, work can begin by ${startDateStr}`, M + 5, y + 10);
    y += 16;

    // CUSTOMER DETAILS
    if (formData.name) {
      const location = [formData.address, formData.city, formData.state, formData.pincode].filter(Boolean).join(", ");
      const lines = [formData.name, formData.email, formData.phone, ...(location ? [location] : [])].filter(Boolean);
      const boxH = lines.length * 6 + 14;
      checkPage(boxH + 4);
      doc.setFillColor(...C.lightBlue); doc.roundedRect(M, y, W - M * 2 - 35, boxH, 3, 3, "F");
      doc.setTextColor(...C.dark); doc.setFontSize(8.5); doc.setFont("helvetica", "bold");
      doc.text("Prepared For", M + 5, y + 7);
      doc.setFont("helvetica", "normal"); doc.setFontSize(8);
      lines.forEach((line, i) => {
        doc.setTextColor(i === 0 ? C.dark[0] : C.gray[0], i === 0 ? C.dark[1] : C.gray[1], i === 0 ? C.dark[2] : C.gray[2]);
        doc.text(line, M + 5, y + 14 + i * 6);
      });
      try {
        const qrRes = await fetch("https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.lexicalsoftware.in&format=png");
        const qrBlob = await qrRes.blob();
        const qrB64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(qrBlob);
        });
        doc.addImage(qrB64, "PNG", W - M - 28, y, 28, 28);
        doc.setTextColor(...C.gray); doc.setFontSize(6.5); doc.setFont("helvetica", "normal");
        doc.text("lexicalsoftware.in", W - M - 14, y + 31, { align: "center" });
      } catch {}
      y += boxH + 6;
    } else {
      try {
        checkPage(38);
        const qrRes = await fetch("https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.lexicalsoftware.in&format=png");
        const qrBlob = await qrRes.blob();
        const qrB64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(qrBlob);
        });
        doc.addImage(qrB64, "PNG", W / 2 - 14, y, 28, 28);
        doc.setTextColor(...C.gray); doc.setFontSize(6.5); doc.setFont("helvetica", "normal");
        doc.text("Scan to visit lexicalsoftware.in", W / 2, y + 32, { align: "center" });
        y += 38;
      } catch {}
    }

    addFooter();
    return doc.output("datauristring").split(",")[1];
  };

  const handleGenerateAndSend = async () => {
    if (!formData.name || !formData.email || !formData.phone) return;
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
    setSendStatus("sending");
    try {
      const base64 = await generatePDFBase64();
      setPdfB64(base64);
      downloadPDFFromB64(base64);
      const res = await fetch("/api/scope-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          email: formData.email.toLowerCase(),
          scopeId,
          projectType: project?.name,
          complexity: complexity.label,
          timeline: project?.baseTimeline,
          features: featureLabels,
          pdfBase64: base64,
        }),
      });
      setSendStatus(res.ok ? "sent" : "error");
    } catch {
      setSendStatus("error");
    }
  };

  const steps = [
    { n: 1, label: "Project" },
    { n: 2, label: needsSize ? (project?.hasScreens ? "Screens" : "Pages") : "Features" },
    { n: 3, label: needsSize ? "Features" : "Scope" },
    ...(needsSize ? [{ n: 4, label: "Scope" }] : []),
  ];
  const totalSteps = needsSize ? 4 : 3;

  return (
    <>
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-panel-border bg-panel shadow-xl shadow-blue-500/5">
          <div className="h-1 w-full bg-base">
            <div className="h-1 bg-lexical-gradient transition-all duration-500" style={{ width: `${(step / totalSteps) * 100}%` }} />
          </div>
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <div className="flex items-center gap-3">
              {steps.map((s, i) => (
                <div key={s.n} className="flex items-center gap-2">
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-700 transition-all duration-200 ${step > s.n ? "bg-lexical-orange text-white" : step === s.n ? "border-2 border-lexical-orange text-lexical-orange" : "border border-panel-border text-ink-dim"}`}>
                    {step > s.n ? <Check className="h-3 w-3" /> : s.n}
                  </div>
                  <span className={`hidden text-xs sm:block ${step === s.n ? "font-600 text-ink" : "text-ink-dim"}`}>{s.label}</span>
                  {i < steps.length - 1 && <ChevronRight className="h-3 w-3 text-ink-dim" />}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {hasDraft && step === 1 && (
                <span className="hidden rounded-full border border-lexical-orange/30 bg-lexical-orange/10 px-2 py-0.5 font-mono text-[10px] text-lexical-orange sm:inline">Draft restored</span>
              )}
              <button onClick={reset} className="flex items-center gap-1.5 rounded-lg border border-panel-border px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:border-lexical-orange/50 hover:text-lexical-orange">
                <RotateCcw className="h-3 w-3" /> Reset
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {step === 1 && (
              <div>
                <p className="mb-1 font-mono text-xs font-700 uppercase tracking-[0.15em] text-lexical-orange">Step 01</p>
                <h3 className="mb-5 font-display text-xl font-700 text-ink">What are you building?</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {projectTypes.map((type) => (
                    <button key={type.id} onClick={() => { setSelectedType(type.id); setSelectedSize(null); setSelectedFeatures([]); setStep(2); }}
                      className="group rounded-xl border border-panel-border bg-base p-4 text-left transition-all duration-200 hover:border-lexical-orange/60 hover:bg-lexical-orange/5 hover:shadow-md">
                      <span className="text-2xl">{type.emoji}</span>
                      <p className="mt-2 font-display text-sm font-700 text-ink">{type.name}</p>
                      <p className="mt-0.5 text-xs text-ink-muted">{type.desc}</p>
                      <p className="mt-2 font-mono text-xs text-ink-dim">{type.baseTimeline}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && project && (
              <div>
                <p className="mb-1 font-mono text-xs font-700 uppercase tracking-[0.15em] text-lexical-orange">Step 02 — {project.emoji} {project.name}</p>
                {needsSize ? (
                  <>
                    <h3 className="mb-5 font-display text-xl font-700 text-ink">How many {project.hasScreens ? "screens" : "pages"}?</h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {sizeOptions.map((opt) => (
                        <button key={opt.id} onClick={() => { setSelectedSize(opt.id); setStep(3); }}
                          className="flex flex-col items-center rounded-xl border border-panel-border bg-base py-5 transition-all duration-200 hover:border-lexical-orange/60 hover:bg-lexical-orange/5">
                          <span className="font-display text-2xl font-800 text-ink">{opt.label}</span>
                          <span className="mt-0.5 font-mono text-xs text-ink-muted">{opt.sublabel}</span>
                          {opt.timeAdd && <span className="mt-1.5 font-mono text-[10px] text-ink-dim">{opt.timeAdd}</span>}
                        </button>
                      ))}
                    </div>
                    {project.hasScreens && <p className="mt-3 text-xs text-ink-dim">* Pages don&apos;t apply to mobile apps — screens are used instead.</p>}
                  </>
                ) : (
                  <>
                    <h3 className="mb-5 font-display text-xl font-700 text-ink">
                      {isMaintenance ? "What needs monitoring?" : "Any extra features?"}
                      <span className="ml-2 text-sm font-400 text-ink-muted">(optional)</span>
                    </h3>
                    <FeatureSelector selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} isMaintenance={isMaintenance} constraints={constraints} />
                    <div className="mt-6 flex justify-end">
                      <button onClick={() => setStep(3)} className="inline-flex items-center gap-2 rounded-xl bg-lexical-gradient px-6 py-3 text-sm font-700 text-white shadow-sm transition-all hover:brightness-105">
                        See Scope <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {step === 3 && project && (
              <div>
                {needsSize ? (
                  <>
                    <p className="mb-1 font-mono text-xs font-700 uppercase tracking-[0.15em] text-lexical-orange">Step 03 — Features</p>
                    <h3 className="mb-5 font-display text-xl font-700 text-ink">
                      What else do you need?<span className="ml-2 text-base font-400 text-ink-muted">(optional)</span>
                    </h3>
                    <FeatureSelector selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} isMaintenance={false} constraints={constraints} />
                    <div className="mt-6 flex justify-end">
                      <button onClick={() => setStep(4)} className="inline-flex items-center gap-2 rounded-xl bg-lexical-gradient px-6 py-3 text-sm font-700 text-white shadow-sm transition-all hover:brightness-105">
                        See Scope <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </>
                ) : (
                  <ScopeResult project={project} totalPoints={totalPoints} complexity={complexity} fillPercentage={fillPercentage}
                    selectedFeatureObjects={selectedFeatureObjects} isMaintenance={isMaintenance} scopeId={scopeId}
                    onBack={() => setStep(2)} onSend={() => setShowPopup(true)} />
                )}
              </div>
            )}

            {step === 4 && project && needsSize && (
              <ScopeResult project={project} totalPoints={totalPoints} complexity={complexity} fillPercentage={fillPercentage}
                selectedFeatureObjects={selectedFeatureObjects} isMaintenance={isMaintenance} scopeId={scopeId}
                onBack={() => setStep(3)} onSend={() => setShowPopup(true)} />
            )}
          </div>
        </div>
      </div>

      {showPopup && (
        <RequirementsPopup
          scopeId={scopeId}
          formData={formData}
          setFormData={setFormData}
          sendStatus={sendStatus}
          pdfB64={pdfB64}
          copied={copied}
          onCopyId={copyId}
          onSend={handleGenerateAndSend}
          onDownloadAgain={() => pdfB64 && downloadPDFFromB64(pdfB64)}
          onClose={() => {
            setShowPopup(false);
            setSendStatus("idle");
            if (sendStatus === "sent") reset();
          }}
        />
      )}
    </>
  );
}

function FeatureSelector({ selectedFeatures, toggleFeature, isMaintenance, constraints }:
  { selectedFeatures: string[]; toggleFeature: (id: string) => void; isMaintenance: boolean; constraints: Constraints | null; }) {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const groups = isMaintenance ? featureGroups.slice(0, 2) : featureGroups;
  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <div key={group.group}>
          <p className="mb-2 font-mono text-[10px] font-700 uppercase tracking-[0.15em] text-ink-dim">{group.group}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {group.items.map((feat) => {
              const isSelected = selectedFeatures.includes(feat.id);
              const isDisabled = constraints?.disabled.includes(feat.id) ?? false;
              const isLocked = constraints?.autoChecked.includes(feat.id) ?? false;
              return (
                <div key={feat.id} className="relative">
                  <button onClick={() => toggleFeature(feat.id)} disabled={isDisabled}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all duration-200 ${isDisabled ? "cursor-not-allowed border-panel-border bg-base opacity-35" : isLocked ? "cursor-default border-lexical-orange/50 bg-lexical-orange/5" : isSelected ? "border-lexical-orange bg-lexical-orange/5" : "border-panel-border bg-base hover:border-lexical-orange/40"}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-ink">{feat.label}</span>
                      {isLocked && <span className="font-mono text-[9px] font-700 text-lexical-orange">AUTO</span>}
                      {isDisabled && <span className="font-mono text-[9px] text-ink-dim">N/A</span>}
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <div role="button" onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === feat.id ? null : feat.id); }} className="cursor-pointer text-ink-dim hover:text-lexical-orange">
                        <HelpCircle className="h-3.5 w-3.5" />
                      </div>
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${isSelected || isLocked ? "border-lexical-orange bg-lexical-orange text-white" : "border-panel-border bg-panel"}`}>
                        {(isSelected || isLocked) && <Check className="h-3 w-3" />}
                      </div>
                    </div>
                  </button>
                  {activeTooltip === feat.id && (
                    <div className="absolute bottom-full left-0 z-20 mb-2 w-64 rounded-xl border border-panel-border bg-panel p-3 shadow-xl">
                      <p className="text-xs leading-relaxed text-ink-muted">{feat.tooltip}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function ScopeResult({ project, totalPoints, complexity, fillPercentage, selectedFeatureObjects,
  isMaintenance, scopeId, onBack, onSend }:
  { project: ProjectType; totalPoints: number; complexity: ReturnType<typeof getComplexity>;
    fillPercentage: number; selectedFeatureObjects: FeatureItem[]; isMaintenance: boolean;
    scopeId: string; onBack: () => void; onSend: () => void; }) {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="font-mono text-xs font-700 uppercase tracking-[0.15em] text-lexical-orange">Project Scope</p>
          <p className="font-mono text-[10px] text-ink-dim">ID: {scopeId}</p>
        </div>
        <button onClick={onBack} className="text-sm font-600 text-ink-muted hover:text-lexical-orange">← Edit</button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-panel-border bg-base p-5">
          <div className="mb-3 flex items-center gap-2"><Activity className="h-4 w-4 text-ink-dim" /><span className="text-sm font-600 text-ink">Complexity</span></div>
          <p className={`mb-3 text-xl font-700 ${complexity.text}`}>{complexity.label} Build</p>
          <div className="h-2 w-full overflow-hidden rounded-full bg-panel-border">
            <div className={`h-full rounded-full transition-all duration-1000 ${complexity.bg}`} style={{ width: `${fillPercentage}%` }} />
          </div>
          <p className="mt-2 font-mono text-xs text-ink-dim">{totalPoints} scope points</p>
        </div>
        <div className="rounded-xl border border-panel-border bg-base p-5">
          <div className="mb-3 flex items-center gap-2"><Clock className="h-4 w-4 text-ink-dim" /><span className="text-sm font-600 text-ink">Timeline</span></div>
          {isMaintenance ? <p className="text-xl font-700 text-ink">Ongoing / Monthly</p> : (
            <><p className="text-xl font-700 text-ink">{project.baseTimeline}</p><p className="mt-2 text-xs text-ink-muted">Planning, development & testing included</p></>
          )}
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-panel-border bg-base p-5">
        <div className="mb-3 flex items-center gap-2"><List className="h-4 w-4 text-ink-dim" /><span className="text-sm font-600 text-ink">Selected Features ({selectedFeatureObjects.length})</span></div>
        {selectedFeatureObjects.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedFeatureObjects.map((f) => (
              <span key={f.id} className="rounded-full border border-panel-border bg-panel px-3 py-1 font-mono text-xs text-ink-muted">{f.label}</span>
            ))}
          </div>
        ) : <p className="text-sm italic text-ink-dim">No extra features selected.</p>}
      </div>
      <div className="mt-6">
        <button onClick={onSend} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-lexical-gradient px-6 py-3.5 text-sm font-700 text-white shadow-sm transition-all hover:brightness-105 active:scale-[0.98]">
          <Send className="h-4 w-4" /> Fill Details & Get PDF
        </button>
        <p className="mt-3 text-center text-xs text-ink-dim">Fill your details → PDF generates & downloads + confirmation email sent</p>
      </div>
    </div>
  );
}

function RequirementsPopup({ scopeId, formData, setFormData, sendStatus, pdfB64, copied,
  onCopyId, onSend, onDownloadAgain, onClose }:
  { scopeId: string; formData: FormData; setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    sendStatus: "idle" | "sending" | "sent" | "error"; pdfB64: string | null;
    copied: boolean; onCopyId: () => void; onSend: () => void;
    onDownloadAgain: () => void; onClose: () => void; }) {
  const update = (key: keyof FormData, val: string) => setFormData((p) => ({ ...p, [key]: val }));
  const inputClass = "w-full rounded-xl border border-panel-border bg-base px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-lexical-orange";

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 backdrop-blur-sm sm:items-center sm:p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-t-2xl border border-panel-border bg-panel shadow-2xl sm:rounded-2xl">
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo/lexical-mark.jpg" alt="Lexical Software" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-display text-sm font-700 text-ink">Lexical Software</p>
              <p className="font-mono text-[10px] text-ink-muted">Web & App Development Studio</p>
            </div>
          </div>
          {sendStatus !== "sent" && (
            <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-lg border border-panel-border text-ink-muted hover:text-lexical-orange">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="max-h-[80vh] overflow-y-auto px-6 py-5">
          {sendStatus === "sent" ? (
            <div className="py-4">
              <div className="mb-5 flex flex-col items-center text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-display text-xl font-700 text-ink">Scope Submitted!</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Your scope has been sent to our team and a confirmation email delivered to{" "}
                  <span className="font-600 text-ink">{formData.email}</span>.
                </p>
              </div>

              <div className="mb-5 rounded-xl border border-panel-border bg-base p-4">
                <p className="mb-2 font-mono text-[10px] font-700 uppercase tracking-[0.1em] text-ink-dim">What happens next</p>
                <div className="space-y-2">
                  {["Our team reviews your scope within a few hours",
                    "We reach out to confirm timeline & requirements",
                    "You receive a detailed proposal in writing",
                    "40% advance → work begins within 24 hours",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 font-mono text-xs font-700 text-lexical-orange">{i + 1}.</span>
                      <span className="text-xs text-ink-muted">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {pdfB64 && (
                <button onClick={onDownloadAgain}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-panel-border px-5 py-3 text-sm font-600 text-ink-muted transition-colors hover:border-lexical-orange/50 hover:text-lexical-orange">
                  <Download className="h-4 w-4" /> Download PDF Again
                </button>
              )}

              <div className="mt-4 rounded-xl border border-panel-border bg-base px-4 py-3 text-center">
                <p className="font-mono text-[10px] font-700 uppercase tracking-[0.1em] text-ink-dim">Need help? Reach us directly</p>
                <p className="mt-1.5 text-xs text-ink-muted">softwarelexical@gmail.com</p>
<p className="text-xs text-ink-muted">+91 9144462693  |  +91 7415557442</p>
              </div>

              <button onClick={onClose}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-panel-border px-5 py-3 text-sm font-600 text-ink-muted transition-colors hover:border-lexical-orange/50 hover:text-lexical-orange">
                ← Start New Scope
              </button>
            </div>
          ) : (
            <>
              <div className="mb-5 rounded-xl border border-lexical-orange/20 bg-lexical-orange/5 px-4 py-3">
                <p className="font-mono text-xs text-lexical-orange">Scope ID: {scopeId}</p>
                <p className="mt-0.5 font-mono text-xs italic text-ink-muted">Fill your details below to generate the PDF.</p>
              </div>

              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-mono text-xs font-600 text-ink-muted">Full Name *</label>
                    <input type="text" value={formData.name} onChange={(e) => update("name", e.target.value)} placeholder="Rahul Sharma" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1 block font-mono text-xs font-600 text-ink-muted">Phone *</label>
                    <input type="tel" value={formData.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 98765 43210" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs font-600 text-ink-muted">Email Address *</label>
                  <input type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} placeholder="rahul@company.com" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs font-600 text-ink-muted">Address</label>
                  <input type="text" value={formData.address} onChange={(e) => update("address", e.target.value)} placeholder="Shop No. 5, MG Road" className={inputClass} />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="mb-1 block font-mono text-xs font-600 text-ink-muted">City</label>
                    <input type="text" value={formData.city} onChange={(e) => update("city", e.target.value)} placeholder="Gurugram" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1 block font-mono text-xs font-600 text-ink-muted">State</label>
                    <input type="text" value={formData.state} onChange={(e) => update("state", e.target.value)} placeholder="Haryana" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1 block font-mono text-xs font-600 text-ink-muted">Pincode</label>
                    <input type="text" value={formData.pincode} onChange={(e) => update("pincode", e.target.value)} placeholder="122001" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs font-600 text-ink-muted">Additional Notes</label>
                  <textarea value={formData.message} onChange={(e) => update("message", e.target.value)}
                    placeholder="Anything specific you want us to know..." rows={3}
                    className="w-full resize-none rounded-xl border border-panel-border bg-base px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-lexical-orange" />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs font-600 text-ink-muted">How did you hear about us?</label>
                  <select value={formData.hearAbout} onChange={(e) => update("hearAbout", e.target.value)}
                    className="w-full rounded-xl border border-panel-border bg-base px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-lexical-orange">
                    <option value="">Select an option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Friend / Referral">Friend / Referral</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {sendStatus === "error" && (
                <p className="mt-3 text-xs text-red-500">Something went wrong. Please try again or email us at softwarelexical@gmail.com</p>
              )}

              <button onClick={onSend}
                disabled={sendStatus === "sending" || !formData.name || !formData.email || !formData.phone}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-lexical-gradient py-3.5 text-sm font-700 text-white shadow-sm transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60">
                {sendStatus === "sending" ? "Generating PDF & Sending..." : <><Send className="h-4 w-4" /> Generate PDF & Send</>}
              </button>
              <p className="mt-3 text-center text-xs text-ink-dim">
                PDF downloads to your device + confirmation email to you + scope email to us.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}