# نشر موقع جسور الخير على Netlify

## الطريقة 1: Netlify CLI (الأسرع) ⚡

### 1. ثبّت Netlify CLI:
```bash
npm install -g netlify-cli
```

### 2. سجل دخول:
```bash
netlify login
```
سيفتح المتصفح - سجل دخول أو أنشئ حساب مجاني

### 3. ابدأ النشر:
```bash
netlify init
```

سيسألك:
- **Create & configure a new site?** → Yes
- **Team:** → اختر حسابك
- **Site name:** → josouralkhair (أو اتركه فارغ)
- **Build command:** → `npm run build`
- **Directory to deploy:** → `.next`

### 4. أضف المتغيرات البيئية:
```bash
netlify env:set NEXT_PUBLIC_SUPABASE_URL "your_value"
netlify env:set NEXT_PUBLIC_SUPABASE_ANON_KEY "your_value"
netlify env:set SUPABASE_SERVICE_ROLE_KEY "your_value"
netlify env:set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY "your_value"
netlify env:set STRIPE_SECRET_KEY "your_value"
netlify env:set STRIPE_WEBHOOK_SECRET "your_value"
```

### 5. انشر الموقع:
```bash
netlify deploy --prod
```

🎉 الموقع راح يرفع!

---

## الطريقة 2: من موقع Netlify مباشرة 🖱️

### الخطوة 1: رفع على GitHub أولاً

#### أ. ثبّت Git (إذا ما كان مثبت):
- حمّل من: https://git-scm.com/download/win
- أعد تشغيل VS Code

#### ب. رفع المشروع:
```bash
# إعداد Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# رفع المشروع
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

#### ج. أنشئ Repository على GitHub:
1. اذهب إلى [github.com](https://github.com)
2. اضغط "New Repository"
3. اسمه: `josouralkhair`
4. اضغط "Create repository"

#### د. اربط وارفع:
```bash
git remote add origin https://github.com/YOUR_USERNAME/josouralkhair.git
git push -u origin main
```

### الخطوة 2: اربط مع Netlify

1. اذهب إلى [app.netlify.com](https://app.netlify.com)
2. اضغط **"Add new site"** → **"Import an existing project"**
3. اختر **"Deploy with GitHub"**
4. اختر repository: `josouralkhair`
5. إعدادات البناء:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. اضغط **"Deploy site"**

### الخطوة 3: أضف المتغيرات البيئية

1. في لوحة تحكم الموقع → **Site settings**
2. **Environment variables** → **Add a variable**
3. أضف كل واحدة:
   ```
   NEXT_PUBLIC_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY
   SUPABASE_SERVICE_ROLE_KEY
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   STRIPE_SECRET_KEY
   STRIPE_WEBHOOK_SECRET
   ```

### الخطوة 4: ربط الدومين josouralkhair.org

1. في لوحة التحكم → **Domain settings**
2. **Add custom domain**
3. اكتب: `josouralkhair.org`
4. Netlify سيعطيك إعدادات DNS

---

## إعداد DNS على Namecheap

بعد ما تضيف الدومين في Netlify، اذهب إلى Namecheap:

### الطريقة الأولى: Netlify DNS (الأسهل) ⭐

1. في Netlify → Domain settings
2. انسخ الـ **Name servers** (مثل: `dns1.p03.nsone.net`)
3. في Namecheap → Domain → Nameservers
4. اختر **Custom DNS**
5. الصق name servers من Netlify
6. احفظ

### الطريقة الثانية: DNS Records

إذا تبغى تبقي Name servers في Namecheap:

1. في Namecheap → Advanced DNS
2. أضف السجلات:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | Automatic |
| CNAME | www | YOUR-SITE.netlify.app | Automatic |

⚠️ غيّر `YOUR-SITE` باسم موقعك في Netlify

---

## تكوين Stripe Webhook

1. [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. **Add endpoint:**
   ```
   https://josouralkhair.org/api/webhooks/stripe
   ```
3. اختر الأحداث:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. انسخ **Signing secret**
5. أضفه في Netlify Environment variables:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_xxxxx
   ```
6. أعد نشر الموقع

---

## التحقق من النشر ✅

- [ ] الموقع يفتح على `https://josouralkhair.org`
- [ ] HTTPS يعمل (أخضر في المتصفح)
- [ ] اللغة العربية تظهر صحيح
- [ ] الصور تحمّل
- [ ] نموذج التبرع يعمل
- [ ] المدفوعات تعمل (اختبر test mode)

---

## الأوامر المفيدة

```bash
# عرض حالة الموقع
netlify status

# فتح لوحة التحكم
netlify open

# عرض اللوقز
netlify watch

# نشر سريع
netlify deploy --prod
```

---

## المشاكل الشائعة

### المشكلة: Build يفشل
**الحل:** تأكد من أن `netlify.toml` موجود وصحيح

### المشكلة: الصور ما تظهر
**الحل:** تأكد من وجود الصور المشار إليها داخل `public/images/` ومن تطابق أسماء الملفات وحالة الأحرف. لا تضف تحويلًا عامًا من `/*` إلى `/index.html`؛ إضافة Next.js على Netlify تتولى توجيه الصفحات وطلبات الصور.

### المشكلة: API routes ما تشتغل
**الحل:** تأكد من تثبيت `@netlify/plugin-nextjs`

---

## 📞 الدعم

- **Netlify Docs:** https://docs.netlify.com
- **Support:** https://www.netlify.com/support

بالتوفيق! 🚀
