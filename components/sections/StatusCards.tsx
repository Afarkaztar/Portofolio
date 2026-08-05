import { MapPin, Briefcase, BookOpen, Target } from "lucide-react";
import InfoCard from "@/components/cards/InfoCard";
import { profile } from "@/data/profile";

export default function StatusCards() {
  const items = [
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Briefcase, label: "Current Position", value: profile.currentRole },
    { icon: BookOpen, label: "Currently Learning", value: profile.currentFocus },
    { icon: Target, label: "Career Goal", value: profile.careerGoal },
  ];

  return (
    <section className="border-b border-border">
      <div className="container-content py-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <InfoCard key={item.label} icon={item.icon} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
