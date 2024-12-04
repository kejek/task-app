<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $totalPendingTodos = Todo::query()
            ->where('status', 'pending')
            ->count();
        $myPendingTodos = Todo::query()
            ->where('status', 'pending')
            ->where('assigned_user_id', $user->id)
            ->count();


        $totalProgressTodos = Todo::query()
            ->where('status', 'in_progress')
            ->count();
        $myProgressTodos = Todo::query()
            ->where('status', 'in_progress')
            ->where('assigned_user_id', $user->id)
            ->count();


        $totalCompletedTodos = Todo::query()
            ->where('status', 'completed')
            ->count();
        $myCompletedTodos = Todo::query()
            ->where('status', 'completed')
            ->where('assigned_user_id', $user->id)
            ->count();

        $activeTodos = Todo::query()
            ->whereIn('status', ['pending', 'in_progress'])
            ->where('assigned_user_id', $user->id)
            ->limit(10)
            ->get();
        $activeTodos = TodoResource::collection($activeTodos);
        return inertia(
            'Dashboard',
            compact(
                'totalPendingTodos',
                'myPendingTodos',
                'totalProgressTodos',
                'myProgressTodos',
                'totalCompletedTodos',
                'myCompletedTodos',
                'activeTodos'
            )
        );
    }
}