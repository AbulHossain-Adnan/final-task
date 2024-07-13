<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        (new ImportDatabaseSeeder())->run();



//        $permissions = [
//            'shop-list',
//            'shop-edit',
//            'shop-view',
//            'shop-delete',
//        ];
//
//        foreach ($permissions as $permission){
//            \Spatie\Permission\Models\Permission::updateOrCreate(['name' => $permission]);
//        }
//        $user = User::find(1);
//        $user->assignRole(1);
//        Role::create(['name' => "Super Admin"]);
//        User::create([
//           'name' => 'Sharifur Rahman',
//           'email' => 'dvrobin4@gmail.com',
//           'password' => Hash::make(12345678)
//        ]);

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
