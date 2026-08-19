import HeroSection from "./(marketing)/components/home/hero-section"
import ServicesSection from "./(marketing)/components/home/services-section"
import WhyChooseUsSection from "./(marketing)/components/home/why-choose-us-section"

export default function Page() {
  return (
    <div className="relative min-h-svh">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
    </div>
  )
}
