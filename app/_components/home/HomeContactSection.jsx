import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export default function HomeContactSection() {
  return (
    <AnimatedSection className="container-pad py-5">
      <div className="grid justify-items-center gap-8 overflow-hidden py-5">
        <div className="w-full max-w-2xl anim-slide-left">
          <ContactForm className="mx-auto" />
        </div>
      </div>
    </AnimatedSection>
  );
}
