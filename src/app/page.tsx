import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Milestones } from "@/components/milestones";
import { Practice } from "@/components/practice";
import { SelectedWork } from "@/components/selected-work";
import { SiteNav } from "@/components/site-nav";

export default function Page() {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-[minmax(0,1fr)] lg:grid-cols-[15.5rem_minmax(0,1fr)]">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="content" className="min-w-0 max-w-full overflow-x-clip px-5 pb-24 sm:px-8 lg:border-l lg:border-line lg:px-12 lg:pb-28">
        <Hero />
        <SelectedWork />
        <Milestones />
        <Practice />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
