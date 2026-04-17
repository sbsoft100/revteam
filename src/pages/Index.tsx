import HeroSection from "@/components/HeroSection";
import RecentIssues from "@/components/RecentIssues";
import RecentInterviews from "@/components/RecentInterviews";
import ConferenceSection from "@/components/ConferenceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <RecentIssues />
      <RecentInterviews />
      <ConferenceSection />
      <Footer />
    </main>
  );
};

export default Index;
