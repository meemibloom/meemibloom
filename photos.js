/* ------------------------------------------------------------------
   MEEMI BLOOM — PHOTO LIST

   This one file controls both the homepage carousel and the Gallery page.

   TO ADD A NEW BOUQUET:
     1. Put the photo in  assets/photos/
     2. Add one line to the top of the list below, like this:

          { src: "assets/photos/bouquet-06.jpg", title: "Yellow roses" },

     3. Save. That's it — it appears on the Gallery page and, because it
        is at the top, in "Made by hand" on the homepage too.

   RULES
     - Newest photo goes at the TOP. The homepage shows the first six.
     - Keep the commas, the quote marks and the curly brackets exactly as
       they are. The last line before  ];  may keep its comma.
     - File names: no spaces, no capital letters. bouquet-07.jpg is fine,
       "My Bouquet.JPG" is not.
     - Photos work best portrait, around 900 x 1200 pixels, under 250 KB.
------------------------------------------------------------------ */

window.MEEMI_PHOTOS = [
  { src: "assets/photos/bouquet-07.jpg", title: "Black, grey and white lilies" },
  { src: "assets/photos/bouquet-06.jpg", title: "Sky blue and gold" },
  { src: "assets/photos/bouquet-01.jpg", title: "Red tulips and amaryllis" },
  { src: "assets/photos/bouquet-02.jpg", title: "Pink lilies" },
  { src: "assets/photos/bouquet-03.jpg", title: "Pink tulips" },
  { src: "assets/photos/bouquet-04.jpg", title: "Rust and cream" },
  { src: "assets/photos/bouquet-05.jpg", title: "Teal and white" },
];
