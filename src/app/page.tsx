import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

import projectsData from "@/data/projects.json";
import servicesData from "@/data/services.json";
import testimonialsData from "@/data/testimonials.json";
import { Project, Service, Testimonial } from "@/types";

export default function HomePage() {
  const projects = projectsData as Project[];
  const services = servicesData as Service[];
  const testimonials = testimonialsData as Testimonial[];

  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedWork projects={projects} />
      <ServicesSection services={services} />
      <ProcessSection />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </div>
  );
}

