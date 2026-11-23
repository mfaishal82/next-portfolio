import { useState } from "react";
import { useAppContext } from "@/context/context";

export default function Experience() {
    const { experiences } = useAppContext();
    const [selectedId, setSelectedId] = useState(experiences?.[0]?.id || "work");

    const activeExp = experiences?.find(e => e.id === selectedId) || experiences?.[0];

    return(
        <>
            {/* header */}
            <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
                <div className="border-r-2 border-[#1E2D3D]">
                    <div className="p-2 pr-5 w-[200px] flex flex-row justify-between bg-[#1E2D3D]">
                        experiences
                        <span className="select-none cursor-default">x</span>
                    </div>
                </div>
            </div>
            {/* end header */}

            {/* body */}
            <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[14px] border-[#1E2D3D] text-[#607B96] h-full">
                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5 overflow-y-auto">
                    <div className="ml-0 mt-2">
                        {experiences && experiences.length > 0 ? (
                            experiences.map((exp, idx) => (
                                <div key={exp.id || idx} className="flex gap-x-3">
                                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-[#1E2D3D]">
                                        <div className="relative z-10 size-7 flex justify-center items-center">
                                            <div className={`size-2 rounded-full ${selectedId === exp.id ? 'bg-[#43D9AD]' : 'bg-[#607B96]'}`}></div>
                                        </div>
                                    </div>

                                    <div className="grow pt-0.5 pb-8">
                                        <button 
                                            onClick={() => setSelectedId(exp.id)} 
                                            className={`flex gap-x-1.5 font-semibold text-left transition-colors ${selectedId === exp.id ? 'text-[#43D9AD]' : 'text-[#CBD5E1] hover:text-[#43D9AD]'}`}
                                        >
                                            {exp.role} {exp.period ? `(${exp.period})` : ''}
                                        </button>
                                        <p className="mt-1 text-sm font-medium text-[#8AA0B4]">
                                            {exp.company} {exp.type ? `• ${exp.type}` : ''}
                                        </p>
                                        {exp.description && (
                                            <div className="mt-2 text-xs text-[#607B96] space-y-1">
                                                {exp.description.includes('•') ? (
                                                    exp.description.split('•').filter(Boolean).map((bullet, bIdx) => (
                                                        <p key={bIdx}>• {bullet.trim()}</p>
                                                    ))
                                                ) : (
                                                    <p>{exp.description}</p>
                                                )}
                                            </div>
                                        )}
                                        {exp.technologies && exp.technologies.length > 0 && (
                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                {exp.technologies.map((tech, tIdx) => (
                                                    <span key={tIdx} className="text-[11px] px-2 py-0.5 rounded bg-[#1E2D3D] text-[#43D9AD]">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex gap-x-3">
                                <div className="grow pt-0.5 pb-8">
                                    <p className="text-[#8AA0B4]">No work experience recorded yet.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-6 pt-10 gap-5 max-sm:hidden bg-[#011221]/40">
                    <div className="font-mono text-xs text-[#43D9AD]">
                        {"//"} Selected Experience Details
                    </div>
                    {activeExp ? (
                        <div className="p-4 rounded-xl bg-[#011627] border border-[#1E2D3D] space-y-3">
                            <h3 className="text-base font-bold text-white">{activeExp.role}</h3>
                            <p className="text-xs text-[#43D9AD] font-mono">{activeExp.company} | {activeExp.period}</p>
                            <div className="text-xs text-[#607B96] leading-relaxed">
                                {activeExp.description}
                            </div>
                            {activeExp.technologies && (
                                <div className="pt-2 border-t border-[#1E2D3D]">
                                    <span className="text-[11px] text-[#8AA0B4]">Tech Stack: </span>
                                    <span className="text-xs text-white">{activeExp.technologies.join(', ')}</span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <img src="/work.png" width="797" height="448" loading="lazy" alt="Sertifikat pengalaman kerja" />
                    )}
                </div>
            </div>
        </>
    )
}
