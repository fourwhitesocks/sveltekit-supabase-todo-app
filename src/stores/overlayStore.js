import { writable } from "svelte/store";


//this is one piece of 'state' so we can access it and update it from diff places
export const isOverlayOpen = writable(false);
