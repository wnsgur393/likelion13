const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;
const db = new sqlite3.Database("./shop.db");

app.use(express.json());
app.use(cors());

// Create tables if not exist
const createTables = (callback) => {
  db.run(
    `CREATE TABLE IF NOT EXISTS shoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    name TEXT,
    brand TEXT,
    arrived DATETIME,
    rating REAL,
    reviews INTEGER,
    price REAL,
    color TEXT
  )`,
    () => {
      db.run(
        `CREATE TABLE IF NOT EXISTS clothes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      brand TEXT,
      arrived DATETIME,
      rating REAL,
      reviews INTEGER,
      price REAL,
      color TEXT,
      type TEXT
    )`,
        () => {
          db.run(
            `CREATE TABLE IF NOT EXISTS mydata (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              image TEXT,
              name TEXT,
              brand TEXT,
              arrived DATETIME,
              rating REAL,
              reviews INTEGER,
              price REAL,
              color TEXT
            )`,
            () => {
              db.run(
                `CREATE TABLE IF NOT EXISTS users (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  username TEXT UNIQUE,
                  password TEXT,
                  name TEXT,
                  email TEXT UNIQUE,
                  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                  sessionId TEXT
                )`,
                callback
              );
            }
          );
        }
      );
    }
  );
};

const insertDummyData = () => {
  // Real shoes data
  const shoesData = [
    {
      id: 35,
      title: "Futuristic Holographic Soccer Cleats",
      price: 39000,
      images: [
        "https://i.imgur.com/qNOjJje.jpeg",
        "https://i.imgur.com/NjfCFnu.jpeg",
        "https://i.imgur.com/eYtvXS1.jpeg",
      ],
    },
    {
      id: 36,
      title: "Rainbow Glitter High Heels",
      price: 39000,
      images: [
        "https://i.imgur.com/62gGzeF.jpeg",
        "https://i.imgur.com/5MoPuFM.jpeg",
        "https://i.imgur.com/sUVj7pK.jpeg",
      ],
    },
    {
      id: 37,
      title: "Chic Summer Denim Espadrille Sandals",
      price: 33000,
      images: [
        "https://i.imgur.com/9qrmE1b.jpeg",
        "https://i.imgur.com/wqKxBVH.jpeg",
        "https://i.imgur.com/sWSV6DK.jpeg",
      ],
    },
    {
      id: 38,
      title: "Vibrant Runners: Bold Orange & Blue Sneakers",
      price: 27000,
      images: [
        "https://i.imgur.com/hKcMNJs.jpeg", 
        "https://i.imgur.com/NYToymX.jpeg",
        "https://i.imgur.com/HiiapCt.jpeg",
      ],
    },
    {
      id: 39,
      title: "Vibrant Pink Classic Sneakers",
      price: 84000,
      images: ["https://i.imgur.com/qNOjJje.jpeg"],
    },
  ];

  // mydata 더미 데이터
  const mydataList = [
    {
      id: 11,
      name: "Wild MOSH 피그먼트 오버핏 반팔 티셔츠_5 COL",
      price: 19900,
      image: "https://image.msscdn.net/thumbnails/images/goods_img/20250523/5141421/5141421_17485915911171_big.jpg?w=1200",
      brand: "와일드락",
      color: "gray",
      soldout: 0,
      size: "L",
      arrived: "2023-05-30"
    },
    {
      id: 12,
      name: "싸인로고 쿨코튼 2PACK 긴팔 티셔츠 - MIX",
      price: 65500,
      image: "https://image.msscdn.net/thumbnails/images/goods_img/20250528/5153807/5153807_17484153077895_big.jpg?w=1200",
      brand: "마크곤잘레스",
      color: "multi",
      soldout: 0,
      size: "XL",
      arrived: "2023-05-28"
    },
    {
      id: 13,
      name: "싸인로고 쿨코튼 2PACK 반팔 티셔츠 - MIX",
      price: 55000,
      image: "https://image.msscdn.net/thumbnails/images/goods_img/20250528/5153804/5153804_17484152798917_big.jpg?w=1200",
      brand: "마크곤잘레스",
      color: "multi",
      soldout: 1,
      size: "XXL",
      arrived: "2023-05-28"
    },
    {
      id: 14,
      name: "NBNEFCA043 / UNI 썸머 트래블 스트라이프 반팔티 (NAVY)",
      price: 59900,
      image: "https://image.msscdn.net/thumbnails/images/goods_img/20250515/5116497/5116497_17484080705912_big.jpg?w=1200",
      brand: "뉴발란스",
      color: "navy",
      soldout: 0,
      size: "L",
      arrived: "2023-05-25"
    },
    {
      id: 15,
      name: "유지로 지상최강 박스오버핏 반팔 티셔츠",
      price: 69000,
      image: "https://image.msscdn.net/thumbnails/images/goods_img/20250528/5155080/5155080_17484280772737_big.jpg?w=1200",
      brand: "바이젝",
      color: "black",
      soldout: 0,
      size: "L",
      arrived: "2023-05-24"
    },
    {
      id: 16,
      name: "러브 앤 피스 티셔츠[블랙]",
      price: 29900,
      image: "https://image.msscdn.net/thumbnails/images/goods_img/20250526/5145416/5145416_17485854970159_big.jpg?w=1200",
      brand: "시그니처",
      color: "black",
      soldout: 1,
      size: "XL",
      arrived: "2023-05-11"
    },
    {
      id: 17,
      name: "[2PACK] U57 NEWYORK 반팔티",
      price: 36000,
      image: "https://image.msscdn.net/thumbnails/images/goods_img/20250530/5159742/5159742_17485841141697_big.jpg?w=1200",
      brand: "멜로우컨셉",
      color: "multi",
      soldout: 0,
      size: "M",
      arrived: "2023-05-12"
    },
    {
      id: 18,
      name: "NBNEFCA023 / UNI 썸머 트래블 보스턴 반팔티 (LIGHT GRAY)",
      price: 49900,
      image: "https://image.msscdn.net/thumbnails/images/goods_img/20250515/5116487/5116487_17484107275126_big.jpg?w=1200",
      brand: "뉴발란스",
      color: "light gray",
      soldout: 0,
      size: "L",
      arrived: "2023-05-13"
    },
    {
      id: 19,
      name: "리뉴얼 오픈카라 하프니트 아이보리",
      price: 49500,
      image: "https://image.msscdn.net/thumbnails/images/goods_img/20250530/5159837/5159837_17485893862631_big.jpg?w=1200",
      brand: "컨셉비",
      color: "ivory",
      soldout: 0,
      size: "L",
      arrived: "2023-05-23"
    },
    {
      id: 20,
      name: "리뉴얼 오픈카라 하프니트 블랙",
      price: 49500,
      image: "https://image.msscdn.net/thumbnails/images/goods_img/20250530/5159836/5159836_17485892535224_big.jpg?w=1200",
      brand: "컨셉비",
      color: "black",
      soldout: 0,
      size: "L",
      arrived: "2023-05-09"
    }
  ];

  // Real clothes data
  const clothesData = [
    {
      id: 2,
      title: "Classic Red Pullover Hoodie",
      price: 10000,
      images: [
        "https://i.imgur.com/1twoaDy.jpeg",
        "https://i.imgur.com/FDwQgLy.jpeg",
        "https://i.imgur.com/kg1ZhhH.jpeg",
      ],
    },
    {
      id: 3,
      title: "Classic Heather Gray Hoodie",
      price: 69000,
      images: [
        "https://i.imgur.com/cHddUCu.jpeg",
        "https://i.imgur.com/CFOjAgK.jpeg",
        "https://i.imgur.com/wbIMMme.jpeg",
      ],
    },
    {
      id: 4,
      title: "Classic Grey Hooded Sweatshirt",
      price: 90000,
      images: [
        "https://i.imgur.com/R2PN9Wq.jpeg",
        "https://i.imgur.com/IvxMPFr.jpeg",
        "https://i.imgur.com/7eW9nXP.jpeg",
      ],
    },
    {
      id: 5,
      title: "Classic Black Hooded Sweatshirt",
      price: 79000,
      images: [
        "https://i.imgur.com/cSytoSD.jpeg",
        "https://i.imgur.com/WwKucXb.jpeg",
        "https://i.imgur.com/cE2Dxh9.jpeg",
      ],
    },
    {
      id: 6,
      title: "Classic Comfort Fit Joggers",
      price: 25000,
      images: ["https://i.imgur.com/QkIa5tT.jpeg"], // Using category image as main image wasn't provided
    },
  ];

  // Helper function to generate realistic ratings and reviews
  const generateRating = (index) => (3.8 + index * 0.2 + Math.random() * 0.4).toFixed(1);
  const generateReviews = (index) => Math.floor(50 + index * 15 + Math.random() * 100);

  // Helper function to extract color from title/description
  const extractColor = (title) => {
    const colors = [
      "red",
      "gray",
      "grey",
      "black",
      "blue",
      "orange",
      "pink",
      "rainbow",
      "holographic",
      "denim",
    ];
    const lowerTitle = title.toLowerCase();
    for (let color of colors) {
      if (lowerTitle.includes(color)) {
        return color === "grey" ? "gray" : color;
      }
    }
    return "multi";
  };

  // Helper function to determine gender based on product type
  const determineGender = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("high heel")) return "female";
    if (lowerTitle.includes("soccer") || lowerTitle.includes("runner")) return "unisex";
    return "unisex";
  };

  // Helper function to determine clothing type
  const determineClothingType = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("hoodie") || lowerTitle.includes("sweatshirt")) return "hoodie";
    if (lowerTitle.includes("jogger")) return "pants";
    return "shirt";
  };

  // Insert shoes data
  db.get("SELECT COUNT(*) as count FROM shoes", (err, row) => {
    if (err) {
      console.error("Error checking shoes table:", err);
      return;
    }
    if (row && row.count === 0) {
      const stmt = db.prepare(
        `INSERT INTO shoes (image, name, brand, arrived, rating, reviews, price, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      );

      shoesData.forEach((shoe, index) => {
        stmt.run(
          shoe.images[0],
          shoe.title,
          shoe.brand || "NoBrand",
          new Date().toISOString(),
          parseFloat(generateRating(index)),
          generateReviews(index),
          shoe.price,
          extractColor(shoe.title)
        );
      });

      stmt.finalize();
      console.log("Real shoes dummy data inserted");
    }
  });

  // Insert clothes data
  db.get("SELECT COUNT(*) as count FROM clothes", (err, row) => {
    if (err) {
      console.error("Error checking clothes table:", err);
      return;
    }
    if (row && row.count === 0) {
      const stmt = db.prepare(
        `INSERT INTO clothes (image, name, brand, arrived, rating, reviews, price, color, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      );

      clothesData.forEach((cloth, index) => {
        stmt.run(
          cloth.images[0],
          cloth.title,
          cloth.brand || "NoBrand",
          new Date().toISOString(),
          parseFloat(generateRating(index)),
          generateReviews(index),
          cloth.price,
          extractColor(cloth.title),
          determineClothingType(cloth.title)
        );
      });

      stmt.finalize();
      console.log("Real clothes dummy data inserted");
    }
  });

  // mydata 데이터 삽입
  db.get("SELECT COUNT(*) as count FROM mydata", (err, row) => {
    if (err) {
      console.error("Error checking mydata table:", err);
      return;
    }
    if (row && row.count === 0) {
      const stmt = db.prepare(
        `INSERT INTO mydata (image, name, brand, arrived, rating, reviews, price, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      );
      mydataList.forEach((item, idx) => {
        stmt.run(
          item.image,
          item.name,
          item.brand,
          item.arrived,
          item.rating !== undefined ? item.rating : parseFloat(generateRating(idx)),
          item.reviews !== undefined ? item.reviews : generateReviews(idx),
          item.price,
          item.color
        );
      });
      stmt.finalize();
      console.log("mydata dummy data inserted");
    }
  });
};

createTables(insertDummyData);

const buildQuery = (type, query) => {
  const filters = [];
  const values = [];

  ["color"].forEach((key) => {
    if (query[key]) {
      filters.push(`${key} = ?`);
      values.push(query[key]);
    }
  });

  if (type === "clothes" && query.type) {
    filters.push(`type = ?`);
    values.push(query.type);
  }

  let order = "id DESC";
  if (query.sort === "oldest") order = "id ASC";
  else if (query.sort === "high_rating") order = "rating DESC";

  const whereClause = filters.length ? `WHERE ${filters.join(" AND ")}` : "";
  return {
    sql: `SELECT * FROM ${type} ${whereClause} ORDER BY ${order}`,
    values,
  };
};

/**
 * @swagger
 * /{type}:
 *   get:
 *     summary: 상품 목록 조회 (신발 또는 의류)
 *     description: "필터 및 정렬 조건을 통해 신발 또는 의류 목록을 조회합니다."
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [shoes, clothes, mydata]
 *         description: "상품 종류 (shoes, clothes, mydata)"
 *       - in: query
 *         name: color
 *         schema:
 *           type: string
 *         description: "색상 필터 (예: red)"
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: "의류 타입 필터 (clothes만 해당, 예: shirt, jacket)"
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [latest, oldest, high_rating]
 *         description: "정렬 기준 (latest, oldest, high_rating)"
 *     responses:
 *       200:
 *         description: "상품 목록 반환"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   image:
 *                     type: string
 *                   name:
 *                     type: string
 *                   rating:
 *                     type: number
 *                   reviews:
 *                     type: integer
 *                   price:
 *                     type: number
 *                   color:
 *                     type: string
 *                   type:
 *                     type: string
 *                     nullable: true
 */
// Middleware to validate type parameter
const validateType = (req, res, next) => {
  const validTypes = ["shoes", "clothes", "mydata"];
  if (!validTypes.includes(req.params.type)) {
    return res.status(400).json({ error: 'Invalid type. Must be "shoes", "clothes" or "mydata"' });
  }
  next();
};

// Swagger options and setup
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shoes & Clothes API",
      version: "1.0.0",
      description: "신발과 의류 상품을 조회 및 관리할 수 있는 API 입니다.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [__filename],
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/products", (req, res) => {
  db.all("SELECT * FROM shoes", [], (err, shoes) => {
    if (err) return res.status(500).json({ error: err.message });
    db.all("SELECT * FROM clothes", [], (err2, clothes) => {
      if (err2) return res.status(500).json({ error: err2.message });
      db.all("SELECT * FROM mydata", [], (err3, mydata) => {
        if (err3) return res.status(500).json({ error: err3.message });
        res.json([...shoes, ...clothes, ...mydata]);
      });
    });
  });
});

// 아이디(닉네임) 중복 확인 API
app.get("/check-username", (req, res) => {
  const { username } = req.query;
  db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
    if (row) return res.status(409).json({ exists: true });
    return res.json({ exists: false });
  });
});

// 회원가입 API
app.post("/register", (req, res) => {
  const { username, password, name, email } = req.body;
  if (!username || !password || !name || !email) {
    return res.status(400).json({ error: "모든 항목을 입력해주세요." });
  }
  db.get("SELECT 1 FROM users WHERE username = ? OR email = ?", [username, email], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (row) return res.status(409).json({ error: "이미 사용 중인 아이디 또는 이메일입니다." });
    db.run(
      "INSERT INTO users (username, password, name, email) VALUES (?, ?, ?, ?)",
      [username, password, name, email],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true, id: this.lastID });
      }
    );
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, user) => {
      if (user) {
        const sessionId = uuidv4();
        db.run("UPDATE users SET sessionId = ? WHERE id = ?", [sessionId, user.id], function (err2) {
          if (err2) return res.status(500).json({ error: err2.message });
          // DB에 sessionId 저장이 완료된 후 응답
          return res.json({ sessionId });
        });
        return;
      }
      res.status(401).json({ error: "Invalid credentials" });
    }
  );
});

// 세션 유효성 검사 API
app.get("/check-session", (req, res) => {
  const sessionId = req.headers["authorization"];
  if (!sessionId) return res.status(401).json({ valid: false });
  db.get("SELECT * FROM users WHERE sessionId = ?", [sessionId], (err, user) => {
    if (err) return res.status(500).json({ valid: false, error: err.message });
    if (user) return res.json({ valid: true, user });
    res.status(401).json({ valid: false });
  });
});

app.get("/:type", validateType, (req, res) => {
  const { sql, values } = buildQuery(req.params.type, req.query);
  db.all(sql, values, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 상품 등록
app.post("/:type", validateType, (req, res) => {
  const data = req.body;

  // Validate required fields
  if (!data.name || !data.price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  // Filter out undefined/null values and invalid fields
  const validFields =
    req.params.type === "shoes"
      ? ["image", "name", "brand", "arrived", "rating", "reviews", "price", "color"]
      : req.params.type === "clothes"
      ? ["image", "name", "brand", "arrived", "rating", "reviews", "price", "color", "type"]
      : ["image", "name", "brand", "arrived", "rating", "reviews", "price", "color"];

  const filteredData = {};
  validFields.forEach((field) => {
    if (data[field] !== undefined && data[field] !== null) {
      filteredData[field] = data[field];
    }
  });

  const keys = Object.keys(filteredData);
  const values = Object.values(filteredData);
  const placeholders = keys.map(() => "?").join(", ");

  db.run(
    `INSERT INTO ${req.params.type} (${keys.join(",")}) VALUES (${placeholders})`,
    values,
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID });
    }
  );
});

/**
 * @swagger
 * /{type}/{id}:
 *   get:
 *     summary: 특정 상품 조회
 *     description: "ID로 특정 상품을 조회합니다."
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [shoes, clothes]
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "조회할 상품 ID"
 *     responses:
 *       200:
 *         description: "상품 정보 반환"
 *       404:
 *         description: "상품을 찾을 수 없음"
 */
app.get("/:type/:id", validateType, (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  db.get(`SELECT * FROM ${req.params.type} WHERE id = ?`, [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Item not found" });
    res.json(row);
  });
});

/**
 * @swagger
 * /{type}/{id}:
 *   put:
 *     summary: 상품 전체 수정 (신발 또는 의류)
 *     description: "상품 정보를 전체 수정합니다."
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [shoes, clothes]
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "수정할 상품 ID"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *               name:
 *                 type: string
 *               rating:
 *                 type: number
 *               reviews:
 *                 type: integer
 *               price:
 *                 type: number
 *               color:
 *                 type: string
 *               type:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       200:
 *         description: "수정 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updated:
 *                   type: integer
 *                   description: "수정된 행 개수"
 *       404:
 *         description: "상품을 찾을 수 없음"
 */
app.put("/:type/:id", validateType, (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const data = req.body;

  // Validate required fields for PUT
  if (!data.name || !data.price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  // Filter valid fields
  const validFields =
    req.params.type === "shoes"
      ? ["image", "name", "brand", "arrived", "rating", "reviews", "price", "color"]
      : req.params.type === "clothes"
      ? ["image", "name", "brand", "arrived", "rating", "reviews", "price", "color", "type"]
      : ["image", "name", "brand", "arrived", "rating", "reviews", "price", "color"];

  const filteredData = {};
  validFields.forEach((field) => {
    if (data[field] !== undefined) {
      filteredData[field] = data[field];
    }
  });

  const keys = Object.keys(filteredData);
  const values = Object.values(filteredData);
  const assignments = keys.map((k) => `${k} = ?`).join(", ");
  values.push(id);

  db.run(`UPDATE ${req.params.type} SET ${assignments} WHERE id = ?`, values, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ updated: this.changes });
  });
});

/**
 * @swagger
 * /{type}/{id}:
 *   patch:
 *     summary: 상품 부분 수정 (신발 또는 의류)
 *     description: "상품 정보를 일부 수정합니다."
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [shoes, clothes]
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "수정할 상품 ID"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *           example:
 *             name: "new name"
 *     responses:
 *       200:
 *         description: "수정 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updated:
 *                   type: integer
 *                   description: "수정된 행 개수"
 *       404:
 *         description: "상품을 찾을 수 없음"
 */
app.patch("/:type/:id", validateType, (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const data = req.body;

  // Check if request body is empty
  if (Object.keys(data).length === 0) {
    return res.status(400).json({ error: "Request body cannot be empty" });
  }

  // Filter valid fields
  const validFields =
    req.params.type === "shoes"
      ? ["image", "name", "brand", "arrived", "rating", "reviews", "price", "color"]
      : req.params.type === "clothes"
      ? ["image", "name", "brand", "arrived", "rating", "reviews", "price", "color", "type"]
      : ["image", "name", "brand", "arrived", "rating", "reviews", "price", "color"];

  const filteredData = {};
  validFields.forEach((field) => {
    if (data[field] !== undefined) {
      filteredData[field] = data[field];
    }
  });

  if (Object.keys(filteredData).length === 0) {
    return res.status(400).json({ error: "No valid fields to update" });
  }

  const keys = Object.keys(filteredData);
  const values = Object.values(filteredData);
  const assignments = keys.map((k) => `${k} = ?`).join(", ");
  values.push(id);

  db.run(`UPDATE ${req.params.type} SET ${assignments} WHERE id = ?`, values, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ updated: this.changes });
  });
});

/**
 * @swagger
 * /{type}/{id}:
 *   delete:
 *     summary: 상품 삭제
 *     description: "특정 상품을 삭제합니다."
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [shoes, clothes]
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "삭제할 상품 ID"
 *     responses:
 *       200:
 *         description: "삭제 성공"
 *       404:
 *         description: "상품을 찾을 수 없음"
 */
app.delete("/:type/:id", validateType, (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  db.run(`DELETE FROM ${req.params.type} WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ deleted: this.changes });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("Shutting down gracefully...");
  db.close((err) => {
    if (err) {
      console.error("Error closing database:", err.message);
    } else {
      console.log("Database connection closed.");
    }
    process.exit(0);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});
