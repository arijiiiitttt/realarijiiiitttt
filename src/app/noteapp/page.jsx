"use client"
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyNotesApp() {
  // Enhanced state with categories, tags, and pinned status
  const [notes, setNotes] = useState(() => {
    try {
      const savedNotes = localStorage.getItem('sticky-notes-app-notes');
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.error("Failed to parse notes from localStorage:", error);
      return []; 
    }
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [dragOverId, setDragOverId] = useState(null);
  const editingNoteId = useRef(null);
  const noteRefs = useRef({});

  // Save to localStorage with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        localStorage.setItem('sticky-notes-app-notes', JSON.stringify(notes));
      } catch (error) {
        console.error("Failed to save notes to localStorage:", error);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [notes]);

  // Enhanced add note with default category and tags
  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      content: '',
      color: 'bg-yellow-200',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      category: 'general',
      tags: [],
      isPinned: false,
      position: { x: 0, y: 0 }
    };
    setNotes([...notes, newNote]);
    editingNoteId.current = newNote.id;
  };

  // Update note content with timestamp
  const updateNoteContent = (id, newContent) => {
    setNotes(notes.map(note =>
      note.id === id ? { 
        ...note, 
        content: newContent,
        updatedAt: new Date().toISOString()
      } : note
    ));
  };

  // Update note color
  const updateNoteColor = (id, newColor) => {
    setNotes(notes.map(note =>
      note.id === id ? { 
        ...note, 
        color: newColor,
        updatedAt: new Date().toISOString()
      } : note
    ));
  };

  // Delete note with confirmation
  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  // Toggle pin status
  const togglePinNote = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { 
        ...note, 
        isPinned: !note.isPinned,
        updatedAt: new Date().toISOString()
      } : note
    ));
  };

  // Update category
  const updateNoteCategory = (id, newCategory) => {
    setNotes(notes.map(note =>
      note.id === id ? { 
        ...note, 
        category: newCategory,
        updatedAt: new Date().toISOString()
      } : note
    ));
  };

  // Add tag to note
  const addTagToNote = (id, tag) => {
    if (!tag.trim()) return;
    setNotes(notes.map(note =>
      note.id === id ? { 
        ...note, 
        tags: [...new Set([...note.tags, tag.trim()])],
        updatedAt: new Date().toISOString()
      } : note
    ));
  };

  // Remove tag from note
  const removeTagFromNote = (id, tagToRemove) => {
    setNotes(notes.map(note =>
      note.id === id ? { 
        ...note, 
        tags: note.tags.filter(tag => tag !== tagToRemove),
        updatedAt: new Date().toISOString()
      } : note
    ));
  };

  // Drag and drop handlers
  const handleDragStart = (id) => {
    setIsDragging(true);
    noteRefs.current[id].style.opacity = '0.4';
  };

  const handleDragEnd = (id) => {
    setIsDragging(false);
    noteRefs.current[id].style.opacity = '1';
    setDragOverId(null);
  };

  const handleDragOver = (e, id) => {
    e.preventDefault();
    setDragOverId(id);
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    
    if (draggedId !== targetId) {
      const draggedIndex = notes.findIndex(note => note.id === draggedId);
      const targetIndex = notes.findIndex(note => note.id === targetId);
      
      const newNotes = [...notes];
      const [removed] = newNotes.splice(draggedIndex, 1);
      newNotes.splice(targetIndex, 0, removed);
      
      setNotes(newNotes);
    }
    
    setDragOverId(null);
  };

  // Filter notes based on active filter and search query
  const filteredNotes = notes.filter(note => {
    const matchesFilter = activeFilter === 'all' || 
                         (activeFilter === 'pinned' && note.isPinned) || 
                         note.category === activeFilter;
    
    const matchesSearch = searchQuery === '' || 
                         note.content.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  // Available colors for notes
  const colors = [
    'bg-yellow-200', 'bg-blue-200', 'bg-green-200', 'bg-pink-200', 
    'bg-purple-200', 'bg-red-200', 'bg-indigo-200', 'bg-lime-200',
    'bg-amber-200', 'bg-cyan-200', 'bg-emerald-200', 'bg-fuchsia-200'
  ];

  // Available categories
  const categories = ['all', 'general', 'work', 'personal', 'ideas', 'shopping', 'pinned'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
            </svg>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
              Smart Notes
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search notes..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <button
              onClick={addNote}
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Note
            </button>
          </div>
        </header>

        {/* Categories filter */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full capitalize text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Notes' : category}
            </button>
          ))}
        </div>

        {/* Notes grid with drag and drop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredNotes.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No notes found</h3>
                <p className="mt-1 text-gray-500">
                  {searchQuery ? 'Try a different search term' : 'Create your first note by clicking "New Note"'}
                </p>
              </motion.div>
            ) : (
              filteredNotes.map((note) => (
                <motion.div
                  key={note.id}
                  ref={el => noteRefs.current[note.id] = el}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  draggable
                  onDragStart={() => handleDragStart(note.id)}
                  onDragEnd={() => handleDragEnd(note.id)}
                  onDragOver={(e) => handleDragOver(e, note.id)}
                  onDrop={(e) => handleDrop(e, note.id)}
                  className={`relative ${note.color} p-4 rounded-xl shadow-lg flex flex-col min-h-[200px] border border-gray-200 transition-all duration-200 ${
                    dragOverId === note.id ? 'ring-2 ring-blue-500' : ''
                  } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                >
                  {/* Pin button */}
                  <button
                    onClick={() => togglePinNote(note.id)}
                    className={`absolute top-2 right-2 p-1 rounded-full ${
                      note.isPinned ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-600'
                    }`}
                    title={note.isPinned ? 'Unpin note' : 'Pin note'}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </button>

                  {/* Note content */}
                  <textarea
                    className="w-full flex-grow bg-transparent resize-none outline-none text-gray-800 font-medium leading-relaxed placeholder-gray-600 focus:ring-0 focus:border-transparent"
                    placeholder="Write your note here..."
                    value={note.content}
                    onChange={(e) => updateNoteContent(note.id, e.target.value)}
                    autoFocus={editingNoteId.current === note.id}
                    onBlur={() => editingNoteId.current = null}
                  />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {note.tags.map(tag => (
                      <span 
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white bg-opacity-70 text-gray-800"
                      >
                        {tag}
                        <button 
                          onClick={() => removeTagFromNote(note.id, tag)}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      placeholder="+ Add tag"
                      className="text-xs px-1 py-0.5 w-16 bg-transparent outline-none"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          addTagToNote(note.id, e.target.value);
                          e.target.value = '';
                        }
                      }}
                    />
                  </div>

                  {/* Category */}
                  <select
                    value={note.category}
                    onChange={(e) => updateNoteCategory(note.id, e.target.value)}
                    className="mt-2 text-xs border border-gray-300 rounded px-2 py-1 bg-white bg-opacity-70 self-start"
                  >
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="ideas">Ideas</option>
                    <option value="shopping">Shopping</option>
                  </select>

                  {/* Controls */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-300">
                    {/* Color picker */}
                    <div className="flex flex-wrap gap-1">
                      {colors.slice(0, 6).map((colorClass) => (
                        <button
                          key={colorClass}
                          onClick={() => updateNoteColor(note.id, colorClass)}
                          className={`w-4 h-4 rounded-full border border-gray-300 ${colorClass} ${
                            note.color === colorClass ? 'ring-1 ring-offset-1 ring-blue-500' : ''
                          }`}
                          title={`Change to ${colorClass.split('-')[1]} note`}
                        ></button>
                      ))}
                    </div>

                    {/* Timestamp and delete */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        {new Date(note.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <button
                        onClick={() => deleteNote(note.id)}
                        className="p-1 text-gray-500 hover:text-red-500 transition-colors"
                        title="Delete Note"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm2 3a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zm2 3a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}