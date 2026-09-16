/** Centralized real business contacts — edit here to update the whole site. */

export const company = {
  brandZh: "坦桑尼亚香肠",
  brandEn: "AFRINOVA FOOD LIMITED",
  legalName: "AFRINOVA FOOD LIMITED",
  tin: "178 484 028",
  vrn: "40-324130-W",
  tel: "+255 749 318 888",
  telHref: "tel:+255749318888",
  poBox: "P.O.Box 19088",
  address: "kisarawe 2 Kigamboni Dar es salaam Tanzania",
  sloganZh: "源自东非高原 · 匠心美味到餐桌",
  sloganEn: "From East African pastures to your table",
  introZh:
    "AFRINOVA FOOD LIMITED（坦桑尼亚香肠）专注于东非风味肉制品的生产与销售。我们以严选原料、规范工艺与可靠配送，为坦桑尼亚及周边市场的家庭、餐饮与经销伙伴提供高品质香肠产品。",
  introEn:
    "AFRINOVA FOOD LIMITED produces and distributes East African-inspired sausage products for households, hospitality partners, and distributors across Tanzania.",
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
    label: "咨询热线 01",
    labelEn: "Consult 01",
    phoneDisplay: "+255 625 932 177",
    waUrl: "https://wa.me/255625932177",
    telHref: "tel:+255625932177",
  },
  {
    id: "wa-02",
    label: "咨询热线 02",
    labelEn: "Consult 02",
    phoneDisplay: "+255 611 064 660",
    waUrl: "https://wa.me/255611064660",
    telHref: "tel:+255611064660",
  },
  {
    id: "wa-03",
    label: "咨询热线 03",
    labelEn: "Consult 03",
    phoneDisplay: "+255 637 762 120",
    waUrl: "https://wa.me/255637762120",
    telHref: "tel:+255637762120",
  },
  {
    id: "wa-04",
    label: "咨询热线 04",
    labelEn: "Consult 04",
    phoneDisplay: "+255 706 262 120",
    waUrl: "https://wa.me/255706262120",
    telHref: "tel:+255706262120",
  },
  {
    id: "wa-05",
    label: "咨询热线 05",
    labelEn: "Consult 05",
    phoneDisplay: "+255 660 866 165",
    waUrl: "https://wa.me/255660866165",
    telHref: "tel:+255660866165",
  },
];

export const complaintContact: WhatsAppContact = {
  id: "complaint",
  label: "投诉服务",
  labelEn: "Complaints",
  phoneDisplay: "+255 750 476 666",
  waUrl: "https://wa.me/255750476666",
  telHref: "tel:+255750476666",
};

export const agentContact: WhatsAppContact = {
  id: "agent",
  label: "代理商申请",
  labelEn: "Agent inquiry",
  phoneDisplay: "+255 750 476 666",
  waUrl: "https://wa.me/255750476666",
  telHref: "tel:+255750476666",
};

export const payment = {
  lipaNumber: "357095470",
  lipaName: "LIPA AFRINOVA FOOD",
  partyName: "AFRINOVA FOOD LIMITED",
  accountNumber: "25510007376 TZS",
  bankName: "NMB PLC",
  branch: "Kibada",
} as const;

/**
 * EDITABLE PLACEHOLDERS — replace with confirmed delivery coverage.
 * Shown on the Services section; keep structure, update zone/fee/status text.
 */
export const deliveryAreasPlaceholder = [
  { zone: "Kigamboni", note: "Dar es Salaam · factory district · same-day by arrangement" },
  { zone: "Kinondoni", note: "Dar es Salaam urban · scheduled van runs" },
  { zone: "Ilala", note: "Dar es Salaam urban · scheduled van runs" },
  { zone: "Temeke", note: "Dar es Salaam urban · scheduled van runs" },
  { zone: "Ubungo", note: "Dar es Salaam urban · scheduled van runs" },
] as const;

export const deliveryFeesPlaceholder = [
  { zone: "Kigamboni local", fee: "Confirm via WhatsApp", note: "Indicative — confirm by order size" },
  { zone: "Other Dar districts", fee: "Confirm via WhatsApp", note: "Priced by distance / weight" },
  { zone: "Intercity / upcountry", fee: "On request", note: "Quoted per route and volume" },
] as const;

export const agentAreasPlaceholder = [
  { region: "Dar es Salaam", status: "Open for distributor inquiry" },
  { region: "Coast / Pwani", status: "Open for distributor inquiry" },
  { region: "Other regions", status: "Welcome to discuss coverage" },
] as const;
