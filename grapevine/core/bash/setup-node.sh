#! /bin/sh
sudo apt update -y
sudo apt upgrade -y

# Add Docker Support
sudo apt install docker

# Add Let's Encrypt SSL Certificate Support
sudo apt install certbot python3-certbot-dns-cloudflare
sudo certbot --dns-cloudflare -d <domain> --non-interactive --agree-tos -m <email>