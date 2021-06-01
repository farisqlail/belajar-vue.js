<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::prefix('posts')->namespace('Posts')->group(function () {

    Route::post('/create-new-post', '\App\Http\Controllers\Posts\PostController@store');

});