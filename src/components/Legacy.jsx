import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Legacy = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="legacy" className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 relative z-10" ref={ref}>
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">Our History</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                        20 Years of <span className="text-blue-600">Hard Work</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto leading-relaxed text-slate-700 font-medium text-lg text-justify">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="mb-6 first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                            Looking back to 2003, the distribution landscape in our area was completely different. There were no professional systems, no temperature-controlled logistics, and clients often faced long delays for even the simplest deliveries. I recognized this wasn't just a business gap—it was a critical problem that needed a systematic solution.
                        </p>
                        <p>
                            We began our journey with just one small van and a team of three dedicated people. Those early days tested us; the roads were challenging and many were resistant to new ways of working. However, we stood firm on one simple, professional promise: <strong>"If we commit to a delivery, we fulfill it, no matter what."</strong>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="mb-6">
                            By 2012, that single van had grown into a full-scale fleet, and SWIFT SALES DISTRIBUTER became a recognized name in the industry. We led the way by being the first in our sector to implement computerized inventory tracking. We didn't just adapt to the market; we established the benchmarks for modern distribution.
                        </p>
                        <p>
                            Today, two decades later, we don't measure our success by numbers alone. Our true pride is the trust of a partner in a remote village who knows that the moment an order is placed, our system is already in motion. That earned trust is the foundation of our company and our legacy.
                        </p>
                    </motion.div>
                </div>

                {/* Abstract 'Flow' Animation */}
                <div className="mt-24 relative h-32 w-full overflow-hidden max-w-5xl mx-auto rounded-3xl bg-blue-50/50 flex items-center justify-center">

                    {/* Moving Wave 1 */}
                    <motion.div
                        animate={{ x: ["-100%", "0%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 left-0 w-[200%] h-full flex opacity-30"
                    >
                        <svg className="w-1/2 h-full text-blue-300" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
                            <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                        <svg className="w-1/2 h-full text-blue-300" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
                            <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                    </motion.div>

                    {/* Moving Wave 2 (Slower, Darker) */}
                    <motion.div
                        animate={{ x: ["-100%", "0%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 left-0 w-[200%] h-full flex opacity-20"
                    >
                        <svg className="w-1/2 h-full text-blue-600" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
                            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                        <svg className="w-1/2 h-full text-blue-600" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
                            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                    </motion.div>

                    <div className="relative z-10 text-center">
                        <div className="text-xl font-serif italic text-blue-900/40 font-bold">"Excellence in Motion"</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legacy;

