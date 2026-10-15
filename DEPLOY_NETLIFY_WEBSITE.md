# نشر الموقع على Netlify من الموقع مباشرة (بدون CLI)

## الخطوة 1: حمّل المشروع كملف مضغوط

1. في VS Code، اضغط `Ctrl + Shift + P`
2. اكتب: `File: Compress Folder`
3. أو يدوياً: اضغط يمين على مجلد `E:\josouralkhair` → Send to → Compressed (zipped) folder

⚠️ **مهم:** تأكد من عدم ضغط مجلدات:
- `node_modules`
- `.next`
- `.git`

## الخطوة 2: سجل في Netlify

1. اذهب إلى: [app.netlify.com/signup](https://app.netlify.com/signup)
2. سجل باستخدام:
   - GitHub (موصى به)
   - أو GitLab
   - أو Email

## الخطوة 3: رفع الموقع يدوياً

### ⚠️ ملاحظة مهمة:
الرفع اليدوي (Drag & Drop) **محدود** في الخطة المجانية!

### الطريقة الأفضل: اربط مع GitHub

#### أ. ثبّت GitHub Desktop (بدون Command Line):
1. حمّل من: [desktop.github.com](https://desktop.github.com)
2. ثبّته وسجل دخول

#### ب. ارفع المشروع:
1. افتح GitHub Desktop
2. **File → Add Local Repository**
3. اختر مجلد: `E:\josouralkhair`
4. إذا قال "not a git repository"، اضغط **"Create a repository"**
5. **Publish repository** → سمّه `josouralkhair`
6. اختر **Public** أو **Private** (كلاهما يعمل)
7. اضغط **Publish repository**

#### ج. اربط مع Netlify:
1. ارجع لـ [app.netlify.com](https://app.netlify.com)
2. اضغط **"Add new site"** → **"Import an existing project"**
3. اختر **"Deploy with GitHub"**
4. ابحث عن: `josouralkhair`
5. اضغط عليه

## الخطوة 4: إعدادات البناء

في صفحة Deploy settings:

```
Build command: npm run build
Publish directory: .next
```

اضغط **Deploy site**

## الخطوة 5: أضف المتغيرات البيئية

بعد ما ينشر الموقع (أول مرة راح يفشل - عادي!):

1. اذهب إلى **Site settings**
2. **Environment variables** → **Add a variable**
3. أضف واحدة واحدة:

```
NEXT_PUBLIC_SUPABASE_URL = (القيمة من .env.local)
NEXT_PUBLIC_SUPABASE_ANON_KEY = (القيمة من .env.local)
SUPABASE_SERVICE_ROLE_KEY = (القيمة من .env.local)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = (القيمة من .env.local)
STRIPE_SECRET_KEY = (القيمة من .env.local)
STRIPE_WEBHOOK_SECRET = (القيمة من .env.local)
```

4. بعد إضافة كل المتغيرات، اذهب إلى **Deploys**
5. اضغط **Trigger deploy** → **Deploy site**

## الخطوة 6: اربط الدومين

1. **Domain settings** → **Add custom domain**
2. اكتب: `josouralkhair.org`
3. اضغط **Verify**
4. Netlify سيعطيك خيارين:

### الخيار الأول: Netlify DNS (الأسهل)
- سيظهر لك 4 name servers
- انسخهم واذهب إلى Namecheap
- **Domain → Manage → Nameservers → Custom DNS**
- الصق الـ 4 name servers

### الخيار الثاني: A Record + CNAME
- في Namecheap → **Advanced DNS**
- أضف:
  ```
  Type: A Record
  Host: @
  Value: 75.2.60.5
  
  Type: CNAME Record
  Host: www
  Value: [your-site].netlify.app
  ```

## الخطوة 7: SSL/HTTPS

بعد 10-30 دقيقة من ربط الدومين:
- HTTPS سيشتغل تلقائياً! ✅
- تحقق من: **Domain settings → HTTPS**
- فعّل **Force HTTPS**

## الخطوة 8: Stripe Webhook

1. [dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks)
2. **Add endpoint:**
   ```
   https://josouralkhair.org/api/webhooks/stripe
   ```
3. اختر Events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. انسخ **Signing secret**
5. أضفه في Netlify Environment variables
6. أعد نشر الموقع

---

## ✅ التحقق النهائي

- [ ] الموقع يفتح على `https://josouralkhair.org`
- [ ] الشهادة الخضراء (HTTPS) تعمل
- [ ] اللغة العربية صحيحة
- [ ] الصور تظهر
- [ ] نموذج التبرع يعمل
- [ ] اختبر دفعة تجريبية

---

## 📞 المساعدة

إذا واجهت أي مشكلة:
- [Netlify Support](https://www.netlify.com/support/)
- [Netlify Community](https://answers.netlify.com/)

بالتوفيق! 🚀
