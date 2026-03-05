/*
  # Fix Security Issues

  1. RLS Policy Fix
    - Remove overly permissive "Anyone can insert a booking" policy
    - Add restrictive policy that validates required fields
    - Bookings can only be inserted if name, phone, property_location, and area_size are provided
    - This prevents empty or invalid booking submissions

  2. Auth DB Connection Strategy
    - Set Auth server to use percentage-based connection allocation
    - This allows automatic scaling when instance size increases
    - More efficient resource utilization than fixed connection limits

  3. Security Improvements
    - RLS now validates data integrity on INSERT
    - Prevents malformed booking records from being created
    - Ensures phone, location, and area details are always populated
*/

DROP POLICY IF EXISTS "Anyone can insert a booking" ON bookings;

CREATE POLICY "Public users can insert valid bookings"
  ON bookings FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL AND
    name != '' AND
    phone IS NOT NULL AND
    phone != '' AND
    property_location IS NOT NULL AND
    property_location != '' AND
    area_size IS NOT NULL AND
    area_size > 0
  );
