const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'assets', 'images', 'sweets');

const sweets = {
  'gulab-jamun.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF5EB" />
      <stop offset="100%" stop-color="#FCE0D0" />
    </radialGradient>
    <radialGradient id="jamun1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#B85D19" />
      <stop offset="45%" stop-color="#7A2E07" />
      <stop offset="90%" stop-color="#451400" />
    </radialGradient>
    <radialGradient id="jamun2" cx="40%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#C26A20" />
      <stop offset="50%" stop-color="#843209" />
      <stop offset="100%" stop-color="#481502" />
    </radialGradient>
    <radialGradient id="syrup" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFA834" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#D97706" stop-opacity="0.95" />
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#451400" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bg)"/>
  
  <!-- Royal Brass Bowl -->
  <ellipse cx="300" cy="280" rx="210" ry="85" fill="#B38600" filter="url(#shadow)"/>
  <ellipse cx="300" cy="272" rx="200" ry="78" fill="#E6B800" stroke="#FFE57F" stroke-width="4"/>
  <ellipse cx="300" cy="265" rx="185" ry="68" fill="url(#syrup)"/>

  <!-- Gulab Jamuns in Syrup -->
  <g filter="url(#shadow)">
    <!-- Back Jamuns -->
    <circle cx="230" cy="235" r="52" fill="url(#jamun1)"/>
    <ellipse cx="218" cy="220" rx="15" ry="9" fill="#FFF" opacity="0.35" transform="rotate(-20 218 220)"/>

    <circle cx="370" cy="235" r="52" fill="url(#jamun1)"/>
    <ellipse cx="358" cy="220" rx="15" ry="9" fill="#FFF" opacity="0.35" transform="rotate(-20 358 220)"/>

    <!-- Front Jamuns -->
    <circle cx="300" cy="205" r="58" fill="url(#jamun2)"/>
    <ellipse cx="285" cy="188" rx="18" ry="10" fill="#FFF" opacity="0.45" transform="rotate(-25 285 188)"/>

    <circle cx="300" cy="265" r="54" fill="url(#jamun1)"/>
    <ellipse cx="285" cy="250" rx="15" ry="9" fill="#FFF" opacity="0.4" transform="rotate(-20 285 250)"/>
  </g>

  <!-- Garnishes: Saffron threads & Pistachio slivers -->
  <path d="M285,180 Q295,175 305,185" stroke="#E11D48" stroke-width="2.5" fill="none"/>
  <path d="M310,210 Q325,205 320,225" stroke="#E11D48" stroke-width="2.5" fill="none"/>
  <path d="M225,230 Q235,225 240,240" stroke="#DC2626" stroke-width="2" fill="none"/>
  <rect x="290" y="195" width="12" height="4" rx="2" fill="#16A34A" transform="rotate(35 290 195)"/>
  <rect x="315" y="190" width="10" height="3.5" rx="1.5" fill="#15803D" transform="rotate(-40 315 190)"/>
  <rect x="235" y="225" width="11" height="4" rx="2" fill="#16A34A" transform="rotate(15 235 225)"/>
  <rect x="360" y="230" width="12" height="4" rx="2" fill="#16A34A" transform="rotate(-25 360 230)"/>

  <!-- Title Badge -->
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">GULAB JAMUN</text>
</svg>`,

  'mysore-pak.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="mpBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF9EB" />
      <stop offset="100%" stop-color="#F7E6C4" />
    </radialGradient>
    <linearGradient id="mpGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D" />
      <stop offset="50%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#92400E" />
    </linearGradient>
    <linearGradient id="mpSide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309" />
      <stop offset="100%" stop-color="#78350F" />
    </linearGradient>
    <filter id="mpShadow">
      <feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#78350F" flood-opacity="0.3"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#mpBg)"/>
  
  <!-- Silver / Brass Serving Platter -->
  <ellipse cx="300" cy="275" rx="220" ry="85" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="4" filter="url(#mpShadow)"/>
  <ellipse cx="300" cy="270" rx="205" ry="75" fill="#F8FAFC" stroke="#D4AF37" stroke-width="2"/>

  <!-- Stacked Mysore Pak Cubes / Blocks with porous texture -->
  <g filter="url(#mpShadow)">
    <!-- Bottom Left Block -->
    <path d="M190,230 L270,195 L330,225 L250,260 Z" fill="url(#mpGold)"/>
    <path d="M190,230 L250,260 L250,295 L190,265 Z" fill="url(#mpSide)"/>
    <path d="M250,260 L330,225 L330,260 L250,295 Z" fill="#92400E"/>

    <!-- Bottom Right Block -->
    <path d="M280,240 L360,205 L420,235 L340,270 Z" fill="url(#mpGold)"/>
    <path d="M280,240 L340,270 L340,305 L280,275 Z" fill="url(#mpSide)"/>
    <path d="M340,270 L420,235 L420,270 L340,305 Z" fill="#92400E"/>

    <!-- Top Center Hero Block -->
    <path d="M235,175 L315,140 L375,170 L295,205 Z" fill="url(#mpGold)"/>
    <path d="M235,175 L295,205 L295,240 L235,210 Z" fill="url(#mpSide)"/>
    <path d="M295,205 L375,170 L375,205 L295,240 Z" fill="#92400E"/>
  </g>

  <!-- Pores and ghee shine -->
  <circle cx="280" cy="170" r="2.5" fill="#78350F" opacity="0.6"/>
  <circle cx="310" cy="165" r="3" fill="#78350F" opacity="0.5"/>
  <circle cx="330" cy="180" r="2" fill="#78350F" opacity="0.6"/>
  <circle cx="260" cy="185" r="2" fill="#78350F" opacity="0.5"/>
  <line x1="250" y1="180" x2="300" y2="158" stroke="#FEF3C7" stroke-width="2" opacity="0.7"/>

  <!-- Badge -->
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">MYSORE PAK</text>
</svg>`,

  'palkova.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="pkBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFDF7" />
      <stop offset="100%" stop-color="#F7EED8" />
    </radialGradient>
    <radialGradient id="pkClay" cx="40%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#D97706" />
      <stop offset="60%" stop-color="#9A3412" />
      <stop offset="100%" stop-color="#7C2D12" />
    </radialGradient>
    <radialGradient id="pkCream" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFDF5" />
      <stop offset="40%" stop-color="#FDE8B5" />
      <stop offset="85%" stop-color="#D4A359" />
      <stop offset="100%" stop-color="#B88237" />
    </radialGradient>
    <filter id="pkShadow">
      <feDropShadow dx="0" dy="15" stdDeviation="16" flood-color="#7C2D12" flood-opacity="0.3"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#pkBg)"/>

  <!-- Traditional Earthen / Brass Pot Base -->
  <ellipse cx="300" cy="305" rx="190" ry="75" fill="#431407" opacity="0.3" filter="url(#pkShadow)"/>
  
  <!-- Terracotta Matka / Brass Handi -->
  <path d="M170,250 C170,340 430,340 430,250 C430,225 390,215 300,215 C210,215 170,225 170,250 Z" fill="url(#pkClay)" filter="url(#pkShadow)"/>
  <ellipse cx="300" cy="225" rx="135" ry="32" fill="#7C2D12"/>
  <ellipse cx="300" cy="223" rx="130" ry="30" fill="#9A3412"/>

  <!-- Thick Creamy Mounded Palkova -->
  <ellipse cx="300" cy="205" rx="120" ry="50" fill="url(#pkCream)"/>
  <!-- Velvety dollops -->
  <ellipse cx="270" cy="180" rx="65" ry="35" fill="url(#pkCream)"/>
  <ellipse cx="335" cy="185" rx="55" ry="32" fill="url(#pkCream)"/>
  <ellipse cx="300" cy="165" rx="45" ry="25" fill="#FFFDF0"/>

  <!-- Cardamom & Ghee glisten -->
  <circle cx="280" cy="175" r="2.5" fill="#581C87" opacity="0.6"/>
  <circle cx="315" cy="170" r="2" fill="#431407" opacity="0.7"/>
  <circle cx="330" cy="190" r="2" fill="#581C87" opacity="0.6"/>
  <circle cx="260" cy="195" r="2" fill="#431407" opacity="0.5"/>
  <circle cx="295" cy="155" r="3" fill="#D97706" opacity="0.8"/>
  <ellipse cx="285" cy="160" rx="8" ry="4" fill="#FFF" opacity="0.5" transform="rotate(-15 285 160)"/>

  <!-- Subtle steam swirl representing fresh slow-cooked milk -->
  <path d="M290,130 Q300,110 290,90 Q280,70 295,50" stroke="#D4AF37" stroke-width="2" fill="none" opacity="0.4" stroke-linecap="round"/>
  <path d="M315,135 Q325,115 315,95 Q305,75 320,60" stroke="#D4AF37" stroke-width="2" fill="none" opacity="0.3" stroke-linecap="round"/>

  <!-- Badge -->
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">PALKOVA</text>
</svg>`,

  'kaju-katli.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="kkBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FCFBF9" />
      <stop offset="100%" stop-color="#EDE7DA" />
    </radialGradient>
    <linearGradient id="cashewBase" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBF7EB" />
      <stop offset="60%" stop-color="#E9DCBA" />
      <stop offset="100%" stop-color="#CBB78C" />
    </linearGradient>
    <linearGradient id="silverVark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="30%" stop-color="#E2E8F0" />
      <stop offset="60%" stop-color="#CBD5E1" />
      <stop offset="100%" stop-color="#94A3B8" />
    </linearGradient>
    <filter id="kkShadow">
      <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#554433" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#kkBg)"/>

  <!-- Silver Mirror Tray -->
  <ellipse cx="300" cy="275" rx="220" ry="90" fill="#CBD5E1" filter="url(#kkShadow)"/>
  <ellipse cx="300" cy="270" rx="210" ry="80" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2"/>

  <!-- Diamond Katli Pieces arranged artistically -->
  <g filter="url(#kkShadow)">
    <!-- Piece 1 Left -->
    <polygon points="170,260 230,225 290,255 230,290" fill="url(#cashewBase)" stroke="#B8A478" stroke-width="1.5"/>
    <polygon points="190,250 220,232 250,250 220,268" fill="url(#silverVark)" opacity="0.85"/>

    <!-- Piece 2 Right -->
    <polygon points="310,260 370,225 430,255 370,290" fill="url(#cashewBase)" stroke="#B8A478" stroke-width="1.5"/>
    <polygon points="330,250 360,232 390,250 360,268" fill="url(#silverVark)" opacity="0.85"/>

    <!-- Center Hero Diamond -->
    <polygon points="240,210 300,165 360,200 300,245" fill="url(#cashewBase)" stroke="#B8A478" stroke-width="2"/>
    <polygon points="260,195 300,175 340,195 300,225" fill="url(#silverVark)" opacity="0.95"/>

    <!-- Saffron & Pistachio touch -->
    <circle cx="300" cy="200" r="3" fill="#DC2626"/>
    <rect x="296" y="206" width="8" height="3" rx="1.5" fill="#16A34A"/>
  </g>

  <!-- Metallic Shimmer Highlights -->
  <line x1="275" y1="185" x2="295" y2="185" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="210" y1="240" x2="225" y2="240" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
  <line x1="350" y1="240" x2="365" y2="240" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>

  <!-- Badge -->
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">KAJU KATLI</text>
</svg>`,

  'laddu.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="ldBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF8EE" />
      <stop offset="100%" stop-color="#FDE8C7" />
    </radialGradient>
    <radialGradient id="ladduGold" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FCD34D" />
      <stop offset="40%" stop-color="#F59E0B" />
      <stop offset="80%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#B45309" />
    </radialGradient>
    <filter id="ldShadow">
      <feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#92400E" flood-opacity="0.3"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#ldBg)"/>

  <!-- Golden Brass Plate -->
  <ellipse cx="300" cy="285" rx="210" ry="80" fill="#B45309" filter="url(#ldShadow)"/>
  <ellipse cx="300" cy="278" rx="200" ry="72" fill="#F59E0B" stroke="#FDE68A" stroke-width="3"/>
  <ellipse cx="300" cy="272" rx="180" ry="62" fill="#FFFBEB"/>

  <!-- Pyramid of Motichoor Laddus -->
  <g filter="url(#ldShadow)">
    <!-- Base 3 Laddus -->
    <circle cx="230" cy="255" r="50" fill="url(#ladduGold)"/>
    <circle cx="370" cy="255" r="50" fill="url(#ladduGold)"/>
    <circle cx="300" cy="265" r="52" fill="url(#ladduGold)"/>

    <!-- Top Crown Laddu -->
    <circle cx="300" cy="180" r="56" fill="url(#ladduGold)"/>
  </g>

  <!-- Motichoor tiny pearl texture dots & melon seeds -->
  <g fill="#FEF08A" opacity="0.8">
    <circle cx="285" cy="160" r="2.5"/><circle cx="310" cy="165" r="3"/><circle cx="325" cy="175" r="2"/>
    <circle cx="275" cy="185" r="3"/><circle cx="300" cy="195" r="3"/><circle cx="315" cy="190" r="2.5"/>
    <circle cx="220" cy="245" r="2.5"/><circle cx="240" cy="250" r="3"/>
    <circle cx="360" cy="245" r="2.5"/><circle cx="380" cy="250" r="3"/>
  </g>
  <!-- Magaz (Melon seeds) and Pistachio -->
  <ellipse cx="295" cy="155" rx="7" ry="2.5" fill="#FFFBEB" transform="rotate(35 295 155)"/>
  <ellipse cx="320" cy="165" rx="6" ry="2" fill="#15803D" transform="rotate(-25 320 165)"/>
  <ellipse cx="280" cy="180" rx="6" ry="2.5" fill="#FFFBEB" transform="rotate(-15 280 180)"/>
  <ellipse cx="310" cy="190" rx="7" ry="2.5" fill="#15803D" transform="rotate(40 310 190)"/>

  <!-- Badge -->
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">MOTICHOOR LADDU</text>
</svg>`,

  'rasgulla.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="rgBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F0FDF4" />
      <stop offset="100%" stop-color="#DCFCE7" />
    </radialGradient>
    <radialGradient id="spongeWhite" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="60%" stop-color="#F8FAFC" />
      <stop offset="90%" stop-color="#E2E8F0" />
      <stop offset="100%" stop-color="#CBD5E1" />
    </radialGradient>
    <radialGradient id="clearSyrup" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E0F2FE" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#BAE6FD" stop-opacity="0.9" />
    </radialGradient>
    <filter id="rgShadow">
      <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#0F172A" flood-opacity="0.2"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#rgBg)"/>

  <!-- Crystal Glass Bowl -->
  <ellipse cx="300" cy="285" rx="210" ry="85" fill="#94A3B8" opacity="0.3" filter="url(#rgShadow)"/>
  <ellipse cx="300" cy="275" rx="200" ry="78" fill="#E2E8F0" stroke="#FFFFFF" stroke-width="4"/>
  <ellipse cx="300" cy="270" rx="185" ry="68" fill="url(#clearSyrup)"/>

  <!-- Soft White Rasgullas -->
  <g filter="url(#rgShadow)">
    <circle cx="230" cy="235" r="52" fill="url(#spongeWhite)"/>
    <ellipse cx="218" cy="218" rx="16" ry="8" fill="#FFF" opacity="0.8"/>

    <circle cx="370" cy="235" r="52" fill="url(#spongeWhite)"/>
    <ellipse cx="358" cy="218" rx="16" ry="8" fill="#FFF" opacity="0.8"/>

    <circle cx="300" cy="205" r="58" fill="url(#spongeWhite)"/>
    <ellipse cx="285" cy="185" rx="18" ry="9" fill="#FFF" opacity="0.9"/>

    <circle cx="300" cy="265" r="54" fill="url(#spongeWhite)"/>
  </g>

  <!-- Saffron Strands and Rose Petals -->
  <path d="M285,185 Q295,178 305,188" stroke="#E11D48" stroke-width="2.5" fill="none"/>
  <path d="M312,208 Q322,200 326,218" stroke="#E11D48" stroke-width="2" fill="none"/>
  <path d="M225,230 Q235,225 240,240" stroke="#F59E0B" stroke-width="2.5" fill="none"/>
  <path d="M365,225 Q375,220 380,235" stroke="#F59E0B" stroke-width="2.5" fill="none"/>

  <!-- Delicate Rose Petal Floating -->
  <path d="M270,250 C265,240 280,235 285,245 C290,255 275,260 270,250 Z" fill="#F43F5E" opacity="0.85"/>

  <!-- Badge -->
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">BENGALI RASGULLA</text>
</svg>`,

  'badam-halwa.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="bhBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFBEB" />
      <stop offset="100%" stop-color="#FDE68A" />
    </radialGradient>
    <radialGradient id="halwaGold" cx="40%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="40%" stop-color="#D97706" />
      <stop offset="85%" stop-color="#B45309" />
      <stop offset="100%" stop-color="#78350F" />
    </radialGradient>
    <filter id="bhShadow">
      <feDropShadow dx="0" dy="15" stdDeviation="16" flood-color="#78350F" flood-opacity="0.35"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#bhBg)"/>

  <!-- Ornate Royal Gold Bowl -->
  <ellipse cx="300" cy="285" rx="210" ry="80" fill="#78350F" filter="url(#bhShadow)"/>
  <ellipse cx="300" cy="275" rx="200" ry="72" fill="#D97706" stroke="#FEF3C7" stroke-width="3"/>
  
  <!-- Halwa Mound with Ghee Gloss -->
  <ellipse cx="300" cy="245" rx="170" ry="60" fill="url(#halwaGold)"/>
  <ellipse cx="300" cy="220" rx="120" ry="45" fill="url(#halwaGold)"/>
  <ellipse cx="300" cy="195" rx="80" ry="32" fill="#FBBF24"/>

  <!-- Glistening ghee highlight -->
  <ellipse cx="280" cy="190" rx="35" ry="12" fill="#FFF" opacity="0.3" transform="rotate(-10 280 190)"/>

  <!-- Slivered Almonds (Badam) and Saffron strands -->
  <ellipse cx="270" cy="180" rx="14" ry="4" fill="#FEF3C7" stroke="#D97706" stroke-width="1" transform="rotate(30 270 180)"/>
  <ellipse cx="320" cy="185" rx="13" ry="4" fill="#FEF3C7" stroke="#D97706" stroke-width="1" transform="rotate(-20 320 185)"/>
  <ellipse cx="295" cy="210" rx="15" ry="4" fill="#FEF3C7" stroke="#D97706" stroke-width="1" transform="rotate(10 295 210)"/>
  <ellipse cx="340" cy="225" rx="14" ry="4" fill="#FEF3C7" stroke="#D97706" stroke-width="1" transform="rotate(-45 340 225)"/>
  <ellipse cx="250" cy="230" rx="14" ry="4" fill="#FEF3C7" stroke="#D97706" stroke-width="1" transform="rotate(25 250 230)"/>

  <!-- Deep red saffron strands -->
  <path d="M285,175 Q295,168 302,178" stroke="#DC2626" stroke-width="2.5" fill="none"/>
  <path d="M305,195 Q318,190 322,205" stroke="#DC2626" stroke-width="2" fill="none"/>

  <!-- Badge -->
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">ROYAL BADAM HALWA</text>
</svg>`,

  'jangiri.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="jgBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF7ED" />
      <stop offset="100%" stop-color="#FFEDD5" />
    </radialGradient>
    <linearGradient id="jangiriOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FB923C" />
      <stop offset="50%" stop-color="#EA580C" />
      <stop offset="100%" stop-color="#C2410C" />
    </linearGradient>
    <filter id="jgShadow">
      <feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#9A3412" flood-opacity="0.3"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#jgBg)"/>

  <!-- Silver Platter -->
  <ellipse cx="300" cy="285" rx="220" ry="85" fill="#E2E8F0" filter="url(#jgShadow)"/>
  <ellipse cx="300" cy="278" rx="205" ry="75" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>

  <!-- Intricate Jangiri Floral Swirls -->
  <g filter="url(#jgShadow)" transform="translate(300, 230) scale(1, 0.65)">
    <!-- Central Ring -->
    <circle cx="0" cy="0" r="45" fill="none" stroke="url(#jangiriOrange)" stroke-width="18"/>
    <!-- Outer Floral Petals Ring -->
    <circle cx="0" cy="-60" r="28" fill="none" stroke="url(#jangiriOrange)" stroke-width="16"/>
    <circle cx="42" cy="-42" r="28" fill="none" stroke="url(#jangiriOrange)" stroke-width="16"/>
    <circle cx="60" cy="0" r="28" fill="none" stroke="url(#jangiriOrange)" stroke-width="16"/>
    <circle cx="42" cy="42" r="28" fill="none" stroke="url(#jangiriOrange)" stroke-width="16"/>
    <circle cx="0" cy="60" r="28" fill="none" stroke="url(#jangiriOrange)" stroke-width="16"/>
    <circle cx="-42" cy="42" r="28" fill="none" stroke="url(#jangiriOrange)" stroke-width="16"/>
    <circle cx="-60" cy="0" r="28" fill="none" stroke="url(#jangiriOrange)" stroke-width="16"/>
    <circle cx="-42" cy="-42" r="28" fill="none" stroke="url(#jangiriOrange)" stroke-width="16"/>
  </g>

  <!-- Syrup droplets -->
  <circle cx="340" cy="285" r="4" fill="#EA580C" opacity="0.7"/>
  <circle cx="260" cy="280" r="3.5" fill="#EA580C" opacity="0.7"/>
  <circle cx="300" cy="300" r="5" fill="#EA580C" opacity="0.8"/>

  <!-- Badge -->
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">JANGIRI</text>
</svg>`,

  'kesar-peda.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="kpBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFBEB"/>
      <stop offset="100%" stop-color="#FEF3C7"/>
    </radialGradient>
    <radialGradient id="pedaGold" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FDE68A"/>
      <stop offset="60%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#B45309"/>
    </radialGradient>
    <filter id="kpShadow">
      <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#78350F" flood-opacity="0.3"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#kpBg)"/>
  <ellipse cx="300" cy="280" rx="210" ry="80" fill="#D97706" opacity="0.2" filter="url(#kpShadow)"/>
  <ellipse cx="300" cy="272" rx="195" ry="72" fill="#FFFDF5" stroke="#F59E0B" stroke-width="2"/>
  <!-- Peda Discs with stamp depression -->
  <g filter="url(#kpShadow)">
    <circle cx="220" cy="230" r="50" fill="url(#pedaGold)"/>
    <circle cx="220" cy="230" r="22" fill="#D97706" opacity="0.4"/>
    <circle cx="380" cy="230" r="50" fill="url(#pedaGold)"/>
    <circle cx="380" cy="230" r="22" fill="#D97706" opacity="0.4"/>
    <circle cx="300" cy="205" r="56" fill="url(#pedaGold)"/>
    <circle cx="300" cy="205" r="25" fill="#D97706" opacity="0.4"/>
  </g>
  <!-- Pistachio & Saffron strand -->
  <rect x="294" y="200" width="12" height="5" rx="2" fill="#15803D" transform="rotate(30 294 200)"/>
  <path d="M296,192 Q304,188 308,198" stroke="#DC2626" stroke-width="2" fill="none"/>
  <rect x="214" y="225" width="12" height="5" rx="2" fill="#15803D"/>
  <rect x="374" y="225" width="12" height="5" rx="2" fill="#15803D"/>
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">KESAR PEDA</text>
</svg>`,

  'anjeer-barfi.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="abBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FAF5FF"/>
      <stop offset="100%" stop-color="#F3E8FF"/>
    </radialGradient>
    <linearGradient id="figBrown" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#701A75"/>
      <stop offset="50%" stop-color="#4A044E"/>
      <stop offset="100%" stop-color="#2E0827"/>
    </linearGradient>
    <filter id="abShadow">
      <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#2E0827" flood-opacity="0.3"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#abBg)"/>
  <ellipse cx="300" cy="280" rx="210" ry="80" fill="#E9D5FF" stroke="#A855F7" stroke-width="2" filter="url(#abShadow)"/>
  <!-- Round Anjeer rolls / slices -->
  <g filter="url(#abShadow)">
    <ellipse cx="230" cy="240" rx="45" ry="32" fill="url(#figBrown)"/>
    <ellipse cx="370" cy="240" rx="45" ry="32" fill="url(#figBrown)"/>
    <ellipse cx="300" cy="200" rx="55" ry="40" fill="url(#figBrown)"/>
  </g>
  <!-- Embedded roasted nuts (cashew, almond, pistachio pieces) -->
  <circle cx="285" cy="190" r="5" fill="#FEF08A"/>
  <circle cx="315" cy="195" r="4.5" fill="#86EFAC"/>
  <circle cx="295" cy="215" r="4" fill="#FDE68A"/>
  <circle cx="325" cy="210" r="3.5" fill="#86EFAC"/>
  <circle cx="220" cy="235" r="4" fill="#FEF08A"/>
  <circle cx="240" cy="242" r="3.5" fill="#86EFAC"/>
  <circle cx="360" cy="235" r="4" fill="#FEF08A"/>
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">ANJEER DRY FRUIT</text>
</svg>`,

  'rasmalai-cake.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="rmBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFDF0"/>
      <stop offset="100%" stop-color="#FEF9C3"/>
    </radialGradient>
    <linearGradient id="rabdiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FEF08A"/>
      <stop offset="50%" stop-color="#FDE047"/>
      <stop offset="100%" stop-color="#EAB308"/>
    </linearGradient>
    <filter id="rmShadow">
      <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#854D0E" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#rmBg)"/>
  <!-- Glass Jar / Dessert Cup Silhouette -->
  <path d="M220,160 L380,160 L360,300 C360,320 240,320 240,300 Z" fill="#FFFFFF" opacity="0.8" stroke="#E2E8F0" stroke-width="3" filter="url(#rmShadow)"/>
  <!-- Dessert Layers: Sponge, Rabdi, Cream -->
  <rect x="246" y="270" width="108" height="30" fill="#D97706" opacity="0.75" rx="4"/>
  <rect x="242" y="225" width="116" height="42" fill="url(#rabdiGrad)" opacity="0.9"/>
  <!-- Rasmalai Patty floating on top -->
  <ellipse cx="300" cy="180" rx="45" ry="20" fill="#FFFFFF" stroke="#FEF08A" stroke-width="2"/>
  <!-- Saffron, pistachio, rose petals -->
  <path d="M290,175 Q300,170 305,180" stroke="#DC2626" stroke-width="2.5" fill="none"/>
  <ellipse cx="310" cy="178" rx="6" ry="2.5" fill="#15803D" transform="rotate(30 310 178)"/>
  <path d="M280,185 C275,178 288,175 292,182 Z" fill="#F43F5E"/>
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">RASMALAI DESSERT</text>
</svg>`,

  'royal-gift-box.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="gbBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFDF7"/>
      <stop offset="100%" stop-color="#FCE7D0"/>
    </radialGradient>
    <linearGradient id="boxMaroon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9B1D3D"/>
      <stop offset="50%" stop-color="#7A1228"/>
      <stop offset="100%" stop-color="#4A0817"/>
    </linearGradient>
    <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#996515"/>
    </linearGradient>
    <filter id="gbShadow">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#4A0817" flood-opacity="0.35"/>
    </filter>
  </defs>
  <rect width="600" height="450" fill="url(#gbBg)"/>
  <!-- Gift Box Base and Lid (Isometric / Perspective 3D Box) -->
  <g filter="url(#gbShadow)">
    <path d="M150,210 L300,140 L450,210 L300,280 Z" fill="url(#boxMaroon)"/>
    <path d="M150,210 L300,280 L300,320 L150,250 Z" fill="#580B1C"/>
    <path d="M300,280 L450,210 L450,250 L300,320 Z" fill="#3D0612"/>
    <!-- Ornate Golden Borders on Lid -->
    <path d="M165,210 L300,148 L435,210 L300,272 Z" fill="none" stroke="url(#goldRibbon)" stroke-width="2" stroke-dasharray="6 3"/>
    <!-- Golden Satin Ribbon Cross -->
    <path d="M225,175 L225,245 L375,175 L375,245" fill="none" stroke="url(#goldRibbon)" stroke-width="12" opacity="0.95"/>
    <!-- Regal Ribbon Bow on Top -->
    <ellipse cx="280" cy="200" rx="22" ry="14" fill="url(#goldRibbon)" transform="rotate(-30 280 200)"/>
    <ellipse cx="320" cy="200" rx="22" ry="14" fill="url(#goldRibbon)" transform="rotate(30 320 200)"/>
    <circle cx="300" cy="205" r="10" fill="#FFFBEB" stroke="#996515" stroke-width="2"/>
  </g>
  <!-- Decorative Sparkles -->
  <path d="M190,140 L195,150 L205,155 L195,160 L190,170 L185,160 L175,155 L185,150 Z" fill="#FBBF24"/>
  <path d="M420,150 L424,158 L432,162 L424,166 L420,174 L416,166 L408,162 L416,158 Z" fill="#FBBF24"/>
  <rect x="190" y="380" width="220" height="42" rx="21" fill="#7A1228" />
  <text x="300" y="406" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="700" fill="#FFE57F" text-anchor="middle">HERITAGE GIFT BOX</text>
</svg>`

};

for (const [filename, content] of Object.entries(sweets)) {
  fs.writeFileSync(path.join(dir, filename), content.trim());
  console.log('Created ' + filename);
}
