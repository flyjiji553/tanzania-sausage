# 坦桑尼亚香肠 · AFRINOVA FOOD LIMITED

AFRINOVA FOOD LIMITED 官方营销官网 —— Next.js App Router + TypeScript + Tailwind CSS。

## 站点结构（与线框一致）

| 导航 | 区块 | 内容 |
|------|------|------|
| 主页 | `#home` | 形象图、Slogan、产品特点 |
| 产品 | `#products` | 产品目录 + WhatsApp 咨询（5 条热线） |
| 服务 | `#services` | 配送区域 / 费用 / 代理区域（可编辑占位）+ 投诉 WhatsApp |
| 联系我们 | `#contact` | 公司简介、TIN/VRN/地址、收款账户、代理商申请 |

## 联系与收款数据

统一维护于 `src/lib/contacts.ts`：

- 产品咨询 WhatsApp × 5
- 投诉 / 代理专线：`+255 750 476 666`
- 公司电话、TIN、VRN、地址
- Lipa / NMB 银行账户

配送区域、配送费用、代理区域目前为**可编辑占位**，请在 `contacts.ts` 中替换为正式信息。

## 本地运行

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## 技术栈

- Next.js（App Router）
- TypeScript
- Tailwind CSS v4
- Unsplash 图片（需联网）

## 仓库

https://github.com/flyjiji553/tanzania-sausage
