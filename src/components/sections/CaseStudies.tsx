export function CaseStudies() {
  return (
    <section className="py-16 sm:py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="border rounded-lg p-6 shadow-sm bg-gray-50">
            <h4 className="font-semibold text-lg mb-2">Retail AI Forecasting</h4>
            <p className="text-gray-700 text-sm">
              Helped a major retailer reduce overstock by 30% with predictive demand forecasting using AI.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm bg-gray-50">
            <h4 className="font-semibold text-lg mb-2">SAP Integration for Logistics</h4>
            <p className="text-gray-700 text-sm">
              Migrated and integrated SAP for a large logistics firm, improving reporting time by 40%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}