"use client";

/* eslint-disable @next/next/no-img-element */
import { useMemo, useState, type ReactNode } from "react";

type Language = "en" | "th";

type IconName =
  | "profile"
  | "document"
  | "shift"
  | "tasks"
  | "alert"
  | "family"
  | "consent"
  | "ai"
  | "calendar"
  | "shield"
  | "chart"
  | "card";

const content = {
  en: {
    languageLabel: "EN",
    alternateLanguageLabel: "TH",
    nav: ["Platform", "Workflows", "Roadmap", "Contact"],
    heroKicker: "AI home care and nursing operations platform",
    headline: "Caredee",
    heroBody:
      "Caredee helps care agencies coordinate the full patient journey from registration to daily care, incident response, family updates, consent, medical documents, and monthly review.",
    primaryCta: "Explore platform",
    secondaryCta: "Contact Siroros",
    statOneLabel: "Care journey",
    statOneValue: "End to end",
    statTwoLabel: "AI stance",
    statTwoValue: "Human approved",
    statThreeLabel: "Family visibility",
    statThreeValue: "Plain language",
    principle:
      "AI supports care, but humans approve clinical decisions. GPT can summarize, extract, translate, and flag issues, but it must not change doctor orders, medication dosage, or medical advice.",
    platformTitle: "A calm operating system for home-care agencies",
    platformBody:
      "Caredee is built as a clinical workflow tool first, then a family communication layer, then an AI-assisted care intelligence platform.",
    workflowTitle: "Core workflows",
    roleTitle: "Built for every care role",
    roadmapTitle: "MVP roadmap",
    aiTitle: "Quiet intelligence, reviewable by people",
    contactTitle: "Business card and customer contact",
    contactBody:
      "Scan the contact QR to save Siroros Roongdonsai, or use the profile QR for a clean professional link without printing long URLs.",
    contactQr: "Save contact",
    profileQr: "Open LinkedIn",
    contactName: "Siroros Roongdonsai",
    contactThaiName: "สิโรรส รุ่งดอนทราย",
    contactRole: "Caredee product owner",
  },
  th: {
    languageLabel: "TH",
    alternateLanguageLabel: "EN",
    nav: ["แพลตฟอร์ม", "เวิร์กโฟลว์", "โรดแมป", "ติดต่อ"],
    heroKicker: "แพลตฟอร์ม AI สำหรับงานดูแลผู้สูงอายุและโฮมแคร์",
    headline: "Caredee",
    heroBody:
      "Caredee ช่วยเอเจนซีดูแลผู้ป่วยตั้งแต่การลงทะเบียน ประวัติสุขภาพ งานประจำวัน เหตุฉุกเฉิน การสื่อสารกับครอบครัว เอกสารยินยอม เอกสารทางการแพทย์ และสรุปเพื่อทบทวนรายเดือน",
    primaryCta: "ดูแพลตฟอร์ม",
    secondaryCta: "ติดต่อสิโรรส",
    statOneLabel: "เส้นทางการดูแล",
    statOneValue: "ครบวงจร",
    statTwoLabel: "บทบาท AI",
    statTwoValue: "คนอนุมัติ",
    statThreeLabel: "ครอบครัวเห็นภาพ",
    statThreeValue: "ภาษาที่เข้าใจง่าย",
    principle:
      "AI ช่วยสนับสนุนการดูแล แต่การตัดสินใจทางคลินิกต้องมีคนอนุมัติ GPT สามารถสรุป ดึงข้อมูล แปล และแจ้งเตือนความเสี่ยงได้ แต่ต้องไม่เปลี่ยนคำสั่งแพทย์ ขนาดยา หรือคำแนะนำทางการแพทย์",
    platformTitle: "ระบบปฏิบัติการที่นิ่งและชัดเจนสำหรับเอเจนซีดูแลผู้ป่วย",
    platformBody:
      "Caredee เริ่มจากเครื่องมือเวิร์กโฟลว์ทางคลินิก ต่อด้วยชั้นการสื่อสารกับครอบครัว และพัฒนาเป็นระบบข้อมูลอัจฉริยะที่ช่วยทีมดูแลตัดสินใจอย่างรอบคอบ",
    workflowTitle: "เวิร์กโฟลว์หลัก",
    roleTitle: "ออกแบบสำหรับทุกบทบาทในการดูแล",
    roadmapTitle: "โรดแมป MVP",
    aiTitle: "AI ที่อธิบายได้ และคนตรวจทานได้",
    contactTitle: "นามบัตรและช่องทางติดต่อ",
    contactBody:
      "สแกน QR เพื่อบันทึกข้อมูลติดต่อของสิโรรส รุ่งดอนทราย หรือใช้ QR โปรไฟล์เพื่อเปิดลิงก์มืออาชีพโดยไม่ต้องพิมพ์ URL ยาว ๆ",
    contactQr: "บันทึกข้อมูลติดต่อ",
    profileQr: "เปิด LinkedIn",
    contactName: "Siroros Roongdonsai",
    contactThaiName: "สิโรรส รุ่งดอนทราย",
    contactRole: "เจ้าของผลิตภัณฑ์ Caredee",
  },
} as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const platformPillars: Record<
  Language,
  Array<{ title: string; body: string; icon: IconName }>
> = {
  en: [
    {
      title: "Patient record hub",
      body: "Registration, profile, medical history, allergies, medication, doctor instructions, and discharge details in one structured profile.",
      icon: "profile",
    },
    {
      title: "Clinical shift workflow",
      body: "Caregiver assignment, shift tasks, medication, vital signs, physical therapy, meals, hygiene, and special-care checklists.",
      icon: "shift",
    },
    {
      title: "Family visibility",
      body: "Family members see plain-language updates, care summaries, appointment reminders, and meaningful changes without operational noise.",
      icon: "family",
    },
    {
      title: "Consent and audit trail",
      body: "PDPA consent, e-signature records, document uploads, and audit history help agencies stay accountable and review-ready.",
      icon: "consent",
    },
  ],
  th: [
    {
      title: "ศูนย์ข้อมูลผู้ป่วย",
      body: "ลงทะเบียน โปรไฟล์ ประวัติสุขภาพ ภูมิแพ้ ตารางยา คำสั่งแพทย์ และข้อมูลหลังออกจากโรงพยาบาลในที่เดียว",
      icon: "profile",
    },
    {
      title: "เวิร์กโฟลว์กะดูแล",
      body: "มอบหมายผู้ดูแล งานในแต่ละกะ ยา สัญญาณชีพ กายภาพบำบัด อาหาร สุขอนามัย และงานดูแลเฉพาะทาง",
      icon: "shift",
    },
    {
      title: "ครอบครัวติดตามได้",
      body: "ครอบครัวเห็นอัปเดต สรุปการดูแล นัดหมาย และการเปลี่ยนแปลงสำคัญด้วยภาษาที่เข้าใจง่าย",
      icon: "family",
    },
    {
      title: "เอกสารยินยอมและ audit trail",
      body: "จัดการ PDPA e-signature เอกสาร และประวัติการเปลี่ยนแปลง เพื่อให้เอเจนซีตรวจสอบย้อนหลังได้",
      icon: "consent",
    },
  ],
};

const workflowSteps: Record<Language, Array<{ title: string; body: string; icon: IconName }>> = {
  en: [
    {
      title: "Register",
      body: "Create a patient profile, upload paper forms, and let GPT/OCR extract structured medical details for review.",
      icon: "document",
    },
    {
      title: "Plan",
      body: "Record allergies, medicine schedules, doctor instructions, appointments, and hospital discharge transition needs.",
      icon: "calendar",
    },
    {
      title: "Deliver care",
      body: "Assign caregivers, run shift checklists, track medication, vitals, therapy, meals, hygiene, and special-care tasks.",
      icon: "tasks",
    },
    {
      title: "Escalate",
      body: "Report incidents, notify supervisors, and trigger emergency escalation with clear action history.",
      icon: "alert",
    },
    {
      title: "Review",
      body: "Generate GPT daily and monthly summaries for supervisor review, family updates, and care improvement.",
      icon: "ai",
    },
  ],
  th: [
    {
      title: "ลงทะเบียน",
      body: "สร้างโปรไฟล์ผู้ป่วย อัปโหลดฟอร์มกระดาษหรือเขียนมือ และให้ GPT/OCR ดึงข้อมูลแพทย์เพื่อให้คนตรวจทาน",
      icon: "document",
    },
    {
      title: "วางแผน",
      body: "บันทึกภูมิแพ้ ตารางยา คำสั่งแพทย์ นัดหมาย และแผนเปลี่ยนผ่านจากโรงพยาบาลสู่การดูแลที่บ้าน",
      icon: "calendar",
    },
    {
      title: "ดูแลรายวัน",
      body: "มอบหมายผู้ดูแล ใช้ checklist กะงาน ติดตามยา สัญญาณชีพ กายภาพ อาหาร สุขอนามัย และงานพิเศษ",
      icon: "tasks",
    },
    {
      title: "ยกระดับเหตุการณ์",
      body: "รายงาน incident แจ้งหัวหน้าพยาบาล และเปิดขั้นตอนฉุกเฉินพร้อมประวัติการดำเนินการชัดเจน",
      icon: "alert",
    },
    {
      title: "ทบทวน",
      body: "สร้างสรุปรายวันและรายเดือนด้วย GPT เพื่อให้หัวหน้าทีมตรวจทาน อัปเดตครอบครัว และปรับปรุงการดูแล",
      icon: "ai",
    },
  ],
};

const roles: Record<Language, Array<{ label: string; detail: string }>> = {
  en: [
    { label: "Patient", detail: "Care profile, daily care record, health status" },
    { label: "Family", detail: "Updates, summaries, billing visibility, messages" },
    { label: "Caregiver", detail: "Shift tasks, notes, medication, incidents" },
    { label: "Nurse supervisor", detail: "Reviews, approvals, risk escalation" },
    { label: "Doctor", detail: "Instructions, documents, appointments" },
    { label: "Agency admin", detail: "Operations, compliance, reporting" },
    { label: "System admin", detail: "Access, audit, configuration" },
    { label: "GPT assistant", detail: "Extract, summarize, translate, flag" },
  ],
  th: [
    { label: "ผู้ป่วย", detail: "โปรไฟล์การดูแล ประวัติรายวัน สถานะสุขภาพ" },
    { label: "ครอบครัว", detail: "อัปเดต สรุป ค่าใช้จ่าย และข้อความ" },
    { label: "ผู้ดูแล", detail: "งานประจำกะ บันทึก ยา และ incident" },
    { label: "หัวหน้าพยาบาล", detail: "ตรวจทาน อนุมัติ และยกระดับความเสี่ยง" },
    { label: "แพทย์", detail: "คำสั่งแพทย์ เอกสาร และนัดหมาย" },
    { label: "ผู้ดูแลเอเจนซี", detail: "ปฏิบัติการ compliance และรายงาน" },
    { label: "ผู้ดูแลระบบ", detail: "สิทธิ์การเข้าถึง audit และการตั้งค่า" },
    { label: "GPT assistant", detail: "ดึงข้อมูล สรุป แปล และ flag ประเด็น" },
  ],
};

const roadmap: Record<
  Language,
  Array<{ phase: string; title: string; items: string[]; tone: string }>
> = {
  en: [
    {
      phase: "Phase 1",
      title: "Core Care Platform",
      items: [
        "New patient registration",
        "GPT/OCR form extraction",
        "Consent and PDPA e-signature",
        "Daily visits, incidents, emergency escalation",
      ],
      tone: "care",
    },
    {
      phase: "Phase 2",
      title: "Operations Expansion",
      items: [
        "Shift scheduling",
        "Workload balancing",
        "Compliance dashboard",
        "Report export and PDF archive",
      ],
      tone: "teal",
    },
    {
      phase: "Phase 3",
      title: "Intelligence and Automation",
      items: [
        "Document extraction from prescriptions",
        "Daily family summaries",
        "Vital trends and missing checklist detection",
        "Monthly care review summary",
      ],
      tone: "info",
    },
    {
      phase: "Phase 4",
      title: "Business Platform",
      items: [
        "Inventory and supplies",
        "Billing and payroll",
        "Profitability by patient",
        "Multi-branch analytics and LINE updates",
      ],
      tone: "amber",
    },
  ],
  th: [
    {
      phase: "ระยะที่ 1",
      title: "Core Care Platform",
      items: [
        "ลงทะเบียนผู้ป่วยใหม่",
        "ดึงข้อมูลจากฟอร์มด้วย GPT/OCR",
        "PDPA e-signature",
        "เยี่ยมรายวัน incident และฉุกเฉิน",
      ],
      tone: "care",
    },
    {
      phase: "ระยะที่ 2",
      title: "Care Operations Expansion",
      items: [
        "จัดตารางกะ",
        "สมดุลภาระงานผู้ดูแล",
        "แดชบอร์ด compliance",
        "ส่งออกรายงานและ PDF archive",
      ],
      tone: "teal",
    },
    {
      phase: "ระยะที่ 3",
      title: "Intelligence and Automation",
      items: [
        "ดึงข้อมูลจากใบสั่งยาและ discharge summary",
        "สรุปรายวันให้ครอบครัว",
        "สรุปแนวโน้มสัญญาณชีพและ checklist ที่หายไป",
        "สรุปทบทวนการดูแลรายเดือน",
      ],
      tone: "info",
    },
    {
      phase: "ระยะที่ 4",
      title: "Business Platform",
      items: [
        "คลังเวชภัณฑ์และอุปกรณ์",
        "วางบิลและ payroll",
        "กำไรต่อผู้ป่วย",
        "แดชบอร์ดหลายสาขาและ LINE updates",
      ],
      tone: "amber",
    },
  ],
};

const aiCapabilities: Record<Language, Array<{ title: string; body: string; icon: IconName }>> = {
  en: [
    {
      title: "Document assistant",
      body: "Extract handwritten forms, discharge summaries, prescriptions, and doctor notes into reviewable fields.",
      icon: "document",
    },
    {
      title: "Care summaries",
      body: "Turn daily notes into family-ready summaries and monthly reviews for supervisors.",
      icon: "ai",
    },
    {
      title: "Risk signals",
      body: "Flag missing checklists, vital trends, stroke recovery changes, and palliative comfort patterns.",
      icon: "chart",
    },
    {
      title: "Clinical guardrails",
      body: "Recommendations stay explainable, scoped, and approval-based so care teams remain in control.",
      icon: "shield",
    },
  ],
  th: [
    {
      title: "ผู้ช่วยเอกสาร",
      body: "ดึงข้อมูลจากฟอร์มเขียนมือ discharge summary ใบสั่งยา และบันทึกแพทย์เป็นช่องข้อมูลที่คนตรวจทานได้",
      icon: "document",
    },
    {
      title: "สรุปการดูแล",
      body: "เปลี่ยนบันทึกรายวันเป็นสรุปให้ครอบครัวและสรุปรายเดือนสำหรับหัวหน้าทีม",
      icon: "ai",
    },
    {
      title: "สัญญาณความเสี่ยง",
      body: "แจ้ง checklist ที่ขาด แนวโน้มสัญญาณชีพ การฟื้นตัวหลัง stroke และ comfort trend ใน palliative care",
      icon: "chart",
    },
    {
      title: "ขอบเขตทางคลินิก",
      body: "คำแนะนำต้องอธิบายได้ มีขอบเขตชัด และผ่านการอนุมัติ เพื่อให้ทีมดูแลยังเป็นผู้ควบคุม",
      icon: "shield",
    },
  ],
};

const contactLinks = [
  { label: "Email", value: "ros.cmajor@gmail.com", href: "mailto:ros.cmajor@gmail.com" },
  { label: "Cell / LINE", value: "+66 87 918 2825", href: "tel:+66879182825" },
  {
    label: "LinkedIn",
    value: "Siroros Roongdonsai",
    href: "https://www.linkedin.com/in/siroros-roongdonsai/",
  },
  { label: "GitHub", value: "cmajorros", href: "https://github.com/cmajorros/" },
  {
    label: "Tableau Public",
    value: "Siroros Roongdonsai",
    href: "https://public.tableau.com/app/profile/siroros.roongdonsai/",
  },
];

const vCardValue = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Roongdonsai;Siroros;;;",
  "FN:Siroros Roongdonsai",
  "NICKNAME:สิโรรส รุ่งดอนทราย",
  "ORG:Caredee",
  "TITLE:Caredee product owner",
  "EMAIL:ros.cmajor@gmail.com",
  "TEL;TYPE=CELL:+66879182825",
  "URL:https://www.linkedin.com/in/siroros-roongdonsai/",
  "END:VCARD",
].join("\n");

const linkedInValue = "https://www.linkedin.com/in/siroros-roongdonsai/";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="Caredee home">
          <img src={assetPath("/brand/caredee-logo-full-en.png")} alt="Caredee" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a
              href={["#platform", "#workflows", "#roadmap", "#contact"][index]}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="language-switch" aria-label="Language">
          <button
            className={language === "en" ? "active" : ""}
            type="button"
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
          <button
            className={language === "th" ? "active" : ""}
            type="button"
            onClick={() => setLanguage("th")}
            aria-pressed={language === "th"}
          >
            TH
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <img src={assetPath("/brand/caredee-logo-slogan-thai.png")} alt="" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{t.heroKicker}</p>
          <h1>{t.headline}</h1>
          <p className="hero-body">{t.heroBody}</p>
          <div className="hero-actions">
            <a className="button primary" href="#platform">
              <Icon name="chart" />
              <span>{t.primaryCta}</span>
            </a>
            <a className="button secondary" href="#contact">
              <Icon name="card" />
              <span>{t.secondaryCta}</span>
            </a>
          </div>
          <div className="hero-stats" aria-label="Caredee principles">
            <Metric label={t.statOneLabel} value={t.statOneValue} />
            <Metric label={t.statTwoLabel} value={t.statTwoValue} />
            <Metric label={t.statThreeLabel} value={t.statThreeValue} />
          </div>
        </div>
      </section>

      <section className="principle-band">
        <div className="section-inner principle-inner">
          <Icon name="shield" />
          <p>{t.principle}</p>
        </div>
      </section>

      <section className="section-block platform-section" id="platform">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Caredee OS</p>
            <h2>{t.platformTitle}</h2>
            <p>{t.platformBody}</p>
          </div>

          <div className="pillar-grid">
            {platformPillars[language].map((pillar) => (
              <article className="feature-card" key={pillar.title}>
                <Icon name={pillar.icon} />
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block workflows-section" id="workflows">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="eyebrow">{language === "en" ? "Patient journey" : "เส้นทางการดูแล"}</p>
            <h2>{t.workflowTitle}</h2>
          </div>
          <div className="workflow-track">
            {workflowSteps[language].map((step, index) => (
              <article className="workflow-step" key={step.title}>
                <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                <Icon name={step.icon} />
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block role-section">
        <div className="section-inner role-layout">
          <div className="section-heading">
            <p className="eyebrow">{language === "en" ? "Users" : "ผู้ใช้งานหลัก"}</p>
            <h2>{t.roleTitle}</h2>
          </div>
          <div className="role-list">
            {roles[language].map((role) => (
              <article className="role-row" key={role.label}>
                <h3>{role.label}</h3>
                <p>{role.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block ai-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">{language === "en" ? "GPT and OCR layer" : "ชั้น GPT และ OCR"}</p>
            <h2>{t.aiTitle}</h2>
          </div>
          <div className="ai-grid">
            {aiCapabilities[language].map((capability) => (
              <article className="ai-card" key={capability.title}>
                <Icon name={capability.icon} />
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block roadmap-section" id="roadmap">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="eyebrow">{language === "en" ? "Build path" : "แผนพัฒนา"}</p>
            <h2>{t.roadmapTitle}</h2>
          </div>
          <div className="roadmap-grid">
            {roadmap[language].map((phase) => (
              <article className={`roadmap-card ${phase.tone}`} key={phase.phase}>
                <p className="phase">{phase.phase}</p>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block contact-section" id="contact">
        <div className="section-inner contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">{language === "en" ? "Contact" : "ติดต่อ"}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactBody}</p>
            <div className="contact-card">
              <img src={assetPath("/brand/caredee-logo-icon.png")} alt="" />
              <div>
                <h3>{t.contactName}</h3>
                <p>{t.contactThaiName}</p>
                <span>{t.contactRole}</span>
              </div>
            </div>
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </div>
          <div className="qr-panel" aria-label="QR codes">
            <article>
              <QrCode value={vCardValue} label={t.contactQr} />
              <h3>{t.contactQr}</h3>
            </article>
            <article>
              <QrCode value={linkedInValue} label={t.profileQr} />
              <h3>{t.profileQr}</h3>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  const paths: Record<IconName, ReactNode> = {
    profile: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c1.4-3.6 3.7-5.3 7-5.3s5.6 1.7 7 5.3" />
      </>
    ),
    document: (
      <>
        <path d="M7 3.5h7l3 3V20.5H7z" />
        <path d="M14 3.5v4h4" />
        <path d="M9.5 12h5" />
        <path d="M9.5 16h4" />
      </>
    ),
    shift: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3.5v3" />
        <path d="M16 3.5v3" />
        <path d="M8 11h8" />
        <path d="M8 15h5" />
      </>
    ),
    tasks: (
      <>
        <path d="M5 7.5l1.8 1.8L10.5 5.5" />
        <path d="M13 7.5h6" />
        <path d="M5 15.5l1.8 1.8 3.7-3.8" />
        <path d="M13 15.5h6" />
      </>
    ),
    alert: (
      <>
        <path d="M12 4l9 16H3z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </>
    ),
    family: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16.5" cy="9" r="2.5" />
        <path d="M3.5 20c.9-3.3 2.4-5 4.5-5s3.6 1.7 4.5 5" />
        <path d="M13 20c.5-2.5 1.7-3.8 3.5-3.8 1.6 0 2.8 1.3 3.5 3.8" />
      </>
    ),
    consent: (
      <>
        <path d="M5.5 4.5h13v15h-13z" />
        <path d="M8.5 9h7" />
        <path d="M8.5 13h4" />
        <path d="M8.5 17l2 1.5 4-4.5" />
      </>
    ),
    ai: (
      <>
        <path d="M12 3.5v3" />
        <path d="M12 17.5v3" />
        <path d="M3.5 12h3" />
        <path d="M17.5 12h3" />
        <path d="M6.2 6.2l2.1 2.1" />
        <path d="M15.7 15.7l2.1 2.1" />
        <path d="M17.8 6.2l-2.1 2.1" />
        <path d="M8.3 15.7l-2.1 2.1" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3.5v3" />
        <path d="M16 3.5v3" />
        <path d="M4 10h16" />
        <path d="M8 14h2" />
        <path d="M13 14h2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.5l7 2.7v5.5c0 4.1-2.6 7.2-7 8.8-4.4-1.6-7-4.7-7-8.8V6.2z" />
        <path d="M8.6 12l2.2 2.2 4.6-5" />
      </>
    ),
    chart: (
      <>
        <path d="M4.5 19.5h15" />
        <path d="M7 16v-4" />
        <path d="M12 16V7" />
        <path d="M17 16v-7" />
        <path d="M6.5 10.5l3-3 4 3 4-5" />
      </>
    ),
    card: (
      <>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M7.5 10h5" />
        <path d="M7.5 14h3" />
        <path d="M15.5 13.5h1.8" />
      </>
    ),
  };

  return (
    <svg {...common} className="icon">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        {paths[name]}
      </g>
    </svg>
  );
}

function QrCode({ value, label }: { value: string; label: string }) {
  const matrix = useMemo(() => createQrMatrix(value), [value]);
  const quietZone = 4;
  const size = matrix.length + quietZone * 2;
  const path = useMemo(() => {
    const segments: string[] = [];
    matrix.forEach((row, y) => {
      row.forEach((dark, x) => {
        if (dark) {
          segments.push(`M${x + quietZone} ${y + quietZone}h1v1h-1z`);
        }
      });
    });
    return segments.join("");
  }, [matrix]);

  return (
    <svg
      className="qr-code"
      role="img"
      aria-label={label}
      viewBox={`0 0 ${size} ${size}`}
      shapeRendering="crispEdges"
    >
      <rect width={size} height={size} fill="#FFFFFF" />
      <path d={path} fill="#1F7A6C" />
    </svg>
  );
}

const QR_VERSION = 15;
const QR_SIZE = 21 + (QR_VERSION - 1) * 4;
const QR_DATA_CODEWORDS = 523;
const QR_ECC_CODEWORDS_PER_BLOCK = 22;
const QR_BLOCKS = 6;
const QR_ALIGNMENT_POSITIONS = [6, 26, 48, 70];

function createQrMatrix(value: string): boolean[][] {
  const codewords = createCodewords(value);
  const bits = codewords.flatMap((codeword) =>
    Array.from({ length: 8 }, (_, index) => ((codeword >>> (7 - index)) & 1) === 1),
  );

  let bestMatrix: boolean[][] | null = null;
  let bestPenalty = Number.POSITIVE_INFINITY;

  for (let mask = 0; mask < 8; mask += 1) {
    const { matrix, isFunction } = createBaseMatrix(mask);
    drawData(matrix, isFunction, bits, mask);
    const penalty = calculatePenalty(matrix);

    if (penalty < bestPenalty) {
      bestPenalty = penalty;
      bestMatrix = matrix;
    }
  }

  return bestMatrix ?? createBaseMatrix(0).matrix;
}

function createCodewords(value: string): number[] {
  const bytes = Array.from(new TextEncoder().encode(value));
  const dataBits: number[] = [];

  appendBits(dataBits, 0b0100, 4);
  appendBits(dataBits, bytes.length, 16);
  bytes.forEach((byte) => appendBits(dataBits, byte, 8));

  const capacityBits = QR_DATA_CODEWORDS * 8;
  const terminator = Math.min(4, capacityBits - dataBits.length);
  appendBits(dataBits, 0, terminator);

  while (dataBits.length % 8 !== 0) {
    dataBits.push(0);
  }

  const dataCodewords: number[] = [];
  for (let i = 0; i < dataBits.length; i += 8) {
    let codeword = 0;
    for (let j = 0; j < 8; j += 1) {
      codeword = (codeword << 1) | dataBits[i + j];
    }
    dataCodewords.push(codeword);
  }

  let padByte = 0xec;
  while (dataCodewords.length < QR_DATA_CODEWORDS) {
    dataCodewords.push(padByte);
    padByte = padByte === 0xec ? 0x11 : 0xec;
  }

  if (dataCodewords.length > QR_DATA_CODEWORDS) {
    throw new Error("QR payload is too long for the local encoder.");
  }

  const divisor = reedSolomonDivisor(QR_ECC_CODEWORDS_PER_BLOCK);
  const shortBlockLength = Math.floor(QR_DATA_CODEWORDS / QR_BLOCKS);
  const longBlockCount = QR_DATA_CODEWORDS % QR_BLOCKS;
  const blocks: Array<{ data: number[]; ecc: number[] }> = [];
  let offset = 0;

  for (let blockIndex = 0; blockIndex < QR_BLOCKS; blockIndex += 1) {
    const isLongBlock = blockIndex >= QR_BLOCKS - longBlockCount;
    const dataLength = shortBlockLength + (isLongBlock ? 1 : 0);
    const data = dataCodewords.slice(offset, offset + dataLength);
    offset += dataLength;
    blocks.push({ data, ecc: reedSolomonRemainder(data, divisor) });
  }

  const result: number[] = [];
  const longestDataBlock = Math.max(...blocks.map((block) => block.data.length));

  for (let i = 0; i < longestDataBlock; i += 1) {
    blocks.forEach((block) => {
      if (i < block.data.length) {
        result.push(block.data[i]);
      }
    });
  }

  for (let i = 0; i < QR_ECC_CODEWORDS_PER_BLOCK; i += 1) {
    blocks.forEach((block) => result.push(block.ecc[i]));
  }

  return result;
}

function appendBits(bits: number[], value: number, length: number) {
  for (let i = length - 1; i >= 0; i -= 1) {
    bits.push((value >>> i) & 1);
  }
}

function createBaseMatrix(mask: number) {
  const matrix = Array.from({ length: QR_SIZE }, () => Array(QR_SIZE).fill(false));
  const isFunction = Array.from({ length: QR_SIZE }, () => Array(QR_SIZE).fill(false));

  const setFunction = (row: number, col: number, dark: boolean) => {
    if (row >= 0 && row < QR_SIZE && col >= 0 && col < QR_SIZE) {
      matrix[row][col] = dark;
      isFunction[row][col] = true;
    }
  };

  drawFinder(setFunction, 3, 3);
  drawFinder(setFunction, 3, QR_SIZE - 4);
  drawFinder(setFunction, QR_SIZE - 4, 3);

  QR_ALIGNMENT_POSITIONS.forEach((row) => {
    QR_ALIGNMENT_POSITIONS.forEach((col) => {
      const overlapsFinder =
        (row === 6 && col === 6) ||
        (row === 6 && col === QR_SIZE - 7) ||
        (row === QR_SIZE - 7 && col === 6);
      if (!overlapsFinder) {
        drawAlignment(setFunction, row, col);
      }
    });
  });

  for (let i = 0; i < QR_SIZE; i += 1) {
    if (!isFunction[6][i]) {
      setFunction(6, i, i % 2 === 0);
    }
    if (!isFunction[i][6]) {
      setFunction(i, 6, i % 2 === 0);
    }
  }

  drawFormatBits(setFunction, mask);
  drawVersionBits(setFunction);

  return { matrix, isFunction };
}

function drawFinder(
  setFunction: (row: number, col: number, dark: boolean) => void,
  centerRow: number,
  centerCol: number,
) {
  for (let row = -4; row <= 4; row += 1) {
    for (let col = -4; col <= 4; col += 1) {
      const distance = Math.max(Math.abs(row), Math.abs(col));
      const dark = distance !== 2 && distance !== 4;
      setFunction(centerRow + row, centerCol + col, dark);
    }
  }
}

function drawAlignment(
  setFunction: (row: number, col: number, dark: boolean) => void,
  centerRow: number,
  centerCol: number,
) {
  for (let row = -2; row <= 2; row += 1) {
    for (let col = -2; col <= 2; col += 1) {
      const distance = Math.max(Math.abs(row), Math.abs(col));
      setFunction(centerRow + row, centerCol + col, distance === 0 || distance === 2);
    }
  }
}

function drawFormatBits(
  setFunction: (row: number, col: number, dark: boolean) => void,
  mask: number,
) {
  const data = (0b01 << 3) | mask;
  let remainder = data;
  for (let i = 0; i < 10; i += 1) {
    remainder = (remainder << 1) ^ (((remainder >>> 9) & 1) * 0x537);
  }
  const bits = ((data << 10) | remainder) ^ 0x5412;

  for (let i = 0; i <= 5; i += 1) {
    setFunction(8, i, getBit(bits, i));
  }
  setFunction(8, 7, getBit(bits, 6));
  setFunction(8, 8, getBit(bits, 7));
  setFunction(7, 8, getBit(bits, 8));
  for (let i = 9; i < 15; i += 1) {
    setFunction(14 - i, 8, getBit(bits, i));
  }

  for (let i = 0; i < 8; i += 1) {
    setFunction(QR_SIZE - 1 - i, 8, getBit(bits, i));
  }
  for (let i = 8; i < 15; i += 1) {
    setFunction(8, QR_SIZE - 15 + i, getBit(bits, i));
  }
  setFunction(QR_SIZE - 8, 8, true);
}

function drawVersionBits(setFunction: (row: number, col: number, dark: boolean) => void) {
  let remainder = QR_VERSION;
  for (let i = 0; i < 12; i += 1) {
    remainder = (remainder << 1) ^ (((remainder >>> 11) & 1) * 0x1f25);
  }
  const bits = (QR_VERSION << 12) | remainder;

  for (let i = 0; i < 18; i += 1) {
    const bit = getBit(bits, i);
    const a = QR_SIZE - 11 + (i % 3);
    const b = Math.floor(i / 3);
    setFunction(b, a, bit);
    setFunction(a, b, bit);
  }
}

function drawData(
  matrix: boolean[][],
  isFunction: boolean[][],
  bits: boolean[],
  mask: number,
) {
  let bitIndex = 0;
  let upward = true;

  for (let col = QR_SIZE - 1; col >= 1; col -= 2) {
    if (col === 6) {
      col -= 1;
    }

    for (let i = 0; i < QR_SIZE; i += 1) {
      const row = upward ? QR_SIZE - 1 - i : i;

      for (let offset = 0; offset < 2; offset += 1) {
        const currentCol = col - offset;
        if (!isFunction[row][currentCol]) {
          const bit = bitIndex < bits.length ? bits[bitIndex] : false;
          matrix[row][currentCol] = bit !== maskApplies(mask, row, currentCol);
          bitIndex += 1;
        }
      }
    }

    upward = !upward;
  }
}

function maskApplies(mask: number, row: number, col: number) {
  switch (mask) {
    case 0:
      return (row + col) % 2 === 0;
    case 1:
      return row % 2 === 0;
    case 2:
      return col % 3 === 0;
    case 3:
      return (row + col) % 3 === 0;
    case 4:
      return (Math.floor(row / 2) + Math.floor(col / 3)) % 2 === 0;
    case 5:
      return ((row * col) % 2) + ((row * col) % 3) === 0;
    case 6:
      return (((row * col) % 2) + ((row * col) % 3)) % 2 === 0;
    default:
      return (((row + col) % 2) + ((row * col) % 3)) % 2 === 0;
  }
}

function calculatePenalty(matrix: boolean[][]) {
  let penalty = 0;

  for (let row = 0; row < QR_SIZE; row += 1) {
    penalty += runPenalty(matrix[row]);
  }

  for (let col = 0; col < QR_SIZE; col += 1) {
    penalty += runPenalty(matrix.map((row) => row[col]));
  }

  for (let row = 0; row < QR_SIZE - 1; row += 1) {
    for (let col = 0; col < QR_SIZE - 1; col += 1) {
      const color = matrix[row][col];
      if (
        color === matrix[row][col + 1] &&
        color === matrix[row + 1][col] &&
        color === matrix[row + 1][col + 1]
      ) {
        penalty += 3;
      }
    }
  }

  const finderPattern = [true, false, true, true, true, false, true, false, false, false, false];
  const reverseFinderPattern = [...finderPattern].reverse();

  for (let row = 0; row < QR_SIZE; row += 1) {
    penalty += finderPenalty(matrix[row], finderPattern, reverseFinderPattern);
  }

  for (let col = 0; col < QR_SIZE; col += 1) {
    penalty += finderPenalty(matrix.map((row) => row[col]), finderPattern, reverseFinderPattern);
  }

  const dark = matrix.flat().filter(Boolean).length;
  const total = QR_SIZE * QR_SIZE;
  penalty += Math.floor(Math.abs(dark * 20 - total * 10) / total) * 10;

  return penalty;
}

function runPenalty(line: boolean[]) {
  let penalty = 0;
  let runColor = line[0];
  let runLength = 1;

  for (let i = 1; i < line.length; i += 1) {
    if (line[i] === runColor) {
      runLength += 1;
      if (runLength === 5) {
        penalty += 3;
      } else if (runLength > 5) {
        penalty += 1;
      }
    } else {
      runColor = line[i];
      runLength = 1;
    }
  }

  return penalty;
}

function finderPenalty(line: boolean[], pattern: boolean[], reversePattern: boolean[]) {
  let penalty = 0;

  for (let i = 0; i <= line.length - pattern.length; i += 1) {
    const slice = line.slice(i, i + pattern.length);
    const matches =
      pattern.every((value, index) => value === slice[index]) ||
      reversePattern.every((value, index) => value === slice[index]);
    if (matches) {
      penalty += 40;
    }
  }

  return penalty;
}

const EXP_TABLE = new Array<number>(512);
const LOG_TABLE = new Array<number>(256);

let fieldValue = 1;
for (let i = 0; i < 255; i += 1) {
  EXP_TABLE[i] = fieldValue;
  LOG_TABLE[fieldValue] = i;
  fieldValue <<= 1;
  if (fieldValue & 0x100) {
    fieldValue ^= 0x11d;
  }
}
for (let i = 255; i < 512; i += 1) {
  EXP_TABLE[i] = EXP_TABLE[i - 255];
}

function gfMultiply(a: number, b: number) {
  if (a === 0 || b === 0) {
    return 0;
  }
  return EXP_TABLE[LOG_TABLE[a] + LOG_TABLE[b]];
}

function reedSolomonDivisor(degree: number) {
  const result = Array(degree).fill(0);
  result[degree - 1] = 1;
  let root = 1;

  for (let i = 0; i < degree; i += 1) {
    for (let j = 0; j < degree; j += 1) {
      result[j] = gfMultiply(result[j], root);
      if (j + 1 < degree) {
        result[j] ^= result[j + 1];
      }
    }
    root = gfMultiply(root, 0x02);
  }

  return result;
}

function reedSolomonRemainder(data: number[], divisor: number[]) {
  const result = Array(divisor.length).fill(0);

  data.forEach((byte) => {
    const factor = byte ^ (result.shift() ?? 0);
    result.push(0);
    divisor.forEach((coefficient, index) => {
      result[index] ^= gfMultiply(coefficient, factor);
    });
  });

  return result;
}

function getBit(value: number, index: number) {
  return ((value >>> index) & 1) !== 0;
}
