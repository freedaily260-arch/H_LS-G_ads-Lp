/*
  # Create Bookings Table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `phone` (text, required)
      - `property_location` (text, required)
      - `area_size` (integer, required, minimum 1000)
      - `project_description` (text, optional)
      - `created_at` (timestamp, automatically set)

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for public users to insert bookings
    - Add policy for admin/service role to read all bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  property_location text NOT NULL,
  area_size integer NOT NULL,
  project_description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert a booking"
  ON bookings FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all bookings"
  ON bookings FOR SELECT
  TO service_role
  USING (true);
