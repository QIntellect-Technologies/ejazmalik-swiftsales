import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, User, Award } from 'lucide-react';

const TEAM_MEMBERS = [
    {
        id: 'ejaz',
        name: 'Malik Muhammad Ejaz',
        role: 'CEO & Founder',
        image: '/Team Images/Malik Muhammad Ejaz.jpeg'
    },
    {
        id: 'abdul',
        name: 'Abdul Hameed',
        role: 'Warehouse Audit Manager',
        image: '/Team Images/Abdul Hameed.jpeg'
    },
    {
        id: 'wajhat',
        name: 'Malik Wajahat',
        role: 'Director Sales',
        image: '/Team Images/Malik Wajahat - Sales Head.jpeg'
    },
    {
        id: 'naveed',
        name: 'Naveed Anjum',
        role: 'Accounts Manager',
        image: '/Team Images/Naveed Anjum - Manager.jpeg'
    },
    {
        id: 'asad',
        name: 'Asad Ullah',
        role: 'Manager IT',
        image: '/Team Images/Asad Malik - Computer Exective.jpeg'
    },
    {
        id: 'ahmed',
        name: 'M. Ahmad',
        role: 'Data Entry Operator',
        image: '/Team Images/M. Ahmed - Assistant Manager.jpeg'
    },
    {
        id: 'tahseen',
        name: 'Tahseen Ahmad',
        role: 'Warehouse Manager',
        image: '/Team Images/Tahseen ahmad.jpeg'
    },
    {
        id: 'sadeem',
        name: 'Malik Sadeem',
        role: 'Admin',
        image: '/Team Images/Malika Sadeem - Faculty Manager.jpeg'
    },
    {
        id: 'ismail',
        name: 'M. Ismail',
        role: 'Assistant Manager Warehouse',
        image: '/Team Images/M. Ismail - Story BOY.jpeg'
    },
    {
        id: 'zohaib',
        name: 'M. Zohaib',
        role: 'Stock In,Out',
        image: '/Team Images/M. Zohaib - Cook.jpeg'
    },
    {
        id: 'sageer',
        name: 'Sageer Ahmed',
        role: 'Stock In,Out',
        image: '/Team Images/Sagheer Ahmed.jpeg'
    }
];

const Team = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10" ref={ref}>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4"
                    >
                        Our Team
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
                    >
                        Meet The <span className="text-blue-600">Team</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto"
                    >
                        The dedicated professionals driving our mission forward every single day.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            className="group bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100/50 transition-colors"></div>

                            <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/5]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://ui-avatars.com/api/?name=" + member.name + "&background=0D8ABC&color=fff";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="text-white">
                                        <div className="p-2 bg-white/20 backdrop-blur-md rounded-xl w-fit mb-2">
                                            <Award size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center relative z-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{member.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
