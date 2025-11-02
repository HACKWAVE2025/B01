// src/pages/LandingPage.jsx
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import LogoTicker from "../components/LogoTicker";
import Features from "../components/Features";
import ProductShowCase from "../components/ProductShowCase";
import FAQs from "../components/FAQs";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import { syncUserToSupabase } from "../syncUserToSupabase";
import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import ChatWidget from "../components/ChatWidget";

export default function LandingPage() {
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn && user) {
      syncUserToSupabase(user);
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [isSignedIn, user]);

  return (
    <div>
      <Banner />
      <NavBar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowCase />
      <FAQs />
      <CallToAction />
      <Footer />

      {/* ✅ Floating Chat Widget */}
      
    </div>
  );
}
