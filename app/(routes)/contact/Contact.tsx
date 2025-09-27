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
          <div className="lg:pt-8">
            <div className="mb-8">
              <TextInput
                label="Full name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TextInput
                  label="Email"
                  placeholder="example@email.com"
                  required
                />
                <TextInput
                  label="Phone"
                  placeholder="Your phone number"
                  required
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
              />
            </div>

            <Button label="Submit" size="small" variant="filled" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
