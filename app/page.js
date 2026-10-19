"use client";
import { useEffect } from "react";
import {
  Facebook, Instagram, Music2, Send, MessageCircle, Star, Quote, GraduationCap, CalendarDays,
  Video, ClipboardCheck, BarChart3, UserCheck, BookOpen, Brain, Phone, Check,
} from "lucide-react";

const WA = "https://wa.me/201558768002";
const nav = [["الرئيسية", "#home"], ["من نحن", "#about"], ["المميزات", "#features"], ["المراحل", "#stages"], ["الآراء", "#reviews"], ["تواصل معنا", "#contact"]];
const features = [
  [GraduationCap, "نخبة المعلمات", "نخبة من أفضل وأكفأ المعلمات في كل التخصصات"],
  [CalendarDays, "يوم دراسي كامل", "جدول حصص ثابت ٥ أيام من الأحد للخميس"],
  [Video, "حصص على Zoom", "لينك ثابت لكل مادة وجروب خاص لمتابعة الواجبات"],
  [ClipboardCheck, "كويزات وامتحانات", "كويزات مستمرة وامتحانات دورية ومراجعات طوال العام"],
  [BarChart3, "تقرير أسبوعي", "متابعة مستوى الطالب وتقرير أسبوعي لولي الأمر"],
  [UserCheck, "متابعة الغياب", "أخذ الغياب يومياً والتواصل المستمر مع ولي الأمر"],
  [BookOpen, "شرح تفصيلي", "شرح كل جزء في المنهج بالتفصيل وحل بنك الأسئلة"],
  [Brain, "مهارات لا حفظ", "هتتعلم مهارات مش مجرد حفظ معلومات"],
];
const stages = [["KG", "رياض الأطفال"], ["ابتدائي", "المرحلة الابتدائية"], ["إعدادي", "المرحلة الإعدادية"], ["ثانوي", "المرحلة الثانوية"]];
const reviews = [
  ["أم يوسف", "ولية أمر - السعودية", "الحمد لله مستوى ابني اتحسن جداً، والمتابعة الأسبوعية والتقارير خلتني مطمنة طول الوقت.", "https://www.facebook.com/share/v/1Cih6A2pjU/?mibextid=wwXIfr"],
  ["أم مريم", "ولية أمر - الكويت", "المعلمات ممتازات وشرحهم مفصل، وبنتي بقت بتحب المذاكرة وبتستنى الحصص كل يوم.","https://www.facebook.com/share/v/18m6UDK7bn/?mibextid=wwXIfr"],
  ["أبو عمر", "ولي أمر - مصر", "نظام ثابت وجدول منظم ومتابعة مستمرة للواجبات والغياب، أنصح بيها أي ولي أمر.","https://www.facebook.com/share/v/1Le67RCR1Y/?mibextid=wwXIfr"],
  ["أبو احمد", "ولي أمر - مصر",  "تجربة ممتازة، والشرح بسيط وواضح، ولاحظت فرق كبير في مستوى ابني وثقته في نفسه.","https://www.facebook.com/share/p/19M8YpUFjt/?mibextid=wwXIfr"],
  ["أم سارة", "ولي أمر - مصر", "المتابعة مستمرة والتواصل ممتاز، وبقيت عارفة مستوى بنتي ونقاط القوة والحاجات اللي محتاجة تحسنها.","https://www.facebook.com/share/v/1J4BZGw7oN/?mibextid=wwXIfr"],
];
const socials = [
  [Facebook, "فيسبوك", "https://www.facebook.com/Tabarak-Academy-104999165655040/"],
  [Instagram, "إنستجرام", "https://www.instagram.com/tabarak_academy_9?igsh=MWR1eTE1dmc1bnhrbA%3D%3D&utm_source=qr"],
  [Music2, "تيك توك", "https://www.tiktok.com/@tabarakacademy?_r=1&_t=ZS-96Nu4q3MswZ"],
  [Send, "تليجرام", "https://t.me/+gU0RgWBcn901YjY8"],
  [MessageCircle, "جروب واتساب", "https://chat.whatsapp.com/CbLTjMS8ZmrBnqwHVcyWjT?mode=gi_t"],
];

function Btn({ href, children, alt }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3 font-bold transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 ${alt ? "border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-primary-foreground" : "bg-cta text-cta-foreground hover:brightness-105"}`}>
      {children}
    </a>
  );
}

function Title({ tag, title }) {
  return (
    <div className="reveal mb-12 text-center">
      <span className="font-bold text-cta">{tag}</span>
      <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-cta" />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("shown")), { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="font-sans">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2 transition hover:scale-105">
            <img src="/logo.jpeg" alt="أكاديمية تبارك" className="h-12 w-12 rounded-full" />
            <span className="text-xl font-extrabold text-primary">أكاديمية تبارك</span>
          </a>
          <nav className="hidden gap-6 font-semibold md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="relative transition hover:text-primary after:absolute after:-bottom-1 after:right-0 after:h-0.5 after:w-0 after:bg-cta after:transition-all hover:after:w-full">{l}</a>
            ))}
          </nav>
          <Btn href={WA}>احجز الآن</Btn>
        </div>
      </header>

      <section id="home" className="bg-hero overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div className="animate-fade-up">
            <span className="rounded-full bg-secondary px-4 py-1 font-bold text-primary">Tabarak Academy</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              أكاديمية لتدريس <span className="text-primary">المنهج المصري</span> أون لاين لأبنائنا في الخارج وداخل مصر
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              أفضل مدرسين + أفضل إدارة + تشجيع وتقييم + متابعة مستمرة = تفوق وتميز ووصول لحلمك
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Btn href={WA}>احجز يوم تجريبي مجاناً</Btn>
              <Btn href="#features" alt>اعرف أكثر</Btn>
            </div>
          </div>
          <img src="/hero.jpg" alt="طالب يدرس أون لاين" width={1024} height={1024} className="animate-float rounded-3xl shadow-2xl" />
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-center md:grid-cols-4">
          {[["٥ أيام", "دوام أسبوعي"], ["٨ ص - ١ م", "بتوقيت السعودية"], ["عربي ولغات", "جميع المراحل"], ["اشتراك شهري", "يشمل كل المواد"]].map(([a, b]) => (
            <div key={a} className="reveal transition hover:scale-110"><div className="text-2xl font-extrabold text-cta">{a}</div><div className="opacity-80">{b}</div></div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <img src="/logo.jpeg" alt="شعار أكاديمية تبارك" loading="lazy" className="reveal mx-auto w-80 rounded-full shadow-xl transition duration-500 hover:rotate-3 hover:scale-105" />
        <div className="reveal">
          <span className="font-bold text-cta">من نحن</span>
          <h2 className="mt-2 text-3xl font-extrabold">لأن التعليم معانا غير</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            وفرنالك كل الإمكانيات داخل أكاديمية تبارك، وأساليب الشرح والممارسة والحل والمتابعة الدورية مع أقوى فريق عمل من كبار المعلمات.
            اجهزوا لتكونوا جزء من رحلة نجاح هنمشيها سوا خطوة خطوة.
          </p>
          <ul className="mt-6 space-y-3 font-semibold">
            {["حقق حلم ابنك معانا في Tabarak Academy", "مفاجآت وخصومات لولي الأمر عند الحجز", "خصومات خاصة للإخوة والأصدقاء"].map((t) => (
              <li key={t} className="flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-whatsapp text-primary-foreground"><Check size={16} /></span>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="features" className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Title tag="مميزاتنا" title="ليه تختار أكاديمية تبارك؟" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([I, t, d], i) => (
              <div key={t} style={{ transitionDelay: `${(i % 4) * 100}ms` }} className="reveal group rounded-2xl bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary transition duration-300 group-hover:rotate-6 group-hover:bg-cta group-hover:text-cta-foreground"><I size={28} /></div>
                <h3 className="text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stages" className="mx-auto max-w-6xl px-4 py-20">
        <Title tag="المراحل الدراسية" title="جميع المراحل - عربي ولغات" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map(([a, b]) => (
            <div key={a} className="reveal rounded-2xl border-2 border-secondary p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cta hover:bg-primary hover:text-primary-foreground">
              <div className="text-3xl font-extrabold">{a}</div>
              <div className="mt-2 font-semibold opacity-70">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Title tag="آراء أولياء الأمور" title="ماذا يقولون عنا" />
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map(([n, r, t, link], i) => (
              <div
                key={n}
                style={{ transitionDelay: `${i * 120}ms` }}
                className="reveal relative rounded-2xl bg-card p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Quote
                  className="absolute left-6 top-6 text-cta/40"
                  size={40}
                />
                <div className="flex gap-1 text-cta">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 leading-8 text-muted-foreground">
                  {t}
                </p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-bold">{n}</div>
                    <div className="text-sm text-muted-foreground">{r}</div>
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm font-semibold text-white bg-primary py-1 px-3 rounded-2xl transition-colors hover:text-primary"
                  >
                    مزيد من الآراء
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="reveal mx-auto max-w-5xl rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-16">
          <h2 className="text-3xl font-extrabold">تعال شوف واحكم بنفسك</h2>
          <p className="mt-4 text-lg opacity-90">متاح حضور يوم تجريبي كامل لجميع المواد</p>
          <a href="https://t.me/+gU0RgWBcn901YjY8" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3 font-bold text-primary-foreground transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95">
            <MessageCircle size={20} />انضم الى جروب التلجرام
          </a>
          <a href="https://chat.whatsapp.com/CbLTjMS8ZmrBnqwHVcyWjT?mode=gi_t" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3 font-bold text-primary-foreground transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95">
            <MessageCircle size={20} /> انضم الى جروب الواتس
          </a>
        </div>
      </section>

      <footer id="contact" className="bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
          <div>
            <img src="/logo.jpeg" alt="" loading="lazy" className="h-16 w-16 rounded-full" />
            <p className="mt-4 opacity-80">أكاديمية تبارك لتدريس المنهج المصري (عربي / لغات) أون لاين.</p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">للحجز والاستفسار</h4>
            <a href={WA} className="flex items-center gap-2 transition hover:text-cta"><MessageCircle size={18} /><span dir="ltr">+20 155 876 8002</span></a>
            <a href="tel:+966571759248" className="mt-3 flex items-center gap-2 transition hover:text-cta"><Phone size={18} /><span dir="ltr">+966 57 175 9248</span></a>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">تابعنا</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(([I, n, h]) => (
                <a key={n} href={h} target="_blank" rel="noreferrer" aria-label={n} title={n}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-background/30 transition duration-300 hover:-translate-y-1 hover:rotate-6 hover:border-cta hover:bg-cta hover:text-cta-foreground">
                  <I size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 py-4 text-center text-sm opacity-70"> Copyright {new Date().getFullYear()} Tabarak Academy by BAFANA © </div>
      </footer>
    </div>
  );
}
