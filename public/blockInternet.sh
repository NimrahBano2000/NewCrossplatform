#!/bin/sh


# Setting default filter policy

# 
# sudo iptables -P INPUT  DROP
# sudo iptables -P OUTPUT  DROP

# sudo iptables -A INPUT 1 -s 188.114.96.7 -j ACCEPT
# sudo iptables -A OUTPUT  -d 188.114.96.7 -j ACCEPT

sudo apt install ufw -y
sudo systemctl start ufw
sudo ufw enable
sudo ufw allow ssh 
sudo ufw default deny outgoing
sudo ufw default deny incoming

sudo ufw allow out to 188.114.97.7
sudo ufw allow from 188.114.97.7
sudo ufw allow out to 188.114.96.7
sudo ufw allow from 188.114.97.7
sudo ufw allow in from 188.114.97.7
sudo ufw allow in from 188.114.97.7


sudo ufw allow out to 8.8.8.8
sudo ufw allow from 8.8.8.8
sudo ufw allow out to 8.8.8.8
sudo ufw allow from 8.8.8.8
sudo ufw allow in from 8.8.8.8
sudo ufw allow in from 8.8.8.8

sudo ufw allow out to 8.8.4.4
sudo ufw allow from 8.8.4.4
sudo ufw allow out to 8.8.4.4
sudo ufw allow from 8.8.4.4
sudo ufw allow in from 8.8.4.4
sudo ufw allow in from 8.8.4.4



sudo ufw allow dns
sudo ufw allow 53/tcp
sudo ufw allow 53/udp
sudo ufw allow 5353/tcp
sudo ufw allow 5353/udp

sudo iptables -A INPUT -p udp --dport 53 -m string --domain google.com -j ACCEPT
sudo iptables -A OUTPUT -p udp --dport 53 -m string --domain google.com -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 53 -m string --domain google.com -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 53 -m string --domain google.com -j ACCEPT
sudo iptables -A INPUT -p udp --dport 443 -m string --domain google.com -j ACCEPT
sudo iptables -A OUTPUT -p udp --dport 443 -m string --domain google.com -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -m string --domain google.com -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 443 -m string --domain google.com -j ACCEPT
sudo iptables -A INPUT -p udp --dport 80 -m string --domain google.com -j ACCEPT
sudo iptables -A OUTPUT -p udp --dport 80 -m string --domain google.com -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -m string --domain google.com -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 80 -m string --domain google.com -j ACCEPT
sudo iptables -A INPUT -p udp --dport 5353 -m string --domain google.com -j ACCEPT
sudo iptables -A OUTPUT -p udp --dport 5353 -m string --domain google.com -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 5353 -m string --domain google.com -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 5353 -m string --domain google.com -j ACCEPT




sudo iptables -A INPUT -p udp --dport 53 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A OUTPUT -p udp --dport 53 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 53 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 53 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A INPUT -p udp --dport 443 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A OUTPUT -p udp --dport 443 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 443 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A INPUT -p udp --dport 80 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A OUTPUT -p udp --dport 80 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 80 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A INPUT -p udp --dport 5353 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A OUTPUT -p udp --dport 5353 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 5353 -m string --domain atomapi.com -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 5353 -m string --domain atomapi.com -j ACCEPT


# sudo iptables -A OUTPUT -p tcp -d www.atomapi.com --dport 443 -j ACCEPT
# sudo iptables -A INPUT -p tcp -s www.atomapi.com --dport 443 -j ACCEPT
# sudo iptables -A OUTPUT -p tcp -d www.atomapi.com --dport 53 -j ACCEPT
# sudo iptables -A INPUT -p tcp -s www.atomapi.com --dport 53 -j ACCEPT
# sudo iptables -A OUTPUT -p tcp -d www.atomapi.com --dport 5353 -j ACCEPT
# sudo iptables -A INPUT -p tcp -s www.atomapi.com --dport 5353 -j ACCEPT
# sudo iptables -A OUTPUT -p tcp -d www.atomapi.com --dport 80 -j ACCEPT
# sudo iptables -A INPUT -p tcp -s www.atomapi.com --dport 80 -j ACCEPT

# sudo iptables -A INPUT -p tcp -s www.youtube.com --dport 443 -j ACCEPT
# sudo iptables -A OUTPUT -p tcp -d www.youtube.com --dport 443 -j ACCEPT
# sudo iptables -A INPUT -p tcp -s www.youtube.com --dport 53 -j ACCEPT

# sudo iptables -A OUTPUT -p tcp -d www.youtube.com --dport 53 -j ACCEPT
# sudo iptables -A INPUT -p tcp -s www.youtube.com --dport 5353 -j ACCEPT
# sudo iptables -A OUTPUT -p tcp -d www.youtube.com --dport 5353 -j ACCEPT
# sudo iptables -A INPUT -p tcp -s www.youtube.com --dport 80 -j ACCEPT
# sudo iptables -A OUTPUT -p tcp -d www.youtube.com --dport 80 -j ACCEPT

# sudo iptables -A INPUT -p UDP -s www.youtube.com --dport 443 -j ACCEPT
# sudo iptables -A OUTPUT -p UDP -d www.youtube.com --dport 443 -j ACCEPT
# sudo iptables -A INPUT -p UDP -s www.youtube.com --dport 53 -j ACCEPT
# sudo iptables -A OUTPUT -p UDP -d www.youtube.com --dport 53 -j ACCEPT
# sudo iptables -A INPUT -p UDP -s www.youtube.com --dport 5353 -j ACCEPT
# sudo iptables -A OUTPUT -p UDP -d www.youtube.com --dport 5353 -j ACCEPT
# sudo iptables -A INPUT -p UDP -s www.youtube.com --dport 80 -j ACCEPT
# sudo iptables -A OUTPUT -p UDP -d www.youtube.com --dport 80 -j ACCEPT


# sudo ufw allow out to 188.114.97.7 port 80
# sudo ufw allow from 188.114.97.7 port 80
# sudo ufw allow in from 188.114.97.7 port 80
# sudo ufw allow from 192.168.10.0/24 to 192.168.10.1 port 53 proto tcp
# sudo ufw allow from 192.168.10.0/24 to 192.168.10.1 port 53 proto udp
# sudo ufw allow 5353/tcp
# sudo ufw allow 5353/udp
# sudo ufw allow 53/tcp
# sudo ufw allow 53/udp
# sudo ufw allow from 202.69.48.99 to any port 53
# sudo ufw allow TCP/UDP IN/OUT to 188.114.97.7 or 188.114.96.7
# sudo ufw allow HTTP/HTTPS out to 188.114.97.7
# sudo ufw allow HTTP/HTTPS from 188.114.97.7
# sudo ufw allow HTTP/HTTPS in from 188.114.97.7