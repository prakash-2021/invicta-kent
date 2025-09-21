"use client";

import { AccordionContent } from "@/app/components";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { JSX, useState } from "react";
import {
  BiCreditCard,
  BiFile,
  BiHome,
  BiMoney,
  BiShield,
  BiSolidCheckCircle,
  BiSolidErrorCircle,
} from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { MdConstruction, MdPolicy } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";

const tabs = ["Securing Property", "Moving In", "Living There", "Moving Out"];

const tabContent: Record<string, JSX.Element> = {
  "Securing Property": (
    <div className="grid grid-cols-2 gap-16 p-12 bg-white-smoke rounded-xl">
      <div>
        <h4 className="ik-heading--h3 mb-3">
          Pre-Tenancy: Securing a Property
        </h4>
        <p className="mb-2">
          To rent a property, you&apos;ll undergo a thorough vetting process to
          ensure you&apos;re a suitable tenant.
        </p>

        <div>
          <AccordionContent
            items={[
              {
                content: (
                  <div className="pb-12">
                    <div className="flex gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-sm">
                        <BiShield color="#172747" size={24} />
                      </div>

                      <div>
                        <p className="ik-body--md--600 mb-0.5">
                          Identity and &apos;Right to Rent&apos; Checks
                        </p>
                        <p>
                          Photo ID and proof of legal right to rent in the UK
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-sm">
                        <BiCreditCard color="#172747" size={24} />
                      </div>

                      <div>
                        <p className="ik-body--md--600 mb-0.5">Credit Check</p>
                        <p>
                          Assessment of credit history, CCJs, and bankruptcy
                          orders
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-sm">
                        <BiMoney color="#172747" size={24} />
                      </div>

                      <div>
                        <p className="ik-body--md--600 mb-0.5">
                          Affordability Check
                        </p>
                        <p>
                          Income verification (typically 2.5x annual rent
                          required)
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-sm">
                        <BiHome color="#172747" size={24} />
                      </div>

                      <div>
                        <p className="ik-body--md--600 mb-0.5">
                          Previous Landlord Reference
                        </p>
                        <p>History of rent payments and property maintenance</p>
                      </div>
                    </div>
                  </div>
                ),
                title: "Application and Referencing",
              },

              {
                content: (
                  <div>
                    <div className="p-6 bg-white rounded-sm mb-3">
                      <div className="flex gap-2 items-center mb-0.5">
                        <p className="ik-body--md--600">Prohibited Fees</p>
                        <BiSolidErrorCircle color="#D43A20" size={20} />
                      </div>

                      <p className="mb-4 text-blue-gray">
                        Under Tenant Fees Act 2019, agents cannot charge for:
                      </p>

                      <ul className="space-y-3 mb-8 pl-2">
                        <li className="flex items-center gap-3">
                          <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                          <span>Safety checks</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                          <span>
                            Advice on cost-effective improvements to enhance
                            rental value
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-white rounded-sm mb-3">
                      <div className="flex gap-2 items-center mb-0.5">
                        <p className="ik-body--md--600">Permitted Payments</p>
                        <BiSolidCheckCircle color="#58C38F" size={20} />
                      </div>

                      <p className="mb-4 text-blue-gray">
                        Agents can only ask for:
                      </p>

                      <ul className="space-y-3 mb-8 pl-2">
                        <li className="flex items-center gap-3">
                          <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                          <span>Monthly rent payments</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                          <span>Refundable tenancy deposit</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                          <span>Refundable holding deposit</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 border-border border rounded-sm mb-3">
                      <div className="flex gap-2 items-center mb-0.5">
                        <p className="ik-body--md--600">Deposit Protection</p>
                      </div>

                      <p className="text-blue-gray">
                        Agents must protect your deposit in a
                        government-approved scheme within 30 days (TDS, DPS, or
                        MyDeposits)
                      </p>
                    </div>
                  </div>
                ),
                title: "Fees and Deposits",
              },
            ]}
          />
        </div>
      </div>
      <div>
        <figure className="ik-figure rounded-sm pt-[100%]">
          <Image
            alt=""
            src={"https://picsum.photos/802/800"}
            width={600}
            height={600}
            className="ik-image"
          />
        </figure>
      </div>
    </div>
  ),
  "Moving In": (
    <div className="grid grid-cols-2 gap-16 p-12 bg-white-smoke rounded-xl">
      <div>
        <div className="mb-3">
          <h2 className="ik-heading--h3 mb-3">
            Starting the Tenancy: The Move-In Process
          </h2>
          <p className="mb-8">
            Essential documents and procedures when you move into your new
            rental property.
          </p>

          <div className="p-6 rounded-sm bg-white">
            <div className="w-12 h-12 bg-offwhite rounded-md flex items-center justify-center mb-8">
              <BiFile size={24} />
            </div>

            <p className="mb-0.5 ik-body--md--600">Tenancy Agreement</p>
            <p>
              The legally binding contract between you and the landlord. Must be
              fair and cannot override your statutory rights.
            </p>
          </div>
        </div>

        <div className="mb-3">
          <div className="p-6 rounded-sm bg-white">
            <div className="w-12 h-12 bg-offwhite rounded-md flex items-center justify-center mb-8">
              <BsFillEyeFill size={24} />
            </div>

            <p className="mb-0.5 ik-body--md--600">Property Inventory</p>
            <p>
              Detailed documentation of the property&apos;s condition at
              move-in, including written descriptions and photos.
            </p>
            <div className="p-3 border border-border rounded-sm mt-4">
              <p className="ik-misc--label">Important:</p>
              <p>
                You must review and sign this document. It&apos;s crucial
                evidence for any end-of-tenancy deposit disputes.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="p-6 rounded-sm bg-white">
            <div className="w-12 h-12 bg-offwhite rounded-md flex items-center justify-center mb-8">
              <SiGoogledocs size={24} />
            </div>

            <p className="mb-0.5 ik-body--md--600">Essential Documents</p>
            <p>You must receive these documents on moving in:</p>
            <ul className="space-y-3 mt-3 pl-2">
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Signed Tenancy Agreement</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Gas Safety Certificate</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Electrical Installation Report (EICR)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Energy Performance Certificate (EPC)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Deposit Protection Certificate</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>&apos;How to Rent&apos; guide (England only)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <div>
        <figure className="ik-figure rounded-sm pt-[100%]">
          <Image
            alt=""
            src={"https://picsum.photos/802/800"}
            width={600}
            height={600}
            className="ik-image"
          />
        </figure>
      </div>
    </div>
  ),
  "Living There": (
    <div className="grid grid-cols-2 gap-16 p-12 bg-white-smoke rounded-xl">
      <div>
        <div className="mb-3">
          <h2 className="ik-heading--h3 mb-3">
            During the Tenancy: Living in the Property
          </h2>
          <p className="mb-8">
            For fully managed properties, the agent handles these key
            responsibilities throughout your tenancy.
          </p>

          <div className="p-6 rounded-sm bg-white">
            <div className="w-12 h-12 bg-offwhite rounded-md flex items-center justify-center mb-8">
              <BiCreditCard size={24} />
            </div>

            <p className="mb-0.5 ik-body--md--600">Rent Collection</p>
            <p>
              The agent receives monthly rent payments and manages any arrears
              issues that may arise.
            </p>
          </div>
        </div>

        <div className="mb-3">
          <div className="p-6 rounded-sm bg-white">
            <div className="w-12 h-12 bg-offwhite rounded-md flex items-center justify-center mb-8">
              <MdConstruction size={24} />
            </div>

            <p className="mb-0.5 ik-body--md--600">Repairs and Maintenance</p>
            <p>
              Your first point of contact for all repair issues. Landlords must
              maintain:
            </p>
            <ul className="space-y-3 mt-3 pl-2">
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Property structure</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Heating systems</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Water, gas & electricity supply</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Health & safety compliance</span>
              </li>
            </ul>
            <div className="p-3 border border-border rounded-sm mt-4">
              <p className="ik-misc--label">Response Times:</p>
              <p>
                While no set timelines exist, urgent health and safety issues
                require prompt response. Delays may occur if landlord approval
                is needed for expensive work.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="p-6 rounded-sm bg-white">
            <div className="w-12 h-12 bg-offwhite rounded-md flex items-center justify-center mb-8">
              <BsFillEyeFill size={24} />
            </div>

            <p className="mb-0.5 ik-body--md--600">Essential Documents</p>
            <p>You must receive these documents on moving in:</p>
            <div className="p-3 border border-border rounded-sm mt-4">
              <p className="ik-misc--label">Your Rights:</p>
              <p>
                Agents must provide at least 24 hours written notice before
                visiting your property.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div>
        <figure className="ik-figure rounded-sm pt-[100%]">
          <Image
            alt=""
            src={"https://picsum.photos/802/800"}
            width={600}
            height={600}
            className="ik-image"
          />
        </figure>
      </div>
    </div>
  ),
  "Moving Out": (
    <div className="grid grid-cols-2 gap-16 p-12 bg-white-smoke rounded-xl">
      <div>
        <div className="mb-3">
          <h2 className="ik-heading--h3 mb-3">
            Ending the Tenancy: The Move-Out Process
          </h2>
          <p className="mb-8">
            Understanding the check-out process and your deposit return rights
            when ending your tenancy.
          </p>

          <div className="p-6 rounded-sm bg-white">
            <div className="w-12 h-12 bg-offwhite rounded-md flex items-center justify-center mb-8">
              <MdPolicy size={24} />
            </div>

            <p className="mb-0.5 ik-body--md--600">Check-Out Inspection</p>
            <p>
              The agent conducts a final inspection, comparing the property
              condition to the original check-in inventory to identify any new
              issues.
            </p>
          </div>
        </div>

        <div className="mb-3">
          <div className="p-6 rounded-sm bg-white">
            <div className="w-12 h-12 bg-offwhite rounded-md flex items-center justify-center mb-8">
              <BiCreditCard size={24} />
            </div>

            <p className="mb-0.5 ik-body--md--600">
              Deposit Return & Deductions
            </p>
            <p>
              The agent manages the return of your deposit based on the
              property&apos;s condition.
            </p>
            <ul className="space-y-3 mt-3 pl-2">
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>
                  Fair Wear & Tear: Normal deterioration like worn carpet in
                  hallways cannot be deducted from your deposit.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>
                  Deductible Damage: Issues beyond fair wear and tear, such as
                  burn marks or negligent damage.
                </span>
              </li>
            </ul>
            <div className="p-3 border border-border rounded-sm mt-4">
              <p className="ik-misc--label">Your Rights:</p>
              <p>
                Any proposed deductions must be communicated in writing with
                supporting evidence.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div>
        <figure className="ik-figure rounded-sm pt-[100%]">
          <Image
            alt=""
            src={"https://picsum.photos/802/800"}
            width={600}
            height={600}
            className="ik-image"
          />
        </figure>
      </div>
    </div>
  ),
};

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="">
          {/* Tabs Header */}
          <div className="flex space-x-4 border-b border-gray-200 relative">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative w-1/4 py-3 ik-misc--button cursor-pointer`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
