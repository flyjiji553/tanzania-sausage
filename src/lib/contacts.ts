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
 * EDITABLE PLACEHOLDERS — replace with real delivery coverage when confirmed.
 * Marked clearly on the Services page.
 */
export const deliveryAreasPlaceholder = [
  { zone: "Kigamboni", note: "达累斯萨拉姆 · 公司所在区（占位）" },
  { zone: "Kinondoni", note: "达累斯萨拉姆市区（占位）" },
  { zone: "Ilala", note: "达累斯萨拉姆市区（占位）" },
  { zone: "Temeke", note: "达累斯萨拉姆市区（占位）" },
  { zone: "Ubungo", note: "达累斯萨拉姆市区（占位）" },
] as const;

export const deliveryFeesPlaceholder = [
  { zone: "Kigamboni 本地", fee: "待确认 / TBD", note: "占位：请按实际运费更新" },
  { zone: "达市其他城区", fee: "待确认 / TBD", note: "占位：可按距离或重量计价" },
  { zone: "城际 / 外省", fee: "询价 / On request", note: "占位：需另行协商" },
] as const;

export const agentAreasPlaceholder = [
  { region: "Dar es Salaam", status: "开放咨询（占位）" },
  { region: "Coast / Pwani", status: "开放咨询（占位）" },
  { region: "其他省份", status: "欢迎洽谈（占位）" },
] as const;
