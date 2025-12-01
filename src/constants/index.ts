import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Author, ShortPost } from "../types";

export const AUTHORS: Record<string, Author> = {
  sarahJenkins: {
    id: "a1",
    name: "Sarah Jenkins",
    slug: "sarah-jenkins",
    profile_image: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "Award-winning environmental journalist with over 15 years of experience covering climate change. She is dedicated to bringing complex scientific issues to a broader audience through compelling storytelling.",
  },
  davidChen: {
    id: "a2",
    name: "David Chen",
    slug: "david-chen",
    profile_image: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Futurist and technology analyst specializing in AI and emerging digital trends. David explores the intersection of humanity and machines, offering deep insights into how technology shapes our future.",
  },
  emilyClark: {
    id: "a3",
    name: "Emily Clark",
    slug: "emily-clark",
    profile_image: null,
    bio: "Passionate science reporter focusing on marine biology and ocean conservation. Emily documents coral reef restoration and plastic pollution solutions, believing in science communication to inspire action.",
  },
  marcusVinyl: {
    id: "a4",
    name: "Marcus Vinyl",
    slug: "marcus-vinyl",
    profile_image: "https://randomuser.me/api/portraits/men/4.jpg",
    bio: "Renowned music historian and vinyl collector with encyclopedic knowledge of 20th-century music. Marcus curates rare records and writes about the cultural impact of analog sound and obscure tracks.",
  },
  jessicaBeat: {
    id: "a5",
    name: "Jessica Beat",
    slug: "jessica-beat",
    profile_image: "https://randomuser.me/api/portraits/women/5.jpg",
    bio: "Dynamic music journalist covering the underground scene. Jessica explores indie festivals to electronic dance music, always looking for the next big sound. Her reviews are known for their honesty.",
  },
  tomStriker: {
    id: "a6",
    name: "Tom Striker",
    slug: "tom-striker",
    profile_image: "https://randomuser.me/api/portraits/men/6.jpg",
    bio: "Former professional athlete turned sports writer, bringing an insider's perspective. Tom analyzes strategies and player dynamics, covering major leagues with a focus on the human stories behind the scores.",
  },
  mikeBall: {
    id: "a7",
    name: "Mike Ball",
    slug: "mike-ball",
    profile_image: null,
    bio: "Veteran basketball analyst and statistician who breaks down the game with precision. Mike's deep dive into player metrics offers fans a new way to understand basketball strategies and team performance.",
  },
  lindaSpeed: {
    id: "a8",
    name: "Linda Speed",
    slug: "linda-speed",
    profile_image: "https://randomuser.me/api/portraits/women/8.jpg",
    bio: "Certified marathon coach helping runners of all levels. Linda combines personal experience with sports science to offer practical advice on training and nutrition, inspiring others to find joy in every mile.",
  },
  chrisScreen: {
    id: "a9",
    name: "Chris Screen",
    slug: "chris-screen",
    profile_image: "https://randomuser.me/api/portraits/men/9.jpg",
    bio: "Film critic and cinema enthusiast loving both blockbusters and indie gems. Chris dissects narrative structures and cinematography to help viewers appreciate the art of filmmaking and storytelling.",
  },
  alexJoystick: {
    id: "a10",
    name: "Alex Joystick",
    slug: "alex-joystick",
    profile_image: "https://randomuser.me/api/portraits/women/10.jpg",
    bio: "Gaming industry veteran and reviewer seeing the evolution of video games. Alex covers latest releases and industry trends, advocating for inclusive game design and storytelling that resonates with all.",
  },
  sophieVogue: {
    id: "a11",
    name: "Sophie Vogue",
    slug: "sophie-vogue",
    profile_image: "https://randomuser.me/api/portraits/women/11.jpg",
    bio: "Fashion editor and trend forecaster with a sharp eye for style. Sophie reports from fashion weeks globally, exploring the intersection of fashion, art, and culture, celebrating creativity and expression.",
  },
  elenaTravel: {
    id: "a12",
    name: "Elena Travel",
    slug: "elena-travel",
    profile_image: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Cultural anthropologist and travel writer exploring diverse communities. Elena's stories delve into local traditions and daily life, advocating for sustainable and respectful tourism that benefits locals.",
  },
  markBuild: {
    id: "a13",
    name: "Mark Build",
    slug: "mark-build",
    profile_image: null,
    bio: "Architectural critic and urban planner fascinated by the built environment. Mark writes about sustainable design and the future of cities, believing good architecture improves quality of life.",
  },
  banksyFan: {
    id: "a14",
    name: "Banksy Fan",
    slug: "banksy-fan",
    profile_image: "https://randomuser.me/api/portraits/men/14.jpg",
    bio: "Art critic and street art aficionado tracking urban art globally. They explore political and social messages behind the art, challenging traditional definitions and championing public expression.",
  },
};

export const POSTS: ShortPost[] = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Global Summit Reaches Historic Agreement on Carbon Emissions",
    slug: "global-summit-carbon-agreement",
    published_at: "2023-10-25T09:00:00Z",
    author: AUTHORS.sarahJenkins,
    category: { id: "t1", name: "News", slug: "news" },
    excerpt:
      "World leaders have finally agreed on a unified timeline to reduce carbon footprints by 50% over the next decade.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1591556098007-9599520775a6",
      alt: "World leaders at a summit table",
      caption: "The summit concluded late Tuesday evening.",
    },
    featured: false,
    reading_time: 5,
  },
  {
    id: "b29c5de2-1234-4567-890a-bcdef1234567",
    title: "Tech Giants Unveil Revolutionary AI Regulation Framework",
    slug: "tech-giants-ai-regulation",

    published_at: "2023-10-26T14:30:00Z",
    author: AUTHORS.davidChen,
    category: { id: "t1", name: "News", slug: "news" },
    excerpt:
      "Silicon Valley's biggest players have proposed a self-regulatory board to ensure ethical AI development.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      alt: "Abstract visualization of artificial intelligence",
      caption: null,
    },
    featured: false,
    reading_time: 7,
  },
  {
    id: "c38d6ef3-2345-6789-012b-cdefg2345678",
    title: "Metro City Announces Major Transportation Overhaul",
    slug: "metro-city-transportation-overhaul",

    published_at: "2023-10-27T08:15:00Z",
    author: AUTHORS.sarahJenkins,
    category: { id: "t1", name: "News", slug: "news" },
    excerpt:
      "The mayor unveiled a billion-dollar plan to expand the subway lines and introduce electric buses.",
    featured_image: null,
    featured: false,
    reading_time: 4,
  },
  {
    id: "d49e7fg4-3456-7890-123c-defgh3456789",
    title: "Breakthrough in Sustainable Ocean Cleanup Technology",
    slug: "ocean-cleanup-breakthrough",

    published_at: "2023-10-28T11:45:00Z",
    author: AUTHORS.emilyClark,
    category: { id: "t1", name: "News", slug: "news" },
    excerpt:
      "Scientists have developed a biodegradable net system that captures microplastics without harming marine life.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d",
      alt: "Clean ocean waves",
      caption: "A view of the Pacific Ocean.",
    },
    featured: false,
    reading_time: 6,
  },

  // --- MUSIC (4 Posts) ---
  {
    id: "e50f8gh5-4567-8901-234d-efghi4567890",
    title: "The Vinyl Resurgence: Why Analog is Back to Stay",
    slug: "vinyl-resurgence-analog-back",

    published_at: "2023-10-29T10:00:00Z",
    author: AUTHORS.marcusVinyl,
    category: { id: "t2", name: "Music", slug: "music" },
    excerpt:
      "Sales of vinyl records have surpassed CDs for the first time in decades. Here is why we love the crackle.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617",
      alt: "Record player spinning a vinyl",
      caption: "Classic turntable setup.",
    },
    featured: true,
    reading_time: 8,
  },
  {
    id: "f61g9hi6-5678-9012-345e-fghij5678901",
    title: "Top 10 Indie Festivals to Visit This Summer",
    slug: "top-10-indie-festivals",

    published_at: "2023-10-30T13:20:00Z",
    author: AUTHORS.jessicaBeat,
    category: { id: "t2", name: "Music", slug: "music" },
    excerpt:
      "From the deserts of California to the forests of England, these festivals offer the best new sounds.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9",
      alt: "Crowd at a music festival",
      caption: null,
    },
    featured: false,
    reading_time: 5,
  },
  {
    id: "g72h0ij7-6789-0123-456f-ghijk6789012",
    title: "Album Review: The Midnight's New Synthwave Masterpiece",
    slug: "album-review-midnight-synthwave",

    published_at: "2023-11-01T09:30:00Z",
    author: AUTHORS.marcusVinyl,
    category: { id: "t2", name: "Music", slug: "music" },
    excerpt:
      "A deep dive into the retro-futuristic sounds of the latest chart-topping electronic album.",
    featured_image: null,
    featured: false,
    reading_time: 4,
  },
  {
    id: "h83i1jk8-7890-1234-567g-hijkl7890123",
    title: "Interview: How Jazz Influenced Modern Hip-Hop",
    slug: "jazz-influence-modern-hip-hop",

    published_at: "2023-11-02T16:00:00Z",
    author: AUTHORS.jessicaBeat,
    category: { id: "t2", name: "Music", slug: "music" },
    excerpt:
      "We sat down with producer legend QD3 to discuss sampling, rhythm, and the Blue Note legacy.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1511192336575-5a79af67a629",
      alt: "Saxophone player in a dark club",
      caption: "Live at the Blue Note.",
    },
    featured: false,
    reading_time: 9,
  },

  // --- SPORTS (4 Posts) ---
  {
    id: "i94j2kl9-8901-2345-678h-ijklm8901234",
    title: "Underdog Victory: The Championship Game Shock",
    slug: "underdog-victory-championship",

    published_at: "2023-11-03T22:00:00Z",
    author: AUTHORS.tomStriker,
    category: { id: "t3", name: "Sports", slug: "sports" },
    excerpt:
      "Against all odds, the wild-card team took home the trophy in a nail-biting overtime finish.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
      alt: "Soccer ball in the net",
      caption: "The winning goal.",
    },
    featured: false,
    reading_time: 3,
  },
  {
    id: "j05k3lm0-9012-3456-789i-jklmn9012345",
    title: "Formula 1: Preparing for the Monaco Grand Prix",
    slug: "formula-1-monaco-grand-prix",

    published_at: "2023-11-04T10:00:00Z",
    author: AUTHORS.tomStriker,
    category: { id: "t3", name: "Sports", slug: "sports" },
    excerpt:
      "Everything you need to know about the tight corners and luxury yachts of the most prestigious race.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
      alt: "F1 car on track",
      caption: null,
    },
    featured: false,
    reading_time: 6,
  },
  {
    id: "k16l4mn1-0123-4567-890j-klmno0123456",
    title: "NBA Trade Rumors: Who is Moving Where?",
    slug: "nba-trade-rumors-update",

    published_at: "2023-11-05T15:45:00Z",
    author: AUTHORS.mikeBall,
    category: { id: "t3", name: "Sports", slug: "sports" },
    excerpt:
      "With the deadline approaching, we look at the potential blockbuster trades that could shift the power balance.",
    featured_image: null,
    featured: false,
    reading_time: 5,
  },
  {
    id: "l27m5no2-1234-5678-901k-lmnop1234567",
    title: "Marathon Training: 5 Tips for Beginners",
    slug: "marathon-training-tips-beginners",

    published_at: "2023-11-06T07:00:00Z",
    author: AUTHORS.lindaSpeed,
    category: { id: "t3", name: "Sports", slug: "sports" },
    excerpt:
      "From footwear to nutrition, here is how to prepare your body for the grueling 26.2 miles.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
      alt: "Runner tying shoes",
      caption: "Preparation is key.",
    },
    featured: false,
    reading_time: 4,
  },

  // --- ENTERTAINMENT (4 Posts) ---
  {
    id: "m38n6op3-2345-6789-012l-mnopq2345678",
    title: "Summer Blockbusters: What to Watch This Weekend",
    slug: "summer-blockbusters-watch-weekend",

    published_at: "2023-11-07T12:00:00Z",
    author: AUTHORS.chrisScreen,
    category: { id: "t4", name: "Entertainment", slug: "entertainment" },
    excerpt:
      "From superhero epics to quiet indie dramas, the cinema schedule is packed this month.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
      alt: "Movie theater seats",
      caption: null,
    },
    featured: false,
    reading_time: 5,
  },
  {
    id: "n49o7pq4-3456-7890-123m-nopqr3456789",
    title: "Game of the Year: The RPG That Changed Everything",
    slug: "game-of-the-year-rpg",

    published_at: "2023-11-08T18:00:00Z",
    author: AUTHORS.alexJoystick,
    category: { id: "t4", name: "Entertainment", slug: "entertainment" },
    excerpt:
      "Elden Ring set a new standard for open-world design. We explore why players can't stop playing.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
      alt: "Person playing video games",
      caption: "Gaming setup.",
    },
    featured: false,
    reading_time: 8,
  },
  {
    id: "o50p8qr5-4567-8901-234n-opqrs4567890",
    title: "Celebrity Fashion: Highlights from the Met Gala",
    slug: "celebrity-fashion-met-gala",

    published_at: "2023-11-09T09:00:00Z",
    author: AUTHORS.sophieVogue,
    category: { id: "t4", name: "Entertainment", slug: "entertainment" },
    excerpt:
      "The boldest, weirdest, and most beautiful looks from fashion's biggest night out.",
    featured_image: null,
    featured: false,
    reading_time: 3,
  },
  {
    id: "p61q9rs6-5678-9012-345o-pqrst5678901",
    title: "Streaming Wars: Is Cable Finally Dead?",
    slug: "streaming-wars-cable-dead",

    published_at: "2023-11-10T14:00:00Z",
    author: AUTHORS.chrisScreen,
    category: { id: "t4", name: "Entertainment", slug: "entertainment" },
    excerpt:
      "With three new platforms launching this month, traditional TV subscriptions have hit an all-time low.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37",
      alt: "Remote control and TV",
      caption: null,
    },
    featured: false,
    reading_time: 6,
  },

  // --- CULTURE (4 Posts) ---
  {
    id: "q72r0st7-6789-0123-456p-qrstu6789012",
    title: "The Rise of Digital Nomads in Post-Pandemic World",
    slug: "digital-nomads-post-pandemic",

    published_at: "2023-11-11T08:30:00Z",
    author: AUTHORS.elenaTravel,
    category: { id: "t5", name: "Culture", slug: "culture" },
    excerpt:
      "How remote work is reshaping cities, tourism, and the very concept of 'home'.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      alt: "People working in a cafe",
      caption: "A coworking space in Bali.",
    },
    featured: false,
    reading_time: 7,
  },
  {
    id: "r83s1tu8-7890-1234-567q-rstuv7890123",
    title: "Minimalism: Why Less is More in Modern Architecture",
    slug: "minimalism-modern-architecture",

    published_at: "2023-11-12T11:00:00Z",
    author: AUTHORS.markBuild,
    category: { id: "t5", name: "Culture", slug: "culture" },
    excerpt:
      "Exploring the aesthetic of concrete, glass, and open spaces in contemporary design.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      alt: "Minimalist building facade",
      caption: null,
    },
    featured: false,
    reading_time: 5,
  },
  {
    id: "s94t2uv9-8901-2345-678r-stuvw8901234",
    title: "The History of Coffee: From Ethiopia to Starbucks",
    slug: "history-of-coffee",

    published_at: "2023-11-13T07:45:00Z",
    author: AUTHORS.elenaTravel,
    category: { id: "t5", name: "Culture", slug: "culture" },
    excerpt:
      "A look at the social and political impact of the world's favorite caffeinated beverage.",
    featured_image: {
      url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf",
      alt: "Coffee beans and a cup",
      caption: "Freshly brewed.",
    },
    featured: false,
    reading_time: 10,
  },
  {
    id: "t05u3vw0-9012-3456-789s-tuvwx9012345",
    title: "Street Art: Vandalism or High Culture?",
    slug: "street-art-vandalism-culture",

    published_at: "2023-11-14T15:00:00Z",
    author: AUTHORS.banksyFan,
    category: { id: "t5", name: "Culture", slug: "culture" },
    excerpt:
      "How graffiti evolved from subway tags to million-dollar auctions at Sotheby's.",
    featured_image: null,
    featured: false,
    reading_time: 6,
  },
];

export const CATEGORIES = [
  {
    id: "t1",
    name: "News",
    slug: "news",
    title: "Pulse of the Times, Stay Informed",
    description:
      "The world never stops moving, and neither should your understanding of it. Staying informed is like keeping your finger on the planet's pulse—each headline, each insight, each story helps you see the bigger picture and navigate life with clarity.",
  },
  {
    id: "t2",
    name: "Music",
    slug: "music",
    title: "Soundscapes, Feel the Rhythm",
    description:
      "Music is a universal language that speaks directly to the soul. Every beat, every melody, every lyric builds the soundtrack of our lives—guiding emotions, sparking memories, and transforming ordinary moments into unforgettable ones.",
  },
  {
    id: "t3",
    name: "Sports",
    slug: "sports",
    title: "Game On, Chase Greatness",
    description:
      "Sports aren't just competitions—they're stories of dedication, passion, and perseverance. Whether you're cheering from the sidelines or playing on the field, every challenge becomes a chance to push limits and celebrate the power of teamwork.",
  },
  {
    id: "t4",
    name: "Entertainment",
    slug: "entertainment",
    title: "Spotlight Stories, Escape & Imagine",
    description:
      "Entertainment is the art of stepping into new worlds. From films to shows to viral moments, each experience invites you to dream bigger, laugh louder, and rediscover the magic of imagination.",
  },
  {
    id: "t5",
    name: "Culture",
    slug: "culture",
    title: "Human Mosaic, Explore Identity",
    description:
      "Culture is the vibrant tapestry woven from our traditions, beliefs, and expressions. Understanding it means exploring what makes us unique—and what connects us all—shaping a richer, more empathetic view of the world.",
  },
];

export const SOCIALS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: Instagram,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/",
    icon: Linkedin,
  },
  {
    name: "X",
    url: "https://x.com/",
    icon: Twitter,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/",
    icon: Youtube,
  },
];
