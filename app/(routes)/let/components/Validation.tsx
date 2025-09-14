import { Button, DateInput, SelectInput, TextInput } from "@/app/components";

export const Validation = () => {
  return (
    <section className="py-30 bg-white-smoke ik-section-bottom">
      <div className="ik-container">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="ik-misc--tagline text-primary-light-blue mb-3">
              Rental valuation
            </div>
            <h2 className="ik-heading--h2 mb-14">
              Book Your Free Rental Valuation Today
            </h2>

            <div className="mb-12">
              <h5 className="ik-body--md--600 mb-2">Email</h5>
              <p className="text-blue-gray">
                support@invictakentmanagement.co.uk
              </p>
            </div>

            <div className="mb-12">
              <h5 className="ik-body--md--600 mb-2">Phone</h5>
              <p className="text-blue-gray">03301335967</p>
            </div>

            <div className="mb-12">
              <h5 className="ik-body--md--600 mb-2">Location</h5>
              <p className="text-blue-gray">Ashford Kent</p>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <TextInput
                label="Full name"
                placeholder="Enter your full name"
                required
                name="fullName"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <TextInput
                label="Email"
                placeholder="example@email.com"
                required
                name="fullName"
              />

              <TextInput
                label="Phone"
                placeholder="Your phone number"
                required
                name="fullName"
              />
            </div>

            <div className="mb-8">
              <TextInput
                label="Address"
                placeholder="123 High Street, Ashford"
                required
                name="fullName"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <TextInput
                label="House Name/Number"
                placeholder="Rose Cottage or No. 12"
                required
                name="fullName"
              />

              <TextInput
                label="Post Code"
                placeholder="TN23 1AB"
                required
                name="fullName"
              />
            </div>

            <div className="mb-8">
              <SelectInput
                label="Let / Property Management"
                name="country"
                required
                options={[
                  { label: "Let", value: "Let" },
                  { label: "India", value: "india" },
                  { label: "USA", value: "usa" },
                ]}
              />
            </div>

            <div className="mb-14">
              <DateInput
                label="Preferred Day"
                name="dob"
                required
                min="1900-01-01"
                max={new Date().toISOString().split("T")[0]} // today
              />
            </div>

            <Button
              label="Request Rental Valuation"
              size="small"
              variant="filled"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
