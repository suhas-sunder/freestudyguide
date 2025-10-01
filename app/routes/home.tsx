import type { Route } from "./+types/home";
import { json } from "@remix-run/node";

/* =========================================================
   META
========================================================= */
export function meta({}: Route.MetaArgs) {
  const title =
    "Free Study Guide | Study Planners, Printable Cheat-Sheets, Exam Countdown & Focus Tips";
  const description =
    "FreeStudyGuide.com provides printable study planners, exam countdown sheets, Pomodoro focus tips, active-recall strategies, scholarship checklists, and productivity hacks - all free, mobile-friendly, no sign-up.";
  const url = "https://freestudyguide.com/";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: [
        "study planner",
        "exam countdown",
        "printable study guide",
        "free cheat sheets",
        "math formula sheets",
        "Pomodoro study tips",
        "active recall",
        "spaced repetition",
        "college prep checklist",
        "study motivation",
      ].join(", "),
    },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { rel: "canonical", href: url },
    { name: "theme-color", content: "#dbeafe" }, // calm academic blue
  ];
}

/* =========================================================
   LOADER
========================================================= */
export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

/* =========================================================
   PAGE
========================================================= */
export default function Home({ loaderData: { nowISO } }: Route.ComponentProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Free Study Guide",
        url: "https://freestudyguide.com/",
        description:
          "FreeStudyGuide.com offers printable study planners, exam countdown sheets, Pomodoro focus tips, active-recall strategies, and college-prep checklists.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What makes FreeStudyGuide different?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It’s a one-stop hub for free printable planners, cheat-sheets, study strategies and exam-day resources - no sign-up, mobile-friendly and printer-ready.",
            },
          },
          {
            "@type": "Question",
            name: "Are all the planners and cheat-sheets really free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Every printable on FreeStudyGuide.com is free for personal and classroom use with no hidden paywalls or sign-ups.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to create an account?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No account is required. Everything runs in-browser and downloads directly as PDF or PNG - no registration needed.",
            },
          },
          {
            "@type": "Question",
            name: "Are the pages printer-friendly and ad-light?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We design every file in clean black-and-white or light-color layouts so they print clearly and use minimal ink. Ads stay on the site, not in the PDFs.",
            },
          },
          {
            "@type": "Question",
            name: "Can I share the printables with friends or teachers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. You may share links or physical printouts for non-commercial, educational use as long as they remain unmodified and credit FreeStudyGuide.com.",
            },
          },
          {
            "@type": "Question",
            name: "What subjects do the cheat-sheets cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We cover math formula sheets, physics constants, chemistry periodic-table references, grammar & writing quick-guides, history timeline charts and exam-day checklists, with new sheets added regularly.",
            },
          },
          {
            "@type": "Question",
            name: "Do you have planners for standardized tests like SAT or GRE?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We offer downloadable SAT, ACT, GRE, MCAT, and IELTS study roadmaps and countdown calendars customizable for your test dates.",
            },
          },
          {
            "@type": "Question",
            name: "Will there be digital study tools or just printables?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We’re adding in-browser utilities like Pomodoro timers, flash-card templates and active-recall planners so you can stay paper-free if you prefer.",
            },
          },
          {
            "@type": "Question",
            name: "How often is the content updated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Core planners are reviewed every semester for accuracy while productivity guides are refreshed whenever new evidence-based study tips emerge.",
            },
          },
          {
            "@type": "Question",
            name: "Can teachers use these materials in class?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Teachers can print or distribute the PDFs in their classroom or upload them to class websites as long as they remain free and unaltered.",
            },
          },
          {
            "@type": "Question",
            name: "Are you adding language-learning or college-prep sheets?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We plan to expand into Spanish, French and German common-phrase cheat-cards plus printable college-application and scholarship checklists.",
            },
          },
          {
            "@type": "Question",
            name: "Is my data private when I use the online tools?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We do not store personal study data. All countdowns and timers run locally in your browser and reset when cookies are cleared.",
            },
          },
          {
            "@type": "Question",
            name: "How can I request a new sheet or planner?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use the request form on our contact page or email us your suggestion. We prioritize requests from multiple students or teachers.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-blue-50 text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ---------------- HEADER ---------------- */}
      <header className="sticky top-0 z-10 border-b border-blue-200 bg-blue-100/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold">📘 Free Study Guide</h1>
          <nav className="hidden gap-4 text-sm font-medium sm:flex">
            <a href="#planners" className="hover:underline">
              Planners
            </a>
            <a href="#printables" className="hover:underline">
              Cheat-Sheets
            </a>
            <a href="#focus" className="hover:underline">
              Focus Tips
            </a>
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="border-b border-blue-200 bg-blue-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Free Printable Study Planners & Exam Tools
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-blue-800">
            Organize your semester with printable planners, countdown calendars,
            quick cheat-sheets, focus-cycle tips and scholarship checklists -
            all in one place.
            <span className="ml-2 text-sm">
              Last updated {new Date(nowISO).toLocaleDateString()}
            </span>
          </p>
        </div>
      </section>

      {/* ---------------- FEATURE SECTIONS ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-10 leading-relaxed">
        {/* 1. Planners */}
        <article
          id="planners"
          className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold text-blue-900">
            Exam & Semester Planners
          </h3>
          <p className="mt-2 text-blue-800">
            Download <strong>printable weekly and monthly planners</strong>,
            create <em>exam countdown calendars</em>, and map out
            <strong> study roadmaps</strong> for SAT, GRE, MCAT or final-week
            prep. Designed for clean black-and-white printing and binder-ready
            layouts.
          </p>
        </article>

        {/* 2. Cheat-Sheets */}
        <article
          id="printables"
          className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold text-blue-900">
            Printable Cheat-Sheets
          </h3>
          <p className="mt-2 text-blue-800">
            Grab one-page <strong>formula sheets</strong> for math, physics,
            periodic-table quick-look charts for chemistry, grammar reference
            cards, historical timeline posters, and more -
            <em>all free for personal or classroom use.</em>
          </p>
        </article>

        {/* 3. Focus & Productivity */}
        <article
          id="focus"
          className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold text-blue-900">
            Focus & Productivity Tips
          </h3>
          <p className="mt-2 text-blue-800">
            Learn <strong>Pomodoro study cycles</strong>, active-recall drills,
            spaced-repetition scheduling and <em>sleep / hydration</em> hacks to
            improve retention before exams. Each guide is infographic-style for
            Pinterest-friendly sharing and easy phone saves.
          </p>
        </article>

        {/* 4. Scholarship & Prep */}
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Scholarship & College-Prep Basics
          </h3>
          <p className="mt-2 text-blue-800">
            Quick-reference printable{" "}
            <strong>college application checklists</strong>, scholarship
            reminders, FAFSA/CSS due-date charts, and{" "}
            <em>Dean’s-list GPA cut-off reference</em> pages - all ad-light and
            mobile-friendly.
          </p>
        </article>

        {/* 5. Privacy & Free */}
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Private, Free & Mobile-Ready
          </h3>
          <p className="mt-2 text-blue-800">
            No sign-up, no tracking. Tools run directly in-browser, load fast on
            school Wi-Fi, and print cleanly without ads cluttering your notes.
          </p>
        </article>
      </section>

      {/* ---------------- SEO TEXT BLOCK ---------------- */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm text-blue-800 leading-relaxed">
          <h3 className="text-lg font-bold text-blue-900">
            Why Students Trust FreeStudyGuide.com
          </h3>
          <p className="mt-2">
            Our mission is to keep essential{" "}
            <strong>
              study utilities free, printable and distraction-free
            </strong>
            . All PDFs are classroom-safe and printer-friendly; focus guides are
            short and science-backed so you can apply them fast before finals.
          </p>
          <p className="mt-2">
            Whether you’re in high school, college, or prepping for graduate
            entrance exams, FreeStudyGuide.com aims to be your go-to space for
            lightweight tools that respect your privacy and your time.
          </p>
        </div>
      </section>

      {/* =========================================================
   SEO-RICH LANDING PAGE SECTIONS  (~1,150 words)
   COLOR: Blue (consistent with your snippet)
========================================================= */}
      <section className="mx-auto max-w-6xl px-4 pb-12 space-y-10 leading-relaxed text-blue-800">
        {/* 1. Printable Study Planners */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Free Printable Study Planners & Revision Trackers
          </h3>
          <p className="mt-2">
            <strong>FreeStudyGuide.com</strong> provides an expanding library of
            <em>
              {" "}
              free printable daily, weekly and monthly study-planner templates
            </em>
            that help students map assignments, track exam dates, and manage
            their workload. Every planner is designed to be{" "}
            <strong>printer-friendly</strong>, using minimal ink and clean
            layouts that stay legible even in black-and-white.
          </p>
          <p className="mt-2">
            These planners support{" "}
            <em>
              color-coded subjects, time-blocking for Pomodoro sessions, and
              goal check-boxes
            </em>{" "}
            so learners can see progress at a glance. Teachers often print
            classroom sets for exam-season revision schedules, while individual
            students download PDFs to stay consistent through midterms and
            finals.
          </p>
        </div>

        {/* 2. Formula & Reference Cheat-Sheets */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Math, Science & Grammar Cheat-Sheets at a Glance
          </h3>
          <p className="mt-2">
            We curate <strong>one-page printable cheat-sheets</strong> that
            condense essential formulas, periodic-table trends, unit-conversion
            charts, geometry theorems, and tricky grammar rules. Each sheet is
            <em> classroom-safe, ad-light and distraction-free</em>, enabling
            students to keep quick-reference material beside their notebooks or
            pinned to a dorm wall for rapid recall.
          </p>
          <p className="mt-2">
            Visual mnemonics and color-coded sections improve memorization,
            especially during <em>last-minute cramming sessions</em> or
            lab-practical reviews. New cheat-sheets are added throughout the
            year based on exam trends and teacher feedback.
          </p>
        </div>

        {/* 3. Exam Countdown Calendars */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Exam Countdown Calendars & Milestone Trackers
          </h3>
          <p className="mt-2">
            Stay on pace for finals with our{" "}
            <strong>printable exam countdown calendars</strong>
            that highlight each day leading to test week. Students can
            <em>
              {" "}
              mark completed revision blocks, schedule practice-test dates, and
              log mock-exam scores
            </em>{" "}
            to visualize progress.
          </p>
          <p className="mt-2">
            Parents and tutors often use these countdown sheets to help learners
            <strong> avoid last-minute cramming</strong> and spread study
            sessions evenly for less stress and better retention.
          </p>
        </div>

        {/* 4. Active-Recall & Spaced-Repetition Guides */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Active-Recall & Spaced-Repetition Made Simple
          </h3>
          <p className="mt-2">
            Our step-by-step printable guides teach students how to practice
            <strong>
              {" "}
              active-recall, self-quizzing and spaced-repetition cycles
            </strong>
            without needing an expensive app. Each PDF explains the science in
            plain language, followed by ready-to-use flash-card templates and
            review schedules.
          </p>
          <p className="mt-2">
            These evidence-based techniques help boost long-term memory for
            <em> languages, STEM formulas, and historical facts</em>, turning
            study time into high-retention review sessions.
          </p>
        </div>

        {/* 5. Pomodoro & Focus Habit Tips */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Pomodoro Focus Templates & Study-Break Habit Tips
          </h3>
          <p className="mt-2">
            Beat procrastination with our{" "}
            <strong>Pomodoro focus worksheets</strong>
            that guide students to alternate{" "}
            <em>25-minute deep-work sprints</em> with short recovery breaks.
            Printable habit-trackers help learners monitor consistency over
            weeks, motivating them to build
            <strong> long-term focus stamina</strong> ahead of exams.
          </p>
          <p className="mt-2">
            We pair these with quick{" "}
            <em>breathing-exercise and stretch-break cards</em>
            to reduce screen fatigue for remote learners pulling long study
            hours.
          </p>
        </div>

        {/* 6. Test-Day & College-Prep Checklists */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Test-Day & College-Prep Packing Checklists
          </h3>
          <p className="mt-2">
            From <strong>exam-day do-not-forget lists</strong> (ID cards,
            calculators, water, approved snacks) to{" "}
            <strong>dorm-move-in packing sheets</strong>, FreeStudyGuide keeps
            stress low by organizing essentials into
            <em> printable, tick-box-ready PDFs</em>.
          </p>
          <p className="mt-2">
            High-school seniors preparing for SAT, ACT or IELTS can also use our
            <em>
              {" "}
              timeline checklists for registrations, essay deadlines, and
              recommendation letters
            </em>
            —all downloadable and mobile-friendly.
          </p>
        </div>

        {/* 7. STEM Lab & Project-Planning Logs */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            STEM Lab Logs & Science-Fair Project Planners
          </h3>
          <p className="mt-2">
            Teachers and students running{" "}
            <strong>
              chemistry titrations, biology experiments, robotics trials or
              coding hackathons
            </strong>{" "}
            can download ready-made lab-log sheets that capture{" "}
            <em>hypothesis, steps, time-stamps, data tables and results</em>—no
            sign-up required.
          </p>
          <p className="mt-2">
            These structured logs save instructors time grading practicals and
            help students build <strong>organized lab notebooks</strong> for
            fair projects or IB Internal Assessments.
          </p>
        </div>

        {/* 8. Teacher-Friendly Classroom Aids */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Teacher-Friendly Worksheets & Classroom Aids
          </h3>
          <p className="mt-2">
            Educators benefit from our{" "}
            <strong>
              pre-formatted attendance trackers, quiz-score sheets,
              behavior-point logs, and group-project rubrics
            </strong>
            . Everything is optimized for A4/Letter printing so it
            <em> slips neatly into binders and clipboards</em> without wasting
            space or ink.
          </p>
          <p className="mt-2">
            Since there’s <strong>no login wall</strong>, teachers can share
            direct links with students for instant downloads in class or at the
            library.
          </p>
        </div>

        {/* 9. Accessibility & Mobile-First PDFs */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Mobile-First, Printer-Friendly & Accessibility-Ready
          </h3>
          <p className="mt-2">
            Every printable PDF is{" "}
            <strong>optimized for both mobile screens and home printers</strong>
            , loading fast even on slower school Wi-Fi. High-contrast color
            schemes, large fonts, and screen-reader-friendly headings make the
            site inclusive for{" "}
            <em>
              low-vision learners and classrooms with diverse accessibility
              needs
            </em>
            .
          </p>
          <p className="mt-2">
            Offline usability means students in{" "}
            <strong>low-connectivity regions</strong>
            can download once and print or reuse templates without repeated data
            costs.
          </p>
        </div>

        {/* 10. Why Students & Teachers Trust FreeStudyGuide */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900">
            Why Students & Teachers Trust FreeStudyGuide
          </h3>
          <p className="mt-2">
            Our mission is to keep all resources{" "}
            <strong>
              free, printer-friendly, privacy-respecting and distraction-light
            </strong>
            . No pop-ups, no forced accounts—just{" "}
            <em>clean tools that save students’ time</em>.
          </p>
          <p className="mt-2">
            Whether you’re in{" "}
            <strong>
              high-school, college, homeschooling or prepping for graduate
              entrance exams
            </strong>
            , FreeStudyGuide aims to be your go-to hub for lightweight printable
            aids that focus on learning instead of ads or log-ins.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-12 mx-auto max-w-6xl px-4 pb-12">
        {/* 1. Hero Study Planner Printables */}
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm text-blue-800 leading-relaxed">
          <h3 className="text-lg font-bold text-blue-900">
            Free Printable Study Planners & Trackers
          </h3>
          <p className="mt-2">
            <strong>FreeStudyGuide</strong> hosts a library of
            <em> printable daily, weekly and monthly study planners</em>{" "}
            designed to help students stay consistent. Download clean PDF
            layouts to block out morning review sessions, after-school homework
            slots, or weekend cram hours. Use the{" "}
            <strong>exam-countdown calendar</strong> to mark key test dates and
            track revision milestones as the deadline approaches. We also
            include{" "}
            <em>
              assignment progress charts, project-deadline trackers,
              distraction-log sheets and time-on-task graphs
            </em>{" "}
            so you can spot where each minute goes.
          </p>
          <p className="mt-2">
            All planners are mobile-friendly and printer-ready with minimal ink
            usage. Teachers often project the countdown calendar on classroom
            smartboards while students print their own pocket-sized planners for
            personal use.
          </p>
        </article>

        {/* 2. Cheat-Sheets & Quick-Reference Cards */}
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm text-blue-800 leading-relaxed">
          <h3 className="text-lg font-bold text-blue-900">
            Math, Science & Grammar Cheat-Sheets
          </h3>
          <p className="mt-2">
            Our printable <strong>cheat-sheet collection</strong> condenses
            high-yield formulas, charts and reference data onto a single A4
            page. Popular downloads include{" "}
            <em>
              algebra formula grids, geometry area-volume tables, trigonometric
              identities, metric-imperial conversion charts, physics constants,
              chemistry periodic-table summaries and grammar quick guides
            </em>{" "}
            for essay writing.
          </p>
          <p className="mt-2">
            These sheets save revision time by keeping the most-used equations
            and definitions visible at a glance during practice sessions.
            Students can tape them to bedroom walls, slide them inside binders,
            or keep laminated cards in pencil cases.
          </p>
        </article>

        {/* 3. Productivity Frameworks */}
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm text-blue-800 leading-relaxed">
          <h3 className="text-lg font-bold text-blue-900">
            Proven Productivity Frameworks
          </h3>
          <p className="mt-2">
            Boost focus with our guides to evidence-based frameworks such as the
            <strong> Pomodoro technique</strong> for 25-minute deep-work
            sprints,
            <strong> active-recall flash-cards</strong> that strengthen memory,
            <strong> spaced-repetition planners</strong> for long-term
            retention, the <strong>SQ3R reading strategy</strong> for textbook
            chapters and
            <strong> SMART goal-setting charts</strong> to keep semester
            objectives realistic and measurable.
          </p>
          <p className="mt-2">
            Each framework is paired with a <em>printer-ready worksheet</em> so
            learners can follow the technique without installing apps or
            creating accounts.
          </p>
        </article>

        {/* 4. College-Prep & Scholarship Tools */}
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm text-blue-800 leading-relaxed">
          <h3 className="text-lg font-bold text-blue-900">
            College-Prep Planners & Scholarship Checklists
          </h3>
          <p className="mt-2">
            High-school seniors will find{" "}
            <strong>application timeline trackers</strong>,
            <strong> personal-statement brainstorming sheets</strong>,
            <strong> recommendation-letter request logs</strong> and
            <strong> scholarship / financial-aid checklists</strong>. Our{" "}
            <em>campus-visit note pages</em> make it easy to compare facilities,
            tuition details and housing options across universities.
          </p>
          <p className="mt-2">
            These tools keep paperwork organized and prevent last-minute
            scrambles during admission season.
          </p>
        </article>

        {/* 5. Printable Classroom Posters */}
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm text-blue-800 leading-relaxed">
          <h3 className="text-lg font-bold text-blue-900">
            Teacher-Friendly Posters & Worksheets
          </h3>
          <p className="mt-2">
            Teachers can download{" "}
            <strong>growth-mindset motivational quote posters</strong>,{" "}
            <strong>exam-day reminder charts</strong>,
            <strong> step-by-step math method posters</strong> and
            <strong> printable reading-log trackers</strong> for younger grades.
            These PDFs are classroom-ready for bulletin boards or smartboard
            projection.
          </p>
        </article>

        {/* 6. Evidence-Based Study Tips */}
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm text-blue-800 leading-relaxed">
          <h3 className="text-lg font-bold text-blue-900">
            Evidence-Based Study Tips that Work
          </h3>
          <p className="mt-2">
            We summarize cognitive-science findings into concise guides:
            <strong> active-recall beats re-reading</strong>,
            <strong> spaced practice outperforms cramming</strong>,
            <strong> interleaving improves problem-solving</strong>,
            <strong> self-testing strengthens retrieval pathways</strong> and
            <strong> frequent low-stakes quizzes reduce exam anxiety</strong>.
            Each tip is supported by downloadable planner templates so students
            can apply it immediately.
          </p>
        </article>

        {/* 7. Mobile-Friendly Tools Roadmap */}
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm text-blue-800 leading-relaxed">
          <h3 className="text-lg font-bold text-blue-900">
            Mobile-Friendly Tools & Future Roadmap
          </h3>
          <p className="mt-2">
            We are developing lightweight{" "}
            <strong>
              web-based Pomodoro timers, exam-day countdown widgets, flash-card
              generators and PDF-sync planners
            </strong>
            so you can switch seamlessly between printed pages and digital
            reminders. Planned integrations remain privacy-first and run
            entirely in-browser without sign-ups.
          </p>
        </article>

        {/* 8. Teacher & Parent Resources */}
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm text-blue-800 leading-relaxed">
          <h3 className="text-lg font-bold text-blue-900">
            Teacher & Parent Support Materials
          </h3>
          <p className="mt-2">
            Beyond individual learners, <strong>FreeStudyGuide</strong> serves
            <em> educators, tutors and parents</em> with{" "}
            <strong>
              lesson-plan templates, reading-log charts, homework-completion
              trackers, reward certificates and printable progress-report sheets
            </strong>
            . These resources help keep young learners motivated and give
            teachers ready-to-use classroom aides at no cost.
          </p>
        </article>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-14">
        <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
        <div className="mt-4 divide-y divide-blue-100 rounded-2xl border border-blue-100 bg-white shadow-sm">
          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              1. Are all the planners and cheat-sheets really free?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              Yes. Every printable on FreeStudyGuide.com is free for personal
              and classroom use. There are no hidden paywalls or sign-ups
              required.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              2. Do I need an account to download the PDFs?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              No account needed. All planners, calendars and sheets download in
              one click as PDF or PNG files, making them usable even on school
              or library computers.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              3. Are the pages printer-friendly and ad-light?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              We design every file in clean black-and-white or light-color
              layouts so they print clearly and use minimal ink. Ads stay on the
              site, not on the PDF itself.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              4. Can I share the printables with friends or teachers?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              Absolutely. You may share links or physical printouts freely for
              non-commercial, educational use as long as they remain unmodified
              and credit FreeStudyGuide.com.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              5. What subjects do the cheat-sheets cover?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              Currently: math formula sheets, physics constants, chemistry
              periodic-table references, grammar & writing quick-guides, history
              timeline charts and exam-day checklists. We add new sheets
              regularly.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              6. Do you have planners for standardized tests like SAT or GRE?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              Yes. We offer downloadable <em>SAT / ACT / GRE / MCAT / IELTS</em>{" "}
              study roadmaps and countdown calendars you can customize for your
              own test dates.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              7. Will there be digital study tools or just printables?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              We are adding in-browser utilities like Pomodoro timers,
              flash-card templates and active-recall planners so you can stay
              paper-free if you prefer.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              8. How often is the content updated?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              Core planners are reviewed every semester for accuracy (holidays,
              academic year changes, exam boards). Focus tips and productivity
              guides are updated whenever new evidence-based methods emerge.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              9. Can teachers use these materials in class?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              Yes. Teachers can print or distribute the PDFs in their classroom
              or upload them to their class website as long as they remain free
              and unaltered.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              10. Are you adding language-learning or college-prep sheets?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              We plan to expand into common-phrase cheat-cards for Spanish /
              French / German and printable college-application & scholarship
              checklists.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              11. Is my data private when I use the online tools?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              We do not store personal study data. All countdowns and timers run
              locally in your browser and reset when you clear your cookies.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium">
              12. How can I request a new sheet or planner?
            </summary>
            <div className="px-5 pb-4 text-blue-800">
              Use the request form on our contact page or email us your
              suggestion. We prioritize subjects requested by multiple students
              or teachers.
            </div>
          </details>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-blue-200 bg-blue-100/70">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-blue-800">
          © {new Date().getFullYear()} FreeStudyGuide.com - Free printable
          planners, cheat-sheets, exam countdown & focus tips
        </div>
      </footer>
    </main>
  );
}
