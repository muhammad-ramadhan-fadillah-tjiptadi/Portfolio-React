import { useState, memo } from "react";

export default memo(function KontakSection() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    console.log("[KontakSection] Updating form field", e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("[KontakSection] Submitting contact form");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ nama: "", email: "", pesan: "" });
  };

  console.log("[KontakSection] Rendering contact section");

  return (
    <section id="kontak" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute top-0 left-12 sm:left-16 lg:left-24 right-12 sm:right-16 lg:right-24 h-px bg-white/5" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-start mt-4">
          <div className="pr-6 sm:pr-8">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#F3F3F398", fontFamily: "'Montserrat', sans-serif" }}
              >
                04 CONTACT
              </span>
              <div className="h-px w-12 bg-white/20" />
            </div>

            <h2
              className="leading-tight tracking-tight text-3xl sm:text-4xl mb-6"
              style={{
                color: "#DFDFDF",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              Contact Me
            </h2>

            <p
              className="text-base leading-relaxed text-left max-w-105"
              style={{
                color: "#F3F3F398",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Have a question ? Feel free to reach out.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              id="nama"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-3.5 text-[#DFDFDF] placeholder-[#F3F3F398] focus:outline-none focus:border-[#8ff0a4]/40 transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              placeholder="Name"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-3.5 text-[#DFDFDF] placeholder-[#F3F3F398] focus:outline-none focus:border-[#8ff0a4]/40 transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              placeholder="Email"
            />

            <textarea
              id="pesan"
              name="pesan"
              value={form.pesan}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-3.5 text-[#DFDFDF] placeholder-[#F3F3F398] focus:outline-none focus:border-[#8ff0a4]/40 transition-colors duration-300 resize-none"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              placeholder="Message"
            />

            <button
              type="submit"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-[#DFDFDF] hover:text-[#8ff0a4] hover:border-[#8ff0a4]/30 transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {submitted ? "Message Sent!" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});
