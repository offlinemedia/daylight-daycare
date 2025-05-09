
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    src: "/images/gallery/galary_artclass_1.jpg",
    alt: "Senior art class",
    category: "Activities"
  },
  {
    src: "/images/gallery/galary_eating_1.jpg",
    alt: "Seniors enjoying a meal together",
    category: "Dining"
  },
  {
    src: "/images/gallery/galary_group_fun.jpg",
    alt: "Group laughing together",
    category: "Community"
  },
  {
    src: "/images/gallery/galary_yoga_1.jpg",
    alt: "Senior yoga session",
    category: "Fitness"
  },
  {
    src: "/images/gallery/galary_music_1.jpg",
    alt: "Music therapy session",
    category: "Activities"
  },
  {
    src: "/images/gallery/galary_reading_1.jpg",
    alt: "Reading corner",
    category: "Facilities"
  },
  {
    src: "/images/gallery/galary_gardening_1.jpg",
    alt: "Gardening activity",
    category: "Activities"
  },
  {
    src: "/images/gallery/galary_game_1.jpg",
    alt: "Game time",
    category: "Community"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold">Photo Gallery</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Life at Daylight Adult Daycare
          </h2>
          <p className="text-neutral-dark max-w-3xl mx-auto">
            Take a glimpse into our vibrant community and the engaging activities we offer.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end justify-start p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
