import { SafetyAccordion } from "@/app/components";

export const Lets = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline mb-3 text-primary-light-blue">
          Preparing to Let
        </div>

        <h2 className="ik-heading--h2 mb-12 lg:mb-14">
          Key Responsibilities for <br /> Landlords
        </h2>

        <SafetyAccordion
          items={[
            {
              title: "Electrical Safety",
              content:
                "Ensure your property's electrical system and appliances are safe and legally compliant.",
              description: [
                `Electrical Installation Condition Report (EICR): By law, you must have the property's
electrical installation inspected and tested by a qualified and competent person at
least every five years. You must provide a copy of this satisfactory report to your
tenants before they move in and to any new tenants within 28 days of their tenancy
starting.`,
                `Appliance Safety: While not a strict legal requirement, it is best practice to carry out
Portable Appliam,m,.m,.m,mnce Testing (PAT) on any electrical appliances you
provide (e.g., kettle, toaster, microwave, washing machine). This demonstrates you
are taking all necessary steps to ensure tenant safety.`,
                `Remedial Work: If the EICR identifies any faults, they must be rectified by a qualified
person within 28 days (or sooner if specified in the report).`,
              ],
            },
            {
              title: "Heating & Gas Safety",
              content:
                "Annual servicing is required for gas systems; other systems also need regular checks.",
              description: [
                "Gas Safety: If your property has any gas appliances (including a central heating boiler, gas hob, or fire), you are legally required to have an annual safety check performed by a Gas Safe registered engineer. A copy of the Gas Safety Certificate must be given to your tenants before their tenancy begins.",
                "Other Systems: For oil or solid fuel systems, while the specific legislation differs, you still have a duty of care. Regular servicing by a qualified technician (e.g., an OFTEC registered engineer for oil boilers) is essential to ensure they are safe and efficient.",
              ],
            },
            {
              title: "Smoke & CO Alarms",
              content:
                "Smoke alarms and CO detectors are a legal requirement in rental homes.",
              description: [
                `Smoke Alarms: You must install at least one smoke alarm on every storey of the
property that is used as living accommodation.`,
                `Carbon Monoxide (CO) Detectors: A CO detector is legally required in any room that
contains a fixed combustion appliance, such as a gas/oil boiler, wood burner, or
coal fire.`,
                `Landlord's Duty: It is your responsibility to ensure all alarms are in full working order
on the first day of the tenancy. After this, tenants are generally responsible for
testing them and replacing batteries, but this should be clearly stated in the tenancy
agreement`,
              ],
            },
            {
              title: "Garden & Exterior Maintenance",
              content:
                "Clearly define who is responsible for upkeep to avoid disputes.",
              description: [
                `Landlord's Responsibility: You are typically responsible for the structure and exterior
of the property. This includes the roof, walls, gutters, drains, and major landscaping
features like trees and large shrubs. Keeping gutters clear is crucial to prevent
damp.
`,
                `Tenant's Responsibility: The tenant is usually responsible for basic upkeep, such as
mowing the lawn, weeding, and keeping the garden tidy.`,
                `Clarity is Key: The tenancy agreement must explicitly state each party's
responsibilities to prevent any misunderstandings.`,
              ],
            },
            {
              title: "Professional Cleaning",
              content:
                "A clean, professionally prepared property sets the standard from day one.",
              description: [
                `While you are not legally required to use a professional company, the property must be
provided in a clean and habitable condition. Starting a tenancy with a professionally
cleaned property, supported by a detailed inventory and check-in report with photographs,
establishes a clear benchmark. This makes it much easier to justify any necessary
deductions from the tenant's deposit at the end of the tenancy if the property is not
returned in a similar condition (allowing for fair wear and tear).`,
              ],
            },
            {
              title: "Managing Utilities During Vacant Periods",
              content:
                "Landlords cover utilities and council tax during void periods.",
              description: [
                `Inform the utility providers (gas, electricity, water) and Ashford Borough Council of
the tenancy change dates.`,
                `Take meter readings on the day the old tenant leaves and the new tenant arrives.`,
                `Keep utilities connected and the heating on a low, frost-protection setting during
winter to prevent issues like frozen pipes. This also ensures the property is
comfortable for viewings.`,
              ],
            },
          ]}
        />
      </div>
    </section>
  );
};
