/** Centralized real business contacts — edit here to update the whole site. */

export const company = {
  brandEn: "AFRINOVA FOOD LIMITED",
  shortBrandEn: "AFRINOVA FOOD",
  legalName: "AFRINOVA FOOD LIMITED",
  tin: "178-484-028",
  vrn: "40-324130-W",
  tel: "+255 749 318 888",
  telHref: "tel:+255749318888",
  poBox: "P.O.Box 19088",
  address: "kisarawe 2 Kigamboni Dar es salaam Tanzania",
  sloganEn: "From East African pastures to your table",
  introEn: [
    "AFRINOVA FOOD LIMITED is a Tanzania-based company specializing in the processing and production of meat products. The company primarily produces and sells chicken, beef, fish products, and pet food.",
    "We carefully select high-quality locally sourced raw materials and adopt standardized production processes to ensure consistent product quality. Supported by a reliable distribution network, we provide high-quality sausage products to household consumers, food service providers, and distribution partners across Tanzania and surrounding markets.",
  ],
} as const;

export type WhatsAppContact = {
  id: string;
  label: string;
  labelEn: string;
  phoneDisplay: string;
  waUrl: string;
  telHref: string;
};

/** Product consultation WhatsApp lines */
export const consultWhatsApps: WhatsAppContact[] = [
  {
    id: "wa-01",
    label: "Consult 01",
    labelEn: "Consult 01",
    phoneDisplay: "+255 625 932 177",
    waUrl: "https://wa.me/255625932177",
    telHref: "tel:+255625932177",
  },
  {
    id: "wa-02",
    label: "Consult 02",
    labelEn: "Consult 02",
    phoneDisplay: "+255 611 064 660",
    waUrl: "https://wa.me/255611064660",
    telHref: "tel:+255611064660",
  },
  {
    id: "wa-03",
    label: "Consult 03",
    labelEn: "Consult 03",
    phoneDisplay: "+255 637 762 120",
    waUrl: "https://wa.me/255637762120",
    telHref: "tel:+255637762120",
  },
  {
    id: "wa-04",
    label: "Consult 04",
    labelEn: "Consult 04",
    phoneDisplay: "+255 706 262 120",
    waUrl: "https://wa.me/255706262120",
    telHref: "tel:+255706262120",
  },
  {
    id: "wa-05",
    label: "Consult 05",
    labelEn: "Consult 05",
    phoneDisplay: "+255 660 866 165",
    waUrl: "https://wa.me/255660866165",
    telHref: "tel:+255660866165",
  },
];

export const complaintContact: WhatsAppContact = {
  id: "complaint",
  label: "Complaints",
  labelEn: "Complaints",
  phoneDisplay: "+255 750 476 666",
  waUrl: "https://wa.me/255750476666",
  telHref: "tel:+255750476666",
};

export const agentContact: WhatsAppContact = {
  id: "agent",
  label: "Agent inquiry",
  labelEn: "Agent inquiry",
  phoneDisplay: "+255 750 476 666",
  waUrl: "https://wa.me/255750476666",
  telHref: "tel:+255750476666",
};

/** Kept for future use; payment UI temporarily removed from Contact/footer. */
export const payment = {
  lipaNumber: "357095470",
  lipaName: "LIPA AFRINOVA FOOD",
  partyName: "AFRINOVA FOOD LIMITED",
  accountNumber: "25510007376 TZS",
  bankName: "NMB PLC",
  branch: "Kibada",
} as const;

export const deliveryAreasPlaceholder = [
  {
    zone: "Dar es Salaam urban",
    note: "Free delivery within Dar es Salaam city",
  },
  {
    zone: "Other cities / surrounding areas",
    note: "Charged by actual cost — please consult WhatsApp",
  },
] as const;

export const deliveryFeesPlaceholder = [
  {
    zone: "Dar es Salaam urban",
    fee: "Free delivery",
    note: "City urban coverage",
  },
  {
    zone: "Other cities / surrounding areas",
    fee: "Actual cost",
    note: "Please consult WhatsApp for a quote",
  },
] as const;

/** Temporarily unused — agent regions section removed from Services. */
export const agentAreasPlaceholder = [
  { region: "Dar es Salaam", status: "Open for distributor inquiry" },
  { region: "Coast / Pwani", status: "Open for distributor inquiry" },
  { region: "Other regions", status: "Welcome to discuss coverage" },
] as const;
