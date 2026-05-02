# Step 1: Local Setup

- စက်ထဲမှာ Node.js ရှိပါစေ။
- `.env` ကို ပြင်ပြီး `npm install` -> `npx prisma generate` -> `npm run dev` နဲ့ အရင်စမ်းကြည့်ပါ။
- Local မှာ App တက်လာပြီဆိုမှ...

# Step 2: Containerization

- ပြီးခဲ့တဲ့ Local က အဆင့်တွေကို Dockerfile ထဲ ပြောင်းထည့်ပါ။
- `docker-compose` နဲ့ App ရော DB ရော တစ်ခါတည်း တက်လာအောင် လုပ်ပါ။

---

## 1. Project Stack

- Recommended Image: `node:18-alpine`
- Website: Next.js (Node.js Runtime)
- Recommended Image: `postgres:15-alpine`
- ORM: Prisma
- Database: PostgreSQL

### Research First

- ORM ဆိုတာဘာလဲ? (Prisma က Database နဲ့ App ကြားမှာ ဘာလုပ်ပေးတာလဲ?)
- `npx prisma generate` မလုပ်ရင် ဘာဖြစ်မလဲ? (Build stage မှာ ဒါကို ဘာလို့ ထည့်ရတာလဲ?)
- `migrate deploy` နဲ့ `db push` ဘာကွာလဲ? (Production မှာ ဘယ်ဟာက ပိုစိတ်ချရသလဲ?)

## 2. လိုအပ်သော Environment Variables (Configuration)

Deployment လုပ်တဲ့နေရာမှာ (ဥပမာ- Docker သို့မဟုတ် Cloud Platform) အောက်ပါ environment variables တွေကို configuration ထဲ ထည့်ပေးပါ။

```env
DATABASE_URL=postgresql://[USER]:[PASSWORD]@[HOST]:[PORT]/[DB_NAME]
BETTER_AUTH_SECRET=[Key]
BETTER_AUTH_URL=[YOUR_DOMAIN_OR_IP]
```

## 3. Application Build & Run Steps (အဆင့်ဆင့်)

1. Package Dependency Install: `npm install`
2. Prisma Generate: `npx prisma generate` (ဒါက Database နဲ့ ချိတ်ဆက်ဖို့ လိုအပ်တဲ့ Type တွေကို ဆောက်ပေးတာပါ)
3. Build: `npm run build`
4. Create/Migrate database: `npx prisma migrate deploy` (ဒါက Database ထဲမှာ Table structure တွေကို အလိုအလျောက် သွားဆောက်ပေးမှာပါ)
5. Project run: `npm start`

## 4. Dockerization Guide (Bonus Challenge)

- Prisma Client ကို builder stage ထဲမှာ generate လုပ်ပါ။
