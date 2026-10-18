export const profile = {
  name: "Durotimi Micheal Johnson",
  title: "Senior Mobile Engineer",
  location: "Lagos, Nigeria",
  email: "durotimijohnson@gmail.com",
  phone: "+234 (0) 814 864 2968",
  phoneHref: "tel:+2348148642968",
  statement: "Mobile products, from the architecture to the store.",
  summary:
    "Senior mobile engineer with 7+ years shipping consumer and enterprise apps across Flutter, Android, and iOS. I lead the architecture, the realtime and payment paths, and the release to both stores.",
  contactNote:
    "The useful note names the product, the constraint, and what has to ship. Email is the best way in.",
  platforms: ["Flutter", "Android", "iOS", "React Native"],
  links: [
    { label: "GitHub", href: "https://github.com/D-Mick" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/durotimijohnson/" },
  ],
  education: {
    school: "Middlesex University Dubai",
    credential: "B.Sc. Information Technology, Computer Science",
    detail: "First Class",
  },
  work: [
    {
      name: "Lifteller",
      year: "2026",
      platforms: ["iOS", "Android"],
      summary:
        "From February 2026 I worked on Lifteller, a social platform where people offer, request, and raise support. It is live on the App Store and Google Play: a feed, liftclips, and a wallet for monetary and non-monetary lifts.",
      outcomes: [
        { value: "Live", label: "App Store" },
        { value: "Live", label: "Google Play" },
        { value: "Feb 2026", label: "Started" },
      ],
      links: [
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/lifteller/id6757824981",
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.lifteller",
        },
        { label: "lifteller.com", href: "https://www.lifteller.com/" },
      ],
      images: [
        {
          src: "/lifteller/liftclip.jpg",
          alt: "Lifteller liftclip on iPhone, from the App Store listing",
          width: 704,
          height: 1480,
        },
        {
          src: "/lifteller/detail.jpg",
          alt: "Lifteller lift detail on iPhone, from the App Store listing",
          width: 704,
          height: 1480,
        },
        {
          src: "/lifteller/request.jpg",
          alt: "Lifteller request screen on iPhone, from the App Store listing",
          width: 704,
          height: 1480,
        },
      ],
    },
    {
      name: "Nerdbug",
      year: "2025",
      platforms: ["Flutter", "iOS", "Android"],
      summary:
        "Two products, both live on the App Store, Play Store, and web. Homemade is a wholesale marketplace for buyers, verified vendors, dispatch riders, and admins. Checkout covers cart, delivery and pickup, coupons, and Paystack, with Socket.IO order updates and live rider tracking. Bitselah moved crypto and gift-card trading off WhatsApp, with payouts, disputes, and referrals.",
      outcomes: [
        { value: "2", label: "Products" },
        { value: "Live", label: "Stores and web" },
        { value: "4", label: "Homemade roles" },
      ],
      links: [
        { label: "Homemade", href: "https://nerdbug.io/work/homemade" },
        { label: "Bitselah", href: "https://nerdbug.io/work/bitselah" },
      ],
      images: [
        {
          src: "/nerdbug/homemade-home.jpg",
          alt: "Homemade vendor home on iPhone, from the Nerdbug case study",
          width: 1480,
          height: 960,
        },
        {
          src: "/nerdbug/homemade-rider.jpg",
          alt: "Homemade rider tracking on iPhone, from the Nerdbug case study",
          width: 1600,
          height: 910,
        },
        {
          src: "/nerdbug/bitselah-wallet.jpg",
          alt: "Bitselah wallet on iPhone, from the Nerdbug case study",
          width: 1242,
          height: 1400,
        },
        {
          src: "/nerdbug/bitselah-refer.jpg",
          alt: "Bitselah refer and earn on iPhone, from the Nerdbug case study",
          width: 1242,
          height: 1400,
        },
        {
          src: "/nerdbug/homemade-orders.jpg",
          alt: "Homemade orders on iPhone, from the Nerdbug case study",
          width: 1600,
          height: 918,
        },
      ],
    },
    {
      name: "AptResponse",
      year: "2025",
      platforms: ["Flutter", "iOS", "Android"],
      summary:
        "Dual-flavor apps for clients and lawyers. Emergency legal response and fast-consultation matching over WebSockets, with Agora calls, Firebase push, Google Maps, and wallet, card, and corporate payments.",
      outcomes: [
        { value: "2", label: "App flavors" },
        { value: "Agora", label: "Voice and video" },
        { value: "EN / FR", label: "Localization" },
      ],
      links: [
        {
          label: "App Store · Client",
          href: "https://apps.apple.com/ng/app/aptresponse/id6443413679",
        },
        {
          label: "Google Play · Client",
          href: "https://play.google.com/store/apps/details?id=io.virtualresponse.aptresponse.user",
        },
        {
          label: "App Store · Lawyer",
          href: "https://apps.apple.com/ng/app/aptresponse-lawyer/id1645429224",
        },
        {
          label: "Google Play · Lawyer",
          href: "https://play.google.com/store/apps/details?id=io.virtualresponse.aptresponse.lawyer",
        },
      ],
      images: [
        {
          src: "/aptresponse/lawyers.jpg",
          alt: "AptResponse lawyers list on iPhone, from the App Store listing",
          width: 464,
          height: 800,
        },
        {
          src: "/aptresponse/lawyer-home.jpg",
          alt: "AptResponse lawyer home on iPhone, from the App Store listing",
          width: 464,
          height: 800,
        },
      ],
    },
    {
      name: "PressOne Africa",
      year: "2023",
      platforms: ["Flutter", "iOS", "Android"],
      summary:
        "Led the mobile team on business communication and CRM apps used by thousands of people. VoIP push through APNs and Firebase, refresh-token auth, and releases on both stores.",
      outcomes: [
        { value: "1,000s", label: "Users" },
        { value: "VoIP", label: "Calling" },
        { value: "Both", label: "Stores" },
      ],
      links: [
        {
          label: "App Store",
          href: "https://apps.apple.com/ng/app/pressone-business-phone/id6463893130",
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=co.pressone.android",
        },
        { label: "pressone.africa", href: "https://pressone.africa/" },
      ],
      images: [
        {
          src: "/pressone/dashboard.jpg",
          alt: "PressOne Africa dashboard on iPhone, from the App Store listing",
          width: 493,
          height: 1066,
        },
        {
          src: "/pressone/keypad.jpg",
          alt: "PressOne Africa keypad on iPhone, from the App Store listing",
          width: 493,
          height: 1066,
        },
      ],
    },
    {
      name: "Dandako",
      year: "2022",
      platforms: ["Flutter", "iOS", "Android"],
      summary:
        "Three apps for logistics, parcel, and drivers. Live tracking, maps, and payments, published on both stores and past 2,000 downloads. The Play listings have since been taken down.",
      outcomes: [
        { value: "3", label: "Apps" },
        { value: "2,000+", label: "Downloads" },
        { value: "Both", label: "Stores" },
      ],
      links: [],
      images: [
        {
          src: "/dandako/welcome.jpg",
          alt: "Dandako welcome screen, from the Google Play listing",
          width: 302,
          height: 510,
        },
        {
          src: "/dandako/pickup.jpg",
          alt: "Dandako driver pickup task, from the Google Play listing",
          width: 302,
          height: 510,
        },
      ],
    },
    {
      name: "Hash",
      year: "2021",
      platforms: ["Flutter", "iOS", "Android"],
      summary:
        "A US stock-trading app with ACH bank linking and real-time orders, built at WePrototype alongside Fixx, a geolocation app for finding nearby handymen. Hash shipped on both stores; those listings have since been removed.",
      outcomes: [
        { value: "ACH", label: "Bank linking" },
        { value: "Live", label: "Stock orders" },
        { value: "Fixx", label: "Handymen, same year" },
      ],
      links: [
        {
          label: "WePrototype case study",
          href: "https://weprototype.tech/startups/hash-app/",
        },
      ],
      images: [
        {
          src: "/hash/order.jpg",
          alt: "Hash order confirmation on iPhone, from the App Store listing",
          width: 466,
          height: 595,
        },
      ],
    },
  ],
  milestones: [
    {
      year: "2026",
      title: "Lifteller on both stores",
      body: "From February 2026, the iOS and Android apps are live: a feed, liftclips, and a wallet for monetary and non-monetary lifts.",
    },
    {
      year: "2025",
      title: "Nerdbug, two products",
      body: "Homemade, a wholesale marketplace for buyers, verified vendors, and dispatch riders, with Paystack and live tracking. Bitselah, crypto and gift-card trading with payouts, disputes, and referrals. Both are live on the stores and the web.",
    },
    {
      year: "2025",
      title: "AptResponse, two production apps",
      body: "Client and lawyer flavors, with Agora voice and video, English and French, and wallet, card, and corporate payments.",
    },
    {
      year: "2024",
      title: "PressOne, native on both stores",
      body: "Rewrote the Flutter app in Kotlin and Swift. Calls still arrive after the app is killed, through CallKit and VoIP push. Each store listing passed 1,000 downloads.",
    },
    {
      year: "2023",
      title: "PressOne, used by thousands",
      body: "Led the mobile team. Business calling on both stores, with VoIP push through APNs and Firebase.",
    },
    {
      year: "2023",
      title: "Remedi Africa, offline-first",
      body: "Led a fintech and operations product on mobile and desktop, with Supabase, role-based access, and CI for release.",
    },
    {
      year: "2022",
      title: "VoIP past 2,000 downloads",
      body: "A production calling app with SIP, CallKit, and delivery after the app is killed, released on both stores.",
    },
    {
      year: "2022",
      title: "Three Dandako apps",
      body: "Logistics, parcel, and driver apps on both stores, past 2,000 downloads, with live tracking and payments.",
    },
    {
      year: "2021",
      title: "Fixx and Hash",
      body: "Nearby handymen on Fixx. ACH payments and real-time stock trading on Hash, with biometric login.",
    },
    {
      year: "2021",
      title: "Pjcempire at Capriquota",
      body: "First shipped product. Flutter, Java, Kotlin, and Laravel, published past 100 downloads.",
    },
    {
      year: "2020",
      title: "Advanced Diploma, APTECH",
      body: "Advanced Diploma in Software Engineering, before the Middlesex degree.",
    },
    {
      year: "First Class",
      title: "Middlesex University Dubai",
      body: "B.Sc. Information Technology, Computer Science.",
    },
  ],
  practice: [
    {
      title: "Flutter at product scale",
      body: "Feature modules, BLoC and Cubit, and a codebase a new teammate can open. Native modules only where the phone requires them: CallKit, push, camera, maps.",
    },
    {
      title: "Realtime",
      body: "Sockets, VoIP in the background and after the app is killed, live maps, and call flows that still arrive when the screen is off.",
    },
    {
      title: "Payments",
      body: "Wallets, cards, Paystack, and the checkout states around them. The money path has to be boring and obvious.",
    },
    {
      title: "Release",
      body: "Staged rollouts, Crashlytics, Sentry, and CI. Apps I have led are on the App Store and Google Play, not stuck in a TestFlight.",
    },
  ],
  experience: [
    {
      role: "Senior Mobile Engineer",
      company: "Lifteller",
      dates: "February 2026 — Present",
      summary:
        "Working on the Lifteller iOS and Android apps, live on the App Store and Google Play.",
    },
    {
      role: "Flutter Developer, Contract",
      company: "Nerdbug",
      dates: "December 2025 — June 2026",
      summary:
        "Shipped Homemade, a wholesale marketplace for buyers, vendors, and riders, with Paystack checkout and live delivery tracking, and Bitselah, crypto and gift-card trading with payouts, disputes, and referrals.",
    },
    {
      role: "Senior Flutter Developer, Contract",
      company: "AptResponse",
      dates: "January 2025 — December 2025",
      summary:
        "Owned mobile architecture for the client and lawyer apps, including calls, dispatch, and consultation payments.",
    },
    {
      role: "Team Lead, Mobile Engineer",
      company: "PressOne Africa",
      dates: "June 2023 — February 2025",
      summary:
        "Led Flutter, then the rewrite to Kotlin and Swift. Calls still arrive after the app is killed, through CallKit and VoIP push, with a CRM web view, refresh-token auth, and Sentry, Mixpanel, and Crashlytics.",
    },
    {
      role: "Lead Mobile Engineer",
      company: "Remedi Africa",
      dates: "October 2023 — October 2024",
      summary:
        "Led a fintech and digital-operations app across mobile and desktop, with offline access and CI for release.",
    },
    {
      role: "Software Engineer",
      company: "PressOne Africa",
      dates: "February 2022 — January 2024",
      summary:
        "Shipped the Flutter calling app on both stores, past 2,000 downloads, with SIP, CallKit, and delivery after the app is killed.",
    },
    {
      role: "Lead Mobile Engineer",
      company: "Porta Africa",
      dates: "February 2022 — October 2023",
      summary:
        "Led the Dandako logistics, parcel, and driver apps on both stores, past 2,000 downloads, with live tracking and payments.",
    },
    {
      role: "Mobile Engineer",
      company: "WePrototype Technologies",
      dates: "August 2021 — February 2022",
      summary:
        "Built Fixx and Hash: nearby handymen, ACH payments, and real-time stock trading, with biometric login.",
    },
    {
      role: "Software Engineer",
      company: "Capriquota",
      dates: "December 2020 — August 2021",
      summary:
        "Full-stack mobile and web. Flutter, Java, Kotlin, and Laravel, including the Pjcempire app, past 100 downloads.",
    },
  ],
} as const;
