# إعداد DNS على Namecheap لموقع جسور الخير

## الخطوة 1: الدخول إلى Namecheap

1. اذهب إلى [Namecheap.com](https://www.namecheap.com)
2. سجل الدخول لحسابك
3. اذهب إلى Dashboard → Domain List
4. اختر `josouralkhair.org`
5. اضغط على زر **"Manage"**

## الخطوة 2: إعداد Advanced DNS

1. في صفحة إدارة الدومين، اضغط على تبويب **"Advanced DNS"**
2. سترى قسم "Host Records"

## الخطوة 3: إضافة السجلات

### احذف السجلات القديمة (إن وجدت):
- احذف أي سجل A أو CNAME للـ `@` أو `www`
- **لا تحذف** سجلات البريد (MX Records) إذا كانت موجودة

### أضف السجلات الجديدة:

#### السجل الأول (A Record):
```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic
```

#### السجل الثاني (CNAME Record):
```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com.
TTL: Automatic
```

⚠️ **مهم جداً:** لا تنسى النقطة `.` في نهاية `cname.vercel-dns.com.`

## الخطوة 4: احفظ التغييرات

1. اضغط على زر **"Save All Changes"** (الأخضر في الأسفل)
2. Namecheap سيأكد لك حفظ التغييرات

## الخطوة 5: التحقق من الإعدادات

يجب أن تبدو السجلات هكذا:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | Automatic |
| CNAME | www | cname.vercel-dns.com. | Automatic |

## ⏱️ وقت الانتشار

- **الحد الأدنى:** 5-10 دقائق
- **المتوسط:** 1-2 ساعة
- **الحد الأقصى:** 48 ساعة

عادةً تكون جاهزة خلال ساعة!

## 🔍 التحقق من DNS

بعد الانتظار، تحقق من أن DNS يعمل:

### على Windows:
```bash
nslookup josouralkhair.org
nslookup www.josouralkhair.org
```

### النتيجة المتوقعة:
```
Name: josouralkhair.org
Address: 76.76.21.21
```

## ✅ التأكد من عمل الموقع

1. افتح المتصفح
2. اذهب إلى: `https://josouralkhair.org`
3. اذهب إلى: `https://www.josouralkhair.org`

كلاهما يجب أن يعمل! 🚀

## ❓ مشاكل شائعة

### المشكلة: "This site can't be reached"
**الحل:** انتظر أكثر، DNS ما زال ينتشر

### المشكلة: سجل CNAME لا يقبل النقطة في النهاية
**الحل:** Namecheap يضيفها تلقائياً أحياناً، جرب بدونها

### المشكلة: Vercel يقول "Invalid Configuration"
**الحل:** تأكد من:
- السجل A يشير إلى `76.76.21.21`
- السجل CNAME يشير إلى `cname.vercel-dns.com`
- أضفت الدومين في Vercel أولاً

## 📞 الدعم

- **Namecheap Support:** [Live Chat 24/7](https://www.namecheap.com/support/)
- **Vercel Support:** [https://vercel.com/support](https://vercel.com/support)

---

بالتوفيق! 🎉
