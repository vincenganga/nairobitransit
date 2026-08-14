export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-emerald-700 mb-4">
          Contact Us
        </h1>

        <p className="text-slate-600 text-lg mb-10">
          Have a question or feedback about Nairobi Transit?
          Get in touch with our team.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">

            <h2 className="text-2xl font-bold mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-semibold mt-1">
                  support@nairobitransit.co.ke
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="font-semibold mt-1">
                  +254 700 123 456
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="font-semibold mt-1">
                  Nairobi CBD, Kenya
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">

            <h2 className="text-2xl font-bold mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3 outline-none focus:border-emerald-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3 outline-none focus:border-emerald-600"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg p-3 outline-none focus:border-emerald-600"
              />

              <button
                type="button"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}