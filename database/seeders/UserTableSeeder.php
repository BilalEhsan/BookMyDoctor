<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "name" => "Admin Jerry",
            "email" => "admin@bmd.com",
            "password" => bcrypt("password"),
            "role"  => "admin"
        ]);

        User::create([
            "name" => "Client Mathew",
            "email" => "client@bmd.com",
            "password" => bcrypt("password"),
            "role"  => "client"
        ]);

        User::create([
            "name" => "Doctor William",
            "email" => "doctor@bmd.com",
            "password" => bcrypt("password"),
            "role"  => "doctor"
        ]);

        // seed doctors
        User::factory()->count(20)->create();
    }
}
