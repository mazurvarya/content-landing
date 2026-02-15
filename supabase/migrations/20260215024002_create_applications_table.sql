/*
  # Create applications table

  1. New Tables
    - `applications`
      - `id` (uuid, primary key) - Unique identifier for each application
      - `name` (text) - Applicant's full name
      - `email` (text) - Applicant's email address
      - `phone` (text) - Applicant's phone number
      - `company` (text, optional) - Company name
      - `service` (text) - Service interested in (SEO, SMM, Content Marketing, etc.)
      - `message` (text, optional) - Additional message or details
      - `created_at` (timestamptz) - Timestamp of submission
      
  2. Security
    - Enable RLS on `applications` table
    - Add policy for inserting applications (public access for form submission)
    - Add policy for authenticated users to read applications
*/

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text DEFAULT '',
  service text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit applications"
  ON applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (true);