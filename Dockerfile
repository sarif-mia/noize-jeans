FROM php:8.3-apache

# Enable useful Apache modules
RUN a2enmod rewrite

# Copy application source into the Apache document root
COPY . /var/www/html/

# Set permissions for the web user
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80

# Apache is the default CMD in this image