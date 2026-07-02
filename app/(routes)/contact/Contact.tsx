"use client";

import {
  Button,
  SelectInput,
  TextareaInput,
  TextInput,
} from "@/app/components";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Contact = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const [subject, setSubject] = useState("General Enquiries");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    if (type) {
      // Map query param to SelectInput values
      const mapping: Record<string, string> = {
        tenant: "Tenant Support",
        let: "Landlord Services",
        mortgage: "Mortgage Advice",
        repair: "Repair & Maintenance",
        general: "General Enquiries",
      };

      setSubject(mapping[type.toLowerCase()] || "General Enquiries");
    }
  }, [type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, subject, message }),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Your message has been sent successfully!" });
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        const data = await response.json();
        setStatus({ type: "error", message: data.error || "Failed to send message. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="ik-section-top mb-30">
      <div className="ik-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-6">
          {/* Left content */}
          <div>
            <div className="ik-misc--tagline text-primary-light-blue mb-3">
              Contact us
            </div>
            <h1 className="ik-heading--h2 mb-14">
              Get in Touch with Invicta <br /> Kent Management
            </h1>

            <div className="mb-8">
              <h4 className="ik-body--md--600 mb-2">Email</h4>
              <p>support@invictakentmanagement.co.uk</p>
            </div>

            <div className="mb-8">
              <h4 className="ik-body--md--600 mb-2">Phone</h4>
              <p>03301335967</p>
            </div>

            <div className="mb-8">
              <h4 className="ik-body--md--600 mb-2">Location</h4>
              <p>Ashford Kent</p>
            </div>
          </div>

          {/* Right form */}
          <form className="lg:pt-8" onSubmit={handleSubmit}>
            {status && (
              <div className={`p-4 mb-6 rounded-md ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {status.message}
              </div>
            )}
            <div className="mb-8">
              <TextInput
                label="Full name"
                placeholder="Enter your full name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TextInput
                  label="Email"
                  placeholder="example@email.com"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextInput
                  label="Phone"
                  placeholder="Your phone number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-8">
              <SelectInput
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                options={[
                  { label: "General Enquiries", value: "General Enquiries" },
                  { label: "Tenant Support", value: "Tenant Support" },
                  { label: "Landlord Services", value: "Landlord Services" },
                  { label: "Mortgage Advice", value: "Mortgage Advice" },
                  {
                    label: "Repair & Maintenance",
                    value: "Repair & Maintenance",
                  },
                ]}
              />
            </div>

            <div className="mb-8">
              <TextareaInput
                label="How can we help you?"
                placeholder="Type your message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button
              label={isSubmitting ? "Submitting..." : "Submit"}
              size="small"
              variant="filled"
              disabled={isSubmitting}
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// sanketshrestha1010@gmail.com
