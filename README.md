# جسور الخير - موقع إغاثة غزة 🇵🇸

موقع إلكتروني خيري لدعم وإغاثة أهالي غزة، مستوحى من تصميم ووظائف موقع PCRF.

## 🎯 الميزات

- ✅ صفحة رئيسية بتصميم عصري وجذاب
- ✅ عداد الأثر الحي (Impact Counter)
- ✅ عرض الحملات مع شريط التقدم
- ✅ نظام تبرع آمن (Stripe)
- ✅ دعم التبرع لمرة واحدة والتبرع الشهري
- ✅ صفحة تفاصيل كل حملة
- ✅ قاعدة بيانات Supabase مع RLS
- ✅ تصميم متجاوب (Responsive)

## 🛠️ التقنيات المستخدمة

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Payments:** Stripe API
- **Icons:** Lucide React
- **Font:** Cairo (Arabic)

## 📦 التثبيت

### 1. تثبيت المكتبات

\`\`\`bash
npm install
\`\`\`

### 2. إعداد المتغيرات البيئية

انسخ ملف \`.env.local.example\` إلى \`.env.local\` وأضف البيانات الخاصة بك:

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

ثم أضف:
- بيانات Supabase من [supabase.com](https://supabase.com)
- مفاتيح Stripe من [stripe.com](https://stripe.com)

### 3. إعداد قاعدة البيانات

في لوحة تحكم Supabase:

1. افتح SQL Editor
2. نفذ الكود من \`supabase/migrations/001_initial_schema.sql\`
3. نفذ البيانات التجريبية من \`supabase/seed.sql\` (اختياري)
4. إذا كانت قاعدة البيانات تحتوي على حملات من البيانات التجريبية القديمة، نفذ \`supabase/migrations/002_fix_campaign_image_paths.sql\` لإصلاح روابط صورها

### 4. إعداد Stripe Webhooks

1. قم بتثبيت Stripe CLI من [هنا](https://stripe.com/docs/stripe-cli)
2. سجل دخولك: \`stripe login\`
3. استمع للأحداث محلياً:

\`\`\`bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
\`\`\`

4. انسخ الـ webhook secret وأضفه في \`.env.local\`

### 5. تشغيل المشروع

\`\`\`bash
npm run dev
\`\`\`

افتح المتصفح على [http://localhost:3000](http://localhost:3000)

## 📂 هيكل المشروع

\`\`\`
josour-alkhair/
├── app/
│   ├── api/
│   │   ├── create-checkout/    # API لإنشاء جلسة Stripe
│   │   └── webhooks/stripe/    # Webhook لاستقبال أحداث Stripe
│   ├── campaigns/[id]/         # صفحة تفاصيل الحملة
│   ├── donate/                 # صفحة التبرع
│   ├── success/                # صفحة نجاح التبرع
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── CampaignCard.tsx        # بطاقة الحملة
│   ├── CampaignsGrid.tsx       # شبكة الحملات
│   ├── DonationForm.tsx        # نموذج التبرع
│   ├── Header.tsx              # الترويسة
│   ├── HeroSection.tsx         # القسم الرئيسي
│   └── ImpactCounter.tsx       # عداد الأثر
├── lib/
│   ├── supabase.ts             # إعداد Supabase
│   └── stripe.ts               # إعداد Stripe
├── supabase/
│   ├── migrations/
│   │   └── 001_initial_schema.sql
│   └── seed.sql
└── package.json
\`\`\`

## 🗄️ قاعدة البيانات

### الجداول:

1. **campaigns** - الحملات الإغاثية
2. **donations** - التبرعات
3. **impact_stats** - إحصائيات الأثر

### الميزات الأمنية:

- ✅ Row Level Security (RLS) مفعل
- ✅ سياسات قراءة للجميع
- ✅ تحديث تلقائي لـ raised_amount عند التبرع

## 💳 نظام الدفع

- تبرع لمرة واحدة (One-time)
- تبرع شهري متكرر (Subscription)
- مبالغ محددة مسبقاً أو مبلغ مخصص
- آمن بنسبة 100% عبر Stripe

## 🚀 النشر (Deployment)

### Vercel (موصى به)

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

لا تنسَ:
1. إضافة المتغيرات البيئية في لوحة Vercel
2. إعداد Stripe Webhook في الإنتاج

## 📝 ملاحظات

- تأكد من تفعيل Payment Methods في Stripe Dashboard
- للبيئة التطويرية، استخدم Test Mode في Stripe
- الخط المستخدم (Cairo) يدعم العربية بشكل كامل

## 🤝 المساهمة

نرحب بالمساهمات! يمكنك:
- فتح Issue للإبلاغ عن مشكلة
- إنشاء Pull Request للتحسينات

## 📄 الترخيص

هذا المشروع مفتوح المصدر للأغراض الخيرية.

---

**صنع بـ ❤️ لدعم غزة**
