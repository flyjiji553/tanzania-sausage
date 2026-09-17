# Deploy to Google Cloud Run (AFRINOVA)

**Service:** `afrinova-web`  
**Region:** `africa-south1`  
**Project:** `project-6be7edc2-b68d-41a7-990`  
**Live URL:** https://afrinova-web-683460216772.africa-south1.run.app

## Prerequisites

- `gcloud` installed and authenticated (`gcloud auth login`)
- Cloud Run / Cloud Build APIs enabled for the project

## Deploy (source build)

From the repository root:

```bash
export PATH=/home/box/google-cloud-sdk/bin:$PATH
gcloud config set project project-6be7edc2-b68d-41a7-990
cd /workspace/tanzania-sausage

gcloud run deploy afrinova-web \
  --source . \
  --region=africa-south1 \
  --allow-unauthenticated \
  --port=8080 \
  --memory=512Mi \
  --cpu=1 \
  --quiet
```

- `--source .` builds via Cloud Build using this repo’s `Dockerfile`.
- Container listens on `PORT` (default `8080`) with `HOSTNAME=0.0.0.0` (Next.js standalone).

## Useful commands

```bash
gcloud run services describe afrinova-web --region africa-south1

gcloud run services logs read afrinova-web --region africa-south1 --limit 50
```

Do **not** deploy to `asia-southeast1` or a service named `tanzania-sausage` — those names are obsolete.
