"# Noize Jeans Ltd - Website

This is the official website for Noize Jeans Ltd., a sustainable denim production company.

## Project Structure

The project has been organized into a clean, maintainable folder structure:

```
noize/
├── index.php                 # Homepage (root level)
├── includes/                 # Reusable components
│   ├── bootstrap.php         # Shared constants and view helpers
│   ├── header.php           # Header navigation and styles
│   └── footer.php           # Footer section
├── pages/                    # Individual page files
│   ├── about.php
│   ├── care.php
│   ├── contact.php
│   ├── customer.php
│   ├── design.php
│   ├── men.php
│   ├── production.php
│   ├── products.php
│   ├── sustainable.php
│   └── women.php
├── assets/                   # Static resources
│   └── images/              # All image files
│       ├── latest/
│       ├── men/
│       └── women/
├── document/                 # Documentation files
├── router.php               # Router for PHP's built-in development server
├── Dockerfile               # Docker configuration
└── docker-compose.yml       # Docker Compose setup
```

## Path Configuration

The project uses a `$base_path` variable to handle relative paths correctly:

- **Root level files** (index.php): Set `$base_path = ''`
- **Page files** (pages/*.php): Set `$base_path = '../'`

This ensures all links and resources load correctly regardless of the file location.

## Docker Setup

Run the application using Docker:

```bash
docker-compose up -d
```

The site will be accessible at `http://localhost:8080`

## Development

- All page files include the shared header and footer components.
- Use `asset_url()` and `e()` from `includes/bootstrap.php` whenever outputting dynamic paths or text.
- Product collections and galleries are data-driven to avoid repeated markup.

### PHP built-in server

For local development without Docker, start PHP with the included router so clean URLs such as `/about` and `/products` work:

```bash
php -S localhost:8080 router.php
```

Open `http://localhost:8080` in your browser.

## Features

- Responsive design with Bootstrap 4
- Mobile-friendly hamburger menu
- Image carousels and galleries
- Sustainable production information
- Product catalogs for men and women
- Company information and contact details
