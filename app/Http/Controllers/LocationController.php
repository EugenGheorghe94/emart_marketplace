<?php
// app/Http/Controllers/LocationController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class LocationController extends Controller
{
    public function pickupPlaceholder(Request $request)
    {
        $ip = $request->ip();

        // Cache per IP for a day so you're not hitting the API on every page load
        $location = Cache::remember("geo_city_{$ip}", now()->addDay(), function () use ($ip) {
            try {
                $response = Http::timeout(3)->get("https://ipapi.co/{$ip}/json/");

                if ($response->successful()) {
                    return $response->json('city');
                }
            } catch (\Exception $e) {
                report($e);
            }

            return null;
        });

        $location = $location ?? 'Ploiesti';

        return response()->json($location);
    }
}