# Elämyskalenteri 
### Running the app:
Make sure you have Node version >= 16
- `npm run dev` runs dev build with hot reload
- `npm run build && npm run start` runs production build

## WordPress:
Wordpress is found at 13.49.238.101:8080.   
If the page won't load, its possible that AWS Security Group settings do not allow access to the port.
If so, navigate to EC2, find the instance's security group and either add your own IP to allow access
to port 8080 or just allow anywhere-ipv4 to port 8080.

## Data flow explained:
![Data flow](dataflow.png)

## Deploying to AWS
```
docker build -t elamyskalenteri-nextjs .
aws lightsail push-container-image --region eu-north-1 --service-name elamyskalenteri-container-service --label elamyskalenteri-nextjs --image elamyskalenteri-nextjs:latest
```