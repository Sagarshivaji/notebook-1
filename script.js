  /* ============================================================
     PROJECT DATA — FULL CASE STUDIES
     ============================================================ */
  const PROJECTS = {

    'notebook-ui': {
      title: 'Notebook UI',
      tagline: 'A skeuomorphic portfolio template that feels like real paper',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=900&h=500',
      tech: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
      meta: [
        { label: 'Role', value: 'Design + Front-end' },
        { label: 'Timeline', value: '6 weeks' },
        { label: 'Team', value: 'Solo' },
        { label: 'Year', value: '2025' }
      ],
      demo: '#',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'Notebook UI is a portfolio template that looks and behaves like a real paper notebook — spiral binding, ruled pages, coffee stains, and handwritten type included.',
            'The brief was personal: I wanted a portfolio that feels like flipping through a designer\u2019s sketchbook, not scrolling a grid of thumbnails.',
            'Everything ships in a single HTML file with zero dependencies, so it loads instantly and can be dropped on any static host.'
          ],
          metrics: [
            { value: '0', label: 'runtime dependencies' },
            { value: '1', label: 'HTML file' },
            { value: '~38KB', label: 'total page weight' }
          ]
        },
        {
          heading: 'The Problem',
          body: [
            'Most designer portfolios look the same: a hero, a grid of thumbnails, and a contact form. They are efficient — but they are also forgettable.',
            'Recruiters and hiring managers scan dozens of these every week. If a portfolio does not create a small moment of delight in the first three seconds, it rarely gets a second look.',
            'The constraint I set for myself: make something tactile and personal without sacrificing clarity, speed, or accessibility.'
          ],
          features: [
            'Portfolios blur together — no memorable interaction',
            'Flat grids hide the story behind the work',
            'Animation-heavy sites often break accessibility and performance'
          ]
        },
        {
          heading: 'Research & Insights',
          body: [
            'I reviewed 30 designer portfolios and ran five short interviews with designers and hiring managers. Three patterns came up again and again.'
          ],
          features: [
            'People remember the <em>feel</em> of a site, not its layout',
            'Narrative beats thumbnails — hiring managers want the story behind the work',
            'Anything slower than two seconds to load gets closed'
          ],
          quote: {
            text: 'I don\u2019t remember the grid. I remember the one that felt like a real book.',
            author: 'DESIGN LEAD · PRODUCT STUDIO'
          }
        },
        {
          heading: 'Goals & Success Metrics',
          body: [
            'Before writing a line of code I wrote down three goals and the numbers that would tell me whether they had been met.'
          ],
          metrics: [
            { value: '<1s', label: 'first paint' },
            { value: 'AA', label: 'contrast target' },
            { value: '100%', label: 'keyboard reachable' }
          ],
          features: [
            'Feel handcrafted without looking amateur',
            'Tell a story, not just list work',
            'Stay fast, responsive, and fully keyboard accessible'
          ]
        },
        {
          heading: 'Process',
          body: [
            'The project ran in four short passes, each one narrowing the idea a little further.'
          ],
          steps: [
            { title: 'Sketch', desc: 'Paper sketches of the notebook metaphor — binding, tabs, page flips, and where content would live.' },
            { title: 'Prototype', desc: 'A CSS-only prototype of the spiral rings, paper grain, and ruled lines, tested for realism before any content was added.' },
            { title: 'Build', desc: 'A single-file HTML document with small JavaScript modules for navigation, project data, and page state.' },
            { title: 'Refine', desc: 'Motion timing, reduced-motion fallbacks, mobile layout, and contrast checks on every text/background pair.' }
          ]
        },
        {
          heading: 'The Solution',
          body: [
            'The result is a notebook you can actually flip through — sections behave like chapters, and project cards open into multi-page stories.'
          ],
          features: [
            'Spiral binding, paper grain, and ruled lines drawn entirely in CSS',
            '3D page-flip transition between sections, with a matching close animation',
            'Project cards that open into full multi-page case studies',
            'An index page with live search across sections and projects',
            'Full keyboard support and prefers-reduced-motion fallbacks'
          ]
        },
        {
          heading: 'Design Details',
          body: [
            'Every visual decision was made to support the paper metaphor — nothing is decoration for its own sake.'
          ],
          features: [
            'Type: Caveat, Kalam and Special Elite for the handwriting and typewriter feel',
            'Palette: paper cream, ink navy, coral accent, and highlighter yellow',
            'Motion: cubic-bezier(.34,1.56,.64,1) for a springy, tactile response',
            'Shadows and page folds are pure CSS — no image assets are loaded'
          ],
          note: 'The paper grain is a single inline SVG turbulence filter at 5% opacity — it adds texture without a single network request.'
        },
        {
          heading: 'Challenges & Trade-offs',
          body: [
            'The hardest part was making 3D page flips work without breaking layout or accessibility.',
            'Flipping a page means two pages occupying the same grid cell at once. I used CSS 3D transforms with backface-visibility and capped the animation at 880ms so the transition never feels sluggish.',
            'Reduced-motion users get an instant swap instead, and every interactive element remains a real button or link so the illusion never gets in the way of the content.'
          ]
        },
        {
          heading: 'Results & Impact',
          body: [
            'The template has been used by designers for personal portfolios and shipped as a free resource.'
          ],
          metrics: [
            { value: '38KB', label: 'total page weight' },
            { value: '0', label: 'runtime dependencies' },
            { value: '1.2s', label: 'load on 3G' }
          ],
          quote: {
            text: 'It\u2019s the first portfolio I\u2019ve clicked all the way through in years.',
            author: 'HIRING MANAGER · FINTECH'
          }
        },
        {
          heading: 'Takeaways',
          body: [
            'Skeuomorphism works when it serves the content. The notebook metaphor is not decoration — it defines the navigation, the transitions, and the tone of everything inside.',
            'If I rebuilt it, I would add a lightweight CMS layer for project data and test the flip animations on low-end Android devices much earlier in the process.'
          ]
        }
      ]
    },

    'taskflow': {
      title: 'TaskFlow',
      tagline: 'A calm kanban board for people who hate project management tools',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=900&h=500',
      tech: ['React', 'Zustand', 'IndexedDB', 'Vite'],
      meta: [
        { label: 'Role', value: 'Product Design + Front-end' },
        { label: 'Timeline', value: '8 weeks' },
        { label: 'Team', value: '2 designers, 3 engineers' },
        { label: 'Year', value: '2025' }
      ],
      demo: '#',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'TaskFlow is a kanban board built for focus: drag-and-drop cards, offline-first storage, and keyboard shortcuts for everything.',
            'No accounts, no onboarding funnel, no notification noise. Your tasks live in the browser, survive a refresh, and work on a plane.',
            'It started as a personal tool and became the project I use to think through product decisions every week.'
          ],
          metrics: [
            { value: '40KB', label: 'gzipped bundle' },
            { value: '0', label: 'sign-up steps' },
            { value: '100%', label: 'offline capable' }
          ]
        },
        {
          heading: 'The Problem',
          body: [
            'Most project tools are designed for teams and optimised for managers. Solo makers end up using ten percent of the features and paying for the rest.',
            'The brief was simple: a task board that opens instantly, works without internet, and never asks you to create an account.'
          ],
          features: [
            'Heavy tools with long onboarding and mandatory accounts',
            'Cloud-only boards that break the moment you go offline',
            'Cluttered interfaces that add anxiety instead of clarity'
          ]
        },
        {
          heading: 'Research & Insights',
          body: [
            'I interviewed twelve freelancers and indie makers about how they actually plan a week. The answers were remarkably consistent.'
          ],
          features: [
            'Most planning happens in short, spontaneous bursts of five minutes',
            'People abandon tools that require setup before the first task',
            'Keyboard users wanted to add and move cards without reaching for the mouse'
          ],
          quote: {
            text: 'I don\u2019t need a roadmap. I need to know what to do after coffee.',
            author: 'INDIE MAKER · INTERVIEW 04'
          }
        },
        {
          heading: 'Goals & Success Metrics',
          body: [
            'I translated those insights into three measurable goals and used them to arbitrate every feature request.'
          ],
          metrics: [
            { value: '<1s', label: 'time to interactive' },
            { value: '3', label: 'max taps to add a task' },
            { value: 'AA', label: 'contrast ratio' }
          ],
          features: [
            'Zero-friction start: land on a board and type a task',
            'Offline-first persistence with no sync prompts or spinners',
            'Keyboard-complete: create, move, and archive without a mouse'
          ]
        },
        {
          heading: 'Process',
          body: [
            'The work moved from conversations, to flows, to a testable prototype, and only then into code.'
          ],
          steps: [
            { title: 'Interviews', desc: 'Twelve conversations with indie makers, freelancers, and one very organised student.' },
            { title: 'Flows', desc: 'Mapped the three core loops — capture, plan, finish — and cut everything that sat outside them.' },
            { title: 'Prototype', desc: 'A clickable Figma board tested with six users before any implementation started.' },
            { title: 'Build', desc: 'React with Zustand for state and a small IndexedDB adapter for persistence.' }
          ]
        },
        {
          heading: 'The Solution',
          body: [
            'TaskFlow ships as a single board that opens with your last state restored. Everything else is one keystroke away.'
          ],
          features: [
            'Drag-and-drop columns with smooth reordering and keyboard alternatives',
            'Offline-first IndexedDB storage — no account, no server',
            'Command palette with shortcuts for every action',
            'Custom labels, filters, and saved views',
            'Instant search across all boards'
          ]
        },
        {
          heading: 'Design Details',
          body: [
            'The interface uses one accent colour and generous whitespace so the board never reads like a spreadsheet.'
          ],
          features: [
            'Three-column default layout, expandable to six',
            'Cards show only what matters: title, label, due date',
            'Motion capped at 180ms so the board feels immediate',
            'Dark mode follows the system preference by default'
          ],
          note: 'The command palette came from testing — every participant instinctively hit a shortcut before touching the mouse.'
        },
        {
          heading: 'Challenges & Trade-offs',
          body: [
            'Native drag-and-drop APIs are inconsistent across browsers, and the popular libraries added more than 30KB to the bundle.',
            'I implemented pointer-based dragging in roughly 150 lines instead, which kept the bundle under 40KB gzipped and gave full control over the drop animation.',
            'IndexedDB transactions were the other trap — writes are batched and debounced so the main thread never blocks while someone is typing.'
          ]
        },
        {
          heading: 'Results & Impact',
          body: [
            'Usability testing showed the core promise held: people started planning without being taught how.'
          ],
          metrics: [
            { value: '40KB', label: 'gzipped bundle' },
            { value: '6', label: 'usability testers' },
            { value: '4.8/5', label: 'ease-of-use score' }
          ],
          quote: {
            text: 'Opened it, typed a task, and I was already planning. No setup, no sign-up.',
            author: 'TEST PARTICIPANT 03'
          }
        },
        {
          heading: 'Takeaways',
          body: [
            'Restraint is a feature. Every element I removed made the board faster to read and faster to use.',
            'The next version would add shared boards via a single link — still without accounts, still offline-first.'
          ]
        }
      ]
    },

    'weatherly': {
      title: 'Weatherly',
      tagline: 'The forecast, without the clutter',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=900&h=500',
      tech: ['Vanilla JavaScript', 'CSS', 'OpenWeather API'],
      meta: [
        { label: 'Role', value: 'Design + Front-end' },
        { label: 'Timeline', value: '3 weeks' },
        { label: 'Team', value: 'Solo' },
        { label: 'Year', value: '2024' }
      ],
      demo: '#',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'Weatherly is a minimal weather app with animated SVG icons and a clean seven-day forecast.',
            'The goal was simple: checking the weather should take two seconds and zero thought.',
            'It ships as a single page with no framework and no dependencies — under 20KB total.'
          ],
          metrics: [
            { value: '20KB', label: 'total weight' },
            { value: '0', label: 'dependencies' },
            { value: '2s', label: 'typical session' }
          ]
        },
        {
          heading: 'The Problem',
          body: [
            'Weather apps are either ad-stuffed or overloaded with radar layers, air-quality indexes, and ten-day graphs that nobody reads on a phone at seven in the morning.',
            'What people actually want is one answer: what do I wear today?'
          ],
          features: [
            'Too much data competing for attention on a tiny screen',
            'Slow loads on mobile networks, especially in bad weather',
            'Location permission demanded before any value is delivered'
          ]
        },
        {
          heading: 'Research & Insights',
          body: [
            'I tore down the five most-downloaded weather apps and asked eight people what they actually check when they open one.'
          ],
          features: [
            'Everyone checks the current temperature first',
            'The seven-day view is a weekly ritual, not a daily one',
            'Rain probability is the single most-watched metric after temperature'
          ],
          quote: {
            text: 'I open it, look at the number, and close it. That\u2019s it.',
            author: 'INTERVIEW PARTICIPANT 06'
          }
        },
        {
          heading: 'Goals & Success Metrics',
          body: [
            'The constraint became the design method. A hard payload budget forced every feature to justify itself.'
          ],
          metrics: [
            { value: '<20KB', label: 'payload budget' },
            { value: '1', label: 'screen, no tabs' },
            { value: 'AA', label: 'contrast ratio' }
          ],
          features: [
            'Show current conditions in under one second',
            'Make rain probability impossible to miss',
            'Work with or without geolocation permission'
          ]
        },
        {
          heading: 'Process',
          body: [
            'Three weeks, four passes, and a lot of deleting.'
          ],
          steps: [
            { title: 'Audit', desc: 'Teardown of five leading weather apps, cataloguing every element and asking whether it earned its space.' },
            { title: 'Wireframe', desc: 'One screen with three tiers of information: now, today, this week.' },
            { title: 'Motion', desc: 'Hand-tuned SVG icon animations that run on CSS only, no animation library.' },
            { title: 'Build', desc: 'Vanilla JavaScript against the OpenWeather API with a local cache layer.' }
          ]
        },
        {
          heading: 'The Solution',
          body: [
            'One screen, three tiers of information, and nothing else.'
          ],
          features: [
            'Animated SVG weather icons for sun, rain, snow, and storms',
            'Seven-day forecast with expandable hourly detail',
            'Geolocation with a manual city search fallback',
            'Units and language preferences saved locally',
            'Zero dependencies, under 20KB total'
          ]
        },
        {
          heading: 'Design Details',
          body: [
            'Typography does the heavy lifting: a large temperature, a small condition label, and a forecast strip that reads like a calendar.'
          ],
          features: [
            'Temperature set at 96px with tabular figures so it never jitters',
            'Background gradient shifts subtly by weather condition',
            'Icons drawn as a single SVG path set, animated with stroke-dashoffset',
            'No chart, no radar, no ads'
          ],
          note: 'Tabular figures matter more than they sound — without them the temperature visibly shifts width every time it updates.'
        },
        {
          heading: 'Challenges & Trade-offs',
          body: [
            'Third-party APIs are unpredictable, and rate limits hit fast during testing.',
            'I added a ten-minute cache in localStorage and a graceful empty state for failed requests, so the app never shows a spinner for longer than a second.',
            'Animating SVG icons without a library meant keeping the paths simple enough to animate cleanly with stroke-dashoffset — which, conveniently, also kept the file small.'
          ]
        },
        {
          heading: 'Results & Impact',
          body: [
            'The app met its budget and, more importantly, its purpose: people stopped scrolling and just read the number.'
          ],
          metrics: [
            { value: '20KB', label: 'total weight' },
            { value: '0.9s', label: 'load on 4G' },
            { value: '0', label: 'dependencies' }
          ],
          quote: {
            text: 'It tells me the temperature and gets out of the way. That\u2019s the whole review.',
            author: 'DAILY USER'
          }
        },
        {
          heading: 'Takeaways',
          body: [
            'Constraints make products better. The 20KB budget forced every decision, and almost all of them were improvements.',
            'Next: a compact widget view designed for a lock screen, where the forecast has about two seconds and two lines to prove itself.'
          ]
        }
      ]
    },

    'palette-peek': {
      title: 'Palette Peek',
      tagline: 'Color palettes from any image, with contrast built in',
      image: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=900&h=500',
      tech: ['Canvas API', 'TypeScript', 'CSS'],
      meta: [
        { label: 'Role', value: 'Product Design + TypeScript' },
        { label: 'Timeline', value: '4 weeks' },
        { label: 'Team', value: 'Solo' },
        { label: 'Year', value: '2024' }
      ],
      demo: '#',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'Palette Peek extracts a usable colour palette from any image and checks every colour for contrast before you use it.',
            'It was born out of a personal annoyance: pulling colours from a mood board, then manually checking each one against WCAG in a separate tab.',
            'Everything runs in the browser on a canvas — no uploads, no server, no account.'
          ],
          metrics: [
            { value: '5', label: 'colours per palette' },
            { value: 'AA/AAA', label: 'contrast checks' },
            { value: '1', label: 'click to copy' }
          ]
        },
        {
          heading: 'The Problem',
          body: [
            'Designers pull colours from images constantly, but the tools that do it stop at extraction.',
            'You still have to check contrast manually, convert between formats, and remember where you saved the palette three days later.'
          ],
          features: [
            'Extraction tools ignore accessibility entirely',
            'Copying hex, RGB, and HSL one value at a time is tedious',
            'Palettes get lost across tabs, notes, and screenshots'
          ]
        },
        {
          heading: 'Research & Insights',
          body: [
            'I talked to nine designers about their colour workflow, from brand designers to front-end engineers.'
          ],
          features: [
            'Most pull colours from photography or brand screenshots',
            'Contrast checking happens late — often after design review',
            'Everyone wanted one-click copy in multiple formats'
          ],
          quote: {
            text: 'I know contrast matters. I just don\u2019t want to do maths in the middle of designing.',
            author: 'PRODUCT DESIGNER · INTERVIEW 05'
          }
        },
        {
          heading: 'Goals & Success Metrics',
          body: [
            'The product had to be faster than the manual workflow it replaced, or nobody would switch.'
          ],
          metrics: [
            { value: '<500ms', label: 'extraction time' },
            { value: 'AA/AAA', label: 'contrast accuracy' },
            { value: '1', label: 'click to copy' }
          ],
          features: [
            'Extract a balanced palette from any image in under half a second',
            'Show pass/fail contrast against black and white immediately',
            'Let designers save and revisit palettes locally'
          ]
        },
        {
          heading: 'Process',
          body: [
            'The interesting work happened in the algorithm, not the interface.'
          ],
          steps: [
            { title: 'Interviews', desc: 'Nine designers on colour workflows, tooling, and where accessibility checks currently break down.' },
            { title: 'Algorithm', desc: 'Compared k-means against median-cut quantisation for speed and palette quality.' },
            { title: 'Interface', desc: 'Drag-and-drop first; everything else — formats, saving, contrast — sits behind the swatches.' },
            { title: 'Build', desc: 'Canvas for extraction, TypeScript for the colour maths, plain CSS for the UI.' }
          ]
        },
        {
          heading: 'The Solution',
          body: [
            'Drop an image and the palette appears, already sorted by prominence, with contrast results printed directly on each swatch.'
          ],
          features: [
            'Drag-and-drop image input with no server upload',
            'Median-cut quantisation on a downscaled canvas',
            'Automatic WCAG AA / AAA contrast checks',
            'One-click copy for hex, RGB, and HSL',
            'Save palettes to a local collection'
          ]
        },
        {
          heading: 'Design Details',
          body: [
            'The palette itself is the interface — big swatches you can click, with the results printed on them rather than hidden in a menu.'
          ],
          features: [
            'Swatches sized by how prominent the colour is in the image',
            'Pass/fail badges printed on the swatch, not buried in a panel',
            'Automatic black or white text per swatch for readability',
            'Keyboard copy with Enter, format switch with Tab'
          ],
          note: 'Showing the actual contrast ratio next to a failing colour turned out to be far more persuasive than a red cross.'
        },
        {
          heading: 'Challenges & Trade-offs',
          body: [
            'Naive k-means was slow and produced muddy, greyish palettes on photographic images.',
            'Median-cut on a 100x100 downscale gave noticeably better results in a fraction of the time, and sorting the output by prominence made it feel curated rather than random.',
            'Contrast maths is easy; explaining a failure is harder — so each swatch shows the ratio, not just a warning.'
          ]
        },
        {
          heading: 'Results & Impact',
          body: [
            'Designers using the tool started catching contrast problems during exploration instead of after review — which was the entire point.'
          ],
          metrics: [
            { value: '<400ms', label: 'extraction time' },
            { value: '5', label: 'swatches per palette' },
            { value: 'AA/AAA', label: 'checked automatically' }
          ],
          quote: {
            text: 'It\u2019s the first palette tool that tells me when a colour is unusable.',
            author: 'BRAND DESIGNER'
          }
        },
        {
          heading: 'Takeaways',
          body: [
            'Accessibility is easier to adopt when it is shown, not enforced. A visible ratio changes behaviour; a hidden warning does not.',
            'The next version would generate accessible tints and shades from any swatch, so a single extracted colour could become a full ramp.'
          ]
        }
      ]
    },

    ' ': {
      title: 'Namma Yatri',
      tagline: 'Frictionless civic complaint flow that removes administrative burden from citizens and moves it into the system.',
      image: 'Namma Yatri assignment/images/hero-image.png',
      tech: ['UX Research', 'Mobile Design', 'Civic Tech'],
      meta: [
        { label: 'Role', value: 'Product Designer' },
        { label: 'Timeline', value: '4 weeks' },
        { label: 'Focus', value: 'Citizen experience' },
        { label: 'Year', value: '2026' }
      ],
      demo: '#',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'This project redesigns the civic reporting experience around a single principle: ask the citizen only what they know, and let the system handle the administrative complexity.',
            'The result is a reporting flow that takes seconds, a tracking model that separates submission from verification, and a public layer that shows civic progress without exposing the people who reported it.'
          ],
          metrics: [
            { value: '1', label: 'single flow' },
            { value: '0', label: 'manual admin steps' },
            { value: 'faster', label: 'reporting' }
          ]
        },
        {
          heading: 'Problem',
          body: [
            'Civic complaint journeys are often loud, confusing, and bureaucratic. People do not know what category to choose, which department to reach, or whether their complaint has been accepted.',
            'The app needed to reduce the administrative burden from citizens while making the reporting process transparent and traceable for local teams.'
          ],
          features: [
            'Too many required details early on',
            'Unclear department mapping',
            'Low confidence in status and progress'
          ]
        },
        {
          heading: 'Design approach',
          body: [
            'The design reduces friction by making each step feel small, guided, and respectful of user knowledge.'
          ],
          steps: [
            { title: 'Map the journey', desc: 'Understand what citizens can legitimately report and which details can be inferred by the system.' },
            { title: 'Simplify the ask', desc: 'Collect only what is needed to file a complaint and move the rest into backend logic.' },
            { title: 'Separate status from truth', desc: 'Show public progress without exposing the private identity details of the person who reported it.' }
          ]
        },
        {
          heading: 'Outcome',
          body: [
            'The final flow turns a confusing civic task into a faster, calmer, more trustworthy interaction — better for citizens and for the teams behind the service.'
          ],
          metrics: [
            { value: 'clearer', label: 'reporting flow' },
            { value: 'faster', label: 'triage' },
            { value: 'more', label: 'trust' }
          ]
        }
      ]
    },

    'gymogram': {
      title: 'Gymogram',
      tagline: 'A social fitness platform that keeps people motivated through community, progress, and gamification.',
      image: 'images/gymogram/hero mock-up.png',
      tech: ['Product Design', 'iOS', 'Gamification'],
      meta: [
        { label: 'Role', value: 'Product Designer' },
        { label: 'Timeline', value: '4 weeks' },
        { label: 'Platform', value: 'iOS app' },
        { label: 'Year', value: '2026' }
      ],
      demo: '#',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'Gymogram combines personalized training, social accountability, and progress tracking into a single product experience.',
            'It is designed to help people stay consistent through community, milestones, and habit loops that feel motivating rather than overwhelming.'
          ],
          metrics: [
            { value: 'goal', label: 'driven flow' },
            { value: 'social', label: 'habit support' },
            { value: 'clear', label: 'progress cues' }
          ]
        },
        {
          heading: 'Problem',
          body: [
            'Most fitness apps either become a checklist or a social feed. Users want guidance and accountability, but they do not want to spend all day managing tasks inside the app.'
          ],
          features: [
            'Low motivation after the first week',
            'Too much app complexity',
            'Unclear fitness progression'
          ]
        },
        {
          heading: 'Design strategy',
          body: [
            'The product centers on a daily rhythm: plan, complete, reflect, and celebrate. Each loop is designed to reduce friction and reinforce momentum.'
          ],
          steps: [
            { title: 'Workout planning', desc: 'Keep routines simple and realistic for daily life.' },
            { title: 'Progress visibility', desc: 'Surface streaks and wins in a way that feels supportive instead of competitive.' },
            { title: 'Social layer', desc: 'Allow community validation without making the app feel like a noisy feed.' }
          ]
        },
        {
          heading: 'Outcome',
          body: [
            'The result is a fitness experience that feels motivating, personal, and sustainable — not just a collection of features, but a system that supports habit formation.'
          ],
          metrics: [
            { value: 'consistent', label: 'workout loops' },
            { value: 'supportive', label: 'community' },
            { value: 'clear', label: 'progress logic' }
          ]
        }
      ]
    },

    'job-pulse': {
      title: 'Job Pulse',
      tagline: 'A real-time job dashboard that turns job feeds into a calmer, more actionable signal for candidates and recruiters.',
      image: 'images/job-pulse.png',
      tech: ['Full Stack', 'UI/UX', 'Live App'],
      meta: [
        { label: 'Role', value: 'Product Designer + Developer' },
        { label: 'Timeline', value: '6 weeks' },
        { label: 'Type', value: 'Live dashboard' },
        { label: 'Year', value: '2026' }
      ],
      demo: 'https://job-pulse-toie.onrender.com/',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'Job Pulse aggregates live listings and filters the noise into a clearer dashboard for job discovery.',
            'It helps users prioritize the job opportunities that matter most without spending time manually scraping several sources.'
          ],
          metrics: [
            { value: 'real-time', label: 'updates' },
            { value: 'clear', label: 'filtering' },
            { value: 'focused', label: 'job flow' }
          ]
        },
        {
          heading: 'Problem',
          body: [
            'Most job boards are filled with duplicate or generic results. Users lose hours sorting through noisy listings, many of which do not match the role they actually want.'
          ],
          features: [
            'Job overload',
            'Weak prioritization',
            'Noisy signal and duplicate listings'
          ]
        },
        {
          heading: 'Build approach',
          body: [
            'The platform combines live data aggregation with adaptive filters and a cleaner UI so users can see the signal earlier and act faster.'
          ],
          steps: [
            { title: 'Feed ingestion', desc: 'Gather listings from multiple sources into a single, normalized stream.' },
            { title: 'Filter logic', desc: 'Provide role, location, and keyword controls that make the dashboard feel focused.' },
            { title: 'Dashboard clarity', desc: 'Lower the visual burden and highlight the most relevant roles as soon as they appear.' }
          ]
        },
        {
          heading: 'Outcome',
          body: [
            'The final product creates a more intentional job-discovery experience and reduces the time spent hunting for relevant roles.'
          ],
          metrics: [
            { value: 'live', label: 'job signals' },
            { value: 'clearer', label: 'search' },
            { value: 'faster', label: 'decisions' }
          ]
        }
      ]
    },

    'bench-sales': {
      title: 'Bench Sales Platform',
      tagline: 'An AI-assisted staffing platform for managing consultant availability, submissions, and recruiter decision-making.',
      image: 'images/benchsales.png',
      tech: ['B2B SaaS', 'AI Product Design', 'NDA'],
      meta: [
        { label: 'Role', value: 'AI Product Designer' },
        { label: 'Timeline', value: '3 months' },
        { label: 'Industry', value: 'Staffing & recruitment' },
        { label: 'Year', value: '2025' }
      ],
      demo: '#',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'Bench Sales is a recruiting platform built to help recruiters manage consultant profiles, client requirements, and placement workflows from a unified dashboard.',
            'The goal was to reduce admin work, centralize candidate visibility, and improve the speed of recruiter decisions.'
          ],
          metrics: [
            { value: '1', label: 'recruiter workspace' },
            { value: 'AI', label: 'matching support' },
            { value: 'faster', label: 'placement cycle' }
          ]
        },
        {
          heading: 'Problem',
          body: [
            'Recruiters were juggling spreadsheets, email updates, and disconnected tools to track consultant status and client requirements. As the pipeline grew, so did manual effort and confusion.'
          ],
          features: [
            'Disconnected key data',
            'Slow submission visibility',
            'Duplicate or delayed placement effort'
          ]
        },
        {
          heading: 'Design strategy',
          body: [
            'The platform was built around the complete funnel: consultant management, requirement tracking, submission status, and AI-assisted matching.'
          ],
          steps: [
            { title: 'Consultant overview', desc: 'Keep skills, availability, and placement history visible at a glance.' },
            { title: 'Requirement dashboard', desc: 'Prioritize active client requests and track them within a single pipeline.' },
            { title: 'AI recommendation layer', desc: 'Suggest the most relevant consultant matches and reduce manual searching.' }
          ]
        },
        {
          heading: 'Outcome',
          body: [
            'The final experience reduces operational drag and makes staffing decisions more confident, visible, and scalable.'
          ],
          metrics: [
            { value: 'clearer', label: 'operational view' },
            { value: 'smarter', label: 'matching' },
            { value: 'faster', label: 'decisions' }
          ]
        }
      ]
    },

    'lead-generator': {
      title: 'Lead Generator',
      tagline: 'An AI-powered lead discovery workflow designed for faster prospecting and better sales prioritization.',
      image: 'images/lead%20generator.png',
      tech: ['AI Product Design', 'Sales Workflow', 'Enterprise SaaS'],
      meta: [
        { label: 'Role', value: 'Staff Designer' },
        { label: 'Timeline', value: '4 months' },
        { label: 'Industry', value: 'Developer SaaS' },
        { label: 'Year', value: '2025' }
      ],
      demo: '#',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'Lead Generator helps sales teams identify, qualify, and manage high-potential prospects without the manual grind of multi-tool research.',
            'It combines AI-assisted discovery with a manageable pipeline so teams can focus their efforts on the right opportunities.'
          ],
          metrics: [
            { value: 'AI', label: 'lead discovery' },
            { value: '1', label: 'centralized workspace' },
            { value: 'effective', label: 'priority routing' }
          ]
        },
        {
          heading: 'Problem',
          body: [
            'Sales teams were stitching together lead data from several disconnected sources, leading to slow follow-ups, inconsistent qualification, and poor prioritization.'
          ],
          features: [
            'Slow research cycles',
            'Inconsistent prospect quality',
            'Manual prioritization burden'
          ]
        },
        {
          heading: 'Design details',
          body: [
            'The experience focuses on discovery, qualification, and pipeline visibility so sales teams can act efficiently without losing confidence in their decisions.'
          ],
          steps: [
            { title: 'Discovery', desc: 'Map new companies and contacts based on industry fit, priority scoring, and relevance.' },
            { title: 'Qualification', desc: 'Show context-rich company and contact signals so the team can decide quickly.' },
            { title: 'Pipeline tracking', desc: 'Keep outreach status, next steps, and engagement in one place.' }
          ]
        },
        {
          heading: 'Result',
          body: [
            'The solution creates a more coordinated sales workflow and reduces the manual effort of lead research so teams can spend more time on the conversations that matter.'
          ],
          metrics: [
            { value: 'faster', label: 'discovery' },
            { value: 'clearer', label: 'qualification' },
            { value: 'better', label: 'sales focus' }
          ]
        }
      ]
    },

    'laundry-app': {
      title: 'Laundry App',
      tagline: 'An on-demand laundry service experience designed around clarity, trust, and repeat convenience.',
      image: 'images/laundry app hero section.png',
      tech: ['UX Research', 'Mobile Design', 'Figma'],
      meta: [
        { label: 'Role', value: 'UX Designer' },
        { label: 'Timeline', value: '2 weeks' },
        { label: 'Domain', value: 'On-demand service' },
        { label: 'Year', value: '2025' }
      ],
      demo: '#',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'This app redesign focuses on the complete service journey — booking, management, pickup, and follow-up — with a strong emphasis on clarity and predictability.',
            'The goal was to build trust in a service that can often feel uncertain and time-sensitive.'
          ],
          metrics: [
            { value: 'clear', label: 'journey' },
            { value: 'trust', label: 'confidence' },
            { value: 'simple', label: 'flow' }
          ]
        },
        {
          heading: 'Problem',
          body: [
            'Customers were often unsure when pickup would happen, how service status was communicated, and what was included in the booking process. That uncertainty created friction in a household service that should feel effortless.'
          ],
          features: [
            'Unclear scheduling',
            'Weak status communication',
            'Low trust in service flow'
          ]
        },
        {
          heading: 'Design approach',
          body: [
            'The product reduces anxiety by making the service journey explicit, segmented, and reassuring at each step.'
          ],
          steps: [
            { title: 'Booking flow', desc: 'Keep choices simple and the order summary clear from the start.' },
            { title: 'Status transparency', desc: 'Show the user where the service stands without hidden gaps.' },
            { title: 'Repeat usability', desc: 'Design the experience so usage feels frictionless and familiar across repeat orders.' }
          ]
        },
        {
          heading: 'Outcome',
          body: [
            'The final app creates a calmer, more reliable household service experience that blends simplicity with trust.'
          ],
          metrics: [
            { value: 'fewer', label: 'decision points' },
            { value: 'more', label: 'clarity' },
            { value: 'better', label: 'repeat use' }
          ]
        }
      ]
    },

    'leo-design': {
      title: 'Leo Design System',
      tagline: 'A scalable design system built for enterprise product teams who need consistency without sacrificing speed.',
      image: 'images/designsystem.png',
      tech: ['Design Systems', 'Figma', 'Tokens'],
      meta: [
        { label: 'Role', value: 'Design Systems Lead' },
        { label: 'Timeline', value: '6 weeks' },
        { label: 'Focus', value: 'Foundations & tokens' },
        { label: 'Year', value: '2025' }
      ],
      demo: '#',
      code: '#',
      pages: [
        {
          heading: 'Overview',
          body: [
            'Leo is a design system built to create consistency across product surfaces and reduce repeated product-level decision-making.',
            'It focuses on tokens, reusable patterns, and semantic rules that help teams move faster without sacrificing clarity.'
          ],
          metrics: [
            { value: 'system', label: 'language' },
            { value: 'tokens', label: 'foundation' },
            { value: 'scalable', label: 'pattern set' }
          ]
        },
        {
          heading: 'Problem',
          body: [
            'Without a shared foundation, teams repeated UX decisions across screens and experiences, making products feel inconsistent and difficult to scale.'
          ],
          features: [
            'Inconsistent patterns',
            'Repeated design decisions',
            'Slow handoff and implementation drift'
          ]
        },
        {
          heading: 'Structure',
          body: [
            'The system includes tokenized color and spacing rules, reusable primitives, and semantic usage guidelines for enterprise UI patterns.'
          ],
          steps: [
            { title: 'Foundations', desc: 'Define tokens for color, spacing, typography, and motion.' },
            { title: 'Primitives', desc: 'Create the reusable building blocks that form the visual language.' },
            { title: 'Usage rules', desc: 'Document how and when components should be applied in product contexts.' }
          ]
        },
        {
          heading: 'Outcome',
          body: [
            'The system gives teams a common language, shortens implementation time, and keeps product experiences coherent as they scale.'
          ],
          metrics: [
            { value: 'faster', label: 'delivery' },
            { value: 'consistent', label: 'experience' },
            { value: 'clearer', label: 'system' }
          ]
        }
      ]
    }
  };

  /* ================= BUILD SPIRAL RINGS ================= */
  (function buildBinding(){
    const binding = document.getElementById('binding');
    const COUNT = 15;
    for (let i = 0; i < COUNT; i++){
      const ring = document.createElement('div');
      ring.className = 'ring';
      ring.style.animationDelay = (1.0 + i * 0.045) + 's';
      binding.appendChild(ring);
    }
  })();

  /* ================= ELEMENTS ================= */
  const cover     = document.getElementById('cover');
  const notebook  = document.getElementById('notebook');
  const book      = document.getElementById('book');
  const indexPage = document.getElementById('index');
  const paperContainer = document.getElementById('paper-container');

  const tabs      = document.querySelectorAll('.tabs-main .tab');
  const pages     = document.querySelectorAll('.page');

  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

  let opened  = false;
  let closing = false;
  let isFlipping = false;
  let currentProjectId = null;
  const confidentialProjects = new Set(['bench-sales', 'lead-generator', 'herso']);

  function applyConfidentialState(projectId){
    const isConfidential = confidentialProjects.has(projectId);

    document.querySelectorAll('.project-card').forEach((card) => {
      card.classList.toggle('confidential', !!projectId && card.dataset.project === projectId && isConfidential);
    });

    const detailHero = document.querySelector('.detail-hero');
    if (detailHero) {
      detailHero.classList.toggle('confidential', isConfidential);
      detailHero.setAttribute('data-project', isConfidential ? projectId : '');
    }
  }

  /* ================= MOBILE MENU ELEMENTS ================= */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  let lastMenuFocus = null;

  /* ================= COVER: OPEN ================= */
  function openNotebook(){
    if (opened || closing) return;
    opened = true;

    cover.classList.remove('open');
    void cover.offsetWidth;
    cover.classList.add('open');

    setTimeout(() => {
      notebook.classList.add('revealed');
      indexPage.classList.add('active');
    }, 240);

    setTimeout(() => cover.classList.add('gone'), 1150);

    setTimeout(() => {
      cover.style.visibility = 'hidden';
      cover.style.pointerEvents = 'none';
    }, 1780);
  }

  /* ================= COVER: CLOSE ================= */
  function closeNotebook(){
    if (!opened || closing) return;
    closing = true;

    if (mobileMenu && mobileMenu.classList.contains('open')) closeMobileMenu(false);

    currentProject = null;
    currentProjectId = null;
    notebook.classList.remove('revealed');

    pages.forEach(p => p.classList.remove('active', 'flipping'));
    indexPage.classList.add('active');
    tabs.forEach(t => t.classList.toggle('active', t.dataset.page === 'index'));

    setTimeout(() => {
      cover.style.visibility = 'visible';
      cover.style.pointerEvents = 'none';
      cover.classList.remove('gone', 'open');
      void cover.offsetWidth;
      cover.classList.add('closing');

      setTimeout(() => {
        cover.classList.remove('closing');
        cover.style.pointerEvents = 'auto';
        opened = false;
        closing = false;
      }, 1250);
    }, 400);
  }

  cover.addEventListener('click', openNotebook);
  cover.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      openNotebook();
    }
  });

  document.getElementById('back-to-cover').addEventListener('click', closeNotebook);

  /* ================= MOBILE MENU LOGIC ================= */
  function setMobileMenuActive(){
    if (!mobileMenu) return;

    let currentId = document.querySelector('.page.active') ? document.querySelector('.page.active').id : '';
    if (currentId === 'project-detail') currentId = 'projects';

    mobileMenu.querySelectorAll('.mobile-menu-link[data-page]').forEach(function(link){
      link.classList.toggle('active', link.dataset.page === currentId);
    });

    mobileMenu.querySelectorAll('.mobile-menu-link[data-project]').forEach(function(link){
      link.classList.toggle('active', !!currentProjectId && link.dataset.project === currentProjectId);
    });
  }

  function openMobileMenu(){
    if (!mobileMenu || mobileMenu.classList.contains('open')) return;

    lastMenuFocus = document.activeElement;
    setMobileMenuActive();

    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-menu-open');

    setTimeout(function(){
      if (mobileMenuClose) mobileMenuClose.focus();
    }, 50);
  }

  function closeMobileMenu(restoreFocus){
    if (!mobileMenu || !mobileMenu.classList.contains('open')) return;

    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-menu-open');

    if (restoreFocus !== false && lastMenuFocus && typeof lastMenuFocus.focus === 'function'){
      lastMenuFocus.focus();
    }
  }

  if (mobileMenuBtn){
    mobileMenuBtn.addEventListener('click', function(e){
      e.stopPropagation();
      openMobileMenu();
    });
  }

  if (mobileMenuClose){
    mobileMenuClose.addEventListener('click', function(){
      closeMobileMenu(true);
    });
  }

  if (mobileMenu){
    mobileMenu.addEventListener('click', function(e){
      if (e.target.matches('[data-close-menu]') || e.target.closest('[data-close-menu]')){
        closeMobileMenu(true);
      }
    });
  }

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')){
      closeMobileMenu(true);
    }
  });

  if (mobileMenu){
    mobileMenu.querySelectorAll('.mobile-menu-link').forEach(function(link){
      link.addEventListener('click', function(e){
        e.preventDefault();

        if (link.dataset.cover === 'true'){
          closeMobileMenu(false);
          closeNotebook();
          return;
        }

        if (link.dataset.project){
          var projectId = link.dataset.project;
          closeMobileMenu(false);
          openProject(projectId);
          return;
        }

        if (link.dataset.page){
          var pageId = link.dataset.page;
          var targetPage = document.getElementById(pageId);
          if (targetPage){
            closeMobileMenu(false);
            tabs.forEach(function(t){ t.classList.toggle('active', t.dataset.page === pageId); });
            flipToPage(targetPage);
          }
        }
      });
    });
  }

  /* ================= PAGE FLIP HELPER ================= */
  function flipToPage(nextPage){
    if (isFlipping) return false;
    const prevPage = document.querySelector('.page.active');
    if (!nextPage || prevPage === nextPage) return false;

    if (mobileMenu && mobileMenu.classList.contains('open')) closeMobileMenu(false);

    isFlipping = true;

    if (prevPage){
      prevPage.classList.remove('active');
      prevPage.classList.add('flipping');
    }
    nextPage.classList.add('active');
    nextPage.scrollTop = 0;

    setTimeout(() => {
      if (prevPage) prevPage.classList.remove('flipping');
      isFlipping = false;
      setMobileMenuActive();
    }, 880);

    return true;
  }

  /* ================= TAB NAVIGATION ================= */
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isFlipping) return;
      const targetPage = document.getElementById(tab.dataset.page);
      const currentPage = document.querySelector('.page.active');
      if (targetPage === currentPage) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      flipToPage(targetPage);
    });
  });

  /* ================= CLICK TO TURN PAGE (pointer devices only) ================= */
  paperContainer.addEventListener('click', (e) => {
    if (isCoarsePointer) return;

    if (e.target.closest('a, button, input, .tabs, .project-card, .index-item, .index-search, .detail-nav, .detail-topbar, .detail-links, .detail-body')) {
      return;
    }

    if (window.getSelection().toString().length > 0) {
      return;
    }

    const rect = paperContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isLeftSide = clickX < (rect.width * 0.15);

    const currentPage = document.querySelector('.page.active');
    if (!currentPage) return;

    const currentId = currentPage.id;

    if (currentId === 'project-detail' && currentProject) {
      if (isLeftSide) {
        if (currentPageIdx > 0) {
          renderDetailPage(currentPageIdx - 1, 'prev');
        } else {
          flipToPage(document.getElementById('projects'));
          tabs.forEach(t => t.classList.toggle('active', t.dataset.page === 'projects'));
        }
      } else {
        if (currentPageIdx < currentProject.pages.length - 1) {
          renderDetailPage(currentPageIdx + 1, 'next');
        } else {
          flipToPage(document.getElementById('skills'));
          tabs.forEach(t => t.classList.toggle('active', t.dataset.page === 'skills'));
        }
      }
      return;
    }

    const mainPages = ['index', 'about', 'projects', 'skills', 'contact', 'final'];
    let currentIndex = mainPages.indexOf(currentId);

    if (currentIndex !== -1) {
      if (isLeftSide) {
        let prevIndex = (currentIndex - 1 + mainPages.length) % mainPages.length;
        const prevPage = document.getElementById(mainPages[prevIndex]);
        tabs.forEach(t => t.classList.toggle('active', t.dataset.page === mainPages[prevIndex]));
        flipToPage(prevPage);
      } else {
        let nextIndex = (currentIndex + 1) % mainPages.length;
        const nextPage = document.getElementById(mainPages[nextIndex]);
        tabs.forEach(t => t.classList.toggle('active', t.dataset.page === mainPages[nextIndex]));
        flipToPage(nextPage);
      }
    }
  });

  /* ================= TOUCH SWIPE NAVIGATION ================= */
  let touchStartX = 0;
  let touchStartY = 0;
  let touchTracking = false;

  paperContainer.addEventListener('touchstart', function(e){
    if (e.touches.length !== 1){ touchTracking = false; return; }
    const t = e.touches[0];
    if (t.clientX < 24 || t.clientX > window.innerWidth - 24){ touchTracking = false; return; }
    touchStartX = t.clientX;
    touchStartY = t.clientY;
    touchTracking = true;
  }, { passive: true });

  paperContainer.addEventListener('touchend', function(e){
    if (!touchTracking) return;
    touchTracking = false;

    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;

    if (Math.abs(dx) < 70) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.6) return;
    if (isFlipping) return;

    const goNext = dx < 0;

    const currentPage = document.querySelector('.page.active');
    if (!currentPage) return;
    const currentId = currentPage.id;

    if (currentId === 'project-detail' && currentProject){
      if (goNext){
        if (currentPageIdx < currentProject.pages.length - 1){
          renderDetailPage(currentPageIdx + 1, 'next');
        }
      } else {
        if (currentPageIdx > 0){
          renderDetailPage(currentPageIdx - 1, 'prev');
        } else {
          tabs.forEach(t2 => t2.classList.toggle('active', t2.dataset.page === 'projects'));
          flipToPage(document.getElementById('projects'));
        }
      }
      return;
    }

    const mainPages = ['index', 'about', 'projects', 'skills', 'contact', 'final'];
    const idx = mainPages.indexOf(currentId);
    if (idx === -1) return;

    const nextIdx = goNext
      ? (idx + 1) % mainPages.length
      : (idx - 1 + mainPages.length) % mainPages.length;

    tabs.forEach(t2 => t2.classList.toggle('active', t2.dataset.page === mainPages[nextIdx]));
    flipToPage(document.getElementById(mainPages[nextIdx]));
  }, { passive: true });

  /* ================= INDEX PAGE SEARCH ================= */
  const searchInput = document.getElementById('search-input');
  const indexItems = document.querySelectorAll('.index-item');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    indexItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? 'flex' : 'none';
    });
  });

  indexItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const targetId = item.dataset.target;
      const projectId = item.dataset.project;

      if (targetId === 'project-detail' && projectId) {
        openProject(projectId);
      } else {
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
          tabs.forEach(t => t.classList.toggle('active', t.dataset.page === targetId));
          flipToPage(targetPage);
        }
      }
    });
  });

  /* ================= PROJECT DETAIL / CASE STUDY ================= */
  const detailPage    = document.getElementById('project-detail');
  const detailImage   = document.getElementById('detail-image');
  const detailTitle   = document.getElementById('detail-title');
  const detailTagline = document.getElementById('detail-tagline');
  const detailMeta    = document.getElementById('detail-meta');
  const detailTech    = document.getElementById('detail-tech');
  const detailBody    = document.getElementById('detail-body');
  const detailCounter = document.getElementById('detail-counter');
  const detailDots    = document.getElementById('detail-dots');
  const detailPrev    = document.getElementById('detail-prev');
  const detailNext    = document.getElementById('detail-next');
  const detailDemo    = document.getElementById('detail-demo');
  const detailCode    = document.getElementById('detail-code');
  const detailPageNum = document.getElementById('detail-page-num');

  let currentProject = null;
  let currentPageIdx = 0;

  function openProject(id){
    const data = PROJECTS[id];
    if (!data) return;

    currentProject = data;
    currentProjectId = id;
    currentPageIdx = 0;
    applyConfidentialState(id);

    detailImage.src = data.image;
    detailImage.alt = data.title;
    detailTitle.textContent = data.title;
    detailTagline.textContent = data.tagline;
    detailTech.textContent = data.tech.join(' · ');
    detailDemo.href = data.demo;
    detailCode.href = data.code;

    detailMeta.innerHTML = (data.meta || []).map(function(m){
      return '<span><b>' + m.label + '</b> · ' + m.value + '</span>';
    }).join('');

    renderDetailPage(0, 'initial');

    tabs.forEach(t => t.classList.toggle('active', t.dataset.page === 'projects'));
    flipToPage(detailPage);
  }

  function renderDetailPage(index, direction){
    if (!currentProject) return;
    const pageList = currentProject.pages || [];
    const total = pageList.length;
    if (index < 0 || index >= total) return;

    currentPageIdx = index;
    const data = pageList[index];

    let html = '<h3>' + data.heading + '</h3>';

    if (data.body && data.body.length){
      data.body.forEach(function(para){
        html += '<p>' + para + '</p>';
      });
    }

    if (data.metrics && data.metrics.length){
      html += '<div class="detail-metrics">';
      data.metrics.forEach(function(m){
        html += '<div class="detail-metric"><b>' + m.value + '</b><span>' + m.label + '</span></div>';
      });
      html += '</div>';
    }

    if (data.steps && data.steps.length){
      html += '<ol class="detail-steps">';
      data.steps.forEach(function(s){
        html += '<li><b>' + s.title + '</b>' + s.desc + '</li>';
      });
      html += '</ol>';
    }

    if (data.features && data.features.length){
      html += '<ul class="detail-features">';
      data.features.forEach(function(f){
        html += '<li>' + f + '</li>';
      });
      html += '</ul>';
    }

    if (data.quote){
      html += '<blockquote class="detail-quote">\u201C' + data.quote.text +
              '\u201D<cite>' + data.quote.author + '</cite></blockquote>';
    }

    if (data.note){
      html += '<p class="detail-note">' + data.note + '</p>';
    }

    detailBody.innerHTML = html;

    detailBody.classList.remove('page-enter-left', 'page-enter-right');
    void detailBody.offsetWidth;
    if (direction === 'prev'){
      detailBody.classList.add('page-enter-left');
    } else if (direction === 'next'){
      detailBody.classList.add('page-enter-right');
    }

    detailCounter.textContent = (index + 1) + ' / ' + total;
    detailPageNum.textContent = '03.' + (index + 1);

    detailPrev.disabled = index === 0;
    detailNext.disabled = index === total - 1;

    detailDots.innerHTML = '';
    pageList.forEach(function(_, i){
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'detail-dot' + (i === index ? ' active' : '');
      dot.textContent = (i + 1);
      dot.setAttribute('aria-label', 'Go to section ' + (i + 1));
      dot.addEventListener('click', function(){
        if (i === currentPageIdx) return;
        renderDetailPage(i, i < currentPageIdx ? 'prev' : 'next');
        scrollDetailTop();
      });
      detailDots.appendChild(dot);
    });

    if (direction !== 'initial') scrollDetailTop();
    setMobileMenuActive();
  }

  function scrollDetailTop(){
    if (detailPage) detailPage.scrollTop = 0;
  }

  detailPrev.addEventListener('click', function(){
    if (currentPageIdx > 0){
      renderDetailPage(currentPageIdx - 1, 'prev');
    }
  });

  detailNext.addEventListener('click', function(){
    if (!currentProject) return;
    if (currentPageIdx < currentProject.pages.length - 1){
      renderDetailPage(currentPageIdx + 1, 'next');
    }
  });

  document.getElementById('back-to-projects').addEventListener('click', function(){
    flipToPage(document.getElementById('projects'));
  });

  document.querySelector('.projects-grid').addEventListener('click', function(e){
    const card = e.target.closest('.project-card');
    if (!card) return;
    const link = e.target.closest('a');
    if (link) e.preventDefault();
    openProject(card.dataset.project);
  });

  /* ================= MOUSE TILT ================= */
  let rafId = null;
  const MAX_TILT = 3.2;

  function handleMove(clientX, clientY){
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(function(){
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const ry = ((clientX - cx) / cx) * MAX_TILT;
      const rx = ((clientY - cy) / cy) * -MAX_TILT;
      book.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      book.style.setProperty('--ry', ry.toFixed(2) + 'deg');
    });
  }

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches){
    document.addEventListener('mousemove', function(e){ handleMove(e.clientX, e.clientY); });
    document.addEventListener('mouseleave', function(){
      book.style.setProperty('--rx', '0deg');
      book.style.setProperty('--ry', '0deg');
    });
  }

  /* Close menu if viewport grows past mobile breakpoint */
  window.addEventListener('resize', function(){
    if (window.innerWidth > 820 && mobileMenu && mobileMenu.classList.contains('open')){
      closeMobileMenu(false);
    }
  });