import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Pricing from "@/components/pricing";
import { creditBenefits, features, testimonials } from "@/lib/data";
import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Features from "@/components/Features";
import ProductShowCase from "@/components/ProductShowCase";
import FAQs from "@/components/FAQs";
// import CallToAction from "@/components/calltoaction";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/chatweidght";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <Hero />
      <ChatWidget />
      {/* <LogoTicker /> */}
      <Features />
      <ProductShowCase />
      <FAQs />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
}
