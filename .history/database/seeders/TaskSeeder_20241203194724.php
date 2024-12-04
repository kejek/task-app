<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user1 = User::factory()->create([
            'name' => 'John Doe',
            'email' => 'test1@test.com',
            'password' => Hash::make('password'),
        ]);

        $user2 = User::factory()->create([
            'name' => 'Jane Doe',
            'email' => 'test2@test.com',
            'password' => Hash::make('password'),
        ]);

        $user3 = User::factory()->create([
            'name' => 'Jimmy Doe',
            'email' => 'test3@test.com',
            'password' => Hash::make('password'),
        ]);
    }
}
