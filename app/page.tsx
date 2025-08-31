import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Facebook, ExternalLink, Star, Users, Utensils, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function KaritonRestaurant() {
  const menuItems = [
    {
      name: "Grilled Squid with Rice",
      description: "Fresh squid grilled to perfection, served with garlic rice and vegetables",
      image: "/images/food-1.jpg",
      category: "Grilled",
    },
    {
      name: "Sizzling Sisig",
      description: "Traditional Filipino sizzling dish with rice, corn, and peppers",
      image: "/images/food-2.jpg",
      category: "Sizzling",
    },
    {
      name: "Crispy Chicken & Fries",
      description: "Golden fried chicken strips with crispy fries and dipping sauce",
      image: "/images/food-3.jpg",
      category: "Fried",
    },
    {
      name: "Filipino Fried Chicken",
      description: "Authentic Filipino-style fried chicken with special seasoning",
      image: "/images/food-4.jpg",
      category: "Fried",
    },
    {
      name: "Bulalo Soup",
      description: "Traditional beef bone marrow soup with corn and vegetables",
      image: "/images/food-5.jpg",
      category: "Soup",
    },
    {
      name: "Stuffed Chicken",
      description: "Juicy chicken stuffed with cheese and herbs, perfectly seasoned",
      image: "/images/food-6.jpg",
      category: "Grilled",
    },
  ]

  const desserts = [
    {
      name: "Halo-halo",
      description: "The ultimate Filipino dessert! This vibrant mix of sweet preserves, jellies, and tropical fruits is layered with shaved ice and topped with a scoop of creamy ube ice cream. It’s a refreshing party in a glass. 🌈🍧",
      image: "/images/dessert-1.jpg",
    },
    {
      name: "Mais Con Yelo",
      description: "A beloved summer treat! This simple yet satisfying dessert features a refreshing blend of sweet corn kernels, shaved ice, and rich, creamy milk. It's the perfect way to cool down. 🌽❄️",
      image: "/images/dessert-2.jpg",
    },
    {
      name: "Ube Leche Flan Cake",
      description: "The best of both worlds! This heavenly dessert combines a moist and fluffy purple yam cake with a rich, velvety layer of classic leche flan. It's a Filipino favorite for a reason. 🍮💜",
      image: "/images/dessert-3.jpg",
    },
  ]

  const reviews = [
    {
      name: "Maria Santos",
      rating: 5,
      comment:
        "Absolutely amazing! The sisig reminds me of home. The flavors are authentic and the service is wonderful.",
      date: "2 weeks ago",
    },
    {
      name: "James Chen",
      rating: 5,
      comment: "Best Filipino food in Mississauga! The ube cake is to die for. Will definitely be coming back!",
      date: "1 month ago",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Love the vibrant atmosphere and delicious food. The grilled squid was perfectly cooked. Highly recommend!",
      date: "3 weeks ago",
    },
    {
      name: "Miguel Rodriguez",
      rating: 5,
      comment:
        "Finally found authentic Filipino street food! The bulalo soup was exactly like my grandmother's recipe.",
      date: "2 months ago",
    },
    {
      name: "Lisa Park",
      rating: 5,
      comment:
        "Great catering service for our office party. Everyone loved the food and the presentation was beautiful!",
      date: "1 month ago",
    },
    {
      name: "David Thompson",
      rating: 5,
      comment: "The food cart experience was fantastic! Fresh, flavorful, and the staff was so friendly and welcoming.",
      date: "3 weeks ago",
    },
  ]

  const services = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Restaurant",
      description: "Authentic Filipino street food in a vibrant atmosphere",
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Food Carts",
      description: "Mobile kariton experience for events and locations",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Catering",
      description: "Full catering services for weddings, parties, and events",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Bakery",
      description: "Fresh baked goods and Filipino desserts daily",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/kariton-logo.jpg"
              alt="Kariton Restaurant Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">🛒 Kariton Restaurant</h1>
              <p className="text-sm text-muted-foreground">🇵🇭 Authentic Filipino Street Food, Made with Heart</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">
              🍽️ Menu
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              ⭐ Services
            </a>
            <a href="#location" className="text-foreground hover:text-primary transition-colors">
              📍 Location
            </a>
            <Button asChild>
              <a
                href="https://www.doordash.com/en-CA/store/kariton-restaurant-mississauga-35464975/77561152/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚚 Order Now
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-red-950/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-red-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-pink-400 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-teal-400 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-orange-100 text-orange-800 border-orange-200">
                  🎉 Est. 2025 • Authentic Filipino Cuisine
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-balance">
                  Welcome to{" "}
                  <span className="text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text">
                    🛒 Kariton
                  </span>{" "}
                  Restaurant
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  🌟 We bring the festive flavors of the Philippines right to your table. Experience a delicious blend of traditional favorites, street food classics, and sweet treats — made fresh and served with love. ❤️
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  asChild
                >
                  <a
                    href="https://www.doordash.com/en-CA/store/kariton-restaurant-mississauga-35464975/77561152/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />🚚 Order on DoorDash
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-200 text-orange-700 hover:bg-orange-50 bg-transparent"
                  asChild
                >
                  <a href="#menu">📋 View Menu</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-lg blur-lg opacity-20"></div>
              <Image
                src="/images/kariton-food-cart.jpg"
                alt="Colorful Kariton Food Cart"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl relative z-10"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg shadow-lg z-20">
                <div className="text-center">
                  <div className="text-2xl font-bold">4.8★</div>
                  <div className="text-sm">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/kariton-wall.jpg"
                alt="Kariton Wall Art"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  📖 The Story of <span className="text-primary">🛒 Kariton</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  🇵🇭 In Filipino culture, a &quot;kariton&quot; represents more than just a cart — it&apos;s a symbol of
                  entrepreneurship, community, and bringing delicious food directly to the people. Our restaurant
                  embodies this spirit, serving authentic Filipino street food with the same passion and dedication as
                  traditional cart vendors. ❤️
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  🏪 From our vibrant storefront in Mississauga to our mobile food carts, we&apos;re committed to sharing the
                  rich flavors and warm hospitality that make Filipino cuisine so special. 🌟
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center px-4 py-8 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">🎉 2025</div>
                  <div className="text-sm text-muted-foreground">Established</div>
                </div>
                <div className="text-center px-4 py-8 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">😊 100+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              🍽️ Our <span className="text-primary">Signature</span> Dishes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              🌟 Discover authentic Filipino flavors crafted with traditional recipes and fresh ingredients ✨
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <Badge className="absolute top-3 left-3" variant="secondary">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <a
                href="https://www.doordash.com/en-CA/store/kariton-restaurant-mississauga-35464975/77561152/"
                target="_blank"
                rel="noopener noreferrer"
              >
                📋 View Full Menu & Order 🚚
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Signature Desserts Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              🍰 Signature <span className="text-primary">Desserts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              🧁 Sweet endings with traditional Filipino desserts and creative modern twists 🌈
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {desserts.map((dessert, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={dessert.image || "/placeholder.svg"} alt={dessert.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{dessert.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{dessert.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              💬 What Our <span className="text-primary">Customers</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              ⭐ Real reviews from our valued customers who love authentic Filipino cuisine 😍
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">&quot;{review.comment}&quot;</p>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="font-medium text-sm">{review.name}</span>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              🎯 Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              🍽️ From dine-in experiences to catering your special events, we bring Filipino flavors wherever you need
              them 🚚
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 pt-6">
                  <div className="text-primary mx-auto w-fit">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="location" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  📍 Visit <span className="text-primary">Our Location</span>
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">🏪 99 Dundas St E</p>
                      <p className="text-muted-foreground">Mississauga, ON L5A 1W7 🇨🇦</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <p>📞 (437) 451-2098</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Section */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    🗺️ Find Us on Google Maps
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <a
                    href="https://www.google.com/maps/place/Kariton+Restaurant/@43.5828335,-79.6141708,17.11z/data=!4m6!3m5!1s0x882b47eaa51bf333:0x48bc7c6182e10455!8m2!3d43.5828246!4d-79.6141441!16s%2Fg%2F11xtk7dr6g?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/kariton-map.png"
                      alt="Kariton Restaurant Location on Google Maps"
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4">
                    <Button asChild className="w-full">
                      <a
                        href="https://www.google.com/maps/place/Kariton+Restaurant/@43.5828335,-79.6141708,17.11z/data=!4m6!3m5!1s0x882b47eaa51bf333:0x48bc7c6182e10455!8m2!3d43.5828246!4d-79.6141441!16s%2Fg%2F11xtk7dr6g?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Image
                src="/images/kariton-physical-store.jpg"
                alt="Kariton Restaurant Storefront"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />

              <div className="grid grid-cols-2 gap-4">
                <Button asChild className="h-12">
                  <a
                    href="https://www.doordash.com/en-CA/store/kariton-restaurant-mississauga-35464975/77561152/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />DoorDash
                  </a>
                </Button>
                <Button variant="outline" asChild className="h-12 bg-transparent">
                  <a href="https://www.facebook.com/karitonrestaurant/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="mr-2 h-4 w-4" />Facebook
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/kariton-logo.jpg"
                  alt="Kariton Restaurant Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold text-primary">🛒 Kariton Restaurant</h3>
                  <p className="text-sm text-muted-foreground">🎉 Est. 2025</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                🇵🇭 Bringing authentic Filipino street food culture to Mississauga with traditional kariton spirit and
                modern hospitality. ❤️
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">🔗 Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#menu" className="block text-muted-foreground hover:text-primary transition-colors">
                  🍽️ Menu
                </a>
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                  ⭐ Services
                </a>
                <a href="#location" className="block text-muted-foreground hover:text-primary transition-colors">
                  📍 Location
                </a>
                <a
                  href="https://www.yelp.ca/biz/kariton-mississauga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  ⭐ Yelp Reviews
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">📞 Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  🏪 99 Dundas St E<br />
                  Mississauga, ON L5A 1W7 🇨🇦
                </p>
                <p>📞 Phone: (437) 451-2098</p>
                <p>📧 Email: info@kariton.net</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2025 Kariton Restaurant. All rights reserved. | 🍽️ Restaurant • 🧁 Bakery • 🎪 Catering • 🛒 Food
              Carts
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
