const products = [
    {
        "id": 1,
        "name":" Spaghetti ",
        "price": 150000,
        "image": "https://cdn.glitch.global/6e9b1758-0fd7-43a8-aa6f-f93832b0a650/1.PNG?v=1713717210638",
       "description": " Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
    {
        "id": 2,
        "name":" Salad ức gà",
        "price": 250000,
        "image": "https://cdn.glitch.global/6e9b1758-0fd7-43a8-aa6f-f93832b0a650/3.PNG?v=1714020945351",
       "description": " Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
    {
        "id": 3,
        "name":"Salad rau trộn",
        "price": 89000,
        "image": "https://cdn.glitch.global/6e9b1758-0fd7-43a8-aa6f-f93832b0a650/5.PNG?v=1714020961429",
     "description": " Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
    {
        "id": 4,
        "name":" Súp bí đỏ",
        "price": 100000,
        "image": "https://cdn.glitch.global/1308a7d4-af90-4e8f-b388-3d6fcab133f8/4.PNG?v=1714145893729",
     "description": " Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },  
    {
        "id": 5,
        "name":"Salad",
        "price": 53000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-1211887-removebg-preview%20(1).png?v=1715352582762",
        "description": "Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
   {
        "id": 33,
        "name":" Gfs sốt chesse",
        "price": 125000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-2097090-removebg-preview-removebg-preview.png?v=1715352253789",
        "description": "Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
  {
        "id": 6,
        "name":" Salad ",
        "price": 84000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-3872373-removebg-preview%20(1).png?v=1715355397890",
        "description": "Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
     {
        "id": 34,
        "name": "Pissca",
        "price": 200000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/vc.png?v=1715355169059",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },

       {
        "id": 37,
        "name":" Ngủ sắc",
        "price": 75000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-eiliv-aceron-29416110-6896393-removebg-preview.png?v=1715355592466",
        "description": "Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
  
    {
        "id": 36,
        "name":" Cánh gà cháy tỏi",
        "price": 125000,
        "image": "https://cdn.glitch.global/1308a7d4-af90-4e8f-b388-3d6fcab133f8/2.PNG?v=1714147760140",
        "description": "Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
    {
        "id": 7,
        "name":"Pizza cheap",
        "price": 135000,
        "image": "https://cdn.glitch.global/1308a7d4-af90-4e8f-b388-3d6fcab133f8/6.PNG?v=1714147719306",
        "description": "Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
    {
        "id": 8,
        "name":" Pizza CFV ( Size S )  ",
        
      "price": 100000,
        "image": "https://cdn.glitch.global/1308a7d4-af90-4e8f-b388-3d6fcab133f8/pexels-photo-208537-removebg-preview.png?v=1714147693657",
        "description": "Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
   
  {
    "id": 11,
        "name":" Khoai tây",
        "price": 49000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425469367090_29183cb87b10c43fcceabb0cc2c3a4fe.jpg?v=1715267830231",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen  "
    },
   {
    "id": 12,
        "name":" Cà rốt",
        "price": 35000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425469375236_0de659068b5b173e4d6f96eab14a8054.jpg?v=1715267868397",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 13,
        "name":" Ngô",
        "price": 35000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425469380214_0dfb5550b7f320914b32aa9413da483b.jpg?v=1715267901132",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 14,
        "name":" Củ dền",
        "price": 400000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425469380849_1192b0e2c7c2b22a36f38361075b6759.jpg?v=1715267937927",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
    {
    "id": 15,
        "name":" Rau cải xanh ",
        "price": 390000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425469382098_fa1f87ba3af7391bb6b360346420a84b.jpg?v=1715267969408",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
    {
    "id": 16,
        "name":" Cà chua",
        "price": 40000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425469383777_083447192ff303e74404d5b45ea57904.jpg?v=1715268034736",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
    {
    "id": 17,
        "name":"Ớt chuông",
        "price": 70000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425519169366_418635b0a7a93ba036c801b3a79a5cde.jpg?v=1715268703785",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
    {
    "id": 18,
        "name":" Đậu ve",
        "price": 50000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425519176209_714447acd8807f0bc72f8ad5d85fc2df.jpg?v=1715268812944",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
    {
    "id": 19,
        "name":"Bắp cải ",
        "price": 75000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425519188930_c8264fd15338c577788b0e2f87912e97.jpg?v=1715268855889",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
    {
    "id": 20,
        "name":"Xà lách ",
        "price": 89000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425519208811_c2c96c0f0c5d911957292ea23e04d64b.jpg?v=1715268922128",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
    {
    "id": 21,
        "name":" Khoai lang",
        "price": 80000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425519207033_b968b29d68c33d03b3821fb74f043eef.jpg?v=1715268894715",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
    {
    "id": 22,
        "name":"Củ cải trắng ",
        "price": 69000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425519209923_24db3e24b174ac6b4c3582d305ff6e98.jpg?v=1715268983848",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
    {
    "id": 23,
        "name":"Bí đỏ ",
        "price": 49000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425519236375_d5ee46a951c3fb510287bdd5457816ec.jpg?v=1715269260738",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 24,
        "name":"Ớt ",
        "price": 19000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425519233651_47679e8b281176bea3a46da412542538.jpg?v=1715269170171",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 25,
        "name":"Bông cải xanh",
        "price": 99000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425519234928_f11ae3999e113670b3bd508b84595b7f.jpg?v=1715269203087",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 26,
        "name":"Khoai mỡ",
        "price": 49000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425571901883_85a75a415f693817383df50ea9d1b842.jpg?v=1715269979184",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 27,
        "name":"Khoai từ ",
        "price": 39000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425571921004_a26e26e6c933c02f6b632514cae5423e.jpg?v=1715270043822",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 28,
        "name":"Thơm ",
        "price": 70000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425571929240_96c4ef555d1ca0bb370177f8ead409ff.jpg?v=1715270124007",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 29,
        "name":"Cà tím",
        "price": 40000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425571925356_01080db7a8fda4cac8423d982285f169.jpg?v=1715270087012",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 30,
        "name":"Đủ đủ",
        "price": 60000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425571958723_8906bba80f805590e71a021d1397145e.jpg?v=1715270293671",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 31,
        "name":"Hành tây ",
        "price": 39000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425571948377_bc4e54b7c6004953bb56680be8ec4bc9.jpg?v=1715270204949",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
   {
    "id": 32,
        "name":"Cải thìa ",
        "price": 59000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/z5425571990209_1bbe1cccd8d77f7c02d679c8e192830e.jpg?v=1715270236312",
        "description": "Rau củ của Home C&V được trồng theo nguyên tắc 3 không: Không sử dụng thuốc trừ sau,Không sử dụng hóa chất ,Không sử dụng hạt giống biến đổi gen "
    },
];
export default products;