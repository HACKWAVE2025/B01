-- CreateTable
CREATE TABLE "Prescription" (
    "id" TEXT NOT NULL,
    "doctor_name" TEXT,
    "patient_name" TEXT NOT NULL,
    "medication_details" TEXT NOT NULL,
    "dosage_instructions" TEXT,
    "duration" TEXT,
    "additional_notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("id")
);