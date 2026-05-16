import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-3xl font-black tracking-tighter mb-6 block">
              <span className="text-indigo-500">JG</span>
              <span className="text-white">UNI</span>
            </a>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              A New Age Tech-Driven University offering programs that evolve as per future industry demands.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Admissions", "Placements", "Campus Life", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-indigo-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Programs</h4>
            <ul className="space-y-3 text-sm">
              {["B.Tech", "BBA / iMBA", "BCA / MCA", "B.Com", "B.Sc (Hons)"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-indigo-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-indigo-500 shrink-0 mt-0.5" />
                <span>JG Campus of Excellence, SG Highway, Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-indigo-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-indigo-500 shrink-0" />
                <span>info@jguni.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} JG University. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
