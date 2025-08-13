const products = [
  {
    "id": 1,
    "title": "Acer Aspire 3 Intel Core i3-1215U Processor Laptop with 35.56 cm (14\") Full HD LED-Backlit IPS Display (16 GB RAM/512 GB SSD/WiFi 6/Intel Graphics/Win11 Home/65W) A324-51, Steel Gray, 1.45KG",
    "price": 29980,
    "image": "https://m.media-amazon.com/images/I/71Weq+h3A7L._AC_UY218_.jpg"
  },
  {
    "id": 2,
    "title": "Acer Aspire Lite, 13th Gen, Intel Core i3-1305U, 8GB RAM, 512GB SSD, Full HD, 15.6\"/39.62cm, Windows 11 Home, Steel Gray, 1.59KG, AL15-53, Metal Body, 36 WHR, Thin and Light Premium Laptop",
    "price": 32993,
    "image": "https://m.media-amazon.com/images/I/71o7b6YJMfL._AC_UY218_.jpg"
  },
  {
    "id": 3,
    "title": "HP 15, AMD Ryzen 3 7320U (8GB LPDDR5, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6\"/39.6cm, Win 11, Office 21, Silver, 1.59kg, fc0154AU, AMD Radeon Graphics, 1080p FHD Camera Laptop",
    "price": 30290,
    "image": "https://m.media-amazon.com/images/I/61SHFVKs+AL._AC_UY218_.jpg"
  },
  {
    "id": 4,
    "title": "HP 15, 13th Gen Intel Core i3-1315U (12GB DDR4, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6''/39.6cm, Win11, M365 Basic(1yr)* Office24, Silver, 1.59kg, fd0573TU, FHD Camera w/Shutter Laptop",
    "price": 38490,
    "image": "https://m.media-amazon.com/images/I/71FXHAM+jWL._AC_UY218_.jpg"
  },
  {
    "id": 5,
    "title": "HP 255 G10 ‎‎Laptop (AMD Athlon Silver 7120U/ 8GB RAM / 256GB SSD/Windows 11/15.6 INCH ASH Silver",
    "price": 22357,
    "image": "https://m.media-amazon.com/images/I/71rw7cd14mL._AC_UY218_.jpg"
  },
  {
    "id": 6,
    "title": "Lenovo V15 G4 AMD Ryzen 5 7520U DOS 15.6 inch FHD Thin & Lite Laptop, AMD Graphics, 16GB DDR5 5500Mhz Ram, 512GB SSD,Dolby Audio,Premium Grey, 1 Year Onsite Brand Warranty",
    "price": 33390,
    "image": "https://m.media-amazon.com/images/I/51JfEzZcfZL._AC_UY218_.jpg"
  },
  {
    "id": 7,
    "title": "HP 15, 13th Gen Intel Core i3-1315U Laptop (8GB DDR4, 512GB SSD) Anti-Glare, Micro-Edge, 15.6\"/39.6cm, FHD, Win 11, MSO 21, Silver, 1.59kg, Intel UHD Graphics, 1080p FHD Camera, 15-fd0006TU/fd0186tu",
    "price": 37800,
    "image": "https://m.media-amazon.com/images/I/718ba2SBJYL._AC_UY218_.jpg"
  },
  {
    "id": 8,
    "title": "HP 15, 13th Gen Intel Core i3-1315U Laptop (8GB DDR4,512GB SSD) Anti-Glare, Micro-Edge,15.6''/39.6cm, FHD, Win11,M365 Basic(1yr),Office Home24, Silver,1.59kg, FHD Camera w/Privacy Shutter, fd0569TU",
    "price": 34990,
    "image": "https://m.media-amazon.com/images/I/71K2w4+A7UL._AC_UY218_.jpg"
  },
  {
    "id": 9,
    "title": "Lenovo IdeaPad 3, Intel Core i3-1215U, 12th Gen, 8GB RAM, 512GB SSD, FHD, 14\"/35.5cm, Windows 11, MSOffice 2021, Arctic Grey, 1.43Kg, 82RJ00FUIN, 1 Year Warranty, 3months Game Pass, Thin& Light Laptop",
    "price": 33090,
    "image": "https://m.media-amazon.com/images/I/71gaqhm080L._AC_UY218_.jpg"
  },
  {
    "id": 10,
    "title": "Dell Inspiron 3530, Intel Core i5-1334U, 13th Gen, 16GB RAM, 1TB SSD, FHD, 15.6\"/39.62cm, Windows 11, MS Office 24, Silver, 1.62KG, Backlit Keyboard, McAfee 15 Month, Thin & Light Laptop",
    "price": 59990,
    "image": "https://m.media-amazon.com/images/I/71xJuBlvrqL._AC_UY218_.jpg"
  },
  {
    "id": 11,
    "title": "ASUS Vivobook 15,12th Gen,Intel Core i3-1215U (Intel UHD iGPU/8GB RAM/512GB SSD/FHD/14 Inch/60Hz/Chiclet Keyboard/42WHrs/Windows 11/Office 2021/Cool Silver/1.40 kg) X1504ZA-NJ322WS",
    "price": 30990,
    "image": "https://m.media-amazon.com/images/I/71-0TwYY+DL._AC_UY218_.jpg"
  },
  {
    "id": 12,
    "title": "ULTIMUS APEX Laptop Intel Celeron Dual Core 8 GB LPDDR4 512 GB SSD Expandable~1TB 14.1 FHD IPS Laptop Anti-Glare Ultra Thin Bezel 180° Hinge 3.0x3 USB HDMI SD Card Slot Win 11 Home 1.25KG Silver",
    "price": 17990,
    "image": "https://m.media-amazon.com/images/I/713QmwFZbsL._AC_UY218_.jpg"
  },
  {
    "id": 13,
    "title": "Dell Inspiron 3535, AMD Ryzen 5-7530U, 16 GB RAM, 512 GB SSD, FHD IPS 15.6\"/39.62 cm, 120Hz, Windows 11, MS Office 2024, Platinum Silver, 1.67 kg, Thin & Light Laptop",
    "price": 42840,
    "image": "https://m.media-amazon.com/images/I/71paHjIJVeL._AC_UY218_.jpg"
  },
  {
    "id": 14,
    "title": "Lenovo IdeaPad Slim 3, Intel Core i5-12450H, 12th Gen, 16GB RAM, 512GB SSD, FHD, 14\"/35.5cm, Windows 11, MS Office Home 2024, Grey, 1.37Kg, 83EQ0072IN, 3 mon. Game Pass Laptop",
    "price": 47390,
    "image": "https://m.media-amazon.com/images/I/81Tj8G57-WL._AC_UY218_.jpg"
  },
  {
    "id": 15,
    "title": "Dell 15 Thin & Light Laptop, 13th Generation Intel Core i3-1305U Processor, 8GB DDR4 + 512GB SSD, 15.6\" (39.62cm) FHD 120Hz 250 nits Display, Windows 11 + MSO'21, 12 Month McAfee, Grey, 1.69kg",
    "price": 35990,
    "image": "https://m.media-amazon.com/images/I/61FyHTMLQWL._AC_UY218_.jpg"
  },
  {
    "id": 16,
    "title": "Acer Aspire Lite, AMD Ryzen 3 7330U Processor, 8 GB RAM, 512 GB SSD, Full HD, 15.6\"/39.62cm, Windows 11 Home, Steel Gray, 1.6KG, AL15-41, Metal Body, Premium Thin and Light Laptop",
    "price": 28990,
    "image": "https://m.media-amazon.com/images/I/61keRkmSGBL._AC_UY218_.jpg"
  },
  {
    "id": 17,
    "title": "HP 15, 13th Gen Intel Core i5-1334U Laptop (16GB DDR4,512GB SSD) Anti-Glare, Micro-edge,15.6''/39.6cm, FHD, Win11,M365,Office24, Silver,1.59kg, Iris Xe Graphics, FHD Camera w/privacy shutter, fd0577TU",
    "price": 55990,
    "image": "https://m.media-amazon.com/images/I/71bagLp2sXL._AC_UY218_.jpg"
  },
  {
    "id": 18,
    "title": "Lenovo Ideapad 1 AMD Ryzen 5 5625U (16GB RAM/512GB SSD/Windows 11/Office Home 2024/15.6 Inch (39.6Cm)/FHD IPS Display/3Months Game Pass/Grey/1.6Kg), 82R4011CIN/0DIN Laptop",
    "price": 37990,
    "image": "https://m.media-amazon.com/images/I/814By4kEe5L._AC_UY218_.jpg"
  },
  {
    "id": 19,
    "title": "ASUS Vivobook S16,13th Gen,Intel Core i5-13420H,Metallic Design Laptop(Intel UHD iGPU/16GB RAM/512GB SSD/FHD+/16\"/144Hz/Windows 11/M365 Basic(1Year)*/Office Home 2024/Matte Gray/1.7 Kg)S3607VA-RP054WS",
    "price": 59990,
    "image": "https://m.media-amazon.com/images/I/71LwIxMzWDL._AC_UY218_.jpg"
  },
  {
    "id": 20,
    "title": "Acer [SmartChoice Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/512 GB SSD/Win11 Home/38 WHR/HD Webcam) A325-45 with 39.63 cm (15.6\") HD Display, Pure Silver, 1.5 KG",
    "price": 22990,
    "image": "https://m.media-amazon.com/images/I/71TpwcAN1PL._AC_UY218_.jpg"
  },
  {
    "id": 21,
    "title": "Lenovo IdeaPad Slim 3, Intel Core i5-12450H, 12th Gen, 16GB RAM, 512GB SSD, FHD, 14\"/35.5cm, Windows 11, MS Office Home 2024, Grey, 1.37Kg, 83EQ0072IN, 3 mon. Game Pass Laptop",
    "price": 47390,
    "image": "https://m.media-amazon.com/images/I/81Tj8G57-WL._AC_UY218_.jpg"
  },
  {
    "id": 22,
    "title": "Dell 15 3520 Thin & Light Laptop, Intel Core i3-1215U Processor, 12th Gen(8GB RAM/512GB SSD/Windows 11 Home/MS Office' 21 /15.6\"(39.62 Cm)FHD Display /Intel UHD Graphics/15 Month Mcafee /Black /1.69Kg",
    "price": 32990,
    "image": "https://m.media-amazon.com/images/I/61-Y-eWXqtL._AC_UY218_.jpg"
  },
  {
    "id": 23,
    "title": "Acer Aspire Lite, 13th Gen, Intel Core i3-1305U, 8GB RAM, 512GB SSD, Full HD, 15.6\"/39.62cm, Windows 11 Home, Steel Gray, 1.59KG, AL15-53, Metal Body, 36 WHR, Thin and Light Premium Laptop",
    "price": 32993,
    "image": "https://m.media-amazon.com/images/I/71o7b6YJMfL._AC_UY218_.jpg"
  },
  {
    "id": 24,
    "title": "Acer Aspire 3 Intel Core i3-1215U Processor Laptop with 35.56 cm (14\") Full HD LED-Backlit IPS Display (16 GB RAM/512 GB SSD/WiFi 6/Intel Graphics/Win11 Home/65W) A324-51, Steel Gray, 1.45KG",
    "price": 29980,
    "image": "https://m.media-amazon.com/images/I/71Weq+h3A7L._AC_UY218_.jpg"
  },
  {
    "id": 25,
    "title": "Lenovo V15 AMD Ryzen 7 7730U 15.6\" (39.62cm) FHD 250 Nits Antiglare Thin and Light Laptop (Free MS Office) Lifetime (16GB/512GB SSD/Windows 11/Iron Grey/1.65 Kg) 1 Year Brand Warranty, 83CRA01SIN",
    "price": 44999,
    "image": "https://m.media-amazon.com/images/I/710hhin8IyL._AC_UY218_.jpg"
  },
  {
    "id": 26,
    "title": "HP 15 (2025), Intel Celeron Dual Core N4500 - (8 GB/256 GB SSD/Intel UHD Graphics/Windows 11 Pro) Thin and Light Business Laptop/15.6\" HD Display/Ash Grey/1.5 kg/MS Office 2021",
    "price": 22775,
    "image": "https://m.media-amazon.com/images/I/71sxKjBSHKL._AC_UY218_.jpg"
  },
  {
    "id": 27,
    "title": "Lenovo {SmartChoice)Chromebook Intel Celeron N4500 (4GB RAM/64GB eMMC 5.1/11.6 Inch (29.46cm)/HD Display/2Wx2 Stereo Speakers/HD Camera/Chrome OS/Blue/1.21Kg), 82UY0014HA",
    "price": 13990,
    "image": "https://m.media-amazon.com/images/I/71eHrg3+O7L._AC_UY218_.jpg"
  },
  {
    "id": 28,
    "title": "HP Victus, 13th Gen i7-13620H, 6GB RTX 4050 (16GB DDR4, 512GB SSD) FHD, 144Hz, IPS, 15.6''/39.6cm, Win11, M365* Office24, Mica Silver, 2.29kg, fa2100TX/2103tx, Backlit, Enhanced Cooling, Gaming Laptop",
    "price": 98602,
    "image": "https://m.media-amazon.com/images/I/719FdIHxMVL._AC_UY218_.jpg"
  }
]

export default products;