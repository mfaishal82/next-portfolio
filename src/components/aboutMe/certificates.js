import { useState } from "react";
import { useAppContext } from "@/context/context";

export default function Certificates() {
    const { certificates } = useAppContext();
    const [selectedCert, setSelectedCert] = useState(null);

    const activeCert = selectedCert || certificates?.[0];

    return(
        <>
            {/* header */}
            <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
                <div className="border-r-2 border-[#1E2D3D]">
                    <div className="p-2 pr-5 w-[200px] flex flex-row justify-between bg-[#1E2D3D]">
                        skill-certificate
                        <span className="select-none cursor-default">x</span>
                    </div>
                </div>
            </div>
            {/* end header */}

            {/* body */}
            <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[14px] border-[#1E2D3D] text-[#607B96] h-full">
                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-6 gap-5 overflow-y-auto max-h-[80vh]">
                    <div className="ml-0 mt-2">
                        {certificates && certificates.length > 0 ? (
                            certificates.map((cert, idx) => (
                                <div key={cert.id || idx} className="flex gap-x-3">
                                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                                        <div className="relative z-10 size-7 flex justify-center items-center">
                                            <div className={`size-2 rounded-full ${activeCert?.id === cert.id ? 'bg-[#43D9AD]' : 'bg-gray-400 dark:bg-neutral-600'}`}></div>
                                        </div>
                                    </div>

                                    <div className="grow pt-0.5 pb-6">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <button 
                                                onClick={() => setSelectedCert(cert)} 
                                                className={`flex items-center gap-x-1.5 font-semibold text-left transition-colors ${activeCert?.id === cert.id ? 'text-[#43D9AD]' : 'text-gray-800 dark:text-neutral-200 hover:text-[#43D9AD]'}`}
                                            >
                                                {cert.title} {cert.issuer ? `(${cert.issuer})` : ''}
                                            </button>
                                            {cert.credentialUrl && (
                                                <a 
                                                    href={cert.credentialUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-[#607B96] hover:text-[#43D9AD] transition-colors"
                                                    title="Lihat Kredensial Asli"
                                                >
                                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z" fill="currentColor"/>
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                        <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400">
                                            Diterbitkan: {cert.issueDate || '2024 - 2025'} {cert.credentialId ? `• ID: ${cert.credentialId}` : ''}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600 dark:text-neutral-400">Belum ada sertifikat tercatat.</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-6 pt-10 gap-5 max-sm:hidden bg-[#011221]/40">
                    <div className="font-mono text-xs text-[#43D9AD]">
                        {"//"} Pratinjau Kredensial / Sertifikat
                    </div>
                    {activeCert ? (
                        <div className="p-4 rounded-xl bg-[#011627] border border-[#1E2D3D] space-y-3">
                            <h4 className="text-base font-bold text-white">{activeCert.title}</h4>
                            <p className="text-xs text-[#43D9AD] font-mono">{activeCert.issuer}</p>
                            <p className="text-xs text-gray-400">Tanggal Terbit: {activeCert.issueDate}</p>
                            {activeCert.credentialId && (
                                <p className="text-xs text-slate-300 font-mono">Credential ID: {activeCert.credentialId}</p>
                            )}
                            {activeCert.imageUrl ? (
                                <div className="mt-3 rounded-lg overflow-hidden border border-[#1E2D3D]">
                                    <img src={activeCert.imageUrl} alt={activeCert.title} className="w-full h-auto object-contain" />
                                </div>
                            ) : (
                                <div className="p-4 rounded-lg bg-[#011221] border border-[#1E2D3D] text-center text-xs text-gray-400">
                                    Dokumen terverifikasi resmi oleh penerbit
                                </div>
                            )}
                            {activeCert.credentialUrl && (
                                <div className="pt-2">
                                    <a 
                                        href={activeCert.credentialUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs text-[#43D9AD] hover:underline"
                                    >
                                        Buka Sertifikat Lengkap ↗
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}
