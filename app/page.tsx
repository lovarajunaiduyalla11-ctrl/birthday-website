import Hero from "@/components/Hero";
import RelationshipCounter from "@/components/RelationshipCounter";
import StorySection from "@/components/StorySection";
import Gallery from "@/components/Gallery";
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

      <Gallery />

      <StorySection
        title={story.challenge.title}
        text={story.challenge.text}
      />

      <StorySection
        title={story.waiting.title}
        text={story.waiting.text}
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
