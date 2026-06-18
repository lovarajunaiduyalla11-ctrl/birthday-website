import Hero from "@/components/Hero";
import RelationshipCounter from "@/components/RelationshipCounter";
import StorySection from "@/components/StorySection";
import Gallery from "@/components/Gallery";
import CoupleSection from "@/components/CoupleSection";
import LoveLetter from "@/components/LoveLetter";

import { story } from "@/lib/content";

export default function Home() {
  return (
    <main>

      <Hero />

      <RelationshipCounter />

      <StorySection
        title={story.beginning.title}
        text={story.beginning.text}
      />

      <StorySection
        title={story.admiration.title}
        text={story.admiration.text}
      />

      <StorySection
        title={story.firstMeeting.title}
        text={story.firstMeeting.text}
      />

      <StorySection
        title={story.firstStorm.title}
        text={story.firstStorm.text}
      />

      <StorySection
        title={story.journey.title}
        text={story.journey.text}
      />

      <Gallery />

      <CoupleSection />

      <StorySection
        title={story.proposal.title}
        text={story.proposal.text}
      />

      <StorySection
        title={story.challenge.title}
        text={story.challenge.text}
      />

      <StorySection
        title={story.promise.title}
        text={story.promise.text}
      />

      <StorySection
        title={story.jobAchievement.title}
        text={story.jobAchievement.text}
      />

      <StorySection
        title={story.waiting.title}
        text={story.waiting.text}
      />

      <StorySection
        title={story.whyStayed.title}
        text={story.whyStayed.text}
      />

      <StorySection
        title={story.future.title}
        text={story.future.text}
      />

      <StorySection
        title={story.gratitude.title}
        text={story.gratitude.text}
      />

      <LoveLetter />

    </main>
  );
}
