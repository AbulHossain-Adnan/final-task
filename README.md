# Laravel Application

This project uses Laravel 10.10 and PHP 8.1, along with key packages like Sanctum, UI, Spatie packages, and Stripe for payments.

## Prerequisites

- PHP ^8.1
- Composer

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
Install Dependencies

sh

composer install

Set Up Environment

sh

cp .env.example .env
php artisan key:generate

Configure your .env file with database and other settings.

Run Migrations

sh

php artisan migrate

Install Frontend Dependencies

sh

npm install
npm run dev

Start the Server

sh

    php artisan serve

    Access your application at http://localhost:8000.

Packages Included

    Laravel Framework ^10.10
    Laravel Sanctum ^3.2
    Laravel UI ^4.2
    Spatie DB Dumper ^3.6
    Spatie Laravel Backup ^8.8
    Spatie Laravel Permission ^5.11
    Stripe PHP ^15.2

Running Tests

sh

php artisan test
