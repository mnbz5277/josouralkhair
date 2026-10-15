# دليل الإعداد التفصيلي 📚

## الخطوة 1: إنشاء حساب Supabase

1. اذهب إلى [supabase.com](https://supabase.com)
2. انقر على "Start your project"
3. أنشئ مشروع جديد
4. احفظ:
   - Project URL: `https://xxxxx.supabase.co`
   - `anon public` key
   - `service_role` key (من Project Settings > API)

## الخطوة 2: إعداد قاعدة البيانات

### في لوحة Supabase:

1. اذهب إلى **SQL Editor**
2. انقر **New Query**
3. انسخ كل محتوى الملف `supabase/migrations/001_initial_schema.sql`
4. الصقه وانقر **Run**
5. كرر نفس العملية مع ملف `supabase/seed.sql` (للبيانات التجريبية)

### التحقق:

- اذهب إلى **Table Editor**
- يجب أن ترى 3 جداول: `campaigns`, `donations`, `impact_stats`

## الخطوة 3: إنشاء حساب Stripe

1. اذهب إلى [stripe.com](https://stripe.com)
2. أنشئ حساب جديد
3. في Dashboard، فعّل **Test Mode** (للتطوير)
4. اذهب إلى **Developers > API Keys**
5. احفظ:
   - Publishable key (يبدأ بـ `pk_test_...`)
   - Secret key (يبدأ بـ `sk_test_...`)

## الخطوة 4: إعداد Stripe Webhooks

### للتطوير المحلي:

1. ثبّت Stripe CLI:
   \`\`\`bash
   # Windows (Scoop)
   scoop install stripe
   
   # Mac (Homebrew)
   brew install stripe/stripe-cli/stripe
   \`\`\`

2. سجل دخولك:
   \`\`\`bash
   stripe login
   \`\`\`

3. في terminal جديد، شغّل:
   \`\`\`bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   \`\`\`

4. انسخ الـ `webhook signing secret` (يبدأ بـ `whsec_...`)

### للإنتاج:

1. في Stripe Dashboard > **Developers > Webhooks**
2. انقر **Add endpoint**
3. أضف URL: `https://your-domain.com/api/webhooks/stripe`
4. اختر الأحداث:
   - `checkout.session.completed`
   - `invoice.payment_succeeded`
5. احفظ الـ signing secret

## الخطوة 5: إعداد المتغيرات البيئية

افتح ملف `.env.local` وأضف:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51...
STRIPE_SECRET_KEY=sk_test_51...
STRIPE_WEBHOOK_SECRET=whsec_...

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
\`\`\`

## الخطوة 6: تثبيت المكتبات

\`\`\`bash
npm install
\`\`\`

## الخطوة 7: تشغيل المشروع

\`\`\`bash
npm run dev
\`\`\`

افتح [http://localhost:3000](http://localhost:3000)

## الخطوة 8: اختبار التبرع

1. اذهب إلى صفحة "تبرع الآن"
2. اختر مبلغاً
3. أدخل:
   - Email: أي بريد
   - Card: `4242 4242 4242 4242`
   - Expiry: أي تاريخ مستقبلي
   - CVC: أي 3 أرقام
4. انقر "تبرع"

## الخطوة 9: التحقق من نجاح التبرع

1. في Supabase Table Editor، افتح جدول `donations`
2. يجب أن تجد التبرع الجديد
3. افتح جدول `campaigns`
4. يجب أن تجد `raised_amount` تحدّث تلقائياً!

## حل المشاكل الشائعة

### خطأ: "Unable to connect to Supabase"

- تأكد من صحة SUPABASE_URL و ANON_KEY
- تأكد من أن المشروع نشط في Supabase

### خطأ: "Stripe webhook signature verification failed"

- تأكد من تشغيل `stripe listen`
- تأكد من صحة STRIPE_WEBHOOK_SECRET

### الصور لا تظهر

- أضف رابط الصور الحقيقي في قاعدة البيانات
- أو استخدم Supabase Storage:
  1. في Supabase > Storage
  2. أنشئ bucket باسم `campaigns`
  3. فعّل Public access
  4. ارفع الصور واستخدم الروابط

## النشر على Vercel

1. Push الكود إلى GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. انقر "Import Project"
4. اختر الريبو
5. أضف جميع المتغيرات البيئية
6. غيّر `NEXT_PUBLIC_BASE_URL` إلى رابط موقعك
7. انقر Deploy

### بعد النشر:

1. في Stripe Dashboard > Webhooks
2. أضف endpoint جديد بـ URL الإنتاج
3. حدّث `STRIPE_WEBHOOK_SECRET` في Vercel

---

**🎉 تهانينا! موقعك جاهز الآن**

للدعم: افتح Issue في GitHub
