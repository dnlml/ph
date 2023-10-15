import { writable } from 'svelte/store';

export const showingTitle = writable('');

export const nextPage = writable('');

export const loaded = writable(false);
