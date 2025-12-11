'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Twitter, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      {/* CTA Section */}
      <div className="container-main py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card-neon p-10 md:p-16 rounded-[40px] text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-black mb-6">
            Let's Talk
          </h2>
          <p className="text-black/60 text-lg mb-8 max-w-md mx-auto">
            Ready to start predicting? Join our waitlist and be the first to know.
          </p>
          <Link href="#waitlist" className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-black/80 transition-colors">
            Join Waitlist
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-16 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#88FF2A] flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <span className="text-xl font-bold text-white">SEERSHUB</span>
            </Link>
            <p className="text-white/40 text-sm mb-6 max-w-xs">
              Skill-based sports predictions on Base Network. Fair, transparent, rewarding.
            </p>
            <div className="flex gap-3">
              <a
                href="https://x.com/seershub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#88FF2A] hover:text-black flex items-center justify-center transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#88FF2A] hover:text-black flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#88FF2A] hover:text-black flex items-center justify-center transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {['How It Works', 'Seers League', 'Pulseers', 'Demo'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/40 hover:text-[#88FF2A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Pitch Deck', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Pitch Deck' ? '/pitch-deck' : '#'} className="text-sm text-white/40 hover:text-[#88FF2A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Terms', 'Privacy', 'Cookies'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/40 hover:text-[#88FF2A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-main py-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} SeersHub. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built on</span>
            <Image src="/Base_Logo_1.png" alt="Base" width={20} height={16} className="h-4 w-auto opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
