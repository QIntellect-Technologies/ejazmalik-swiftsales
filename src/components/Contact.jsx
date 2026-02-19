import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const Contact = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'customercare.swiftsales@gmail.com' },
        { icon: Phone, label: 'Phone', value: '03008607811' },
        { icon: MapPin, label: 'Location', value: 'C8GM+HFF, Sardar Colony, Rahim Yar Khan' },
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.name,
                    lastName: '',
                    email: formData.email,
                    subject: 'CEO Website Inquiry',
                    message: `Phone: ${formData.phone}\n\n${formData.message}`
                }),
            });
            const result = await response.json();
            if (result.success) {
                setFormStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                alert('Submission failed. Please try again.');
                setFormStatus('idle');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Network error. Is the backend running?');
            setFormStatus('idle');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6" ref={ref}>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                        Get in Touch
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Let's <span className="text-blue-600">Connect</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            I'm always open to discussing advanced logistics, systematic excellence, and opportunities for collaboration.
                        </p>
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:border-blue-200 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-white text-slate-400 flex items-center justify-center shadow-sm group-hover:text-blue-600 transition-colors">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                                        <div className="text-base font-bold text-slate-900 break-all">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        {formStatus === 'success' ? (
                            <div className="bg-white p-12 rounded-[2rem] border border-slate-100 shadow-xl text-center flex flex-col items-center justify-center h-full">
                                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                <p className="text-slate-500 font-medium mb-8">Thank you. Your inquiry has been transmitted successfully.</p>
                                <button onClick={() => setFormStatus('idle')} className="text-blue-600 font-bold hover:underline">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Name</label>
                                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900" placeholder="Enter Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phone</label>
                                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900" placeholder="e.g. 03008607811" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900" placeholder="Enter Your Email" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                                    <textarea name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900 resize-none" placeholder="How can we help you?" />
                                </div>
                                <button disabled={formStatus === 'submitting'} className="w-full px-8 py-4 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-widest shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={16} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm font-medium">
                    © 2026 QIntellect Technologies. All rights reserved. | colab@qintellecttechnologies.com
                </div>
            </div>
        </section>
    );
};

export default Contact;
