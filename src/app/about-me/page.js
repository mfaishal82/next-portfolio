"use client"
import Bio from "@/components/aboutMe/bio"
import Certificates from "@/components/aboutMe/certificates";
import Education from "@/components/aboutMe/education";
import Experience from "@/components/aboutMe/experience";
import Interests from "@/components/aboutMe/interests"
import { useAppContext } from "@/context/context";
import { useState } from "react"

export default function Page() {
  const { section, test } = useAppContext();
  // console.log(test, "about-me/page.js")
  
  return (
    <>
      {section === 'bio' && <Bio />}
      {section === 'exp' && <Experience />}
      {section === 'interests' && <Interests />}
      {section === 'education' && <Education />} 
      {section === 'certificates' && <Certificates />} 
    </>
  )
}