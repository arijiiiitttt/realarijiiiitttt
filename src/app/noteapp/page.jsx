"use client"
import React, { useState, useRef, useEffect } from 'react';
export default function page() {
  const [notes, setNotes] = useState(() => {
    try {
      const savedNotes = localStorage.getItem('sticky-notes-app-notes');
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.error("Failed to parse notes from localStorage:", error);
      return []; 
    }
  });

  const editingNoteId = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem('sticky-notes-app-notes', JSON.stringify(notes));
    } catch (error) {
      console.error("Failed to save notes to localStorage:", error);
    }
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: Date.now(), 
      content: '',     
      color: 'bg-yellow-200', 
    };
    setNotes([...notes, newNote]); 
    editingNoteId.current = newNote.id; 
  };

  const updateNoteContent = (id, newContent) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, content: newContent } : note
    ));
  };

  // Function to update the color of a note
  const updateNoteColor = (id, newColor) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, color: newColor } : note
    ));
  };

  // Function to delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Handle content changes in the editable note
  const handleContentChange = (id, e) => {
    updateNoteContent(id, e.target.value);
  };

  // Available colors for notes
  const colors = [
    'bg-yellow-200', 'bg-blue-200', 'bg-green-200', 'bg-pink-200', 'bg-purple-200', 'bg-red-200', 'bg-indigo-200', 'bg-lime-200'
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 font-sans flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 sm:mb-8 mt-4 text-center">
        Sticky Notes App
      </h1>

      {/* Button to add a new note */}
      <button
        onClick={addNote}
        className="mb-8 px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 text-base sm:text-lg"
      >
        Add New Note
      </button>

      {/* Grid container for notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 w-full max-w-7xl px-2 sm:px-0">
        {notes.length === 0 && (
          <p className="col-span-full text-center text-gray-600 text-base sm:text-lg">
            No notes yet! Click "Add New Note" to get started.
          </p>
        )}
        {notes.map((note) => (
          <div
            key={note.id}
            className={`${note.color} p-4 sm:p-5 rounded-xl shadow-lg flex flex-col justify-between min-h-[180px] sm:min-h-[200px] border border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-103`}
          >
            {/* Note content area */}
            <textarea
              className="w-full h-full bg-transparent resize-none outline-none text-gray-800 text-base sm:text-lg font-medium leading-relaxed placeholder-gray-600 focus:ring-0 focus:border-transparent"
              placeholder="Write your note here..."
              value={note.content}
              onChange={(e) => handleContentChange(note.id, e)}
              autoFocus={editingNoteId.current === note.id} // Auto-focus new notes
              onBlur={() => editingNoteId.current = null} // Reset editing state on blur
            />

            {/* Controls for color and delete */}
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-300">
              {/* Color picker */}
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {colors.map((colorClass) => (
                  <button
                    key={colorClass}
                    onClick={() => updateNoteColor(note.id, colorClass)}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-300 ${colorClass} ${note.color === colorClass ? 'ring-2 ring-offset-1 ring-blue-500' : ''} transition-all duration-200 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1`}
                    title={`Change to ${colorClass.split('-')[1]} note`}
                  ></button>
                ))}
              </div>

              {/* Delete button */}
              <button
                onClick={() => deleteNote(note.id)}
                className="p-1 sm:p-2 bg-red-500 text-white rounded-full shadow-sm hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
                title="Delete Note"
              >
                {/* SVG for trash icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm2 3a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zm2 3a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
