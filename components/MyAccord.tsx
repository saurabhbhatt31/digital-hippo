import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function MyAccord() {
  return (
    <Accordion type="single" collapsible className="w-full my-20 ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Unlock Your Creativity with Digital Art Bundles</AccordionTrigger>
        <AccordionContent>
          In this collection, discover a treasure trove of digital art bundles curated to ignite your creativity.
          From high-resolution illustrations to customizable design elements, these bundles cater to artists,
          designers, and content creators alike.
          Explore a world of possibilities with diverse themes,
          styles, and file formats that seamlessly integrate into your creative projects.
          Elevate your digital artistry with our carefully crafted bundles,
          ensuring you have the tools to bring your visions to life.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Boost Your Productivity with Premium Digital Planners</AccordionTrigger>
        <AccordionContent>
          Stay organized and enhance your productivity with our range of premium digital planners.
          Whether you're a student, professional, or someone looking to streamline daily tasks,
          our digital planners offer intuitive designs, interactive features, and customizable templates.
          Effortlessly plan your schedule, set goals, and track your progress digitally.
          These planners are compatible with various devices, providing the flexibility to access and update your plans anytime,
          anywhere. Revolutionize your planning experience with our collection of sleek and functional digital planners.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Immerse Yourself in Digital Soundscape: Audio Bundles for Every Mood</AccordionTrigger>
        <AccordionContent>
          Dive into a world of auditory bliss with our curated collection of digital audio bundles.
          Whether you're a music enthusiast, podcaster,
          or content creator, our bundles offer a diverse range of high-quality sound effects,
          music tracks, and audio loops. Tailor your projects to evoke the perfect mood with our extensive library of audio resources.
          From ambient melodies to energetic beats, find the ideal audio accompaniment to elevate your digital creations.
          Immerse your audience in a captivating soundscape and enhance the overall impact of your digital content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
