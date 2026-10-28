<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function showRating(Request $request, $EAN_13)
    {
        $rating = Review::where('ean_13', $EAN_13)->get();

        return response()->json($rating);
    }

    public function submitReview(Request $request)
    {
        $review = Review::create([
            'user_id'       => $request->user_id,
            'user_name'     => $request->user_name,
            'ean_13'        => $request->ean_13,
            'rating'        => $request->rating,
            'title'         => $request->title,
            'description'   => $request->description,
            'likes'         => $request->likes,
        ]);

        return response()->json($review);
    }

    public function getClientReviews()
    {
        $reviews = Review::where('user_id', auth()->id())
            ->select('id', 'title', 'rating', 'description', 'created_at', 'user_name', 'likes', 'ean_13')
            ->with('productInfo:id,product_sku,ean_13,title,thumbnail')
            ->orderBy('created_at', 'desc')
            ->get();

        return response($reviews);
    }
}
