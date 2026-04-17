import IssueCard from "./IssueCard";
import interview1 from "@/assets/interview-1.jpg";
import interview2 from "@/assets/interview-2.jpg";
import interview3 from "@/assets/interview-3.jpg";

const interviews = [
  {
    image: interview1,
    title: "Interview: Elena Vasquez",
    date: "Nov 22, 2025",
    description: "An intimate conversation about craft, community, and the future of diaspora literature.",
    featured: true,
  },
  {
    image: interview2,
    title: "Marcus Thompson: Interview",
    date: "Jan 17, 2024",
    description: "Exploring the intersections of poetry, activism, and cultural preservation.",
  },
  {
    image: interview3,
    title: "Amara Jenkins: Interview",
    date: "Dec 19, 2023",
    description: "On writing as resistance and the transformative power of the written word.",
  },
];

const RecentInterviews = () => {
  return (
    <section className="px-6 md:px-12 py-20 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="section-heading">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Recent Interviews
            </h2>
          </div>
          <span className="text-primary font-body text-sm font-medium hidden md:block">
            [Featured Interviewer]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interviews.map((interview) => (
            <IssueCard key={interview.title} {...interview} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentInterviews;
