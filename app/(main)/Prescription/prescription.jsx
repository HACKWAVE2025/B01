"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "sonner";

export default function PrescriptionForm() {
  const [formData, setFormData] = useState({
    doctor_name: "",
    patient_name: "",
    medication_details: "",
    dosage_instructions: "",
    duration: "",
    additional_notes: "",
  });

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/prescriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save prescription");
      }

      toast.success("Prescription saved successfully");
      
      // Reset form
      setFormData({
        doctor_name: "",
        patient_name: "",
        medication_details: "",
        dosage_instructions: "",
        duration: "",
        additional_notes: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Create Prescription</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="doctor_name" className="block text-sm font-medium mb-1">
              Doctor Name
            </label>
            <Input
              id="doctor_name"
              name="doctor_name"
              value={formData.doctor_name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="patient_name" className="block text-sm font-medium mb-1">
              Patient Name
            </label>
            <Input
              id="patient_name"
              name="patient_name"
              value={formData.patient_name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="medication_details" className="block text-sm font-medium mb-1">
              Medication Details
            </label>
            <Textarea
              id="medication_details"
              name="medication_details"
              value={formData.medication_details}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="dosage_instructions" className="block text-sm font-medium mb-1">
              Dosage Instructions
            </label>
            <Textarea
              id="dosage_instructions"
              name="dosage_instructions"
              value={formData.dosage_instructions}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="duration" className="block text-sm font-medium mb-1">
              Duration
            </label>
            <Input
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 7 days, 2 weeks"
            />
          </div>

          <div>
            <label htmlFor="additional_notes" className="block text-sm font-medium mb-1">
              Additional Notes
            </label>
            <Textarea
              id="additional_notes"
              name="additional_notes"
              value={formData.additional_notes}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full">
            Save Prescription
          </Button>
        </form>
      </Card>
    </div>
  );
}
