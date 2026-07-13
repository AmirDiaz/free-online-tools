import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Image Tools</div>
          <div className="space-x-4">
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</a>
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Image Tools</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Compress, convert, resize, remove background from images</p>
        <div className="space-x-4">
          <a href="#features" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg">Get Started Free</a>
          <a href="#pricing" className="border px-8 py-3 rounded-lg text-lg">View Pricing</a>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="font-semibold mb-2">Compress</h3><p className="text-gray-600 text-sm">Process your data instantly.</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="font-semibold mb-2">Convert</h3><p className="text-gray-600 text-sm">Process your data instantly.</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="font-semibold mb-2">Resize</h3><p className="text-gray-600 text-sm">Process your data instantly.</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="font-semibold mb-2">Crop</h3><p className="text-gray-600 text-sm">Process your data instantly.</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="font-semibold mb-2">Rotate</h3><p className="text-gray-600 text-sm">Process your data instantly.</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="font-semibold mb-2">Remove Bg</h3><p className="text-gray-600 text-sm">Process your data instantly.</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="font-semibold mb-2">Watermark</h3><p className="text-gray-600 text-sm">Process your data instantly.</p></div>
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <div className="text-4xl font-bold mb-4">$0<span className="text-lg text-gray-500">/mo</span></div>
            <p className="text-gray-600 mb-4">5 images/day</p>
            <a href="#" className="block bg-gray-100 text-center py-2 rounded">Get Started</a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow ring-2 ring-blue-600 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded text-sm">Popular</div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="text-4xl font-bold mb-4">$5<span className="text-lg text-gray-500">/mo</span></div>
            <p className="text-gray-600 mb-4">$5/mo unlimited</p>
            <a href="/api/checkout" className="block bg-blue-600 text-white text-center py-2 rounded">Upgrade</a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Team</h3>
            <div className="text-4xl font-bold mb-4">$19<span className="text-lg text-gray-500">/mo</span></div>
            <p className="text-gray-600 mb-4">$19/mo API</p>
            <a href="/api/checkout?tier=team" className="block bg-gray-100 text-center py-2 rounded">Upgrade</a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Image Tools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
