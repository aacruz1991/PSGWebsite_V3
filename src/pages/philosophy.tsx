import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function PhilosophyPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("approach");

  useEffect(() => {
    const tab = router.query.tab as string;
    if (tab) {
      setActiveTab(tab);
    }
  }, [router.query.tab]);

  const tabs = [
    {
      id: "approach",
      label: "Strategic Approach",
      title: "Our approach...will be tailored to the situation but we always think about the entire enterprise"
    },
    {
      id: "commitment", 
      label: "Enterprise Commitment",
      title: "Enterprise Improvement Requires Enterprise Commitment"
    },
    {
      id: "cash",
      label: "Cash: Still King", 
      title: "Cash: Still King"
    },
    {
      id: "cost",
      label: "Cost Management",
      title: "Cost: Leverage Alignment as Chiropractic for the Enterprise"
    },
    {
      id: "growth",
      label: "Growth Strategy",
      title: "Growth: Feeding Organic and Inorganic Investments"
    },
    {
      id: "transactions",
      label: "Transaction Leadership",
      title: "Leading Strategic Transaction Activity"
    },
    {
      id: "strategy",
      label: "Transaction Strategy",
      title: "Setting the Course for Transactions"
    },
    {
      id: "diligence",
      label: "Due Diligence",
      title: "Detailed Diligence to Drive Negotiation Strategy"
    },
    {
      id: "execution",
      label: "Deal Execution",
      title: "Execution that Delivers Deal Value"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "approach":
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-3 gap-4 items-start">
                <Card className="bg-[#35654C] text-white p-6 h-60 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-center">Cash</h3>
                </Card>
                <div className="space-y-4 h-60 flex flex-col justify-between">
                  <Card className="bg-[#0E2841] text-white p-4 flex-1 flex items-center justify-center">
                    <h4 className="font-semibold italic text-center">Working capital</h4>
                  </Card>
                  <Card className="bg-[#0E2841] text-white p-4 flex-1 flex items-center justify-center">
                    <h4 className="font-semibold italic text-center">Asset monetization</h4>
                  </Card>
                </div>
                <div className="space-y-4 h-60 flex flex-col justify-between">
                  <Card className="bg-[#E97132] text-white p-3 flex-1 flex items-center">
                    <p className="text-xs leading-tight">Cash is now and forever king, but creating a cash-oriented culture requires time, effort, and relentless commitment to the conversion cycle</p>
                  </Card>
                  <Card className="bg-[#E97132] text-white p-3 flex-1 flex items-center">
                    <p className="text-xs leading-tight">It's always surprising when there is an incredible patent hiding in the portfolio or simply a piece of machinery that someone else can deploy</p>
                  </Card>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 items-start">
                <Card className="bg-[#35654C] text-white p-6 h-60 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-center">Cost</h3>
                </Card>
                <div className="space-y-4 h-60 flex flex-col justify-between">
                  <Card className="bg-[#0E2841] text-white p-4 flex-1 flex items-center justify-center">
                    <h4 className="font-semibold italic text-center">Cost of Sales</h4>
                  </Card>
                  <Card className="bg-[#0E2841] text-white p-4 flex-1 flex items-center justify-center">
                    <h4 className="font-semibold italic text-center">SG&A</h4>
                  </Card>
                </div>
                <div className="space-y-4 h-60 flex flex-col justify-between">
                  <Card className="bg-[#E97132] text-white p-3 flex-1 flex items-center">
                    <p className="text-xs leading-tight">Whether the leak is in the cost of parts, labor, delivery, or quality, nobody is perfect and opportunities abound</p>
                  </Card>
                  <Card className="bg-[#E97132] text-white p-3 flex-1 flex items-center">
                    <p className="text-xs leading-tight">Understanding not just what is done to support the business, but why – from how back-office functions align to the business to operations and what they deliver</p>
                  </Card>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 items-start">
                <Card className="bg-[#35654C] text-white p-6 h-60 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-center">Growth</h3>
                </Card>
                <div className="space-y-4 h-60 flex flex-col justify-between">
                  <Card className="bg-[#0E2841] text-white p-4 flex-1 flex items-center justify-center">
                    <h4 className="font-semibold italic text-center">Organic</h4>
                  </Card>
                  <Card className="bg-[#0E2841] text-white p-4 flex-1 flex items-center justify-center">
                    <h4 className="font-semibold italic text-center">Inorganic</h4>
                  </Card>
                </div>
                <div className="space-y-4 h-60 flex flex-col justify-between">
                  <Card className="bg-[#E97132] text-white p-3 flex-1 flex items-center">
                    <p className="text-xs leading-tight">Delivering to existing customers while exploring opportunities with new and existing customers requires balance, but is paramount to success</p>
                  </Card>
                  <Card className="bg-[#E97132] text-white p-3 flex-1 flex items-center">
                    <p className="text-xs leading-tight">Acquisitions sometimes seem "easy", but successful integrations demand significant effort; and sometimes the best path to EBITDA growth is eliminating "hobbies"</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        );

      case "commitment":
        return (
          <div className="space-y-8">
            <p className="text-lg text-[#0E2841]/70 italic text-center">
              A cash mindset and enterprise alignment are table stakes in positioning the enterprise for growth
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-[#35654C] text-white p-6">
                <h3 className="text-xl font-bold mb-4">Cash</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Driving increased cash generation requires refocusing on daily processes that allow cash linkage in the absence of rigor, while planning for future actions that sustain gains</li>
                  <li>• Regularly reviewing assets and intellectual property for monetization opportunities</li>
                </ul>
              </Card>
              
              <Card className="bg-[#35654C] text-white p-6">
                <h3 className="text-xl font-bold mb-4">Cost</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Businesses inherently focus on "what" they do, forgetting to revisit "why" they do it that way, having missed opportunities to give clarity of mission to the enterprise</li>
                  <li>• Alignment drives efficiency – in going to market, delivering for customers, and delivering for internal stakeholders</li>
                </ul>
              </Card>
              
              <Card className="bg-[#35654C] text-white p-6">
                <h3 className="text-xl font-bold mb-4">Growth</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Growing the top-line may include higher volume, better pricing, or entering new markets while growing the bottom-line may require reducing some aspect of the organizations size or exiting a business or market</li>
                  <li>• Maximizing enterprise value requires balancing both</li>
                </ul>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-[#0E2841] text-white p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Levers for Driving Enterprise Value:</h3>
                <div className="grid grid-cols-5 gap-4 text-center">
                  <div className="bg-white/10 p-3 rounded">
                    <h4 className="font-semibold">Working Capital</h4>
                  </div>
                  <div className="bg-white/10 p-3 rounded">
                    <h4 className="font-semibold">Assets / PP&E</h4>
                  </div>
                  <div className="bg-white/10 p-3 rounded">
                    <h4 className="font-semibold">COS / SG&A</h4>
                  </div>
                  <div className="bg-white/10 p-3 rounded">
                    <h4 className="font-semibold">Sourcing</h4>
                  </div>
                  <div className="bg-white/10 p-3 rounded">
                    <h4 className="font-semibold">Revenue</h4>
                  </div>
                </div>
              </Card>

              <Card className="bg-[#DCEAF7] p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-[#0E2841]">Enterprise Processes to be Aligned:</h3>
                <div className="grid grid-cols-5 gap-4 text-center">
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-[#0E2841]">Idea-to-Implement</h4>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-[#0E2841]">Quote-to-Cash</h4>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-[#0E2841]">Source-to-Pay</h4>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-[#0E2841]">Recruit-to-Retire</h4>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-[#0E2841]">Record-to-Report</h4>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      case "cash":
        return (
          <div className="space-y-8">
            <p className="text-lg text-[#0E2841]/70 italic text-center">
              Generating cash requires commitment and focus leading to redeployment to EBITDA enhancing initiatives
            </p>

            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-[#35654C] text-white p-4 text-center">
                <h3 className="text-xl font-bold">Cash</h3>
              </Card>
              <Card className="bg-[#DCEAF7] text-[#0E2841]/60 p-4 text-center">
                <h3 className="text-xl font-bold">Cost</h3>
              </Card>
              <Card className="bg-[#DCEAF7] text-[#0E2841]/60 p-4 text-center">
                <h3 className="text-xl font-bold">Growth</h3>
              </Card>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Focus Areas</h4>
                <ul className="space-y-2 text-sm text-[#0E2841]">
                  <li>• Cash conversion cycle</li>
                  <li>• Cash management processes</li>
                  <li>• Adherence to terms</li>
                  <li>• Cash planning, and forecasting</li>
                  <li>• Resource allocation processes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Key Levers</h4>
                <div className="bg-[#0E2841] text-white p-3 rounded mb-3">
                  <h5 className="font-semibold mb-2">Working capital</h5>
                  <ul className="text-xs space-y-1">
                    <li>• AR</li>
                    <li>• AP</li>
                    <li>• Inventory</li>
                  </ul>
                </div>
                <div className="bg-[#0E2841] text-white p-3 rounded">
                  <h5 className="font-semibold mb-2">Assets / PP&E</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Asset light</li>
                    <li>• Monetization</li>
                    <li>• Licensing</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Key Processes</h4>
                <div className="bg-[#DCEAF7] p-3 rounded space-y-1">
                  <p className="text-sm text-[#0E2841]">• Idea-to-Implement</p>
                  <p className="text-sm text-[#0E2841]">• Quote-to-Cash</p>
                  <p className="text-sm text-[#0E2841]">• Source-to-Pay</p>
                  <p className="text-sm text-[#0E2841]">• Record-to-Report</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Outcomes</h4>
                <div className="bg-[#DCEAF7] p-3 rounded space-y-1">
                  <p className="text-sm text-[#0E2841]">• Improved working capital and cash</p>
                  <p className="text-sm text-[#0E2841]">• Better cash flow forecasting</p>
                  <p className="text-sm text-[#0E2841]">• Insights into asset monetization options</p>
                  <p className="text-sm text-[#0E2841]">• Improved asset allocation methods</p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-[#0E2841] pt-6">
              <h4 className="text-xl font-bold text-[#0E2841] mb-6 text-center">How We Deliver</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Analyze and plan</h5>
                    <p className="text-sm text-[#0E2841]/70">Our experience managing and generating cash is at our core – we know where to look and how to plan for capturing cash, allowing the business to redeploy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Capture cash and improve processes</h5>
                    <p className="text-sm text-[#0E2841]/70">We drive process changes that sustain cash generation success via re-envisioning key activities, roles and responsibilities, and enablers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Cultural (r)evolution</h5>
                    <p className="text-sm text-[#0E2841]/70">Strong cash generation requires an enterprise focus and commitment, often leading to changes in KPIs and incentives across the enterprise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "cost":
        return (
          <div className="space-y-8">
            <p className="text-lg text-[#0E2841]/70 italic text-center">
              Misaligned processes, metrics or incentives drive inefficiencies when the enterprise should work as one
            </p>

            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-[#DCEAF7] text-[#0E2841]/60 p-4 text-center">
                <h3 className="text-xl font-bold">Cash</h3>
              </Card>
              <Card className="bg-[#35654C] text-white p-4 text-center">
                <h3 className="text-xl font-bold">Cost</h3>
              </Card>
              <Card className="bg-[#DCEAF7] text-[#0E2841]/60 p-4 text-center">
                <h3 className="text-xl font-bold">Growth</h3>
              </Card>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Focus Areas</h4>
                <ul className="space-y-2 text-sm text-[#0E2841]">
                  <li>• Operating Model</li>
                  <li>• Processes</li>
                  <li>• Roles and Responsibilities</li>
                  <li>• Organization Structure</li>
                  <li>• Incentives</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Key Levers</h4>
                <div className="space-y-3">
                  <div className="bg-[#0E2841] text-white p-3 rounded">
                    <h5 className="font-semibold mb-2">COS & SGA</h5>
                    <ul className="text-xs space-y-1">
                      <li>• People & process efficiency</li>
                      <li>• Redundancy elimination</li>
                    </ul>
                  </div>
                  <div className="bg-[#0E2841] text-white p-3 rounded">
                    <h5 className="font-semibold mb-2">Sourcing</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Spend consolidation and management</li>
                      <li>• Direct & indirect</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Key Processes</h4>
                <div className="bg-[#DCEAF7] p-3 rounded space-y-1">
                  <p className="text-sm text-[#0E2841]">• Idea-to-Implement</p>
                  <p className="text-sm text-[#0E2841]">• Quote-to-Cash</p>
                  <p className="text-sm text-[#0E2841]">• Source-to-Pay</p>
                  <p className="text-sm text-[#0E2841]">• Record-to-Report</p>
                  <p className="text-sm text-[#0E2841]">• Recruit-to-Retire</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Outcomes</h4>
                <div className="bg-[#DCEAF7] p-3 rounded space-y-1">
                  <p className="text-sm text-[#0E2841]">• Greater efficiency delivering to the market</p>
                  <p className="text-sm text-[#0E2841]">• Elimination of redundancies and non-value add effort</p>
                  <p className="text-sm text-[#0E2841]">• Improved labor and non-labor spend</p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-[#0E2841] pt-6">
              <h4 className="text-xl font-bold text-[#0E2841] mb-6 text-center">How We Deliver</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Go-to-market operating model review</h5>
                    <p className="text-sm text-[#0E2841]/70">The right go-to-market approach is more than aligning Sales but also the right mid- and back-office operational execution and business-decision support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Clarity of ownership</h5>
                    <p className="text-sm text-[#0E2841]/70">From relationships and costs, to roles and responsibilities, we help clients better align the enterprise from the market back to eliminate redundancy and cost</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Rewarding behaviors</h5>
                    <p className="text-sm text-[#0E2841]/70">You get what you incentive – and our team brings experience in driving behaviors through better alignment of metrics and incentives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "growth":
        return (
          <div className="space-y-8">
            <p className="text-lg text-[#0E2841]/70 italic text-center">
              Growth never hides inefficiencies – it magnifies the amount of lost profits
            </p>

            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-[#DCEAF7] text-[#0E2841]/60 p-4 text-center">
                <h3 className="text-xl font-bold">Cash</h3>
              </Card>
              <Card className="bg-[#DCEAF7] text-[#0E2841]/60 p-4 text-center">
                <h3 className="text-xl font-bold">Cost</h3>
              </Card>
              <Card className="bg-[#35654C] text-white p-4 text-center">
                <h3 className="text-xl font-bold">Growth</h3>
              </Card>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Focus Areas</h4>
                <ul className="space-y-2 text-sm text-[#0E2841]">
                  <li>• Strategy</li>
                  <li>• Portfolio</li>
                  <li>• Markets</li>
                  <li>• Customers</li>
                  <li>• Pricing Power</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Key Levers</h4>
                <div className="space-y-3">
                  <div className="bg-[#0E2841] text-white p-3 rounded">
                    <h5 className="font-semibold mb-2">Organic</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Price</li>
                      <li>• Volume</li>
                      <li>• Innovation</li>
                    </ul>
                  </div>
                  <div className="bg-[#0E2841] text-white p-3 rounded">
                    <h5 className="font-semibold mb-2">Inorganic</h5>
                    <ul className="text-xs space-y-1">
                      <li>• M&A (JD)</li>
                      <li>• Partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Key Processes</h4>
                <div className="bg-[#DCEAF7] p-3 rounded space-y-1">
                  <p className="text-sm text-[#0E2841]">• Idea-to-Implement</p>
                  <p className="text-sm text-[#0E2841]">• Quote-to-Cash</p>
                  <p className="text-sm text-[#0E2841]">• Source-to-Pay</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0E2841] mb-3 border-b-2 border-[#0E2841] pb-1">Outcomes</h4>
                <div className="bg-[#DCEAF7] p-3 rounded space-y-1">
                  <p className="text-sm text-[#0E2841]">• Improvement on the top and bottom lines through focus</p>
                  <p className="text-sm text-[#0E2841]">• Better alignment of go-to-market strategies and execution</p>
                  <p className="text-sm text-[#0E2841]">• Re-envisioned portfolio to deliver higher EBITDA and margins</p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-[#0E2841] pt-6">
              <h4 className="text-xl font-bold text-[#0E2841] mb-6 text-center">How We Deliver</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Meet the market</h5>
                    <p className="text-sm text-[#0E2841]/70">It's not just what you sell, but how, why, to whom, and how much – we help focus on the full picture to not just drive sales growth, but profitable sales growth</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Grow the top and bottom</h5>
                    <p className="text-sm text-[#0E2841]/70">Growth is not just driving revenue, but making sure more of it hits the bottom line, which we deliver through aligning the business top to bottom</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Portfolio alignment</h5>
                    <p className="text-sm text-[#0E2841]/70">"Hobbies" are a drain on capital resources, both human and financial – we help assess the portfolio for opportunities, then execute, whether buying or selling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "transactions":
        return (
          <div className="space-y-8">
            <p className="text-lg text-[#0E2841]/70 italic text-center">
              PSG's transaction lifecycle experience provides action-oriented leadership to execute successfully
            </p>

            {/* Transaction Lifecycle Process */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="bg-[#0E2841] text-white px-4 py-2 font-semibold">Strategy</div>
                <div className="text-gray-400">→</div>
                <div className="bg-[#0E2841] text-white px-4 py-2 font-semibold">Diligence</div>
                <div className="text-gray-400">→</div>
                <div className="bg-[#0E2841] text-white px-4 py-2 font-semibold">Negotiation</div>
                <div className="text-gray-400">→</div>
                <div className="bg-[#0E2841] text-white px-4 py-2 font-semibold">Pre-Close</div>
                <div className="text-gray-400">→</div>
                <div className="bg-[#0E2841] text-white px-4 py-2 font-semibold">Post-close</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#0E2841] mb-4">The PSG Experience Advantage</h3>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Buy-side */}
              <Card className="bg-[#DCEAF7] p-6 h-[500px]">
                <h3 className="text-xl font-bold text-[#0E2841] mb-4 text-center">Buy-side</h3>
                <div className="h-[400px] flex flex-col justify-center">
                  <ul className="space-y-4 text-base text-[#0E2841]">
                    <li>• Collectively, we have successfully executed over # transactions with our professionals' experiences as advisers and executives including:</li>
                    <li className="ml-6">• Defining M&A strategy</li>
                    <li className="ml-6">• Identifying and screening targets</li>
                    <li className="ml-6">• Leading diligence and negotiations</li>
                    <li className="ml-6">• Driving integration success, including executing synergy capture programs</li>
                    <li>• We leverage our knowledge of the motivations of strategic and financial buyers to help our clients put their best bid forward that includes leveraging our transformation playbook to deliver the intended value of the deal, and beyond</li>
                  </ul>
                </div>
              </Card>

              {/* Sell-side */}
              <Card className="bg-[#DCECE4] p-6 h-[500px]">
                <h3 className="text-xl font-bold text-[#0E2841] mb-4 text-center">Sell-side</h3>
                <div className="h-[400px] flex flex-col justify-center">
                  <ul className="space-y-4 text-base text-[#0E2841]">
                    <li>• Our unique set of experiences includes leading some of the most complex carve-outs and serial divestitures</li>
                    <li>• We understand the complexities of preparing for sale and have the experience to position your business or carve-out to maximize deal value including:</li>
                    <li className="ml-6">• Understanding the different motivations of strategic and financial buyers</li>
                    <li className="ml-6">• Leveraging our performance improvement experience to enhance the attractiveness of your business or carve-out</li>
                    <li className="ml-6">• Navigating the operational complexities of separating and of reducing the enterprise cost structure for the remaining business</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        );

      case "strategy":
        return (
          <div className="space-y-8">
            <p className="text-lg text-[#0E2841]/70 italic text-center">
              Successful transactions begin with clarity of strategy and full enterprise alignment
            </p>

            {/* Transaction Lifecycle Process - Strategy Highlighted */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="bg-[#0E2841] text-white px-4 py-2 font-semibold">Strategy</div>
                <div className="text-gray-400">→</div>
                <div className="bg-gray-300 text-gray-600 px-4 py-2">Diligence</div>
                <div className="text-gray-400">→</div>
                <div className="bg-gray-300 text-gray-600 px-4 py-2">Negotiation</div>
                <div className="text-gray-400">→</div>
                <div className="bg-gray-300 text-gray-600 px-4 py-2">Pre-Close</div>
                <div className="text-gray-400">→</div>
                <div className="bg-gray-300 text-gray-600 px-4 py-2">Post-close</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Buy-side Strategy */}
              <Card className="bg-[#DCEAF7] p-6 h-[400px]">
                <h3 className="text-xl font-bold text-[#0E2841] mb-4 text-center">Buy-side</h3>
                <div className="grid grid-cols-2 gap-2 h-[300px]">
                  <div className="space-y-2">
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Enterprise & Growth Strategy</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Market Outreach</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Target Identification & Screening</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Integration Strategy</div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Acquisition Strategy</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Deal Financing Strategy</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Impact Modeling</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Deal Process Planning</div>
                  </div>
                </div>
              </Card>

              {/* Sell-side Strategy */}
              <Card className="bg-[#DCECE4] p-6 h-[400px]">
                <h3 className="text-xl font-bold text-[#0E2841] mb-4 text-center">Sell-side</h3>
                <div className="grid grid-cols-2 gap-2 h-[300px]">
                  <div className="space-y-2">
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Enterprise Strategy</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Buyer Profiling</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Strategic Alternatives Review</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Buyer Profile Readiness</div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Portfolio Review</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Marketing Strategy</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Perimeter Identification</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">"No Regrets" Action Plan</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="border-t-2 border-[#0E2841] pt-6 mt-12">
              <h4 className="text-xl font-bold text-[#0E2841] mb-6 text-center">How We Deliver</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Set the course</h5>
                    <p className="text-sm text-[#0E2841]/70">Transactions deliver step-function change to the enterprise which our experience professionals help clients analyze and align to the strategic vision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Review all options</h5>
                    <p className="text-sm text-[#0E2841]/70">Buying and selling both deserve a full scan of options before moving forward beginning with modeling, challenging, and refining each option</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Eat the elephant</h5>
                    <p className="text-sm text-[#0E2841]/70">Transactions are significant undertakings and our team's experiences set our clients on a path to success throughout the transaction process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "diligence":
        return (
          <div className="space-y-8">
            <p className="text-lg text-[#0E2841]/70 italic text-center">
              Throughout diligence and negotiation, relating back to future value and execution is paramount
            </p>

            {/* Transaction Lifecycle Process - Diligence Highlighted */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="bg-gray-300 text-gray-600 px-4 py-2">Strategy</div>
                <div className="text-gray-400">→</div>
                <div className="bg-[#0E2841] text-white px-4 py-2 font-semibold">Diligence</div>
                <div className="text-gray-400">→</div>
                <div className="bg-[#0E2841] text-white px-4 py-2 font-semibold">Negotiation</div>
                <div className="text-gray-400">→</div>
                <div className="bg-gray-300 text-gray-600 px-4 py-2">Pre-Close</div>
                <div className="text-gray-400">→</div>
                <div className="bg-gray-300 text-gray-600 px-4 py-2">Post-close</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Buy-side Diligence */}
              <Card className="bg-[#DCEAF7] p-6 h-[400px]">
                <h3 className="text-xl font-bold text-[#0E2841] mb-4 text-center">Buy-side</h3>
                <div className="grid grid-cols-2 gap-2 h-[300px]">
                  <div className="space-y-2">
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Business Diligence</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Negotiation Strategy</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Synergy Modeling</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Integration Strategy</div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Management Interviews</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Deal Financing Strategy</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Valuation Modeling</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">TSA Requirements Planning</div>
                  </div>
                </div>
              </Card>

              {/* Sell-side Diligence */}
              <Card className="bg-[#DCECE4] p-6 h-[400px]">
                <h3 className="text-xl font-bold text-[#0E2841] mb-4 text-center">Sell-side</h3>
                <div className="grid grid-cols-2 gap-2 h-[300px]">
                  <div className="space-y-2">
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Perimeter Finalization</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Diligence Planning</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Business Readiness Review</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Data Room Readiness</div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Separation Strategy</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Management Presentations</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Marketing Readiness</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Stranded Cost Identification</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="border-t-2 border-[#0E2841] pt-6 mt-12">
              <h4 className="text-xl font-bold text-[#0E2841] mb-6 text-center">How We Deliver</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Align the strategic vision</h5>
                    <p className="text-sm text-[#0E2841]/70">Whether buying or selling, PSG helps vet the purpose and the value of any transaction and its alignment to the longer-term enterprise vision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">More models than a runway</h5>
                    <p className="text-sm text-[#0E2841]/70">We leverage our exceptional modeling capabilities across all facets of understanding, planning, and valuing transactions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Identify risk</h5>
                    <p className="text-sm text-[#0E2841]/70">From buy-side integration issues to sell-side value leakage, our approach identifies issues before they arise, providing execution focus and readiness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "execution":
        return (
          <div className="space-y-8">
            <p className="text-lg text-[#0E2841]/70 italic text-center">
              As closing conditions and the deal move forward, operational execution takes center stage
            </p>

            {/* Transaction Lifecycle Process - Execution Highlighted */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="bg-gray-300 text-gray-600 px-4 py-2">Strategy</div>
                <div className="text-gray-400">→</div>
                <div className="bg-gray-300 text-gray-600 px-4 py-2">Diligence</div>
                <div className="text-gray-400">→</div>
                <div className="bg-gray-300 text-gray-600 px-4 py-2">Negotiation</div>
                <div className="text-gray-400">→</div>
                <div className="bg-[#0E2841] text-white px-4 py-2 font-semibold">Pre-Close</div>
                <div className="text-gray-400">→</div>
                <div className="bg-[#0E2841] text-white px-4 py-2 font-semibold">Post-close</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Buy-side Execution */}
              <Card className="bg-[#DCEAF7] p-6 h-[400px]">
                <h3 className="text-xl font-bold text-[#0E2841] mb-4 text-center">Buy-side</h3>
                <div className="grid grid-cols-2 gap-2 h-[300px]">
                  <div className="space-y-2">
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Confirmatory Diligence</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Future State Operating & Org Model</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Deal Execution</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Synergy Capture</div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Day 1 Planning & Execution</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Integration Planning & Execution</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">TSA Planning & Execution</div>
                    <div className="bg-[#0E2841] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">TSA Exit Planning & Execution</div>
                  </div>
                </div>
              </Card>

              {/* Sell-side Execution */}
              <Card className="bg-[#DCECE4] p-6 h-[400px]">
                <h3 className="text-xl font-bold text-[#0E2841] mb-4 text-center">Sell-side</h3>
                <div className="grid grid-cols-2 gap-2 h-[300px]">
                  <div className="space-y-2">
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Confirmatory Diligence</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Future State Operating & Org Model</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Deal Execution</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Stranded Cost Mitigation</div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Day 1 Planning & Execution</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">Separation Planning & Execution</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">TSA Planning & Execution</div>
                    <div className="bg-[#35654C] text-white p-2 text-center text-xs font-semibold h-[70px] flex items-center justify-center">TSA Exit Planning & Execution</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="border-t-2 border-[#0E2841] pt-6 mt-12">
              <h4 className="text-xl font-bold text-[#0E2841] mb-6 text-center">How We Deliver</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Organize the process</h5>
                    <p className="text-sm text-[#0E2841]/70">Transaction success requires tight management of teams and to-dos given the accelerated timing in this phase of the deal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Drive action</h5>
                    <p className="text-sm text-[#0E2841]/70">Successful execution requires strong leadership that leans in, executes, and understands the implications of decisions – not just serves as 'project manager'</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0E2841] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h5 className="font-bold text-[#0E2841]">Mitigate risk</h5>
                    <p className="text-sm text-[#0E2841]/70">We obsess about protecting customer, vendors, employees, cash, and obligations to keep risk mitigation in focus throughout the process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DCEAF7] via-white to-[#DCECE4]">
      <Header />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0E2841]">
              Our Philosophy
            </h1>
            <p className="text-lg text-[#0E2841]/70 max-w-3xl mx-auto">
              Strategic frameworks and methodologies that drive sustainable business transformation
            </p>
          </div>

          {/* Full Width Content Area */}
          <div className="w-full">
            <Card className="bg-white/90 backdrop-blur-sm border-[#DCEAF7] shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0E2841] mb-8">
                  {tabs.find(tab => tab.id === activeTab)?.title}
                </h2>
                {renderContent()}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
