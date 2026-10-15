# إعداد DNS لربط Namecheap مع Netlify

## الطريقة 1: استخدام Netlify Nameservers (الأسهل) ⭐

### في Netlify:
1. اذهب إلى موقعك في Netlify
2. **Domain settings** → **Add custom domain**
3. اكتب `josouralkhair.org`
4. اضغط **Verify**
5. اختر **"Use Netlify DNS"**
6. سيظهر لك 4 Name servers مثل:
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```
7. **انسخهم!**

### في Namecheap:
1. اذهب إلى [Namecheap Dashboard](https://ap.www.namecheap.com)
2. Domain List → اختر `josouralkhair.org`
3. اضغط **Manage**
4. في قسم **Nameservers**، اختر **Custom DNS**
5. الصق الـ 4 name servers من Netlify
6. اضغط ✓ (Checkmark الأخضر)

⏱️ **الانتظار:** من 30 دقيقة إلى 24 ساعة

---

## الطريقة 2: استخدام DNS Records (إذا تبغى تحتفظ بـ Namecheap DNS)

### الخطوة 1: احصل على Load Balancer IP

في Netlify:
1. Domain settings → اضغط على `josouralkhair.org`
2. **DNS Panel** → ابحث عن الـ IP address
3. أو استخدم الـ IP الافتراضي: `75.2.60.5`

### الخطوة 2: احصل على Netlify subdomain

موقعك له اسم في Netlify مثل:
```
josouralkhair.netlify.app
```
ابحث عنه في لوحة التحكم

### الخطوة 3: أضف السجلات في Namecheap

1. Namecheap → Domain → **Manage**
2. تبويب **Advanced DNS**
3. احذف السجلات القديمة (A, CNAME للـ @ و www)
4. أضف السجلات الجديدة:

#### للدومين الرئيسي:
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 75.2.60.5 | Automatic |

#### للـ www:
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | josouralkhair.netlify.app | Automatic |

5. اضغط **Save All Changes**

---

## التحقق من DNS

### على Windows PowerShell:
```bash
nslookup josouralkhair.org
nslookup www.josouralkhair.org
```

### النتيجة المتوقعة:
```
Name: josouralkhair.org
Address: 75.2.60.5
```

### أو استخدم أداة أونلاين:
https://www.whatsmydns.net/

---

## SSL Certificate (HTTPS)

Netlify توفر HTTPS مجاناً تلقائياً! ✅

بعد ربط الدومين بـ 1-2 ساعة، HTTPS سيشتغل تلقائياً.

تأكد من:
1. Domain settings → HTTPS
2. **Force HTTPS** → مفعّل ✓

---

## إعدادات إضافية (اختيارية)

### إضافة البريد الإلكتروني (إذا عندك):

احتفظ بسجلات MX في Namecheap DNS:
```
Type: MX Record
Host: @
Value: mail.yourdomain.com
Priority: 10
```

---

## المقارنة بين الطريقتين:

| الميزة | Netlify DNS | Namecheap DNS |
|--------|-------------|---------------|
| السهولة | أسهل | متوسط |
| السرعة | أسرع | جيدة |
| إدارة DNS | في Netlify | في Namecheap |
| البريد | يحتاج إعداد | سهل |

---

## أي طريقة أختار؟

### اختر **Netlify DNS** إذا:
- ✅ ما عندك بريد إلكتروني على الدومين
- ✅ تبغى كل شي في مكان واحد
- ✅ تبغى أسرع أداء

### اختر **Namecheap DNS** إذا:
- ✅ عندك بريد إلكتروني
- ✅ تبغى تتحكم بـ DNS من Namecheap
- ✅ عندك subdomain ثانية

---

## المشاكل الشائعة

### "Domain already registered to another site"
**الحل:** الدومين مستخدم في حساب Netlify ثاني - تواصل مع الدعم

### DNS ما يتحدث
**الحل:** امسح الـ cache:
```bash
ipconfig /flushdns
```

### HTTPS ما يشتغل
**الحل:** انتظر 24 ساعة، أو جرب:
- Domain settings → HTTPS → Renew certificate

---

بالتوفيق! 🎉
