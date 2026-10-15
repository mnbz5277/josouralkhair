'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const heroSlides = [
  {
    image: '/images/gaza-hero.jpg',
    titleEn: 'Josour Al-Khair Zakat Fund',
    titleAr: 'صندوق جسور الخير للزكاة',
    descEn: 'When fulfilling your Zakat obligation, you bring hope and healing to the most vulnerable. Through Josour Al-Khair\'s Zakat Fund, your contribution provides essential medical care, food, and shelter to children and families in desperate need.',
    descAr: 'عند وفاء التزام الزكاة، أنت تجلب الأمل والشفاء للأكثر ضعفاً. من خلال صندوق الزكاة في جسور الخير، يوفر مساهمتك الرعاية الطبية الأساسية والغذاء والمأوى للأطفال والعائلات المحتاجة.'
  },
  {
    image: '/images/gaza-hero 2.jpg',
    titleEn: 'Emergency Medical Aid',
    titleAr: 'المساعدات الطبية العاجلة',
    descEn: 'Providing critical medical supplies and life-saving treatments to injured children and families. Your donation delivers hope to those who need it most.',
    descAr: 'توفير الإمدادات الطبية الحيوية والعلاجات المنقذة للحياة للأطفال والعائلات المصابة. تبرعك يوصل الأمل لمن يحتاجه أكثر.'
  },
  {
    image: '/images/gaza-hero 3.jpg',
    titleEn: 'Food Security & Shelter',
    titleAr: 'الأمن الغذائي والمأوى',
    descEn: 'Ensuring families have access to nutritious food and safe shelter. Every contribution makes a lasting difference in the lives of displaced families.',
    descAr: 'ضمان حصول العائلات على الغذاء المغذي والمأوى الآمن. كل مساهمة تحدث فرقاً دائماً في حياة العائلات النازحة.'
  }
]

export default function HeroSection() {
  const { t, language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000) // Resume after 15s
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const currentData = heroSlides[currentSlide]

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Images with Transition */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={language === 'en' ? slide.titleEn : slide.titleAr}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            {language === 'en' ? currentData.titleEn : currentData.titleAr}
          </h1>
          
          <p className="text-lg md:text-xl mb-10 leading-relaxed drop-shadow-md">
            {language === 'en' ? currentData.descEn : currentData.descAr}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link 
              href="/donate"
              className="bg-white text-blue-900 px-8 py-3.5 rounded font-bold text-lg transition hover:bg-gray-100 shadow-lg inline-block"
            >
              {t('donateNow')}
            </Link>
            
            <Link 
              href="/campaigns"
              className="border-2 border-white text-white px-8 py-3.5 rounded font-bold text-lg transition hover:bg-white hover:text-blue-900 inline-block"
            >
              {t('moreDetails')}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
