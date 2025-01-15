#!/bin/bash
pm2 stop components-library
cd /var/www/components-library
git pull           
pm2 start components-library  