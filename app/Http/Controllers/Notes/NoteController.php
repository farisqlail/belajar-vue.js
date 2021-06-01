<?php

namespace App\Http\Controllers\Notes;

use App\Models\Note;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function store(Request $request)
    {
        request()->validate([
            'subject' => 'required|nimeric',
            'title' => 'required|min:3',
            'description' => 'required'
        ]);

        $note = Note::create([
            'subject_id' => request('subject'),
            'title' => request('title'),
            'slug' => \Str::slug(request('title')),
            'description' => request('description')
        ]); 

        return response()->json([
            'message' => 'Note berhasil dibuat',
            'notes' => $note,
        ]);
    }

}
