<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::namespace('Notes')->group(function () {
    Route::prefix('notes')->group(function () {

        Route::post('/create-new-note', '\App\Http\Controllers\Notes\NoteController@store');

    }); 

    Route::prefix('subjects')->group(function () {

        Route::get('', '\App\Http\Controllers\Notes\SubjectController@index');
        
    }); 
});