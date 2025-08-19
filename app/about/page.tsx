export const metadata = {
  title: "About • Sirisha Ganji",
  description: "Cybersecurity • System Administration • Prompt Engineering",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">About</h1>
          <p className="text-slate-600 leading-relaxed">
            Hi, I’m <strong>Sirisha Ganji</strong> — a Cybersecurity Analyst, System Administrator,
            and Prompt Engineer. I focus on securing infrastructure, automating operations, and
            integrating AI for real outcomes.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h2 className="font-semibold text-slate-800 mb-2">Core Skills</h2>
              <ul className="list-disc list-inside text-slate-600">
                <li>Network Security & Incident Response</li>
                <li>Cloud & Systems Administration</li>
                <li>Automation & CI/CD</li>
                <li>AI / Prompt Engineering</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h2 className="font-semibold text-slate-800 mb-2">Contact</h2>
              <p className="text-slate-600">
                Prefer email?{" "}
                <a className="text-cyan-600 underline" href="mailto:sirishaganji@gmail.com">
                  sirishaganji@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
