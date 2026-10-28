<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Favorite;

class FavoriteController extends Controller
{

    // Add prduct to favorites
    public function addFavorite(Request $request)
    {
        $added = Favorite::create([
            'user_id' => $request->user_id,
            'ean_13' => $request->ean_13
        ]);

        return response()->json($added);
    }

    // Remove product from favorites
    public function removeFavorite(Request $request)
    {
        $removed = Favorite::where([
            'user_id' => $request->user_id,
            'ean_13' => $request->ean_13
            ])->delete();

        return response()->json($removed);               
    }


    // Get number of favorites
    public function countFavorite()
    {
        $favorites = Favorite::where('user_id', Auth::id())->get();

        return response()->json(sizeof($favorites));
    }
}
