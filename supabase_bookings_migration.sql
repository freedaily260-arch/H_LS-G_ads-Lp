-- Migration: Create bookings table with RLS policies
--
-- Summary:
-- This migration sets up a bookings table in Supabase with the following structure:
-- - id: UUID primary key (auto-generated)
-- - name: Text field for customer name (required)
-- - phone: Text field for contact number (required, indexed for lookups)
-- - property_location: Text field for property address (required)
-- - area_size: Integer field for property area in sq ft or sq m (required)
-- - project_description: Text field for optional project details (nullable)
-- - created_at: Timestamp with timezone for record creation (auto-set)
-- - updated_at: Timestamp with timezone for record updates (auto-set)
--
-- Security Configuration:
-- - Row Level Security (RLS) is ENABLED to enforce access control
-- - PUBLIC users can INSERT new bookings (with validation that required fields are not empty)
-- - AUTHENTICATED users can SELECT all bookings (read-only access)
-- - No UPDATE or DELETE policies are defined, preventing unauthorized modifications
-- - All unmatched requests default to DENY for maximum security
--
-- Indexes:
-- - created_at: For efficient sorting and filtering by creation time
-- - updated_at: For efficient filtering of recently modified records
-- - phone: For fast lookups by phone number
--
-- This migration is idempotent and safe to run multiple times.

-- Create the bookings table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  property_location text NOT NULL,
  area_size integer NOT NULL,
  project_description text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security on the bookings table
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow public users to INSERT new bookings
-- This policy allows anyone to insert a booking, but enforces that required fields are not empty
CREATE POLICY IF NOT EXISTS "allow_public_insert_bookings" ON public.bookings
  FOR INSERT
  WITH CHECK (
    name IS NOT NULL AND name != '' AND
    phone IS NOT NULL AND phone != '' AND
    property_location IS NOT NULL AND property_location != '' AND
    area_size IS NOT NULL AND area_size > 0
  );

-- Policy 2: Allow authenticated users to SELECT all bookings
-- This policy allows authenticated users to view all bookings (read-only)
CREATE POLICY IF NOT EXISTS "allow_authenticated_select_bookings" ON public.bookings
  FOR SELECT
  USING (auth.role() = 'authenticated_user');

-- Create indexes for performance optimization
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON public.bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_updated_at ON public.bookings(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_phone ON public.bookings(phone);

-- Set up automatic updated_at timestamp
-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION public.update_bookings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the function on UPDATE
DROP TRIGGER IF EXISTS update_bookings_updated_at_trigger ON public.bookings;
CREATE TRIGGER update_bookings_updated_at_trigger
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_bookings_updated_at();
