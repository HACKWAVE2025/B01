import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      doctor_name,
      patient_name,
      medication_details,
      dosage_instructions,
      duration,
      additional_notes,
    } = body;

    const prescription = await prisma.prescription.create({
      data: {
        id: uuidv4(),
        doctor_name,
        patient_name,
        medication_details,
        dosage_instructions,
        duration,
        additional_notes,
      },
    });

    return NextResponse.json(prescription);
  } catch (error) {
    console.error("Error creating prescription:", error);
    return NextResponse.json(
      { error: "Failed to create prescription" },
      { status: 500 }
    );
  }
}
