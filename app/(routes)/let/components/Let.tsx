import { SafetyAccordion } from "@/app/components";

export const Lets = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline mb-3 text-primary-light-blue">
          Preparing to Let
        </div>

        <h2 className="ik-heading--h2 mb-14">
          Key Responsibilities for <br /> Landlords
        </h2>

        <SafetyAccordion
          items={[
            {
              title: "Electrical Safety",
              content:
                "Ensure your property's electrical system and appliances are safe and legally compliant.",
              description: [
                "Gas Safety: If your property has any gas appliances (including a central heating boiler, gas hob, or fire), you are legally required to have an annual safety check performed by a Gas Safe registered engineer. A copy of the Gas Safety Certificate must be given to your tenants before their tenancy begins.",
                "Other Systems: For oil or solid fuel systems, while the specific legislation differs, you still have a duty of care. Regular servicing by a qualified technician (e.g., an OFTEC registered engineer for oil boilers) is essential to ensure they are safe and efficient.",
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
                "Gas Safety: If your property has any gas appliances (including a central heating boiler, gas hob, or fire), you are legally required to have an annual safety check performed by a Gas Safe registered engineer. A copy of the Gas Safety Certificate must be given to your tenants before their tenancy begins.",
                "Other Systems: For oil or solid fuel systems, while the specific legislation differs, you still have a duty of care. Regular servicing by a qualified technician (e.g., an OFTEC registered engineer for oil boilers) is essential to ensure they are safe and efficient.",
              ],
            },
            {
              title: "Garden & Exterior Maintenance",
              content:
                "Clearly define who is responsible for upkeep to avoid disputes.",
              description: [
                "Gas Safety: If your property has any gas appliances (including a central heating boiler, gas hob, or fire), you are legally required to have an annual safety check performed by a Gas Safe registered engineer. A copy of the Gas Safety Certificate must be given to your tenants before their tenancy begins.",
                "Other Systems: For oil or solid fuel systems, while the specific legislation differs, you still have a duty of care. Regular servicing by a qualified technician (e.g., an OFTEC registered engineer for oil boilers) is essential to ensure they are safe and efficient.",
              ],
            },
            {
              title: "Professional Cleaning",
              content:
                "A clean, professionally prepared property sets the standard from day one.",
              description: [
                "Gas Safety: If your property has any gas appliances (including a central heating boiler, gas hob, or fire), you are legally required to have an annual safety check performed by a Gas Safe registered engineer. A copy of the Gas Safety Certificate must be given to your tenants before their tenancy begins.",
                "Other Systems: For oil or solid fuel systems, while the specific legislation differs, you still have a duty of care. Regular servicing by a qualified technician (e.g., an OFTEC registered engineer for oil boilers) is essential to ensure they are safe and efficient.",
              ],
            },
            {
              title: "Managing Utilities During Vacant Periods",
              content:
                "Landlords cover utilities and council tax during void periods.",
              description: [
                "Gas Safety: If your property has any gas appliances (including a central heating boiler, gas hob, or fire), you are legally required to have an annual safety check performed by a Gas Safe registered engineer. A copy of the Gas Safety Certificate must be given to your tenants before their tenancy begins.",
                "Other Systems: For oil or solid fuel systems, while the specific legislation differs, you still have a duty of care. Regular servicing by a qualified technician (e.g., an OFTEC registered engineer for oil boilers) is essential to ensure they are safe and efficient.",
              ],
            },
          ]}
        />
      </div>
    </section>
  );
};
