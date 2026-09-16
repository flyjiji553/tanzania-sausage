# 部署到 Google Cloud Run

前提：已安装并登录 `gcloud`（`gcloud auth login`），且已选择项目（`gcloud config set project YOUR_PROJECT_ID`）。

## 一键部署（源码构建）

在仓库根目录执行：

```bash
gcloud run deploy tanzania-sausage \
  --source . \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --port 8080
```

- `--source .`：由 Cloud Build 按本仓库 `Dockerfile` 构建镜像并部署。
- `--region`：按需要改成你的区域（如 `asia-east1`、`us-central1`）。
- `--allow-unauthenticated`：公开访问；若需登录访问请去掉此参数。

部署成功后，终端会输出服务 URL。

## 常用命令

```bash
# 查看服务
gcloud run services describe tanzania-sausage --region asia-southeast1

# 查看最近日志
gcloud run services logs read tanzania-sausage --region asia-southeast1 --limit 50

# 更新环境变量（示例）
gcloud run services update tanzania-sausage \
  --region asia-southeast1 \
  --set-env-vars "NODE_ENV=production"
```

## 说明

- 应用使用 Next.js `output: 'standalone'`，镜像内通过 `node server.js` 启动。
- 容器监听 `PORT`（默认 `8080`）与 `HOSTNAME=0.0.0.0`，符合 Cloud Run 要求。
- 本仓库**不要**在本地未认证时直接跑 `gcloud run deploy`；认证后再执行上述命令即可。
