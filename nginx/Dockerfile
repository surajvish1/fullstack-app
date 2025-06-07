# Use the official NGINX image
FROM nginx:alpine

# Copy the React build files into NGINX's default public directory
COPY ./build /usr/share/nginx/html

# Replace the default full NGINX config with your custom one
COPY nginx.conf /etc/nginx/nginx.conf

