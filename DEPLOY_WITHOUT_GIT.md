# نشر الموقع بدون Git

## الطريقة 1: Vercel CLI (سريعة)

### 1. ثبّت Vercel CLI:
```powershell
npm install -g vercel
```

### 2. سجل دخول:
```powershell
vercel login
```

### 3. انشر المشروع:
```powershell
vercel --prod
```

سيسألك بعض الأسئلة:
- Set up and deploy? → Yes
- Which scope? → اختر حسابك
- Link to existing project? → No
- What's your project's name? → josouralkhair
- In which directory is your code? → ./
- Want to override settings? → No

بعدها سيرفع الموقع تلقائياً! 🚀

### 4. أضف المتغيرات البيئية:
```powershell
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
vercel env add STRIPE_SECRET_KEY
vercel env add STRIPE_WEBHOOK_SECRET
```

### 5. اربط الدومين:
```powershell
vercel domains add josouralkhair.org
```

---

## الطريقة 2: رفع مضغوط من الموقع

1. اضغط المشروع في ملف ZIP
2. اذهب إلى [vercel.com](https://vercel.com)
3. اضغط "Add New" → "Project"
4. اسحب ملف ZIP وارميه في الصفحة

⚠️ **ملاحظة:** هذه الطريقة تحتاج اشتراك مدفوع في Vercel

---

## الطريقة 3: GitHub Desktop (بدون Command Line)

1. حمّل [GitHub Desktop](https://desktop.github.com/)
2. ثبّته وسجل دخول
3. File → Add Local Repository → اختر مجلد المشروع
4. اضغط "Publish repository"
5. اذهب إلى [vercel.com](https://vercel.com) واستورد المشروع من GitHub

---

## التوصية ⭐

استخدم **Vercel CLI** (الطريقة 1) - أسهل وأسرع طريقة!
