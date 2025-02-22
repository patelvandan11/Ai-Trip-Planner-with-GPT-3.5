const Footer = () => {
    return (
        <footer className="bg-gray-50 text-black py-10">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="bg-yellow-400 text-black rounded-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold">Join The Tarzan Way Community</h2>
                            <p>Get Early Bird Deals, Extra Discounts & Priority Customer Support.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
                            <input
                                type="text"
                                placeholder="First name"
                                className="px-4 py-2 border rounded-md focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="px-4 py-2 border rounded-md focus:outline-none"
                            />
                            <button className="bg-black text-white px-4 py-2 rounded-md">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-semibold">thetarzanway</h3>
                        <p className="text-sm mt-2">
                            The Tarzan Way is a travel-based startup with a vision to simplify travel and build immersive travel programs across India.
                        </p>
                        <div className="flex gap-3 mt-4">
                            <a href="#" className="text-black text-xl">🌐</a>
                            <a href="#" className="text-black text-xl">📘</a>
                            <a href="#" className="text-black text-xl">📸</a>
                            <a href="#" className="text-black text-xl">🔗</a>
                        </div>
                    </div>

                    {/* Travel Destinations */}
                    <div>
                        <h3 className="text-lg font-semibold">Travel Destinations</h3>
                        <ul className="text-sm mt-2 space-y-1">
                            <li>Europe</li>
                            <li>Asia</li>
                            <li>North America</li>
                            <li>South America</li>
                            <li>Australia & New Zealand</li>
                            <li>Africa</li>
                            <li>Caribbean</li>
                        </ul>
                    </div>

                    {/* Travel Styles */}
                    <div>
                        <h3 className="text-lg font-semibold">Travel Styles</h3>
                        <ul className="text-sm mt-2 space-y-1">
                            <li>Personalise</li>
                            <li>Workcation</li>
                            <li>Volunteer</li>
                            <li>Road Trips</li>
                            <li>Unique</li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="text-lg font-semibold">Terms & Policies</h3>
                        <ul className="text-sm mt-2 space-y-1">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>COVID-19 Safety</li>
                            <li>Subscribe</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm mt-8 border-t pt-4">
                    © 2025 Vandan Patel • All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
