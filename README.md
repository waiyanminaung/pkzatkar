# 🚀 Next.js Project (with Prisma & Docker)

Docker မသုံးခင် ကိုယ့်စက်ထဲမှာ အရင်ဆုံး Run တတ်အောင် အောက်ပါအဆင့်အတိုင်း လုပ်ဆောင်ပါ။

လိုအပ်ချက်များ
Node.js (v18 or higher): JavaScript code တွေကို run ဖို့ engine ဖြစ်ပါတယ်။
npm: Package တွေကို စီမံခန့်ခွဲဖို့ ဖြစ်ပါတယ်။

---

### အဆင့်ဆင့် လုပ်ဆောင်ရန်

### 1. Clone the Project

git clone <your-repo-url>
cd <project-name>

### 2. Setup Environment Variables

.env.example ဖိုင်ကို ကူးယူပြီး .env ဆိုပြီး နာမည်ပြောင်းပါ။
ပြီးလျှင် လိုအပ်သော Database URL များကို ဖြည့်စွက်ပါ။
Command: cp .env.example .env

### 3. Install Dependencies

Project အတွက် လိုအပ်တဲ့ library တွေအားလုံးကို ဆွဲချပါမယ်။
Command: npm install

### 4. Prisma & Docker Database Setup

ဒီအဆင့်မှာ Database ကို Docker Container အဖြစ် Run ပါမယ်။
Docker compose ဆောက်ပါ။​
postgres:15-alpine ကိုသုံးပါ။
Container အဖြစ် run ပါ။ ဒါဆို database ready ဖြစ်ပါပြီ။
အခုနက Docker ထဲမှာ ပွင့်သွားတဲ့ Database ဆီကို လှမ်းချိတ်ပြီး Table တွေ ဆောက်ပါမယ်။

.env ထဲမှာ DATABASE_URL=postgresql://[POSTGRES_USER]:[POSTGRES_USER]@[HOST]:[PORT]/[DBNAME]
Command: npx prisma generate
Command: npx prisma db push

### 5. Run Development Server

Project ကို စတင် Run ပါမယ်။
Command: npm run dev
Browser မှာ http://localhost:3000 ကို ရိုက်ထည့်ပြီး ကြည့်ရှုနိုင်ပါပြီ။

---

### 🐳 DevOps Challenge (Next Step)

Local မှာ Run တတ်သွားပြီဆိုမှ DevOps ပိုင်းအတွက် Docker နဲ့ စမ်းသပ်ကြည့်ပါ။
မင်းက DevOps ကို လေ့လာနေတာဆိုတော့ ဒီ Project ကို Local မှာ Run လို့ရသွားပြီဆိုရင် -
ဒီ Website Project အတွက် Dockerfile တစ်ခု ကိုယ်တိုင် ဆောက်ကြည့်ပါ။
Database ပါ တစ်ခါတည်း ပါလာအောင် docker-compose.yml ကို ရေးကြည့်ပါ။
