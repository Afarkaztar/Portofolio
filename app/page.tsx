import Hero from "@/components/sections/Hero";
import StatusCards from "@/components/sections/StatusCards";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TechStack from "@/components/sections/TechStack";
import ContentPreview from "@/components/sections/ContentPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import { getAllContent } from "@/lib/content";

export default function HomePage() {
  const writeups = getAllContent("writeups").slice(0, 3);
  const blogPosts = getAllContent("blog").slice(0, 3);

  return (
    <>
      <Hero />
      <StatusCards />
      <FeaturedProjects />
      <TechStack />
      <ContentPreview
        index="03"
        eyebrow="Research"
        title="Latest Writeups"
        items={writeups}
        viewAllHref="/writeups"
        type="writeup"
      />
      <ContentPreview
        index="04"
        eyebrow="Journal"
        title="Latest Blog Posts"
        items={blogPosts}
        viewAllHref="/blog"
        type="blog"
      />
      <ContactCTA />
    </>
  );
}
