import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Clock, Dumbbell, User, Mail, Phone } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '1-on-1 Training',
    goal: 'Fat Loss & Muscle Building',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#0F0F0F] border border-[#242424] rounded-2xl p-6 md:p-8 shadow-2xl z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-neutral-400 hover:text-white bg-[#141414] p-2 rounded-full border border-[#242424] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-[#FF2400] rounded-sm" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF2400]">
                  Free Consultation Call
                </span>
              </div>
              <h3 className="font-['Barlow_Condensed'] font-black uppercase text-3xl md:text-4xl text-white tracking-tight">
                BOOK YOUR FIRST SESSION
              </h3>
              <p className="text-xs text-neutral-400 mt-1 mb-6">
                Take the first step toward transforming your physique. Zero commitment, 100% focused on your goals.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#FF2400]" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#141414] border border-[#242424] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF2400] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#FF2400]" /> Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#141414] border border-[#242424] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF2400] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#FF2400]" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#141414] border border-[#242424] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF2400] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Dumbbell className="w-3.5 h-3.5 text-[#FF2400]" /> Select Program
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full bg-[#141414] border border-[#242424] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF2400] transition-colors"
                    >
                      <option value="1-on-1 Training">1-on-1 Personal Training</option>
                      <option value="Online Coaching">Online Coaching</option>
                      <option value="Nutrition Plans">Custom Nutrition Plan</option>
                      <option value="Hybrid VIP">Hybrid VIP Coaching</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FF2400]" /> Preferred Time Window
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#141414] border border-[#242424] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF2400] transition-colors"
                    >
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8 AM - 12 PM)</option>
                      <option value="Afternoon (12:00 PM - 5:00 PM)">Afternoon (12 PM - 5 PM)</option>
                      <option value="Evening (5:00 PM - 9:00 PM)">Evening (5 PM - 9 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 h-12 rounded-lg text-white font-extrabold text-sm uppercase tracking-wider cta-primary flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  Confirm Booking Call &rarr;
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-[#FF2400]/15 border border-[#FF2400]/40 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FF2400]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-['Barlow_Condensed'] font-black uppercase text-3xl text-white tracking-tight">
                SESSION REQUESTED!
              </h3>
              <p className="text-sm text-neutral-300 mt-2 max-w-sm mx-auto">
                Thanks <span className="text-[#FF2400] font-semibold">{formData.name}</span>! Peter will reach out to you directly via phone & email within 12 hours to confirm your consultation.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 h-11 px-8 rounded-lg bg-[#141414] border border-[#242424] text-white hover:border-[#FF2400]/50 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
