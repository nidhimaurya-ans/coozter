import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/src/services/firebaseAdmin";

function cleanText(value) {
  return String(value || "").trim();
}

function isValidEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value);
}

export async function POST(request) {
  try {
    const form = await request.json();
    const lead = {
      name: cleanText(form.name),
      email: cleanText(form.email),
      phone: cleanText(form.phone),
      company: cleanText(form.company),
      website: cleanText(form.website),
      service: cleanText(form.interest || form.service),
      budget: cleanText(form.budget),
      message: cleanText(form.message),
      status: "new",
      createdAt: FieldValue.serverTimestamp(),
    };

    const errors = {};
    if (!lead.name) errors.name = "Required";
    if (!lead.email) errors.email = "Required";
    if (lead.email && !isValidEmail(lead.email)) {
      errors.email = "Use a valid email";
    }
    if (!lead.company) errors.company = "Required";
    if (!lead.service) errors.interest = "Required";
    if (!lead.message) errors.message = "Required";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const docRef = await adminDb
      .collection("projects")
      .doc("coozter")
      .collection("leads")
      .add(lead);

    return NextResponse.json({ id: docRef.id, ok: true });
  } catch (error) {
    console.error("Unable to create Coozter contact lead:", error);
    return NextResponse.json(
      { message: "Unable to submit your brief." },
      { status: 500 },
    );
  }
}
