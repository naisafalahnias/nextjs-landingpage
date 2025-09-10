'use client';
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const showTestimonial = (slideNumber: number) => {
    // Hide all slides
    document.querySelectorAll('.testimonial-slide').forEach(slide => {
        slide.classList.remove('active');
    });

    // Show selected slide
    const targetSlide = document.getElementById('testimonial-' + slideNumber);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }

    // Update dots
    document.querySelectorAll('.dot-nav').forEach(dot => {
        dot.classList.remove('active', 'bg-teal-500');
        dot.classList.add('bg-gray-300');
    });

    const targetDot = document.querySelector('[data-slide="' + slideNumber + '"]');
    if (targetDot) {
        targetDot.classList.add('active', 'bg-teal-500');
        targetDot.classList.remove('bg-gray-300');
    }
};
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 sm:px-8 py-4 sm:py-6 bg-[#EEF5F8] shadow-sm relative">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              width={40}
              height={40}
              src="/images/Icon.png"
              alt="Aphrodite Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="px-3 py-1 text-[#519DBC] font-[400] uppercase tracking-wide text-lg font-marcellus">
              Aphrodite
            </h1>
          </div>

          {/* Navbar Desktop */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <a
              href="#home"
              className="relative text-gray-500 hover:text-[#519DBC] font-medium cursor-pointer 
              after:content-[''] after:absolute after:-top-2 after:left-0 
              after:w-full after:h-[2px] after:bg-[#519DBC] after:opacity-0 hover:after:opacity-100 transition-all"
            >
              HOME
            </a>
            <a
              href="#about"
              className="relative text-gray-500 hover:text-[#519DBC] font-medium cursor-pointer 
              after:content-[''] after:absolute after:-top-2 after:left-0 
              after:w-full after:h-[2px] after:bg-[#519DBC] after:opacity-0 hover:after:opacity-100 transition-all"
            >
              ABOUT
            </a>
            <a
              href="#services"
              className="relative text-gray-500 hover:text-[#519DBC] font-medium cursor-pointer 
              after:content-[''] after:absolute after:-top-2 after:left-0 
              after:w-full after:h-[2px] after:bg-[#519DBC] after:opacity-0 hover:after:opacity-100 transition-all"
            >
              SERVICE
            </a>
            <a
              href="#pages"
              className="relative flex items-center gap-1 text-gray-500 hover:text-[#519DBC] font-medium cursor-pointer 
              after:content-[''] after:absolute after:-top-2 after:left-0 
              after:w-full after:h-[2px] after:bg-[#519DBC] after:opacity-0 hover:after:opacity-100 transition-all"
            >
              PAGES
              <svg
                className="w-3 h-3 ml-1 text-gray-500 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.25 4.417a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-4">
            {/* Phone Icon */}
            <div className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center border-2 border-[#519DBC] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <svg
                className="w-6 h-6 text-[#519DBC]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>

            {/* Hamburger Button */}
            <button
              className="md:hidden w-10 h-10 bg-white rounded-full flex flex-col justify-center items-center gap-1 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="w-4 h-0.5 bg-[#519DBC] rounded-full"></span>
              <span className="w-4 h-0.5 bg-[#519DBC] rounded-full"></span>
              <span className="w-4 h-0.5 bg-[#519DBC] rounded-full"></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 md:hidden z-50">
              <a href="#home" className="text-gray-600 hover:text-[#519DBC]">
                HOME
              </a>
              <a href="#about" className="text-gray-600 hover:text-[#519DBC]">
                ABOUT
              </a>
              <a href="#services" className="text-gray-600 hover:text-[#519DBC]">
                SERVICE
              </a>
              <a href="#pages" className="text-gray-600 hover:text-[#519DBC]">
                PAGES
              </a>
            </div>
          )}
        </header>
        
        {/* Hero Section */}
        <section
          id="home"
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/woman-pic.png')" }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent lg:from-white/30 lg:via-white/10 lg:to-transparent"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 relative z-10">
            <div className="flex items-center min-h-[500px] lg:min-h-[600px]">
              
              {/* Left Content */}
              <div className="w-full lg:w-1/2 space-y-8 text-left">
                <div className="space-y-6">
                  <p className="text-[#519DBC] font-medium uppercase tracking-wide text-sm font-lato" style={{ fontSize: '24px' }}>
                    THE BEAUTY CENTER
                  </p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-900" style={{ fontFamily: 'Marcellus, sans-serif', fontSize: '90px' }}>
                    Suitable For All<br />Skin Problems
                  </h1>
                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                    {/* Button */}
                    <button className="bg-transparent border-2 border-[#519DBC] text-[#519DBC] px-10 py-4 rounded-full font-medium hover:bg-[#519DBC] hover:text-white transition-all duration-300 flex items-center gap-2 font-lato">
                      BOOK NOW
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* OR */}
                    <span className="text-gray-600 font-medium text-lg font-lato flex items-center">
                      OR
                    </span>

                    {/* Play Button */}
                    <div className="w-16 h-16 bg-[#519DBC] rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-colors shadow-lg">
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l7-5z" />
                      </svg>
                    </div>
                  </div>
                  <p 
                    className="font-lato font-light text-[20px] leading-relaxed max-w-lg pt-2"  
                    style={{ color: '#5C5C5C' }}
                  >
                    Care for skin and natural beauty through professional treatments using natural products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="px-4 sm:px-8 py-16 sm:py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-teal-500 font-semibold uppercase tracking-wide text-sm mb-4" style={{ fontSize: '24px' }}>
                OUR SERVICES
              </p>
              <h2 className="text-3xl sm:text-4xl text-gray-800" style={{ fontFamily: 'Marcellus, sans-serif', fontSize: '60px' }}>
                Beauty Rituals Of Our Offer
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {/* Service 1 - Facial Treatments (turun dikit) */}
              <div className="text-center space-y-6 mt-6">
                <div className="relative w-28 h-28 mx-auto">
                  {/* Lingkaran luar */}
                  <div className="absolute inset-0 rounded-full border-2 border-teal-500"></div>
                  {/* Lingkaran dalam */}
                  <div className="absolute inset-2 rounded-full bg-teal-500 flex items-center justify-center">
                    <div
                      className="w-12 h-12 bg-center bg-contain bg-no-repeat"
                      style={{ backgroundImage: "url('/images/facial.png')" }}
                    />
                  </div>
                </div>

                <h3 className="font-marcellus text-teal-500 normal-case " style={{ fontSize: '17px' }}>
                  Facial Treatments
                </h3>

                <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>


              {/* Service 2 - Skin Tightening (naik dikit) */}
              <div className="text-center space-y-6 -mt-6">
                <div className="relative w-28 h-28 mx-auto">
                  {/* Lingkaran luar */}
                  <div className="absolute inset-0 rounded-full border-2 border-sky-500"></div>
                  {/* Lingkaran dalam */}
                  <div className="absolute inset-2 rounded-full bg-sky-500 flex items-center justify-center">
                    <div
                      className="w-12 h-12 bg-center bg-contain bg-no-repeat"
                      style={{ backgroundImage: "url('/images/tone.png')" }}
                    />
                  </div>
                </div>

                <h3 className="font-marcellus text-sky-500 normal-case tracking-[0.5px]" style={{ fontSize: '17px' }}>
                  Skin Tightening
                </h3>

                <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <button className="text-sky-500 font-medium transition-colors hover:text-sky-600 hover:underline hover:decoration-sky-500 hover:underline-offset-4">
                  LEARN MORE
                </button>
              </div>

              {/* Service 3 - Healthy Products (turun dikit) */}
              <div className="text-center space-y-6 mt-6">
                <div className="relative w-28 h-28 mx-auto">
                  {/* Lingkaran luar */}
                  <div className="absolute inset-0 rounded-full border-2 border-rose-400"></div>
                  {/* Lingkaran dalam */}
                  <div className="absolute inset-2 rounded-full bg-rose-400 flex items-center justify-center">
                    <div
                      className="w-12 h-12 bg-center bg-contain bg-no-repeat"
                      style={{ backgroundImage: "url('/images/serum.png')" }}
                    />
                  </div>
                </div>

                <h3 className="font-marcellus text-rose-400 normal-case tracking-[0.5px]" style={{ fontSize: '17px' }}>
                  Healthy Products
                </h3>

                <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="px-6 sm:px-12 py-20 sm:py-32 bg-white"> 
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <p className="text-[#0F9898] font-medium tracking-[1px] text-sm">
                ABOUT US
              </p>
              <h2 className="text-[36px] sm:text-[44px] leading-snug font-marcellus text-gray-900">
                Crafting Beauty <br /> Beyond Boundaries
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button className="bg-[#519DBC] hover:bg-[#417D97] text-white px-6 sm:px-8 py-4 rounded-full font-medium transition-colors flex items-center gap-2 mx-auto lg:mx-0">
                DISCOVER MORE
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Right Images */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
              {/* Blue background shape */}
              <div className="absolute -top-10 right-6 w-[360px] h-[360px] bg-[#A7C7D9]"></div>

              {/* Images */}
              <div className="relative z-10 flex justify-center gap-6">
                <Image
                  width={192}
                  height={256}
                  src="/images/masker2.png"
                  alt="Facial mask treatment"
                  className="w-48 h-64 object-cover shadow-lg"
                />
                <Image
                  width={192}
                  height={256}
                  src="/images/masker1.png"
                  alt="LED light therapy"
                  className="w-48 h-64 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="bg-[#86afbf] px-4 sm:px-8 py-12 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              
              <div className="space-y-3">
                <h3 className="text-5xl font-semibold">
                  20<span className="align-super text-2xl">+</span>
                </h3>
                <p className="font-marcellus text-white normal-case" style={{ fontSize: '14px' }}>
                  Years Of Experience
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-5xl font-semibold">
                  769<span className="align-super text-2xl">+</span>
                </h3>
                <p className="font-marcellus text-white normal-case" style={{ fontSize: '14px' }}>Satisfied Clients</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-5xl font-semibold">
                  16<span className="align-super text-2xl">+</span>
                </h3>
                <p className="font-marcellus text-white normal-case" style={{ fontSize: '14px' }}>Skin Treatments</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-5xl font-semibold">
                  50<span className="align-super text-2xl">+</span>
                </h3>
                <p className="font-marcellus text-white normal-case" style={{ fontSize: '14px' }}>Trained Experts</p>
              </div>

            </div>
          </div>
        </section>

        {/* Meet the Doctors Section */}
        <section className="px-4 sm:px-8 py-16 sm:py-32 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-teal-500 uppercase tracking-wide text-sm mb-6 sm:mb-8" style={{ fontSize: '20px' }}>
                MEET THE DOCTORS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-serif">
                Discover Our Experts
              </h2>
            </div>
            
            {/* Doctors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "Dr. Hannah Wagner",
                  role: "PLASTIC SURGEON",
                  img: "/images/dokter1.png",
                  border: "border-[#fcdde1]"
                },
                {
                  name: "Dr. Bryan Hunter",
                  role: "ANESTHESIOLOGIST",
                  img: "/images/dokter2.png",
                  border: "border-[#4aa3c5]"
                },
                {
                  name: "Dr. Sarah Nelson",
                  role: "DERMATOLOGIST",
                  img: "/images/dokter3.png",
                  border: "border-[#fcdde1]"
                }
              ].map((doc, idx) => (
                <div key={idx} className="text-center space-y-5">
                  <div
                    className={`relative mx-auto w-56 h-64 overflow-hidden border-4 ${doc.border}`}
                  >
                    <Image
                      fill
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p
                      className={`text-xs tracking-wider font-semibold uppercase ${
                        doc.border.includes("4aa3c5") ? "text-[#4aa3c5]" : "text-gray-400"
                      }`}
                    >
                      {doc.role}
                    </p>
                    <h3 className="text-lg font-marcellus text-gray-800" style={{ fontSize: '16px' }}>{doc.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Brand Logos Section */}
        <section className="px-8 py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* Scrollable container */}
            <div className="relative overflow-hidden">
              <div className="flex gap-12 items-center opacity-40 animate-scroll">
                {/* Logo 1 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="10" y="30" className="text-lg font-bold">TECHBRAND</text>
                  </svg>
                </div>
                
                {/* Logo 2 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="15" y="30" className="text-lg font-bold">MEDTECH</text>
                  </svg>
                </div>
                
                {/* Logo 3 - Center with teal color */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                    <span className="text-teal-500 font-bold text-lg">APHRODITE</span>
                  </div>
                </div>
                
                {/* Logo 4 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="10" y="30" className="text-lg font-bold">BEAUTYCO</text>
                  </svg>
                </div>
                
                {/* Logo 5 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="15" y="30" className="text-lg font-bold">SKINCARE</text>
                  </svg>
                </div>

                {/* Logo 6 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="10" y="30" className="text-lg font-bold">WELLNESS</text>
                  </svg>
                </div>

                {/* Logo 7 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="15" y="30" className="text-lg font-bold">GLOW</text>
                  </svg>
                </div>

                {/* Duplicate logos for seamless loop */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="10" y="30" className="text-lg font-bold">TECHBRAND</text>
                  </svg>
                </div>
                
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="15" y="30" className="text-lg font-bold">MEDTECH</text>
                  </svg>
                </div>
                
                <div className="flex items-center justify-center flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                    <span className="text-lg sm:text-xl font-marcellus text-teal-600 tracking-wide">APHRODITE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready To Glow Contact Section */}
        <section id="contact" className="px-4 sm:px-8 py-16 sm:py-32 bg-white"> 
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-stretch">
              
              {/* Left Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full h-64 sm:h-80 lg:h-full">
                  <Image
                    fill
                    src="/images/consul.png"
                    alt="Beauty consultation"
                    className="w-full h-full object-cover"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-teal-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-colors shadow-lg">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l7-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Content - Contact Form */}
              <div className="w-full lg:w-1/2 flex">
                <div className="bg-[#86afbf] p-8 lg:p-12 text-white w-full relative overflow-hidden 
                                flex flex-col justify-center 
                                min-h-[400px] lg:min-h-[500px] h-full"
                > 
                  {/* Heading */}
                  <h2 className="font-marcellus text-3xl sm:text-4xl lg:text-5xl font-normal leading-snug mb-8">
                    Ready To Glow <br /> With Us
                  </h2>
                  
                  {/* Contact Form */}
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Name"
                        className="bg-transparent border-b border-white/60 pb-2 text-white placeholder-white/80 focus:outline-none focus:border-white w-full"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="bg-transparent border-b border-white/60 pb-2 text-white placeholder-white/80 focus:outline-none focus:border-white w-full"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Date Appointment"
                        className="bg-transparent border-b border-white/60 pb-2 text-white placeholder-white/80 focus:outline-none focus:border-white w-full"
                      />
                      <input
                        type="text"
                        placeholder="Type of Service"
                        className="bg-transparent border-b border-white/60 pb-2 text-white placeholder-white/80 focus:outline-none focus:border-white w-full"
                      />
                    </div>

                    {/* Book Now Button */}
                    <button
                      type="submit"
                      className="flex items-center gap-2 text-white font-medium group border-b border-white/60 pb-1"
                    >
                      BOOK NOW
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 sm:px-12 py-24 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section Header */}
            <p className="text-teal-500 uppercase tracking-wide mb-4 text-lg">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-12">
              From Our Satisfied Client
            </h2>

            {/* Testimonial Card */}
            <div className="max-w-2xl mx-auto">
              <div className="p-8 sm:p-12">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <Image
                    width={48}
                    height={48}
                    src="/images/face.png"
                    alt="Facial Treatment Icon"
                    className="w-14 h-14"
                  />
                </div>
                {/* Subtitle */}
                <p className="text-teal-500 uppercase tracking-wide text-sm font-medium mb-8">
                  Facial Treatment Client
                </p>
                {/* Quote */}
                <p className="text-gray-500 text-lg leading-relaxed  mb-8">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat”
                </p>
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 
                          1 0 00.95.69h3.462c.969 0 1.371 1.24.588 
                          1.81l-2.8 2.034a1 1 0 00-.364 
                          1.118l1.07 3.292c.3.921-.755 
                          1.688-1.54 1.118l-2.8-2.034a1 1 0 
                          00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                          1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
                          1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* Name */}
                <h4 className="text-xl font-marcellus text-sky-700" style={{ fontSize: '16px' }}>Laura Johnson</h4>
              </div>
            </div>

            {/* Navigation Line */}
            <div className="flex justify-center mt-10">
              <div className="w-24 h-0.5 bg-gray-300 relative">
                <div className="absolute left-0 w-8 h-0.5 bg-teal-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="px-8 py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-16">
              <div>
                <p className="text-teal-500 uppercase tracking-wide mb-4 text-sm font-medium">
                  Featured Post
                </p>
                <h2 className="text-4xl sm:text-5xl font-serif text-gray-900">
                  From Our Blog
                </h2>
              </div>
              <button className="px-6 py-3 border border-sky-500 text-sky-500 rounded-full flex items-center gap-2 text-sm font-serif hover:bg-sky-500 hover:text-white transition-all">
                Discover More
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 
                    1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                    11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                    1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Featured post */}
              <a
                href="#"
                className="block space-y-6 group"
              >
                <div className="overflow-hidden relative">
                  <Image
                    fill
                    src="/images/muka1.png"
                    alt="Featured skincare"
                    className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-gray-900 leading-snug group-hover:text-sky-600 transition-colors">
                    Unlocking The Secrets To Glowing Skin : Essential Skincare Tips
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Neville Bright</span>
                    <span>30 January 2024</span>
                    <span className="bg-teal-100 text-teal-600 px-3 py-0.5 rounded-full text-xs">
                      Tips
                    </span>
                  </div>
                </div>
              </a>

              {/* Side posts */}
              <div className="space-y-10">
                {/* Post 1 */}
                <a href="#" className="flex gap-5 group">
                  <Image
                    width={144}
                    height={112}
                    src="/images/muka2.png"
                    alt="Beauty treatment"
                    className="w-36 h-28 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex-1 space-y-2">
                    <h4 className="text-lg font-serif text-gray-900 leading-snug group-hover:text-sky-600 transition-colors">
                      Revealing The Beauty Within …
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Neville Bright</span>
                      <span>28 Jan ‘24</span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-0.5 rounded-full text-xs">
                        Treatment
                      </span>
                    </div>
                  </div>
                </a>

                {/* Post 2 */}
                <a href="#" className="flex gap-5 group">
                  <Image
                    width={144}
                    height={112}
                    src="/images/botol.png"
                    alt="Skincare products"
                    className="w-36 h-28 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex-1 space-y-2">
                    <h4 className="text-lg font-serif text-gray-900 leading-snug group-hover:text-sky-600 transition-colors">
                      The New Agent Of Skincare In …
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Neville Bright</span>
                      <span>26 Jan ‘24</span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-0.5 rounded-full text-xs">
                        Skincare
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#519DBC] text-white">
          <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Brand Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <Image
                    width={40}
                    height={40}
                    src="/images/Icon.png"
                    alt="Aphrodite Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="px-3 py-1 text-white font-[400] uppercase tracking-wide text-lg font-marcellus">APHRODITE</h3>
                </div>
              </div>
                <p className="text-white/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>

              {/* Operating Hours */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">We're Open At</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Monday - Friday : 09:00 AM - 20:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Saturday - Sunday : 09:00 AM - 18:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Get In Touch With Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span className="text-white/90">info@aphrodite.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-white/90">Victoria Street, London, United Kingdom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/20 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Social Media */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-white text-sm font-bold">FB</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-white text-sm font-bold">IG</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-white text-sm font-bold">LI</span>
                    </a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="text-center">
                  <p className="text-white/70 text-sm">
                    Copyright © 2025 Aphrodite. All Rights Reserved.
                  </p>
                </div>

                {/* Terms */}
                <div>
                  <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }