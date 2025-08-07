import { createClient } from "@supabase/supabase-js";

const URL = import.meta.env.VITE_SUPA_URL;
const API_KEY = import.meta.env.VITE_SUPA_API_KEY;

export const supabase = createClient(URL, API_KEY);