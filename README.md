# Laravel Application

This project uses Laravel 10.10 and PHP 8.1, along with key packages like UI and Stripe for payments.

## Prerequisites

- PHP ^8.1
- Composer

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
Install Dependencies

composer install

Set Up Environment


cp .env.example .env
php artisan key:generate

Configure your .env file with database and other settings.

Run Migrations


php artisan migrate

Install Frontend Dependencies


Start the Server

    php artisan serve

    Access your application at http://localhost:8000.

Packages Included

    Laravel Framework ^10.10
    Laravel UI ^4.2
    Stripe PHP ^15.2
