# دليل نشر موقع جسور الخير

## الخطوة 1: تجهيز حساب Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول باستخدام GitHub
3. اربط مشروعك من GitHub

## الخطوة 2: إعداد المتغيرات البيئية

في لوحة تحكم Vercel، أضف المتغيرات التالية:

### Supabase
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Stripe
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## الخطوة 3: ربط الدومين josouralkhair.org

1. في لوحة تحكم Vercel، اذهب إلى Settings → Domains
2. أضف الدومين: `josouralkhair.org`
3. أضف أيضاً: `www.josouralkhair.org`
4. Vercel سيعطيك سجلات DNS

## الخطوة 4: تحديث DNS في Namecheap

1. اذهب إلى [Namecheap Dashboard](https://ap.www.namecheap.com/domains/list/)
2. اختر الدومين josouralkhair.org
3. اضغط على "Manage"
4. اذهب إلى تبويب "Advanced DNS"
5. أضف/عدّل السجلات التالية:

### سجلات DNS المطلوبة:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 76.76.21.21 | Automatic |
| CNAME Record | www | cname.vercel-dns.com. | Automatic |

**ملاحظة:** لا تنسى النقطة في نهاية `cname.vercel-dns.com.`

### إذا كان عندك سجلات قديمة:
- احذف أي سجلات A أو CNAME قديمة للـ @ و www
- احتفظ بسجلات MX (البريد الإلكتروني) إذا كانت موجودة

⏱️ **وقت الانتشار:** من 5 دقائق إلى 48 ساعة (عادة خلال ساعة)

## الخطوة 5: تكوين Stripe Webhook

1. اذهب إلى [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. أضف endpoint جديد:
   ```
   https://josouralkhair.org/api/webhooks/stripe
   ```
3. اختر الأحداث التالية:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. انسخ Webhook Secret وأضفه في متغيرات Vercel

## الخطوة 6: النشر

```bash
# تأكد من أن كل شيء يعمل محلياً
npm run build

# ادفع التغييرات إلى GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

Vercel سينشر الموقع تلقائياً! 🚀

## التحقق من النشر

بعد النشر، تحقق من:
- [ ] الصفحة الرئيسية تعمل
- [ ] نموذج التبرع يعمل
- [ ] المدفوعات تعمل (اختبر في Stripe test mode)
- [ ] اللغة العربية تظهر بشكل صحيح
- [ ] الصور تُحمّل بشكل صحيح

## دعم HTTPS

Vercel يوفر HTTPS مجاناً تلقائياً لجميع النطاقات! ✅

---

للمساعدة: [Vercel Support](https://vercel.com/support)
