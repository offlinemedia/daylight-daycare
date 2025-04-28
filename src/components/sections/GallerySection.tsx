
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Senior art class",
    category: "Activities"
  },
  {
    src: "https://images.unsplash.com/photo-1577368211130-4baa6b8ea3bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Seniors enjoying a meal together",
    category: "Dining"
  },
  {
    src: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Group laughing together",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    alt: "Senior yoga session",
    category: "Fitness"
  },
  {
    src: "https://images.unsplash.com/photo-1529333166437-7cea30cc9112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    alt: "Music therapy session",
    category: "Activities"
  },
  {
    src: "https://images.unsplash.com/photo-1574108233269-86d1199d28de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1437&q=80",
    alt: "Reading corner",
    category: "Facilities"
  },
  {
    src: "https://images.unsplash.com/photo-1595178650290-c7674453c881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Gardening activity",
    category: "Activities"
  },
  {
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
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
            Life at Golden Years Oasis
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
