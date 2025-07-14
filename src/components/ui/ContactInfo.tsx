import React from "react";

export function ContactInfo({ whatsappMessage = "" }) {
  return (
    <div className="mt-6 text-center text-sm text-gray-500 border-t pt-4 border-indigo-200">
      <p className="mb-2">
        <a
          href="mailto:admin@aatsolutions.co.za"
          className="hover:text-green-600 flex items-center justify-center gap-2"
        >
          📧 admin@aatsolutions.co.za
        </a>
      </p>
      <p>
        <a
          href="tel:+27816515179"
          className="hover:text-green-600 flex items-center justify-center gap-2"
        >
          📞 +27 81 651 5179
        </a>
      </p>
      <p className="mt-2">
        <a
          href={`https://wa.me/27816515179?text=${encodeURIComponent(
            whatsappMessage || "Hello, I'm contacting you regarding your services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 flex items-center justify-center gap-2"
        >
          📱 WhatsApp Us
        </a>
      </p>
    </div>
  );
}
