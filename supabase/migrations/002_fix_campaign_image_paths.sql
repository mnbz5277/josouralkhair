UPDATE campaigns
SET image_url = CASE image_url
      WHEN '/images/medical-aid.jpg' THEN '/images/Relief.jpg'
      WHEN '/images/food-baskets.jpg' THEN '/images/don.jpeg'
      WHEN '/images/shelter.jpg' THEN '/images/gaza-hero 2.jpg'
    END,
    updated_at = timezone('utc'::text, now())
WHERE image_url IN (
  '/images/medical-aid.jpg',
  '/images/food-baskets.jpg',
  '/images/shelter.jpg'
);
