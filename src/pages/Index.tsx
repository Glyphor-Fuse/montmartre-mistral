import Hero from "@/components/Hero";
import DailyPourMenu from "@/components/DailyPourMenu";
import StorySection from "@/components/StorySection";
import LocationFooter from "@/components/LocationFooter";

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <DailyPourMenu />
      <StorySection />
      <LocationFooter />
    </main>
  );
}