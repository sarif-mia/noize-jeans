"# Noize Jeans Ltd - Website

This is the official website for Noize Jeans Ltd., a sustainable denim production company.

## Project Structure

The project has been organized into a clean, maintainable folder structure:

```
noize/
├── index.php                 # Homepage (root level)
├── includes/                 # Reusable components
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

- All page files should include header/footer using the pattern shown in existing files
- Images should be referenced using the `$base_path` variable: `<?php echo $base_path; ?>assets/images/filename.jpg`
- Navigation links in header.php automatically adjust based on the `$base_path` variable

## Features

- Responsive design with Bootstrap 4
- Mobile-friendly hamburger menu
- Image carousels and galleries
- Sustainable production information
- Product catalogs for men and women
- Company information and contact details
