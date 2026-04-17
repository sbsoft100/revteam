import IssueCard from "./IssueCard";
import issue1 from "@/assets/issue-1.jpg";
import issue2 from "@/assets/issue-2.jpg";
import issue3 from "@/assets/issue-3.jpg";

const issues = [
  {
    image: issue1,
    title: "Mosaic 43",
    date: "Oct 20, 2023",
    description: "Exploring identity, belonging, and the power of storytelling through diverse voices and perspectives.",
    featured: true,
  },
  {
    image: issue2,
    title: "Mosaic 42",
    date: "Mar 23, 2018",
    description: "A celebration of resilience and creativity within the African and Latinx literary traditions.",
  },
  {
    image: issue3,
    title: "Mosaic 41",
    date: "Oct 13, 2017",
    description: "Voices of change — writers pushing boundaries and reimagining what literature can be.",
  },
];

const RecentIssues = () => {
  return (
    <section className="px-6 md:px-12 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="section-heading">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Recent Issues
            </h2>
          </div>
          <span className="text-primary font-body text-sm font-medium hidden md:block">
            [Featured Issue]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issues.map((issue) => (
            <IssueCard key={issue.title} {...issue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentIssues;
