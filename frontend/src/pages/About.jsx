export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-emerald-700 mb-6">
          About Nairobi Transit
        </h1>

        <p className="text-lg text-slate-700 leading-8 mb-12 max-w-4xl">
          Nairobi Transit is a web-based public transport management
          system designed to help passengers discover matatu routes,
          estimate fares, locate bus stops and plan journeys across Nairobi.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <h2 className="text-xl font-bold text-emerald-700 mb-3">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-7">
              To simplify public transport by providing passengers with
              accessible and reliable route information.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <h2 className="text-xl font-bold text-emerald-700 mb-3">
              Our Vision
            </h2>

            <p className="text-slate-600 leading-7">
              To create a trusted digital platform that improves how
              passengers access public transportation information in Nairobi.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <h2 className="text-xl font-bold text-emerald-700 mb-3">
              Key Features
            </h2>

            <ul className="space-y-3 text-slate-600">
              <li>✓ Route discovery</li>
              <li>✓ Interactive map navigation</li>
              <li>✓ Fare information</li>
              <li>✓ Bus stop information</li>
              <li>✓ Administrator management</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}