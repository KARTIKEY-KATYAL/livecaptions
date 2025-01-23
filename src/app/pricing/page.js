import PageHeaders from "@/components/PageHeaders";

export default function PricingPage() {
  const stripePaymentLink = "https://buy.stripe.com/test_9AQ8xFae61OL1DWaEG";

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeaders
        h1Text={"Check out our pricing"}
        h2Text={"Our pricing is very simple"}
      />

      <div className="bg-white text-slate-700 rounded-lg max-w-xs mx-auto p-6 text-center shadow-md">
        <h3 className="font-bold text-3xl mb-2">Rs. 100</h3>
        <h4 className="text-sm text-slate-500 mb-4">One-time payment</h4>

        <a
          href={stripePaymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Pay with Stripe
        </a>
      </div>
    </div>
  );
}
