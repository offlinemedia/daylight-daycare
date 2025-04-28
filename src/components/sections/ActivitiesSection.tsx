
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Music, Book, Palette, Users, Heart } from "lucide-react";

const activitiesData = {
  physical: [
    { name: "Morning Stretching", time: "9:00 AM", description: "Gentle stretches to improve flexibility and start the day right." },
    { name: "Chair Yoga", time: "11:00 AM", description: "Adapted yoga poses that can be done while seated for improved mobility." },
    { name: "Walking Club", time: "2:00 PM", description: "Outdoor walks in our garden paths weather permitting." },
    { name: "Dance Therapy", time: "3:30 PM", description: "Fun, low-impact dance movements to favorite music." }
  ],
  creative: [
    { name: "Art Workshop", time: "10:00 AM", description: "Explore different artistic mediums with our art therapist." },
    { name: "Music Appreciation", time: "1:00 PM", description: "Listen to and discuss different music genres and compositions." },
    { name: "Craft Corner", time: "3:00 PM", description: "Create beautiful handmade crafts to keep or give as gifts." },
    { name: "Photography Club", time: "4:00 PM", description: "Learn photography basics and capture beautiful moments." }
  ],
  cognitive: [
    { name: "Brain Games", time: "9:30 AM", description: "Puzzles and games designed to keep the mind sharp." },
    { name: "Book Club", time: "11:30 AM", description: "Group reading and discussion of selected books." },
    { name: "Memory Enhancement", time: "2:30 PM", description: "Activities specifically designed to support cognitive function." },
    { name: "Current Events", time: "4:30 PM", description: "Discussions about local and world events." }
  ],
  social: [
    { name: "Coffee & Conversation", time: "8:30 AM", description: "Start the day with friendly conversation and coffee." },
    { name: "Group Games", time: "10:30 AM", description: "Fun, interactive games that encourage socialization." },
    { name: "Lunch Buddies", time: "12:00 PM", description: "Themed lunch events to encourage new friendships." },
    { name: "Community Service", time: "3:00 PM", description: "Projects that give back to the local community." }
  ],
  wellness: [
    { name: "Meditation", time: "9:00 AM", description: "Guided meditation for mental clarity and relaxation." },
    { name: "Nutrition Talk", time: "11:00 AM", description: "Information on healthy eating for seniors." },
    { name: "Aromatherapy", time: "1:30 PM", description: "Experience the benefits of essential oils." },
    { name: "Relaxation Techniques", time: "4:00 PM", description: "Learn stress management and relaxation methods." }
  ]
};

const ActivityCard = ({ name, time, description }: { name: string; time: string; description: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-bold text-lg">{name}</h4>
      <span className="bg-primary/10 text-primary text-sm px-2 py-1 rounded">{time}</span>
    </div>
    <p className="text-neutral-dark text-sm">{description}</p>
  </div>
);

const ActivitiesSection = () => {
  return (
    <section id="activities" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold">Daily Activities</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Engaging Programs for Every Interest
          </h2>
          <p className="text-neutral-dark max-w-3xl mx-auto">
            Our carefully designed activities program promotes physical health, cognitive stimulation, creativity, and social connection.
          </p>
        </div>
        
        <Tabs defaultValue="physical" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto mb-8">
            <TabsTrigger value="physical" className="flex items-center gap-2 py-3">
              <Heart size={18} />
              <span className="hidden sm:inline">Physical</span>
            </TabsTrigger>
            <TabsTrigger value="creative" className="flex items-center gap-2 py-3">
              <Palette size={18} />
              <span className="hidden sm:inline">Creative</span>
            </TabsTrigger>
            <TabsTrigger value="cognitive" className="flex items-center gap-2 py-3">
              <Book size={18} />
              <span className="hidden sm:inline">Cognitive</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2 py-3">
              <Users size={18} />
              <span className="hidden sm:inline">Social</span>
            </TabsTrigger>
            <TabsTrigger value="wellness" className="flex items-center gap-2 py-3">
              <Music size={18} />
              <span className="hidden sm:inline">Wellness</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="relative p-6 bg-neutral-light/50 rounded-lg border border-neutral-light">
            <TabsContent value="physical" className="space-y-4">
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center">
                <Heart className="mr-2 text-primary" size={24} />
                Physical Activities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activitiesData.physical.map((activity, index) => (
                  <ActivityCard 
                    key={index}
                    name={activity.name}
                    time={activity.time}
                    description={activity.description}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="creative" className="space-y-4">
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center">
                <Palette className="mr-2 text-primary" size={24} />
                Creative Activities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activitiesData.creative.map((activity, index) => (
                  <ActivityCard 
                    key={index}
                    name={activity.name}
                    time={activity.time}
                    description={activity.description}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cognitive" className="space-y-4">
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center">
                <Book className="mr-2 text-primary" size={24} />
                Cognitive Activities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activitiesData.cognitive.map((activity, index) => (
                  <ActivityCard 
                    key={index}
                    name={activity.name}
                    time={activity.time}
                    description={activity.description}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="space-y-4">
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center">
                <Users className="mr-2 text-primary" size={24} />
                Social Activities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activitiesData.social.map((activity, index) => (
                  <ActivityCard 
                    key={index}
                    name={activity.name}
                    time={activity.time}
                    description={activity.description}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="wellness" className="space-y-4">
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center">
                <Music className="mr-2 text-primary" size={24} />
                Wellness Activities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activitiesData.wellness.map((activity, index) => (
                  <ActivityCard 
                    key={index}
                    name={activity.name}
                    time={activity.time}
                    description={activity.description}
                  />
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-dark mb-4">
            Our activity calendar changes monthly to keep the experience fresh and engaging.
            New members are welcome to suggest activities they would enjoy!
          </p>
          <div className="inline-flex items-center">
            <Calendar className="mr-2 text-primary" size={20} />
            <a href="#" className="text-primary font-semibold hover:underline">Download Full Activity Calendar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
