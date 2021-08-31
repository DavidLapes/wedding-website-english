npm run build
aws s3 sync build/ s3://en.terkaberedavida.cz
aws cloudfront create-invalidation --distribution-id ENEJ55V2QDAFM --paths "/*"
